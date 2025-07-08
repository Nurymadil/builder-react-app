import { createEntityComponent } from "@coltorapps/builder-react";
import { tabPanelEntity } from "./definition";

export const TabPanelEntity = createEntityComponent(
  tabPanelEntity,
  function TabPanelEntity(props) {
    return <div className="grid gap-4">{props.children}</div>;
  },
);
