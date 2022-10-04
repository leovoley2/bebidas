import {useContext} from 'react'
import BebidasContext from '../context/BebidasProvide'

const useBebidas = () => {
    return useContext(BebidasContext)
}

export default useBebidas
