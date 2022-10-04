import { Container,ModalBody} from 'react-bootstrap'
import Formulario from './components/Formulario'
import ModalBebida from './components/ModalBebida'
import ListadoBebidas from './components/ListadoBebidas'
import { CategoriasProvider } from './context/CategoriasProvide'
import { BebidasProvider } from './context/BebidasProvide' 

function App() {

  return (

    <CategoriasProvider>
      <BebidasProvider>
    <header className="py'5">
        <h1 className='p-5'>LEO - BAR</h1>
    </header>

    <Container className='mt-5'>
        <Formulario/>
        <ListadoBebidas/>
        
        <ModalBebida/>
    </Container>
    </BebidasProvider>
    </CategoriasProvider>
    
  )
}

export default App
