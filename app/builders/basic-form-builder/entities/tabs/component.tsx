import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { createEntityComponent } from "@coltorapps/builder-react";
import { tabsEntity } from "./definition";

export const TabsEntity = createEntityComponent(
  tabsEntity,
  function TabsEntity(props) {
    const { tabLabels, tabContents } = props.entity.attributes;
    return (
      <Tabs defaultValue="0" className="space-y-2">
        <TabsList className="w-full">
          <div className="grid w-full grid-flow-col auto-cols-fr">
            {tabLabels.map((label, index) => (
              <TabsTrigger key={index} value={index.toString()}>
                {label}
              </TabsTrigger>
            ))}
          </div>
        </TabsList>
        {tabLabels.map((_, index) => (
          <TabsContent key={index} value={index.toString()}>
            {tabContents[index]}
          </TabsContent>
        ))}
      </Tabs>
    );
  },
);
