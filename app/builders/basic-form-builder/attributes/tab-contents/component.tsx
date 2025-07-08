import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { formatError, ValidationError } from "@/components/ui/validation-error";
import { useRefWithErrorFocus } from "@/lib/error-focus";
import { XIcon } from "lucide-react";
import { createAttributeComponent } from "@coltorapps/builder-react";
import { tabContentsAttribute } from "./definition";

export const TabContentsAttribute = createAttributeComponent(
  tabContentsAttribute,
  function TabContentsAttribute(props) {
    const attributeError = formatError(
      props.attribute.value,
      props.attribute.error,
    )?._errors?.[0];

    const buttonRef = useRefWithErrorFocus<HTMLButtonElement>(attributeError);

    return (
      <div>
        <div>
          <Label>Tab contents</Label>
        </div>
        {props.attribute.value.length ? (
          <div className="mb-4 grid gap-3">
            {props.attribute.value.map((content, index) => (
              <div key={index}>
                <div className="flex items-start space-x-2">
                  <Textarea
                    name={`${props.attribute.name}-tab-content-${index}`}
                    value={content ?? ""}
                    onChange={(e) => {
                      props.setValue(
                        props.attribute.value.map((item, itemIndex) =>
                          itemIndex === index ? e.target.value : item,
                        ),
                      );
                    }}
                    className="flex-1"
                    autoFocus={!content}
                  />
                  <Button
                    type="submit"
                    variant="secondary"
                    className="rounded-md mt-2 h-8"
                    onClick={() => {
                      props.setValue(
                        props.attribute.value.filter(
                          (_item, itemIndex) => itemIndex !== index,
                        ),
                      );
                    }}
                  >
                    <XIcon className="w-3" />
                  </Button>
                </div>
                <ValidationError>
                  {
                    formatError(props.attribute.value, props.attribute.error)?.[
                      `${index}`
                    ]?._errors?.[0]
                  }
                </ValidationError>
              </div>
            ))}
          </div>
        ) : null}
        <div>
          <ValidationError>{attributeError}</ValidationError>
        </div>
        <Button
          ref={buttonRef}
          size="sm"
          onClick={() => {
            props.setValue([...props.attribute.value, ""]);
          }}
          variant="outline"
        >
          Add content
        </Button>
      </div>
    );
  },
);
