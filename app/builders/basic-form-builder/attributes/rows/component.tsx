import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { useRefWithErrorFocus } from "@/lib/error-focus";
import { createAttributeComponent } from "@coltorapps/builder-react";
import { rowsAttribute } from "./definition";

export const RowsAttribute = createAttributeComponent(
  rowsAttribute,
  function RowsAttribute(props) {
    const inputRef = useRefWithErrorFocus<HTMLTextAreaElement>(
      props.attribute.error,
    );
    const text = props.attribute.value
      .map((row) => row.join(","))
      .join("\n");
    return (
      <div>
        <Label htmlFor={props.attribute.name}>Rows (CSV)</Label>
        <Textarea
          ref={inputRef}
          id={props.attribute.name}
          name={props.attribute.name}
          value={text}
          onChange={(e) => {
            const parsed = e.target.value
              .split(/\n/)
              .filter((line) => line.length)
              .map((line) => line.split(/,/).map((c) => c.trim()));
            props.setValue(parsed);
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
