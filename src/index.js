import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import mixpanel from "mixpanel-browser";
// ! initialising react-redux
import { createStore } from "redux";
import { Provider } from "react-redux";
import rootReducer from "./store/reducers/rootReducer";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { PersistGate } from "redux-persist/integration/react";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth", "checkout", "courses"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
const store = createStore(persistedReducer);
let persistor = persistStore(store);
Sentry.init({
  dsn: "https://86a8418af152431692349b2c63627e0e@o761365.ingest.sentry.io/5794117",
  integrations: [new Integrations.BrowserTracing()],
  tracesSampleRate: 1.0,
  environment: process.env.REACT_APP_ENV,
});
window.mixpanel = mixpanel;
mixpanel.init("d4a75bc05ba5b818d6719609241d6ab9", {
  debug: process.env.REACT_APP_MIXPANEL_DEBUG == 1 ? true : false,
  ip: true,
  ignore_dnt: true,
  batch_flush_interval_ms: 10000,
});
// mixpanel.track("Sign up");
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
