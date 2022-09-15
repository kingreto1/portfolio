import '../styles/components/about.sass'

const About = () => {
  return (
    <section className='about-container'>
        <h2>Sobre</h2>
        <p>Boas-vindas, sou Gabriel Melo. Um Desenvolvedor Web Fullstack cheio de vontade de aprender mais e mais.</p>
        <p>Há mais de 20 anos morando em Afuá, no estado do Pará, aberto a novos horizontes.</p>
        <p>Atualmente estudante de desenvolvimento web na <a target="_blank" href="https://www.betrybe.com/" className='trybe'>Trybe</a>, na qual já aprendi das mais diversas <a href="#stacks" className='stacks'>tecnologias</a>.</p>
    </section>
  )
}

export default About;