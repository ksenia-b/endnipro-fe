import {useLocation} from "react-router-dom"

import ProjectForm from "../../../components/ProjectForm"

function ProjectAdd() {
  const method = "POST"
  return (
    <>
      <h3>Add project form:</h3>
      <ProjectForm method={method}></ProjectForm>
    </>
  )
}

export default ProjectAdd
