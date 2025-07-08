import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const defaultNumberValueAttribute = createAttribute({
  name: "defaultValue",
  validate(value) {
    return z.number().optional().parse(value);
  },
});
