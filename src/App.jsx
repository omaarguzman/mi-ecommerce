import './App.css'
import { NavBar } from './components/NavBar/NavBar'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import { ItemCount } from './components/Itemcount/ItemCount'

function App() {

  return (
    <>  
      <NavBar />
      <ItemCount />
      <ItemListContainer greeting={"Bienvenido al e-commerce JOGR"}/>
    </>
  )
}

export default App
