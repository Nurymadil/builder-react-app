"use client";

import { useState, type ReactNode } from "react";
import { DndContainer, DndItem } from "@/components/dnd";
import { cn } from "@/lib/utils";
import { InfoIcon, XIcon } from "lucide-react";

import { type BuilderStore } from "@coltorapps/builder";
import {
  BuilderEntities,
  BuilderEntity,
  BuilderEntityAttributes,
  useBuilderStore,
  useBuilderStoreData,
} from "@coltorapps/builder-react";

import { DatePickerFieldAttributes } from "../entities/date-picker/attributes-component";
import { ParagraphAttributes } from "../entities/paragraph/attributes-component";
import { DataTableAttributes } from "../entities/data-table/attributes-component";
import { DataViewAttributes } from "../entities/data-view/attributes-component";
import { NumberFieldAttributes } from "../entities/number-field/attributes-component";
import { CheckboxFieldAttributes } from "../entities/checkbox-field/attributes-component";
import { SliderFieldAttributes } from "../entities/slider-field/attributes-component";
import { TabsAttributes } from "../entities/tabs/attributes-component";
import { TabPanelAttributes } from "../entities/tab-panel/attributes-component";
import { SelectFieldAttributes } from "../entities/select-field/attributes-component";
import { TreeSelectFieldAttributes } from "../entities/tree-select-field/attributes-component";
import { TextFieldAttributes } from "../entities/text-field/attributes-component";
import { TextareaFieldAttributes } from "../entities/textarea-field/attributes-component";
import { basicFormBuilder } from "./definition";
import { entitiesComponents } from "./entities-components";
import { initialSchema } from "./initial-schema";
import { Preview } from "./preview";
import { AddElementDialog } from "./add-element-dialog";

