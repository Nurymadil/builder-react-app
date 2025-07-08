import { createEntityComponent } from "@coltorapps/builder-react";
import { TabPanel, TabView } from "primereact/tabview";
import { tabsEntity } from "./definition";

export const TabsEntity = createEntityComponent(
  tabsEntity,
  function TabsEntity(props) {
    const { tabLabels, lazy } = props.entity.attributes;
    const children = props.children ?? [];
    return (
      <TabView renderActiveOnly={lazy ?? true} className="mt-2">
        {tabLabels.map((label, index) => (
          <TabPanel key={index} header={label}>
            {children[index] ?? null}
          </TabPanel>
        ))}
      </TabView>
    );
  },
);
