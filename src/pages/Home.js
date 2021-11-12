

import FormRace from "../components/RaceSetup/FormRace";
import FormUser from "../components/RaceSetup/FormUser";
import ListUserRace from "../components/RaceSetup/ListUserRace";
import StartGame from "../components/RaceStart/StartGame";
import { useDispatch, useSelector } from 'react-redux';


const Home = () => {

    const state = useSelector(state => state.race);


    return (
        <>
            <div className="row g-5">
                <div className="col-md-4 col-lg-4">
                    <FormRace></FormRace>
                </div>
                <div className="col-md-4 col-lg-4">
                    <FormUser></FormUser>
                </div>
                <div className="col-md-4 col-lg-4">
                    <ListUserRace></ListUserRace>
                </div>

                {state.length>0 &&<StartGame/> }

                
            </div>

        </>
    )




}

export default Home;
