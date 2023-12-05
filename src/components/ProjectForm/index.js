import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"

function ProjectForm({method, project}) {
  const navigate = useNavigate()

  console.log("project ", project)
  const [projectData, setProjectData] = useState({
    id: project?.id || "",
    title: project?.title || "",
    shortDescription: project?.shortDescription || "",
    description: project?.shortDescription || "",
    mainImage: project?.mainImage || "11.jpg",
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target
    console.log(name, value)
    setProjectData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
    console.log(projectData)
  }

  const handleSubmit = (e) => {
    console.log("projectData = ", projectData)
    e.preventDefault()
    const postURL = "http://192.168.1.106:3000/projects"
    fetch(postURL, {
      method: method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        id: projectData.id ? projectData.id : "",
        title: projectData.title,
        shortDescription: projectData.shortDescription,
        description: projectData.description,
        mainImage: projectData.mainImage,
      }),
    }).then(() => {
      alert("You have been added to the system!")
      navigate("/projects")
    })
  }

  return (
    <>
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 "
        onSubmit={handleSubmit}
      >
        <p className="">
          <label
            className={"block text-gray-700 text-sm font-bold mb-2"}
            htmlFor="title"
          >
            Title
          </label>
          <input
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            id="title"
            type="text"
            name="title"
            required
            defaultValue={project ? project.title : ""}
            onChange={handleInputChange}
            placeholder={"Enter title"}
          />
        </p>
        <p>
          <label
            className={"block text-gray-700 text-sm font-bold mb-2"}
            htmlFor="shortDescription"
          >
            Short description
          </label>
          <input
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            id="shortDescription"
            type="text"
            name="shortDescription"
            required
            defaultValue={project ? project.shortDescription : ""}
            onChange={handleInputChange}
            placeholder={"Enter short description"}
          />
        </p>
        <p>
          <label
            htmlFor="description"
            className={"block text-gray-700 text-sm font-bold mb-2"}
          >
            Description
          </label>
          <input
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            id="description"
            type="text"
            name="description"
            required
            defaultValue={project ? project.description : ""}
            onChange={handleInputChange}
            placeholder={"Enter description"}
          />
        </p>
        <p>
          <label
            className={"block text-gray-700 text-sm font-bold mb-2"}
            htmlFor="image"
          >
            Image
          </label>
          <input
            className={
              "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            }
            id="image"
            type="text"
            name="image"
            required
            defaultValue={project ? project.mainImage : ""}
            onChange={handleInputChange}
            placeholder={"Enter image name"}
          />
        </p>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4.5 12.75l6 6 9-13.5"
            />
          </svg>
          Save
        </button>
        <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
          <Link to={-1}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
              />
            </svg>
            Cancel
          </Link>
        </button>
      </form>
    </>
  )
}

export default ProjectForm
