import {servicePost,serviceGet} from '../../services/racing'


export const createRace = content => {

    return  async(dispatch) => {

        //Enpoint //Partida creada, aún sin comenzar
        const newRace = await servicePost(content,'createRaceWithUsers');
        console.log("Nueva carrera end point");
        console.log(newRace);


        const startRace = servicePost({"raceId":newRace},'startGame');
        console.log("Start game")

        

        const infoRace = await serviceGet(newRace);

        const play = true;


        const pollDOM =  async()  =>  {
            const response = await serviceGet(newRace);

            console.log(response)
          
            if (response.podium.length==3) {
                console.log("Terminada")
              // Do something with el
            } else {
              dispatch({
                type: 'CREATE_RACE',
                paylod: response
            })
              setTimeout(pollDOM, 3000); // try again in 300 milliseconds
            }
          }
          
        pollDOM();



        //Prueba


    }

}