import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { createEntityComponent } from "@coltorapps/builder-react";
import { sliderFieldEntity } from "./definition";

export const SliderFieldEntity = createEntityComponent(
  sliderFieldEntity,
  function SliderFieldEntity(props) {
    const {
      min,
      max,
      step,
      label,
      defaultValue,
    } = props.entity.attributes;
    return (
      <div className="space-y-2">
        <Label>{label.trim() ? label : "Slider"}</Label>
        <Slider
          value={[props.entity.value ?? defaultValue ?? 0]}
          min={min}
          max={max}
          step={step}
          onValueChange={(v) => props.setValue(v[0])}
        />
      </div>
    );
  },
);
