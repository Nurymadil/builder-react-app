import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { type BuilderStore } from "@coltorapps/builder";

export function AddElementButton(props: { onClick: () => void; children: ReactNode }) {
  return (
    <DialogClose asChild>
      <Button
        variant="outline"
        className="mr-2"
        onClick={() =>
          setTimeout(() => {
            props.onClick();
          }, 200)
        }
      >
        {props.children}
      </Button>
    </DialogClose>
  );
}

export function AddElementDialog(props: { builderStore: BuilderStore; parentId?: string | null }) {
  function addEntity(entity: Parameters<typeof props.builderStore.addEntity>[0]) {
    const created = props.builderStore.addEntity(entity);
    if (props.parentId) {
      props.builderStore.setEntityParent(created.id, props.parentId);
    }
  }

  return (
    <Dialog modal>
      <div className="flex justify-center">
        <DialogTrigger asChild>
          <Button className="w-full">Add Element</Button>
        </DialogTrigger>
      </div>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>New element</DialogTitle>
          <DialogDescription>Choose an element type.</DialogDescription>
          <div className="space-y-2">
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "textField",
                  attributes: {
                    label: "Text Field",
                  },
                })
              }
            >
              Text Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "textareaField",
                  attributes: {
                    label: "Textarea Field",
                  },
                })
              }
            >
              Textarea Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "selectField",
                  attributes: {
                    label: "Select Field",
                    options: [],
                  },
                })
              }
            >
              Select Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "treeSelectField",
                  attributes: {
                    label: "Tree Select Field",
                    treeOptions: [],
                  },
                })
              }
            >
              Tree Select Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "datePickerField",
                  attributes: {
                    label: "Date Picker Field",
                  },
                })
              }
            >
              Date Picker Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "paragraph",
                  attributes: {
                    content: {
                      text: "",
                    },
                  },
                })
              }
            >
              Paragraph
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "numberField",
                  attributes: {
                    label: "Number Field",
                  },
                })
              }
            >
              Number Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "checkboxField",
                  attributes: {
                    label: "Checkbox Field",
                  },
                })
              }
            >
              Checkbox Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "sliderField",
                  attributes: {
                    label: "Slider Field",
                    min: 0,
                    max: 100,
                    step: 1,
                  },
                })
              }
            >
              Slider Field
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "dataTable",
                  attributes: {
                    label: "Data Table",
                    columns: [],
                    rows: [],
                  },
                })
              }
            >
              Data Table
            </AddElementButton>
            <AddElementButton
              onClick={() =>
                addEntity({
                  type: "dataView",
                  attributes: {
                    label: "Data View",
                    data: [],
                  },
                })
              }
            >
              Data View
            </AddElementButton>
            <AddElementButton
              onClick={() => {
                const tabs = props.builderStore.addEntity({
                  type: "tabs",
                  attributes: {
                    tabLabels: ["Tab 1"],
                  },
                });
                const panel = props.builderStore.addEntity({
                  type: "tabPanel",
                  attributes: {},
                });
                props.builderStore.setEntityParent(panel.id, tabs.id);
                if (props.parentId && props.builderStore.getSchema().entities[props.parentId]?.type === "tabPanel") {
                  props.builderStore.setEntityParent(tabs.id, props.parentId);
                }
              }}
            >
              Tabs
            </AddElementButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}
