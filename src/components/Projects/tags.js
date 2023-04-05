import './projects.scss'

const Tag = (props) => {
  return (
    <p>
      {props.tags.map((tag) => (
        <span className="tag">{tag}</span>
      ))}
    </p>
  )
}

export default Tag
