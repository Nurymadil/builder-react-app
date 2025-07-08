import { Label } from "@/components/ui/label";
import { createEntityComponent } from "@coltorapps/builder-react";
import { dataViewEntity } from "./definition";

export const DataViewEntity = createEntityComponent(
  dataViewEntity,
  function DataViewEntity(props) {
    const { label, data } = props.entity.attributes;
    return (
      <div className="space-y-2">
        {label ? <Label>{label}</Label> : null}
        <pre className="rounded bg-neutral-950 p-2 text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      </div>
    );
  },
);
