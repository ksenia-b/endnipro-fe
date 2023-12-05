import {Link, useLocation, useNavigate} from "react-router-dom"

function ProjectDetail(props) {
  const {state} = useLocation()
  const navigate = useNavigate()

  const deleteProjectHandler = (e) => {
    e.preventDefault()
    const postURL = "http://192.168.1.106:3000/projects/" + state.project.id
    fetch(postURL, {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    }).then(() => {
      alert("You have been added to the system!")
      navigate("/projects")
    })
  }
  return (
    <>
      <div class="max-w-s rounded overflow-hidden shadow-lg">
        {console.log("state in pDetails = ", state)}
        <img
          class="w-full"
          //   src="/img/card-top.jpg"
          src={require(`../../assets/` + state.project.mainImage)}
          alt="Sunset in the mountains"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{state.project.title}</div>
          <p class="text-gray-700 text-base">{state.project.description}</p>
        </div>
        <div class="px-6 pt-4 pb-2">
          <button class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
            <Link to="edit" state={state}>
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
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>

              <span>Edit</span>
            </Link>
          </button>

          <button
            onClick={deleteProjectHandler}
            class="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center"
          >
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
                d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
              />
            </svg>

            <span>Delete</span>
          </button>
        </div>
      </div>
    </>
  )
}

export default ProjectDetail
