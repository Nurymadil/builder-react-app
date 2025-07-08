import { DefaultNumberValueAttribute } from "../../attributes/default-number-value/component";
import { LabelAttribute } from "../../attributes/label/component";
import { PlaceholderAttribute } from "../../attributes/placeholder/component";
import { MinAttribute } from "../../attributes/min/component";
import { MaxAttribute } from "../../attributes/max/component";
import { StepAttribute } from "../../attributes/step/component";
import { RequiredAttribute } from "../../attributes/required/component";

export function NumberFieldAttributes() {
  return (
    <>
      <LabelAttribute />
      <DefaultNumberValueAttribute />
      <PlaceholderAttribute />
      <MinAttribute />
      <MaxAttribute />
      <StepAttribute />
      <RequiredAttribute />
    </>
  );
}
