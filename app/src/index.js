import React from "react";
import ReactDOM from "react-dom";
import { Button } from "antd";
import "./index.css";

const Text = React.lazy(() => import("libs/Text"));

const App = () => {
  return (
    <div className="app">
      <React.Suspense fallback="loading...">
        <Text>Hello! Module Federation!</Text>
      </React.Suspense>
      <Button type="primary">Got it !!</Button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
