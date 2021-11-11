//Reducer
export const userReducer = (state = [], action) => {

    switch(action.type){
        case "CREATE-USER" : {

            return ([...state, action.paylod])

        }

        case "DELETE_USER--": {

            return ""

        }
        default:
            return state

    }


}