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
            projHead="Expense Tracker"
            description="Full Stack MERN application to track user’s expenses"
            link="https://github.com/Sudhanshu10m/Expense-Tracker"
            tags={['React', 'Nodejs', 'Mongodb', 'Express']}
          />
          <ProjectCard
            key="2"
            projHead="Taskify"
            description="Daily task tracker"
            link="https://github.com/Sudhanshu10m/Taskify"
            tags={['React', 'Bootstrap']}
          />
          <ProjectCard
            key="3"
            projHead="Skullbook"
            description="Full Stack Web Application used to store users information."
            link="https://github.com/GLADI8R/SkullBook"
            tags={['Nodejs', 'Mongodb', 'Express', 'Ejs']}
          />
        </section>
      </div>
    </div>
  )
}

export default Project
