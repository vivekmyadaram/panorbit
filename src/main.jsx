import * as React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ChatUser from "./components/ChatUser";
import { store } from "./components/RTK/Store";
import UserGalary from "./components/UserGalary";
import UserInfo from "./components/UserInfo";
import UserPosts from "./components/UserPosts";
import UserProfile from "./components/UserProfile";
import UserTodo from "./components/UserTodo";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/check",
    element: <ChatUser />,
  },
  {
    path: ":userId",
    element: <UserProfile />,
    children: [
      { index: true, element: <UserInfo /> },
      {
        path: "/:userId/profile",
        element: <UserInfo />,
      },
      {
        path: "/:userId/posts",
        element: <UserPosts />,
      },
      {
        path: "/:userId/galary",
        element: <UserGalary />,
      },
      {
        path: "/:userId/todo",
        element: <UserTodo />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
