import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import authReducer from "./auth/slice";
import transactionsReducer from "./transactions/slice";
import statisticsReducer from "./statistics/slice";
import { currencyReducer } from "./currency/slice";

const persistConfig = {
  key: "Authentication",
  storage,
};

const currencyPersistConfig = {
  key: "Currency",
  storage,
};

const persistedAuthReducer = persistReducer(persistConfig, authReducer);
const persistedCurrencyReducer = persistReducer(
  currencyPersistConfig,
  currencyReducer
);

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    transactions: transactionsReducer,
    statistics: statisticsReducer,
    currency: persistedCurrencyReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export const persistor = persistStore(store);
export default store;
