import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";
import Spinner from "./components/spinner/Spinner";

const App = React.lazy(() => import("./App"));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
