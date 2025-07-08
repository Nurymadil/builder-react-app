import { createEntity } from "@coltorapps/builder";
import { labelAttribute } from "../../attributes/label/definition";
import { columnsAttribute } from "../../attributes/columns/definition";
import { rowsAttribute } from "../../attributes/rows/definition";
import { stripedAttribute } from "../../attributes/striped/definition";
import { borderedAttribute } from "../../attributes/bordered/definition";

export const dataTableEntity = createEntity({
  name: "dataTable",
  attributes: [
    labelAttribute,
    columnsAttribute,
    rowsAttribute,
    stripedAttribute,
    borderedAttribute,
  ],
});
