import { useEffect, useState } from "react";

// defino el Hook con parametro 'url' de la API
export const useFetch = ( url ) => {

    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: null,
    })

    const getFetch = async() => {

        // Cuando llamo a la funcion coloco isLoading en true
        setState({
            ...state,
            isLoading: true
        });

        const resp = await fetch(url); // fetch -> envia peticiones al servidor
        const data = await resp.json(); // .json -> convierte la respuesta en json


        // Una vez que obtengo la respuesta guardo los datos con el useState
        setState({
            data,
            isLoading: false,
            hasError: null,
        });
    }

    useEffect(() => {
        getFetch(); // llamo a la funcion getFetch...
    }, [ url ]) // cada vez que hay cambios en la 'url' 


    return {
        data:      state.data,
        isLoading: state.isLoading,
        hasError:  state.hasError,
    };
}
