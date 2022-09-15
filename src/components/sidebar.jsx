import SocialNetworks from './socialNetworks';
import Avatar from '../img/eu.jpg';

import '../styles/components/sidebar.sass';
import InformationContainer from './informationContainer';

const Sidebar = () => {
  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Gabriel Melo" />
      <p className="title">Desenvolvedor Fullstack Júnior</p>
      <SocialNetworks />
      <InformationContainer />
      <a target="_blank" href="https://drive.google.com/file/d/1mt6YHBua8AqdsWXOoWosCt4vK0cVqVMM/view?usp=sharing" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar;