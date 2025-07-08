import { z } from "zod";
import { createEntity } from "@coltorapps/builder";
import { defaultNumberValueAttribute } from "../../attributes/default-number-value/definition";
import { labelAttribute } from "../../attributes/label/definition";
import { placeholderAttribute } from "../../attributes/placeholder/definition";
import { requiredAttribute } from "../../attributes/required/definition";
import { minAttribute } from "../../attributes/min/definition";
import { maxAttribute } from "../../attributes/max/definition";
import { stepAttribute } from "../../attributes/step/definition";

export const numberFieldEntity = createEntity({
  name: "numberField",
  attributes: [
    labelAttribute,
    placeholderAttribute,
    defaultNumberValueAttribute,
    minAttribute,
    maxAttribute,
    stepAttribute,
    requiredAttribute,
  ],
  validate(value, context) {
    let schema: z.ZodType<number | undefined> = z.number();
    const { min, max, required } = context.entity.attributes;
    if (typeof min === "number") {
      schema = schema.min(min);
    }
    if (typeof max === "number") {
      schema = schema.max(max);
    }
    if (!required) {
      schema = schema.optional();
    }
    return schema.parse(value);
  },
  defaultValue(context) {
    return context.entity.attributes.defaultValue;
  },
});
