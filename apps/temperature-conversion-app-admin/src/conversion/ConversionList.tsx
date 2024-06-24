import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ConversionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Conversions"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <TextField label="conversionType" source="conversionType" />
        <TextField label="convertedTemperature" source="convertedTemperature" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="initialTemperature" source="initialTemperature" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
