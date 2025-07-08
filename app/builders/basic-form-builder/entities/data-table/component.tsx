import { Label } from "@/components/ui/label";
import { createEntityComponent } from "@coltorapps/builder-react";

import { dataTableEntity } from "./definition";

export const DataTableEntity = createEntityComponent(
  dataTableEntity,
  function DataTableEntity() {
    const data = [
      { column1: "Row 1 Cell 1", column2: "Row 1 Cell 2" },
      { column1: "Row 2 Cell 1", column2: "Row 2 Cell 2" },
    ];

    const columns = Object.keys(data[0]);

    return (
      <div className="space-y-2">
        <Label>Data Table</Label>
        <table className="w-full text-left border-collapse text-sm">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col} className="border px-2 py-1 font-semibold">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, i) => (
              <tr key={i}>
                {columns.map((col, j) => (
                  <td key={j} className="border px-2 py-1">
                    {row[col as keyof typeof row]}
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
