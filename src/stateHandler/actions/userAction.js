export const createUser = content => {

    console.log(content);
    return  (dispatch) => {


        dispatch({
            type: 'CREATE-USER',
            paylod: content
        })
    }

}

export const deleteUser = content => {

    return  (dispatch) => {


        dispatch({
            type: 'DELETE-USER',
            paylod: content
        })
    }

}