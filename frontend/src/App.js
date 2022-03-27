import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components";
import ProtectRoute from "./pages/ProtectRoute";

const Landing = lazy(() => import("./pages/landing/Landing.js"));
const Register = lazy(() => import("./pages/register/Register.js"));
const Error = lazy(() => import("./pages/404/Error.js"));
const Layout = lazy(() => import("./pages/dashboard/layout/Layout.js"));

const Stats = lazy(() => import("./pages/dashboard/stats/Stats.js"));
const AllJobs = lazy(() => import("./pages/dashboard/allJobs/AllJobs.js"));
const AddJob = lazy(() => import("./pages/dashboard/addJob/AddJob.js"));
const Profile = lazy(() => import("./pages/dashboard/profile/Profile.js"));

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Suspense fallback={<Loading />}>
              <Layout />
            </Suspense>
          </ProtectRoute>
        }
      >
        <Route
          index
          element={
            <Suspense fallback={<Loading />}>
              <Stats />
            </Suspense>
          }
        />
        <Route
          path="/add-job"
          element={
            <Suspense fallback={<Loading />}>
              <AddJob />
            </Suspense>
          }
        />
        <Route
          path="/all-jobs"
          element={
            <Suspense fallback={<Loading />}>
              <AllJobs />
            </Suspense>
          }
        />
        <Route
          path="/profile"
          element={
            <Suspense fallback={<Loading />}>
              <Profile />
            </Suspense>
          }
        />
      </Route>
      <Route
        path="/landing"
        element={
          <Suspense fallback={<Loading />}>
            <Landing />
          </Suspense>
        }
      />
      <Route
        path="/register"
        element={
          <Suspense fallback={<Loading />}>
            <Register />
          </Suspense>
        }
      />
      <Route
        path="*"
        element={
          <Suspense fallback={<Loading />}>
            <Error />
          </Suspense>
        }
      />
    </Routes>
  );
};
export default App;
