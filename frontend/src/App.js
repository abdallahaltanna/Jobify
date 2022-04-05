import { Routes, Route } from "react-router-dom";
import {
  Landing,
  Register,
  Error,
  Layout,
  Stats,
  AllJobs,
  AddJob,
  Profile,
  ProtectRoute,
} from "./pages";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <ProtectRoute>
            <Layout />
          </ProtectRoute>
        }
      >
        <Route index element={<Stats />} />
        <Route path="/add-job" element={<AddJob />} />
        <Route path="/all-jobs" element={<AllJobs />} />
        <Route path="/profile" element={<Profile />} />
      </Route>
      <Route path="/landing" element={<Landing />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default App;
