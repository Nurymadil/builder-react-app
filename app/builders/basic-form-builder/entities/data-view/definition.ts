import { createEntity } from "@coltorapps/builder";
import { labelAttribute } from "../../attributes/label/definition";
import { dataAttribute } from "../../attributes/data/definition";

export const dataViewEntity = createEntity({
  name: "dataView",
  attributes: [labelAttribute, dataAttribute],
});
