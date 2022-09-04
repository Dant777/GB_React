import { createStore, combineReducers, applyMiddleware , compose} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";
import { logger, timeScheduler, botMessage, thunk } from "./middleware";

const persistConfig = {
    key: "gbchat",
    storage,
    whitelist: ["profile"],
  };

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        conversation: conversationReducer,
        message:messageReducer
    })
);

export const store = createStore(
    persistedReducer,
     compose(
        applyMiddleware(logger, timeScheduler, botMessage, thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (args) => args
      )
    
);

export const persistor = persistStore(store);
