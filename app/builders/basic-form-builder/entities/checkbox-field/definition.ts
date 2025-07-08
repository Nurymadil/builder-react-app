import { z } from "zod";
import { createEntity } from "@coltorapps/builder";
import { labelAttribute } from "../../attributes/label/definition";
import { defaultBooleanValueAttribute } from "../../attributes/default-boolean-value/definition";
import { requiredAttribute } from "../../attributes/required/definition";

export const checkboxFieldEntity = createEntity({
  name: "checkboxField",
  attributes: [labelAttribute, defaultBooleanValueAttribute, requiredAttribute],
  validate(value, context) {
    if (context.entity.attributes.required) {
      return z.literal(true).parse(value);
    }
    return z.boolean().parse(value);
  },
  defaultValue(context) {
    return context.entity.attributes.defaultValue;
  },
});
