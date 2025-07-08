import { DatePickerFieldEntity } from "../entities/date-picker/component";
import { ParagraphEntity } from "../entities/paragraph/component";
import { DataTableEntity } from "../entities/data-table/component";
import { NumberFieldEntity } from "../entities/number-field/component";
import { CheckboxFieldEntity } from "../entities/checkbox-field/component";
import { SliderFieldEntity } from "../entities/slider-field/component";
import { SelectFieldEntity } from "../entities/select-field/component";
import { TextFieldEntity } from "../entities/text-field/component";
import { TextareaFieldEntity } from "../entities/textarea-field/component";

export const entitiesComponents = {
  textField: TextFieldEntity,
  selectField: SelectFieldEntity,
  datePickerField: DatePickerFieldEntity,
  textareaField: TextareaFieldEntity,
  paragraph: ParagraphEntity,
  dataTable: DataTableEntity,
  numberField: NumberFieldEntity,
  checkboxField: CheckboxFieldEntity,
  sliderField: SliderFieldEntity,
};
