import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ProfilePage, ChatPage } from "./pages";
import { Header } from "./components";
import {store} from "./store"

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
    </Provider>
);
