import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { CONVERSION_TITLE_FIELD } from "../conversion/ConversionTitle";

export const HistoryEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
