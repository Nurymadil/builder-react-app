import { DatePickerFieldEntity } from "../entities/date-picker/component";
import { ParagraphEntity } from "../entities/paragraph/component";
import { DataTableEntity } from "../entities/data-table/component";
import { DataViewEntity } from "../entities/data-view/component";
import { NumberFieldEntity } from "../entities/number-field/component";
import { CheckboxFieldEntity } from "../entities/checkbox-field/component";
import { SliderFieldEntity } from "../entities/slider-field/component";
import { TabsEntity } from "../entities/tabs/component";
import { TabPanelEntity } from "../entities/tab-panel/component";
import { SelectFieldEntity } from "../entities/select-field/component";
import { TreeSelectFieldEntity } from "../entities/tree-select-field/component";
import { TextFieldEntity } from "../entities/text-field/component";
import { TextareaFieldEntity } from "../entities/textarea-field/component";

export const entitiesComponents = {
  textField: TextFieldEntity,
  selectField: SelectFieldEntity,
  treeSelectField: TreeSelectFieldEntity,
  datePickerField: DatePickerFieldEntity,
  textareaField: TextareaFieldEntity,
  paragraph: ParagraphEntity,
  dataTable: DataTableEntity,
  dataView: DataViewEntity,
  numberField: NumberFieldEntity,
  checkboxField: CheckboxFieldEntity,
  sliderField: SliderFieldEntity,
  tabs: TabsEntity,
  tabPanel: TabPanelEntity,
};
