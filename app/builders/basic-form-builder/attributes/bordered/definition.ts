import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const borderedAttribute = createAttribute({
  name: "bordered",
  validate(value) {
    return z.boolean().optional().parse(value);
  },
});
