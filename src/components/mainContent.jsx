import About from './about';
import Projects from './projects';
import Stacks from './stacks';

import '../styles/components/mainContent.sass';

const MainContent = () => {
  return (
    <main id="main-content">
      <About />
      <Stacks />
      <Projects />
    </main>
  )
}

export default MainContent;