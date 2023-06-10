// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import {Action,originals,Horor,Romance} from './urls'
import Banner from './Components/Banner/banner'
import NavBar from './Components/Navebar/NavBar'
import RowPost from './Components/RowPost/RowPost'

function App() {
  

  return (
    <div className='App'>
          <NavBar/>
     <Banner/>
     <RowPost urls={originals} title='Netflix Originals'/>
     <RowPost urls={Action} title='Action Movies'isSmall/>
     <RowPost urls={Horor} title='Horor Movies'isSmall/>
     <RowPost urls={Romance} title='Romance Movies'isSmall/>
    </div>
    
  )
}

export default App
