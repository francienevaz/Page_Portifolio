import MainContent from './components/MainContent'
import SideBar from './components/Sidebar'
import SocialNetworks from './components/SocialNetworks'

import './styles/components/app.sass'

function App() {

  return (
    <div id="portifolio">
      <h1>Franciene Vaz</h1>
      <SideBar/>
      <MainContent/>
      <SocialNetworks/>
    </div>
  )
}

export default App
