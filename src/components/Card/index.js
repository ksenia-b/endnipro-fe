import {Link} from "react-router-dom"

const Card = ({projects}) => {
  if (!projects && !projects.length) {
    return "no projects yet"
  }
  console.log("projects in card = ", projects)

  return (
    <>
      {projects.map((project) => (
        <div
          key={project.id}
          class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6"
        >
          <img
            className=" block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0"
            src={require(`../../assets/` + project.mainImage)}
            alt={projects.title}
          />
          <div className="text-center space-y-2 sm:text-left">
            <div className="space-y-0.5">
              <Link
                key={project.id}
                className="text-lg text-black font-semibold cursor-pointer"
                to={String(project.id)}
                state={{project}}
              >
                {project.title}
              </Link>
              <p className="text-slate-500 font-medium">
                {project.shortDescription}
              </p>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card
