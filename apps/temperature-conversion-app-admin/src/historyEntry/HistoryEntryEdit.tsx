import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
} from "react-admin";
import { ConversionTitle } from "../conversion/ConversionTitle";

export const HistoryEntryEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="conversion.id"
          reference="Conversion"
          label="Conversion"
        >
          <SelectInput optionText={ConversionTitle} />
        </ReferenceInput>
        <SelectInput
          source="conversionType"
          label="conversionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="finalTemperature" source="finalTemperature" />
        <NumberInput label="initialTemperature" source="initialTemperature" />
      </SimpleForm>
    </Edit>
  );
};
