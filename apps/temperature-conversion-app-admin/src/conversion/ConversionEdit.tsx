import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HistoryEntryTitle } from "../historyEntry/HistoryEntryTitle";

export const ConversionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <SelectInput
          source="conversionType"
          label="conversionType"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput
          label="convertedTemperature"
          source="convertedTemperature"
        />
        <ReferenceArrayInput
          source="historyEntries"
          reference="HistoryEntry"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={HistoryEntryTitle} />
        </ReferenceArrayInput>
        <NumberInput label="initialTemperature" source="initialTemperature" />
      </SimpleForm>
    </Edit>
  );
};
