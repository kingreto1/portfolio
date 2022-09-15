import MainContent from "./components/mainContent"
import Sidebar from "./components/sidebar"

import './styles/components/app.sass';

function App() {
  return (
    <div className="portfolio">
      <h1>Gabriel Melo</h1>
      <MainContent />
      <Sidebar />
    </div>
  )
}

export default App
