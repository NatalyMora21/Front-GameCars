


//Reducer
export const racingReducer = (state = [], action) => {

    switch(action.type){


        case "LIST_RACING": {
            console.log("List")

            return action.paylod

        }

        default:
            return state

    }


}


