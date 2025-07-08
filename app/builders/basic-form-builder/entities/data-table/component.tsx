import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { createEntityComponent } from "@coltorapps/builder-react";

import { dataTableEntity } from "./definition";

export const DataTableEntity = createEntityComponent(
  dataTableEntity,
  function DataTableEntity(props) {
    const { columns, rows, striped, bordered, label } = props.entity.attributes;
    return (
      <div className="space-y-2">
        {label ? <Label>{label}</Label> : null}
        <table
          className={cn(
            "w-full text-left border-collapse text-sm",
            bordered && "border",
          )}
        >
          <thead>
            <tr className={striped ? "odd:bg-neutral-900" : undefined}>
              {columns.map((col) => (
                <th key={col} className="border px-2 py-1 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className={cn({
                  "odd:bg-neutral-900": striped,
                })}
              >
                {row.map((cell, j) => (
                  <td key={j} className="border px-2 py-1">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  },
);
