import {useState, useEffect, createContext} from 'react'
import axios from 'axios'


const BebidasContext = createContext()

const BebidasProvider = ({children}) => {

    //colocarlo en el State
    const [bebidas, setBbeidas] = useState([])
    const [modal, setModal] = useState(false)
    const [bebidaId, setBebidaId] = useState(null)
    const [receta, setReceta] = useState({})
    const [cargando, setCargando] = useState(false)


    useEffect (() => {
        setCargando(true)
        const obtenerReceta = async () =>{

            if(!bebidaId) return

            try {
                const url=`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${bebidaId}`

                const {data} = await axios(url)
                setReceta(data.drinks[0])
            } catch (error) {
                console.log(error)
            } finally {
                setCargando(false)
            }
        }
        obtenerReceta()
    },[bebidaId])

    // interactuar con la api
    const consultarBebida = async datos => {

        try {
            const url= `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${datos.nombre}&c=${datos.categoria}`
            const {data} = await axios(url)
            setBbeidas(data.drinks)
        } catch (error) {
            console.log(error)
        }
    }

    // funcion para cambiar el valor a lo contrario del modal

    
    const handleModalClick = () => {
        setModal(!modal)
    }

    const handleBebidaIdClick = id => {
        setBebidaId(id)
    }
   

    return (
        <BebidasContext.Provider
            value={{
                consultarBebida,
                bebidas, 
                handleModalClick,
                modal,
                handleBebidaIdClick,
                receta,
                cargando
            }}
        >
                {children}
        </BebidasContext.Provider>
    )
}

export{
    BebidasProvider
}

export default BebidasContext