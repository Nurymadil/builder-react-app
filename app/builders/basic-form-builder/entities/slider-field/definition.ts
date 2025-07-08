import { z } from "zod";
import { createEntity } from "@coltorapps/builder";
import { labelAttribute } from "../../attributes/label/definition";
import { minAttribute } from "../../attributes/min/definition";
import { maxAttribute } from "../../attributes/max/definition";
import { stepAttribute } from "../../attributes/step/definition";
import { defaultNumberValueAttribute } from "../../attributes/default-number-value/definition";

export const sliderFieldEntity = createEntity({
  name: "sliderField",
  attributes: [
    labelAttribute,
    minAttribute,
    maxAttribute,
    stepAttribute,
    defaultNumberValueAttribute,
  ],
  validate(value, context) {
    let schema = z.number();
    const { min, max } = context.entity.attributes;
    if (typeof min === "number") {
      schema = schema.min(min);
    }
    if (typeof max === "number") {
      schema = schema.max(max);
    }
    return schema.parse(value);
  },
  defaultValue(context) {
    return context.entity.attributes.defaultValue;
  },
});
