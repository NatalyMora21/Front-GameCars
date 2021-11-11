export const createRace = content => {

    return  (dispatch) => {

        //Enpoint //Partida creada, aún sin comenzar
        //const newRace = await servicePost(race);

        //Prueba

        dispatch({
            type: 'CREATE_RACE',
            paylod: content
        })
    }

}