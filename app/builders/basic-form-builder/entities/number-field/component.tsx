import { useId } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { useRefWithErrorFocus } from "@/lib/error-focus";
import { createEntityComponent } from "@coltorapps/builder-react";
import { numberFieldEntity } from "./definition";

export const NumberFieldEntity = createEntityComponent(
  numberFieldEntity,
  function NumberFieldEntity(props) {
    const id = useId();
    const inputRef = useRefWithErrorFocus<HTMLInputElement>(props.entity.error);
    return (
      <div>
        <Label htmlFor={id} aria-required={props.entity.attributes.required}>
          {props.entity.attributes.label.trim()
            ? props.entity.attributes.label
            : "Label"}
        </Label>
        <Input
          ref={inputRef}
          id={id}
          name={props.entity.id}
          type="number"
          value={props.entity.value ?? ""}
          onChange={(e) =>
            props.setValue(
              e.target.value === "" ? undefined : Number(e.target.value),
            )
          }
          placeholder={props.entity.attributes.placeholder}
          min={props.entity.attributes.min}
          max={props.entity.attributes.max}
          step={props.entity.attributes.step}
          required={props.entity.attributes.required}
        />
        <ValidationError>
          {formatError(props.entity.value, props.entity.error)?._errors?.[0]}
        </ValidationError>
      </div>
    );
  },
);
