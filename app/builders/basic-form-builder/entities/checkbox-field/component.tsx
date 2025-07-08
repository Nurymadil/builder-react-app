import { useId } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { useRefWithErrorFocus } from "@/lib/error-focus";
import { createEntityComponent } from "@coltorapps/builder-react";
import { checkboxFieldEntity } from "./definition";

export const CheckboxFieldEntity = createEntityComponent(
  checkboxFieldEntity,
  function CheckboxFieldEntity(props) {
    const id = useId();
    const inputRef = useRefWithErrorFocus<HTMLButtonElement>(props.entity.error);
    return (
      <div>
        <div className="flex items-center space-x-2">
          <Checkbox
            ref={inputRef}
            id={id}
            checked={props.entity.value ?? false}
            onCheckedChange={(checked) => {
              if (typeof checked === "boolean") {
                props.setValue(checked);
              }
            }}
            required={props.entity.attributes.required}
          />
          <Label htmlFor={id} aria-required={props.entity.attributes.required}>
            {props.entity.attributes.label.trim()
              ? props.entity.attributes.label
              : "Label"}
          </Label>
        </div>
        <ValidationError>
          {formatError(props.entity.value, props.entity.error)?._errors?.[0]}
        </ValidationError>
      </div>
    );
  },
);
