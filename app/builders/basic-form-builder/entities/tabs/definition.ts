import { createEntity } from "@coltorapps/builder";
import { tabLabelsAttribute } from "../../attributes/tab-labels/definition";
import { lazyAttribute } from "../../attributes/lazy/definition";

export const tabsEntity = createEntity({
  name: "tabs",
  attributes: [tabLabelsAttribute, lazyAttribute],
  childrenAllowed: true,
});
