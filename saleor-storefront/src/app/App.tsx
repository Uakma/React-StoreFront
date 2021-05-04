import React from "react";
import "../globalStyles/scss/index.scss";

import { MetaConsumer, Layout } from "../components";
import { Routes } from "./routes";
import { PopupManagerProvider } from "../PopupManager";

const App: React.FC = () => {
  return (
    <PopupManagerProvider>
      <MetaConsumer />
      <Layout>
        <Routes />
      </Layout>
    </PopupManagerProvider>
  );
};

export default App;
