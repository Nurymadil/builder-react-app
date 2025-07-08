import { LabelAttribute } from "../../attributes/label/component";
import { DefaultBooleanValueAttribute } from "../../attributes/default-boolean-value/component";
import { RequiredAttribute } from "../../attributes/required/component";

export function CheckboxFieldAttributes() {
  return (
    <>
      <LabelAttribute />
      <DefaultBooleanValueAttribute />
      <RequiredAttribute />
    </>
  );
}
