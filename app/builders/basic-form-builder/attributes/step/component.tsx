import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { createAttributeComponent } from "@coltorapps/builder-react";
import { stepAttribute } from "./definition";

export const StepAttribute = createAttributeComponent(
  stepAttribute,
  function StepAttribute(props) {
    return (
      <div>
        <Label htmlFor={props.attribute.name}>Step</Label>
        <Input
          id={props.attribute.name}
          type="number"
          value={props.attribute.value ?? ""}
          onChange={(e) => {
            const val = e.target.value;
            props.setValue(val === "" ? undefined : Number(val));
          }}
        />
        <ValidationError>
          {formatError(props.attribute.value, props.attribute.error)?._errors?.[0]}
        </ValidationError>
      </div>
    );
  },
);
