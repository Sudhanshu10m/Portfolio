import SkillCard from './skillCard';
import './skills.scss';

// import '../../Sass/styles.scss';

import cpp from '../../assets/icons/cpp.png';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import bootstrap from '../../assets/icons/bootstrap.svg';
import sass from '../../assets/icons/sass.png';
import js from '../../assets/icons/javascript.jpg';
import ts from '../../assets/icons/typescript.svg';
import node from '../../assets/icons/node.svg';
import java from '../../assets/icons/java.svg';
import spring from '../../assets/icons/spring.svg';
import npm from '../../assets/icons/npm.png';
import express from '../../assets/icons/express.png';
import git from '../../assets/icons/git.png';
import mongo from '../../assets/icons/mongo.png';
import postgre from '../../assets/icons/postgresql.svg';
import react from '../../assets/icons/react.png';
import flutter from '../../assets/icons/flutter.svg';
import dart from '../../assets/icons/dart.svg';
import illustrator from '../../assets/icons/illustrator.svg';
import docker from '../../assets/icons/docker.svg';
import kubernetes from '../../assets/icons/kubernetes.svg';

const Skills = () => {
    return(
        <div id="tools">
                <h1 className="titleS">Skills</h1>
            <section>
                <SkillCard image={cpp} text="C++" />
                {/* <SkillCard image={java} text="Java" /> */}
                <SkillCard image={js} text="JS" />
                <SkillCard image={ts} text="TypeScript" />
                <SkillCard image={react} text="React" />
                {/* <SkillCard image={spring} text="Spring Boot" /> */}
                <SkillCard image={node} text="NodeJs" />
                <SkillCard image={express} text="Express" />
                {/* <SkillCard image={docker} text="Docker" /> */}
                {/* <SkillCard image={kubernetes} text="Kubernetes" /> */}
                <SkillCard image={html} text="HTML" />
                <SkillCard image={css} text="CSS" />
                <SkillCard image={bootstrap} text="Bootstrap" />
                <SkillCard image={sass} text="Sass" />
                <SkillCard image={npm} text="NPM" />
                <SkillCard image={git} text="Git" />
                <SkillCard image={mongo} text="MongoDB" />
                {/* <SkillCard image={postgre} text = "PostgreSQL" /> */}
                {/* <SkillCard image={flutter} text="Flutter" /> */}
                {/* <SkillCard image={dart} text="Dart" /> */}
                {/* <SkillCard image={illustrator} text="Illustrator" /> */}
            </section>
        </div>
    );
};

export default Skills;