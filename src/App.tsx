import React from "react";

import { BrowserRouter } from "react-router-dom";

import Dashboard from "./pages/Dashboard";

import GlobalStyles from "./styles/global";

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <BrowserRouter>
      <Dashboard />
    </BrowserRouter>
  </>
);

export default App;
