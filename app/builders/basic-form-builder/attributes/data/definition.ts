import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const dataAttribute = createAttribute({
  name: "data",
  validate(value) {
    return z.array(z.record(z.string(), z.any())).parse(value);
  },
});
