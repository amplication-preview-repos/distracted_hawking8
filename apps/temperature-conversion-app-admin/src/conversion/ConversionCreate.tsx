import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  SelectInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { HistoryEntryTitle } from "../historyEntry/HistoryEntryTitle";

export const ConversionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
