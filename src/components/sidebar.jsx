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
      <a target="_blank" href="https://drive.usercontent.google.com/u/0/uc?id=1GszjljVfBg0vNqIuBH0m6VLXI2laYx_A&export=download" className="btn">Download Currículo</a>
    </aside>
  )
}

export default Sidebar;