import * as React from "react";
import "./styles.css";
import { Store } from "./store";
import * as mobxReact from "mobx-react";
import Routes from "Views/Nav/Routes";

const store = new Store<string>();

export default mobxReact.observer(function App() {
  const [value, setValue] = React.useState("");

  return <Routes />;
});
