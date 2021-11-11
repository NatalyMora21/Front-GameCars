export const initRacing = () => {
    console.log("AAAA");


    return async (dispatch) => {
        //EndPoint ALL Racing
        //const info = await serviceGet();

        const info = ["Primera", "segunda", "tercera"]

        dispatch({
            type: 'LIST_RACING',
            paylod: info
        })

    }


}
