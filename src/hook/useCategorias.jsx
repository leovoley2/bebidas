import {useContext} from 'react'
import CategoriasContext from '../context/CategoriasProvide'

const useCategorias = () => {
    return useContext(CategoriasContext)
}

export default useCategorias