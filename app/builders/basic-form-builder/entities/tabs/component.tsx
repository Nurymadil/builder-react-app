import { createEntityComponent } from "@coltorapps/builder-react";
import { tabsEntity } from "./definition";

export const TabsEntity = createEntityComponent(
  tabsEntity,
  function TabsEntity(props) {
    const { tabLabels } = props.entity.attributes;
    const children = props.children ?? [];
    return (
      <div className="space-y-4">
        {tabLabels.map((label, index) => (
          <div key={index} className="grid gap-2">
            <h3 className="text-lg font-medium">{label}</h3>
            {children[index] ?? null}
          </div>
        ))}
      </div>
    );
  },
);
