import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const treeOptionsAttribute = createAttribute({
  name: "treeOptions",
  validate(value) {
    return z.array(z.any()).parse(value);
  },
});
