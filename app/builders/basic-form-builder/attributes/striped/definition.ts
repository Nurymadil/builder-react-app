import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const stripedAttribute = createAttribute({
  name: "striped",
  validate(value) {
    return z.boolean().optional().parse(value);
  },
});
