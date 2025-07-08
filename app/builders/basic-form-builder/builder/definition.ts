import { createBuilder } from "@coltorapps/builder";

import { datePickerFieldEntity } from "../entities/date-picker/definition";
import { paragraphEntity } from "../entities/paragraph/definition";
import { dataTableEntity } from "../entities/data-table/definition";
import { dataViewEntity } from "../entities/data-view/definition";
import { numberFieldEntity } from "../entities/number-field/definition";
import { checkboxFieldEntity } from "../entities/checkbox-field/definition";
import { sliderFieldEntity } from "../entities/slider-field/definition";
import { tabsEntity } from "../entities/tabs/definition";
import { selectFieldEntity } from "../entities/select-field/definition";
import { textFieldEntity } from "../entities/text-field/definition";
import { textareaFieldEntity } from "../entities/textarea-field/definition";

export const basicFormBuilder = createBuilder({
  entities: [
    textFieldEntity,
    textareaFieldEntity,
    selectFieldEntity,
    datePickerFieldEntity,
    paragraphEntity,
    dataTableEntity,
    dataViewEntity,
    numberFieldEntity,
    checkboxFieldEntity,
    sliderFieldEntity,
    tabsEntity,
  ],
});
