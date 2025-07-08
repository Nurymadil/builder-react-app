import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const lazyAttribute = createAttribute({
  name: "lazy",
  validate(value) {
    return z.boolean().optional().parse(value);
  },
});
