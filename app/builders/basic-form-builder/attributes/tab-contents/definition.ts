import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const tabContentsAttribute = createAttribute({
  name: "tabContents",
  validate(value) {
    return z.array(z.string()).parse(value);
  },
});
