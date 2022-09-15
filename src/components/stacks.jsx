import { DiHtml5, DiCss3, DiGit, DiGithub, DiMysql, DiPostgresql, DiReact, DiJsBadge, DiNodejsSmall  } from 'react-icons/di'
import { SiMongodb } from 'react-icons/si'

import '../styles/components/stacks.sass'

const stacks = [
    { id: 'html', name: 'HTML5', icon: <DiHtml5 />},
    { id: 'css', name: 'CSS3', icon: <DiCss3 />},
    { id: 'js', name: 'JavaScript', icon: <DiJsBadge />},
    { id: 'react', name: 'React', icon: <DiReact />},
    { id: 'node', name: 'Node.js', icon: <DiNodejsSmall />},
    { id: 'mysql', name: 'MySQL', icon: <DiMysql />},
    { id: 'postgres', name: 'Postgresql', icon: <DiPostgresql />},
    { id: 'mongo', name: 'MongoDB', icon: <SiMongodb />},
    { id: 'git', name: 'Git', icon: <DiGit />},
    { id: 'github', name: 'Github', icon: <DiGithub />},
]

const Stacks = () => {
  return (
    <section className='stacks-container'>
        <h2>Tecnologias</h2>
        <div className="stacks-grid">
            {stacks.map((stack) => (
                <div className="stack-card" id={stack.id} key={stack.id}>
                    {stack.icon}
                    <div className="stack-info">
                        <h3>{stack.name}</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur</p>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Stacks;