import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { CONVERSION_TITLE_FIELD } from "../conversion/ConversionTitle";

export const HistoryEntryList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"HistoryEntries"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
