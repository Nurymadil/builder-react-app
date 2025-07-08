import { useId } from "react";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { useRefWithErrorFocus } from "@/lib/error-focus";
import { createEntityComponent } from "@coltorapps/builder-react";
import { treeSelectFieldEntity, TreeOption } from "./definition";

function renderOptions(options: TreeOption[], depth = 0): JSX.Element[] {
  const prefix = depth ? "\u00A0".repeat(depth * 2) : "";
  return options.flatMap((opt) => [
    <SelectItem key={opt.value} value={opt.value}>
      {prefix + opt.label}
    </SelectItem>,
    ...(opt.children ? renderOptions(opt.children, depth + 1) : []),
  ]);
}

export const TreeSelectFieldEntity = createEntityComponent(
  treeSelectFieldEntity,
  function TreeSelectFieldEntity(props) {
    const id = useId();
    const buttonRef = useRefWithErrorFocus<HTMLButtonElement>(props.entity.error);
    return (
      <div>
        <Label htmlFor={id} aria-required={props.entity.attributes.required}>
          {props.entity.attributes.label.trim()
            ? props.entity.attributes.label
            : "Tree Select"}
        </Label>
        <Select
          value={props.entity.value ?? ""}
          required={props.entity.attributes.required}
          onValueChange={props.setValue}
        >
          <SelectTrigger ref={buttonRef} id={id}>
            <SelectValue
              placeholder={
                props.entity.attributes.placeholder?.trim()
                  ? props.entity.attributes.placeholder
                  : "Select"
              }
            />
          </SelectTrigger>
          <SelectContent>{renderOptions(props.entity.attributes.treeOptions)}</SelectContent>
        </Select>
        <ValidationError>
          {formatError(props.entity.value, props.entity.error)?._errors?.[0]}
        </ValidationError>
      </div>
    );
  },
);
