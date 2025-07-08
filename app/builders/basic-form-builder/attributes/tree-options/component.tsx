import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { useRefWithErrorFocus } from "@/lib/error-focus";
import { useState } from "react";
import { createAttributeComponent } from "@coltorapps/builder-react";
import { treeOptionsAttribute } from "./definition";

export const TreeOptionsAttribute = createAttributeComponent(
  treeOptionsAttribute,
  function TreeOptionsAttribute(props) {
    const inputRef = useRefWithErrorFocus<HTMLTextAreaElement>(
      props.attribute.error,
    );
    const [text, setText] = useState(
      JSON.stringify(props.attribute.value ?? [], null, 2),
    );
    return (
      <div>
        <Label htmlFor={props.attribute.name}>Tree Options (JSON)</Label>
        <Textarea
          ref={inputRef}
          id={props.attribute.name}
          name={props.attribute.name}
          value={text}
          onChange={(e) => {
            setText(e.target.value);
            try {
              const parsed = JSON.parse(e.target.value);
              props.setValue(parsed);
            } catch {
              /* ignore parse errors until valid JSON entered */
            }
          }}
          rows={5}
        />
        <ValidationError>
          {formatError(props.attribute.value, props.attribute.error)?._errors?.[0]}
        </ValidationError>
      </div>
    );
  },
);
