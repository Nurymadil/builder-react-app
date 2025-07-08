import { LabelAttribute } from "../../attributes/label/component";
import { ColumnsAttribute } from "../../attributes/columns/component";
import { RowsAttribute } from "../../attributes/rows/component";
import { StripedAttribute } from "../../attributes/striped/component";
import { BorderedAttribute } from "../../attributes/bordered/component";

export function DataTableAttributes() {
  return (
    <>
      <LabelAttribute />
      <ColumnsAttribute />
      <RowsAttribute />
      <StripedAttribute />
      <BorderedAttribute />
    </>
  );
}
