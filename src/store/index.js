import { createStore, combineReducers, applyMiddleware , compose} from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { profileReducer } from "./profile";
import { conversationReducer } from "./conversations";
import { messageReducer } from "./messages";
import { gistsReducer } from "./gists";
import { logger, timeScheduler, botMessage } from "./middleware";
import thunk from "redux-thunk";
import { getPublicApi, searchGistsByNameApi } from "../api/gists";
const api = { getPublicApi, searchGistsByNameApi };

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
        message:messageReducer,
        gists: gistsReducer
    })
);

export const store = createStore(
    persistedReducer,
     compose(
        applyMiddleware(logger, timeScheduler, botMessage, thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (args) => args
      )
    
);

export const persistor = persistStore(store);
