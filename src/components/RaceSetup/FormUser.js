import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { createUser } from '../../stateHandler/actions/userAction';
import { carsImages, perfilImages } from './const';

const FormUser = () => {

    const dispatch = useDispatch();

    
    const [avatarselected, setAvatarselected] = useState("");
    const [carselected, setCarselected] = useState("");



    const selectCar = (value) => {
        console.log(value)
        setCarselected(value);
    }

    const selectAvatar = (value) => {
        console.log(value)
        setAvatarselected(value);
    }

    const addUser = (event) => {
        event.preventDefault();

        if(avatarselected!="" && carselected!=""){

            const { target } = event;
            const user = {
                nameUser: target.name.value,
                car: carselected,
                avatar: avatarselected
            }
            dispatch(createUser(user));
    
            setCarselected("");
            setAvatarselected("");
          


        }




    }



    return (
        
        <>
        <h4>Register</h4>
            <form onSubmit={addUser}>

                <div>
                    <p>Select an avatar</p>
                    {perfilImages.map(avatar => {
                        return (
                            <img className={avatar.value == avatarselected ? "perfil-selected" : "perfil-option"} src={avatar.img} onClick={() => selectAvatar(avatar.value)}></img>
                        )
                    })}

                </div>

                <div className="mb-3">
                    <label for="name" className="form-label" >NameUser</label>
                    <input type="text" className="form-control" id="name" name="name" required />
                </div>

                <div>
                    <p>Select a car</p>
                    {carsImages.map(car => {
                        return (
                            <img className={car.value == carselected ? "car-selected" : "car-option"} src={car.img} onClick={() => selectCar(car.value)}></img>
                        )
                    })}
                </div>

          

                <button className="btn btn-primary">Add Usuer</button>

            </form>
        </>
    )
}


export default FormUser;