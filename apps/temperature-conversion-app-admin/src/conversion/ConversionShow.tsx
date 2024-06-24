import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { CONVERSION_TITLE_FIELD } from "./ConversionTitle";

export const ConversionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="conversionType" source="conversionType" />
        <TextField label="convertedTemperature" source="convertedTemperature" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="initialTemperature" source="initialTemperature" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="HistoryEntry"
          target="conversionId"
          label="HistoryEntries"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Conversion"
              source="conversion.id"
              reference="Conversion"
            >
              <TextField source={CONVERSION_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="conversionType" source="conversionType" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="finalTemperature" source="finalTemperature" />
            <TextField label="ID" source="id" />
            <TextField label="initialTemperature" source="initialTemperature" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
