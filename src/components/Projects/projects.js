import ProjectCard from './projectCard'

// import '../../Sass/styles.scss'
import './projects.scss'

const Project = () => {
  return (
    <div className="container">
      <h2 className="centered textPink">Projects</h2>
      <div id="proj">
        <section>
          <ProjectCard
            key="1"
            projHead="Tic Tac Toe"
            description="Two-player Tic Tac Toe game."
            link="https://github.com/GLADI8R/Tic-Tac-Toe-Game"
            tags={['HTML', 'JavaScript']}
          />
          <ProjectCard
            key="2"
            projHead="To-Do List"
            description="A webapp to manage your todos."
            link="https://floating-woodland-35994.herokuapp.com/"
            tags={['Nodejs', 'Mongodb', 'Express', 'Ejs']}
          />
          <ProjectCard
            key="3"
            projHead="JS Medium"
            description="A Blog site where you can read and write articles."
            link="https://github.com/GLADI8R/JSMedium"
            tags={['Express', 'Mongodb', 'Bcrypt', 'Ejs']}
          />
        </section>
      </div>
    </div>
  )
}

export default Project
