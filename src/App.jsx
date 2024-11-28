import { useRoutes } from "react-router-dom";
import { pathDefault } from "./common/path";
import SignIn from "./pages/SignIn/SignIn";
import AdminTemplate from "./templates/AdminTemplate/AdminTemplate";
import React, { createContext, Suspense } from "react";

import { Bounce, toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BodyTemplate from "./templates/HomeTemplate/components/BodyTemplate/BodyTemplate";
import ListJobByName from "./pages/ListJobByName/ListJobByName";

export const NotificationContext = createContext();

const HomeTemplate = React.lazy(() =>
  import("./templates/HomeTemplate/HomeTemplate")
);
const ManagerUser = React.lazy(() => import("./pages/ManagerUser/ManagerUser"));
const ManagerComment = React.lazy(() =>
  import("./pages/ManagerComment/ManagerComment")
);
const ManagerJob = React.lazy(() => import("./pages/ManagerJob/ManagerJob"));

const arrRoutes = [
  {
    path: pathDefault.homePage,
    element: (
      <Suspense>
        <HomeTemplate />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: <BodyTemplate />,
      },
      {
        path: "/",
        element: <BodyTemplate />,
      },
      {
        path: "/job-list-on-kind",
        element: <ListJobByName />,
      },
    ],
  },
  {
    path: pathDefault.signIn,
    element: <SignIn />,
  },
  {
    path: pathDefault.admin,
    element: <AdminTemplate />,
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-user",
        element: (
          <Suspense>
            <ManagerUser />
          </Suspense>
        ),
      },
      {
        path: "manager-comment",
        element: (
          <Suspense>
            <ManagerComment />
          </Suspense>
        ),
      },
      {
        path: "manager-job",
        element: (
          <Suspense>
            <ManagerJob />
          </Suspense>
        ),
      },
    ],
  },
];

function App() {
  const routes = useRoutes(arrRoutes);

  const handleNotification = (type, content, timeClose = 3000) => {
    toast[type](content, {
      position: "top-right",
      autoClose: timeClose,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    // toast.error
    // toast.warning
  };

  return (
    <>
      <NotificationContext.Provider value={handleNotification}>
        {routes}
        <ToastContainer />
      </NotificationContext.Provider>
    </>
  );
}

export default App;
