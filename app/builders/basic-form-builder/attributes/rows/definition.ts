import { z } from "zod";
import { createAttribute } from "@coltorapps/builder";

export const rowsAttribute = createAttribute({
  name: "rows",
  validate(value) {
    return z.array(z.array(z.string())).parse(value);
  },
});
