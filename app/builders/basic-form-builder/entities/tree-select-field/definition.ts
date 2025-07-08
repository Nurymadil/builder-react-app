import { z } from "zod";
import { createEntity } from "@coltorapps/builder";

import { labelAttribute } from "../../attributes/label/definition";
import { placeholderAttribute } from "../../attributes/placeholder/definition";
import { requiredAttribute } from "../../attributes/required/definition";
import { treeOptionsAttribute } from "../../attributes/tree-options/definition";

export type TreeOption = {
  label: string;
  value: string;
  children?: TreeOption[];
};

function flatten(options: TreeOption[]): string[] {
  const result: string[] = [];
  const stack: TreeOption[] = [...options];
  while (stack.length) {
    const opt = stack.pop()!;
    result.push(opt.value);
    if (opt.children) {
      stack.push(...opt.children);
    }
  }
  return result;
}

export const treeSelectFieldEntity = createEntity({
  name: "treeSelectField",
  attributes: [
    labelAttribute,
    placeholderAttribute,
    requiredAttribute,
    treeOptionsAttribute,
  ],
  validate(value, context) {
    const allowed = flatten(context.entity.attributes.treeOptions);
    const schema = z.enum(allowed as [string, ...string[]]);
    if (context.entity.attributes.required) {
      return schema.parse(value);
    }
    return schema.optional().parse(value);
  },
});
