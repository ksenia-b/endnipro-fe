import {BrowserRouter, Route, Routes} from "react-router-dom"
import HomePage from "../pages/home/index"
import Projects from "../pages/projects"
import ProjectDetail from "../pages/project/index"
import ProjectEdit from "../pages/project/Edit/index"
import ProjectAdd from "../pages/project/Add/index"
import Layout from "../layout/index"

export const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="projects" element={<Projects />}></Route>
        <Route path="projects/:projectId" element={<ProjectDetail />}></Route>

        <Route
          path="projects/:projectId/edit"
          element={<ProjectEdit />}
        ></Route>
        <Route path="projects/add" element={<ProjectAdd />}></Route>
        <Route
          path="projects/:projectId/delete"
          element={"ProjectDelete"}
        ></Route>

        <Route path="*" element={"NotRound"}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)
