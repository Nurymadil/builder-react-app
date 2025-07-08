import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const defaultBooleanValueAttribute = createAttribute({
  name: "defaultValue",
  validate(value) {
    return z.boolean().optional().parse(value);
  },
});
