import ProjectForm from "../../../components/ProjectForm"
import {useLocation} from "react-router-dom"

function ProjectEdit() {
  const {state} = useLocation()
  const method = "PUT"
  return (
    <>
      <h3>Edit project form:</h3>
      <ProjectForm method={method} project={state.project}></ProjectForm>
    </>
  )
}

export default ProjectEdit
