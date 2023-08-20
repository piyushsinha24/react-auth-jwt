import Register from "./Register";
import Login from "./Login";
import Layout from "./component/Layout";
import LinkPage from "./component/LinkPage";
import Unauthorized from "./component/Unauthorized";
import Home from "./component/Home";
import Editor from "./component/Editor";
import Admin from "./component/Admin";
import Lounge from "./component/Lounge";
import Missing from "./component/Missing";
import RequireAuth from "./component/RequireAuth";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />

        {/* We want to protect these routes */}
        {/* All the routes within RequireAuth should be protected by RequireAuth */}
        <Route element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
          <Route path="editor" element={<Editor />} />
          <Route path="admin" element={<Admin />} />
          <Route path="lounge" element={<Lounge />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
