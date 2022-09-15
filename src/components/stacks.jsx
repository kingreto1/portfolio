import { DiHtml5, DiCss3, DiGit, DiGithub, DiMysql, DiPostgresql, DiReact, DiJsBadge, DiNodejsSmall } from 'react-icons/di'
import { SiMongodb, SiTypescript, SiExpress, SiHeroku, SiStyledcomponents, SiJest, SiTestinglibrary, SiSequelize, SiReactrouter, SiSass, SiRedux } from 'react-icons/si'

import '../styles/components/stacks.sass'

const stacks = [
    { id: 'git', name: 'Git', icon: <DiGit />},
    { id: 'github', name: 'Github', icon: <DiGithub />},
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />},
    { id: 'css', name: 'CSS3', icon: <DiCss3 />},
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
    { id: 'typescript', name: 'TypeScript', icon: <SiTypescript />},
    { id: 'react', name: 'React', icon: <DiReact />},
    { id: 'react-router', name: 'React Router', icon: <SiReactrouter />},
    { id: 'redux', name: 'Redux', icon: <SiRedux />},
    { id: 'jest', name: 'Jest', icon: <SiJest />},
    { id: 'rtl', name: 'Testing Library', icon: <SiTestinglibrary />},
    { id: 'styled', name: 'Styled Components', icon: <SiStyledcomponents />},
    { id: 'sass', name: 'Sass', icon: <SiSass />},
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />},
    { id: 'express', name: 'Express', icon: <SiExpress />},
    { id: 'sequelize', name: 'Sequelize', icon: <SiSequelize />},
    { id: 'mysql', name: 'MySQL', icon: <DiMysql />},
    { id: 'postgres', name: 'Postgresql', icon: <DiPostgresql />},
    { id: 'mongo', name: 'MongoDB', icon: <SiMongodb />},
    { id: 'heroku', name: 'Heroku', icon: <SiHeroku />},
]

const Stacks = () => {
  return (
    <section className='stacks-container' id="stacks">
        <h2>Tecnologias</h2>
        <div className="stacks-grid">
            {stacks.map((stack) => (
                <div className="stack-card" id={stack.id} key={stack.id}>
                    {stack.icon}
                    <div className="stack-info">
                        <h3>{stack.name}</h3>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Stacks;