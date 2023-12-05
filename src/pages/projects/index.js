import {useEffect, useState} from "react"
import Card from "../../components/Card"
import {Link} from "react-router-dom"

function Projects(props) {
  const [projects, setProjects] = useState([])

  const getData = () => {
    fetch("http://localhost:3000/projects", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then(function (response) {
        console.log(response)
        return response.json()
      })
      .then(function (myJson) {
        console.log(myJson)
        setProjects(myJson)
      })
  }
  useEffect(() => {
    getData()
  }, [])
  return (
    <>
      <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
        <Link to={"add"}>
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
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
          Add project
        </Link>
      </button>
      <Card projects={projects}></Card>
    </>
  )
}

export default Projects
