import { LabelAttribute } from "../../attributes/label/component";
import { PlaceholderAttribute } from "../../attributes/placeholder/component";
import { RequiredAttribute } from "../../attributes/required/component";
import { TreeOptionsAttribute } from "../../attributes/tree-options/component";

export function TreeSelectFieldAttributes() {
  return (
    <>
      <LabelAttribute />
      <PlaceholderAttribute />
      <RequiredAttribute />
      <TreeOptionsAttribute />
    </>
  );
}
