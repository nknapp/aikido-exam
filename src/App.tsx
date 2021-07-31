import React from 'react';
import "src/assets/styles/styles.scss"
import {DefaultLayout} from "./layout/DefaultLayout";
import i18n from "i18next";

function App() {
  return (
    <DefaultLayout>
      {i18n.language}
    </DefaultLayout>
  );
}

export default App;
