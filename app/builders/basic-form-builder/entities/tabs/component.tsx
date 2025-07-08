import { createEntityComponent } from "@coltorapps/builder-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { tabsEntity } from "./definition";

export const TabsEntity = createEntityComponent(
  tabsEntity,
  function TabsEntity(props) {
    const { tabLabels, lazy } = props.entity.attributes;
    const children = props.children ?? [];
    const values = tabLabels.map((_, index) => `tab-${index}`);
    return (
      <Tabs defaultValue={values[0]} className="space-y-4">
        <TabsList>
          {tabLabels.map((label, index) => (
            <TabsTrigger key={index} value={values[index]}>
              {label}
            </TabsTrigger>
          ))}
        </TabsList>
        {children.map((child, index) => (
          <TabsContent key={index} value={values[index]} lazy={lazy ?? false}>
            {child ?? null}
          </TabsContent>
        ))}
      </Tabs>
    );
  },
);
