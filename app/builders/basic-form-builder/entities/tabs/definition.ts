import { createEntity } from "@coltorapps/builder";
import { tabLabelsAttribute } from "../../attributes/tab-labels/definition";
import { tabContentsAttribute } from "../../attributes/tab-contents/definition";

export const tabsEntity = createEntity({
  name: "tabs",
  attributes: [tabLabelsAttribute, tabContentsAttribute],
});
