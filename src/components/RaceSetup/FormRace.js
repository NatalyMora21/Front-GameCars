import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { createRace } from '../../stateHandler/actions/raceAction';
import FormUser from './FormUser'
import ListUserRace from './ListUserRace';


const FormRace = () => {

    const dispatch = useDispatch();
    const [created, setCreated] = useState(false);
    const state = useSelector(state => state.users)


    useEffect(() => {

        if (state.length >= 3) {
            setCreated(true)
        }

    }, [state])


    const addRace = async (event) => {

        event.preventDefault();


        const { target } = event;
        const race = {
            title: target.title.value,
            trackDistance: target.track.value,
            users: state
        }
        dispatch(createRace(race));



    }

    return (



        <>
            <img src={'/images/flag-race.jpg'} className="flag"></img>
            <form onSubmit={addRace}>

                <div className="mb-3">
                    <label for="name" className="form-label">Name of the race</label>
                    <input type="text" className="form-control" id="name" name="title"required />
                </div>

                <div className="mb-3">
                    <select name="track" className="form-select" required >
                        <option value="1">5km</option>
                        <option value="2">10km</option>
                        <option value="3">15km</option>
                    </select>
                </div>

                {created && <button className="btn btn-warning">START</button> }

            </form>

            


        </>




    )

}


export default FormRace;


