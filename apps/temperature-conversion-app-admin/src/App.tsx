import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { HistoryEntryList } from "./historyEntry/HistoryEntryList";
import { HistoryEntryCreate } from "./historyEntry/HistoryEntryCreate";
import { HistoryEntryEdit } from "./historyEntry/HistoryEntryEdit";
import { HistoryEntryShow } from "./historyEntry/HistoryEntryShow";
import { ConversionList } from "./conversion/ConversionList";
import { ConversionCreate } from "./conversion/ConversionCreate";
import { ConversionEdit } from "./conversion/ConversionEdit";
import { ConversionShow } from "./conversion/ConversionShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"TemperatureConversionApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="HistoryEntry"
          list={HistoryEntryList}
          edit={HistoryEntryEdit}
          create={HistoryEntryCreate}
          show={HistoryEntryShow}
        />
        <Resource
          name="Conversion"
          list={ConversionList}
          edit={ConversionEdit}
          create={ConversionCreate}
          show={ConversionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
