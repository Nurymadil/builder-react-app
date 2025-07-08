import { createEntity } from "@coltorapps/builder";
import { tabLabelsAttribute } from "../../attributes/tab-labels/definition";

export const tabsEntity = createEntity({
  name: "tabs",
  attributes: [tabLabelsAttribute],
  childrenAllowed: true,
});
