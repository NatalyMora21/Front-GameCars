

import FormRace from "../components/RaceSetup/FormRace";
import FormUser from "../components/RaceSetup/FormUser";
import ListUserRace from "../components/RaceSetup/ListUserRace";



const Home = () => {


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

            </div>

        </>
    )




}

export default Home;
