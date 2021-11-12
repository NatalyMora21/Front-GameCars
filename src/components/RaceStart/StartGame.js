import { map } from '@amcharts/amcharts5/.internal/core/util/Array';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import GameOver from './GameOver';

const StartGame = () => {

    const state = useSelector(state => state.race);

    const [users, setUser] = useState([]);
    const [podium, setPodim] = useState([]);
    console.log(typeof state[0].users);

    useEffect(() => {

        let usersInfo = [];

        const usersnew = state[0].users;

        for (const property in usersnew) {
            console.log(`${property}: ${state[0].users[property]}`);
            console.log("-----------")
            console.log(usersnew[property]);
            usersInfo = [...usersInfo, usersnew[property]]
        }

 
        console.log(podium.length);
        setUser(usersInfo);
        setPodim(state[0].podium);

    }, [state])


    return (
        <>
            {users.map(user => <div class="progress">
                <p>{user.userName}</p>
                <img src={`/images/${user.avatar}`}></img>
                <div class="progress-bar progress-bar-striped bg-success" role="progressbar" style={{ width: `${user.progress*100/state.trackDistance}%` }} aria-valuenow={user.progress} aria-valuemin="0" aria-valuemax="100"></div>
            </div>)}


            {podium.length ==3 && <GameOver />}

            



        </>
    )



}


export default StartGame;