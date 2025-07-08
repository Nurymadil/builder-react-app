import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const tabLabelsAttribute = createAttribute({
  name: "tabLabels",
  validate(value) {
    return z.array(z.string().min(1)).min(1).parse(value);
  },
});
