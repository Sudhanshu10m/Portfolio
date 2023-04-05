import Tag from './tags'

import './projects.scss'

const ProjectCard = (props) => {
  return (
    <a href={props.link}>
      <div className="card textWhite">
        <h3>{props.projHead}</h3>
        <Tag tags={props.tags} />
        <p>{props.description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
