import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, ChatPage } from "./pages";
import { Header } from "./components";
import { store, persistor } from "./store";

import "./global.css";

const theme = createTheme({
    // palette: {
    //   primary: {
    //     main: "#ff0000",
    //   },
    // },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Header />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/chats/*" element={<ChatPage />} />
                        <Route path="*" element={<h1>404</h1>} />
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </PersistGate>
    </Provider>
);
