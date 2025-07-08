import { LabelAttribute } from "../../attributes/label/component";
import { MinAttribute } from "../../attributes/min/component";
import { MaxAttribute } from "../../attributes/max/component";
import { StepAttribute } from "../../attributes/step/component";
import { DefaultNumberValueAttribute } from "../../attributes/default-number-value/component";

export function SliderFieldAttributes() {
  return (
    <>
      <LabelAttribute />
      <MinAttribute />
      <MaxAttribute />
      <StepAttribute />
      <DefaultNumberValueAttribute />
    </>
  );
}