function Entity(props: {
  entityId: string;
  children: ReactNode;
  isActive: boolean;
  isDragging: boolean;
  onFocus?: () => void;
  onDelete?: () => void;
  builderStore: BuilderStore;
}) {
  const { entitiesAttributesErrors } = useBuilderStoreData(
    props.builderStore,
    (events) =>
      events.some(
        (event) =>
          (event.name === "EntityAttributeErrorUpdated" &&
            event.payload.entity.id === props.entityId) ||
          event.name === "DataSet",
      ),
  );

  return (
    <div className="relative">
      <div className="absolute inset-0 -mx-2 -mb-4 -mt-2 rounded-xl bg-neutral-950 sm:-mx-4" />
      <div
        className="pointer-events-none relative"
        tabIndex={-1}
        onFocusCapture={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {props.children}
      </div>
      <button
        type="button"
        className={cn(
          "absolute inset-0 -mx-2 -mb-4 -mt-2 rounded-xl border-2 transition-all sm:-mx-4",
          props.isActive
            ? "border-white"
            : "border-transparent hover:border-white/30",
          {
            "border-destructive":
              !props.isActive &&
              entitiesAttributesErrors[props.entityId] &&
              !props.isDragging,
          },
        )}
        onPointerDown={props.onFocus}
      />
      {props.isActive ? (
        <button
          type="button"
          className="absolute -right-3 -top-4 flex h-5 w-5 items-center justify-center rounded-full bg-white sm:-right-6"
          onClick={props.onDelete}
        >
          <XIcon className="w-3 text-black" />
        </button>
      ) : null}
    </div>
  );
}

const entitiesAttributesComponents = {
  textField: TextFieldAttributes,
  textareaField: TextareaFieldAttributes,
  selectField: SelectFieldAttributes,
  treeSelectField: TreeSelectFieldAttributes,
  datePickerField: DatePickerFieldAttributes,
  paragraph: ParagraphAttributes,
  dataTable: DataTableAttributes,
  dataView: DataViewAttributes,
  numberField: NumberFieldAttributes,
  checkboxField: CheckboxFieldAttributes,
  sliderField: SliderFieldAttributes,
  tabs: TabsAttributes,
  tabPanel: TabPanelAttributes,
};

export function BasicFormBuilder() {
  const builderStore = useBuilderStore(basicFormBuilder, {
    events: {
      onEntityAdded(payload) {
        setActiveEntityId(payload.entity.id);
      },
      onEntityDeleted(payload) {
        const rootEntityId = builderStore.getData().schema.root[0];

        if (payload.entity.id === activeEntityId && rootEntityId) {
          setActiveEntityId(rootEntityId);
        } else {
          setActiveEntityId(null);
        }
      },
      onEntityAttributeUpdated(payload) {
        void builderStore.validateEntityAttribute(
          payload.entity.id,
          payload.attributeName,
        );
        if (
          payload.entity.type === "tabs" &&
          payload.attributeName === "tabLabels"
        ) {
          const labels = payload.entity.attributes.tabLabels;
          const schema = builderStore.getSchema();
          const children = schema.entities[payload.entity.id].children ?? [];

          if (labels.length > children.length) {
            for (let i = children.length; i < labels.length; i++) {
              const panel = builderStore.addEntity({
                type: "tabPanel",
                attributes: {},
              });
              builderStore.setEntityParent(panel.id, payload.entity.id, {
                index: i,
              });
            }
          } else if (labels.length < children.length) {
            for (const id of children.slice(labels.length)) {
              builderStore.deleteEntity(id);
            }
          }
        }
      },
    },
    initialData: {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      schema: initialSchema as any,
    },
  });

  const [activeEntityId, setActiveEntityId] = useState<string | null>(
    builderStore.getData().schema.root[0],
  );

  const {
    schema: { root },
  } = useBuilderStoreData(builderStore, (events) =>
    events.some(
      (event) => event.name === "RootUpdated" || event.name === "DataSet",
    ),
  );

  return (
    <div>
      {root.length ? (
        <div className="flex justify-end">
          <Preview
            builderStore={builderStore}
            activeEntityId={activeEntityId}
            onEntityError={(entityId) => {
              if (builderStore.getSchema().entities[entityId]) {
                setActiveEntityId(entityId);
              }
            }}
          />
        </div>
      ) : null}
      <div
        className={cn("grid", {
          "mt-6 gap-8 sm:grid-cols-2": root.length,
        })}
      >
        {!root.length ? (
          <div className="mt-4 grid gap-2 text-center">
            <InfoIcon className="mx-auto h-8 w-8 text-neutral-600" />
            <span>No elements yet.</span>
          </div>
        ) : null}
        <div>
          <div className="grid gap-8">
            <div className="grid gap-8">
              <DndContainer
                builderStore={builderStore}
                dragOverlay={({ draggingId }) =>
                  draggingId ? (
                    <BuilderEntity
                      entityId={draggingId}
                      builderStore={builderStore}
                      components={entitiesComponents}
                    >
                      {(props) => (
                        <Entity
                          isActive
                          isDragging
                          builderStore={builderStore}
                          entityId={props.entity.id}
                        >
                          {props.children}
                        </Entity>
                      )}
                    </BuilderEntity>
                  ) : null
                }
              >
                {({ draggingId }) => (
                  <BuilderEntities
                    builderStore={builderStore}
                    components={entitiesComponents}
                  >
                    {(props) => (
                      <DndItem id={props.entity.id}>
                        <Entity
                          builderStore={builderStore}
                          entityId={props.entity.id}
                          isActive={
                            activeEntityId === props.entity.id &&
                            draggingId !== props.entity.id
                          }
                          isDragging={draggingId === props.entity.id}
                          onFocus={() => setActiveEntityId(props.entity.id)}
                          onDelete={() =>
                            builderStore.deleteEntity(props.entity.id)
                          }
                        >
                          {props.children}
                        </Entity>
                      </DndItem>
                    )}
                  </BuilderEntities>
                )}
              </DndContainer>
            </div>
            <AddElementDialog
              builderStore={builderStore}
              parentId={
                activeEntityId &&
                builderStore.getSchema().entities[activeEntityId]?.type === "tabPanel"
                  ? activeEntityId
                  : undefined
              }
            />
          </div>
        </div>
        {activeEntityId ? (
          <div className="rounded-xl border-l bg-neutral-900/60 p-4 pb-8">
            <div className="sticky top-24 grid gap-8">
              <BuilderEntityAttributes
                entityId={activeEntityId}
                builderStore={builderStore}
                components={entitiesAttributesComponents}
              />
              {(() => {
                const active = builderStore.getSchema().entities[activeEntityId];
                if (active && active.type === "tabs") {
                  const first = active.children?.[0];
                  if (first) {
                    return (
                      <AddElementDialog builderStore={builderStore} parentId={first} />
                    );
                  }
                }
                return null;
              })()}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
