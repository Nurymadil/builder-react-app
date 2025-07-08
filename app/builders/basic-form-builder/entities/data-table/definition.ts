import { createEntity } from "@coltorapps/builder";
import { labelAttribute } from "../../attributes/label/definition";

export const dataTableEntity = createEntity({
  name: "dataTable",
  attributes: [labelAttribute],
});
