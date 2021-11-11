import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ListUserRace = () => {

    const dispatch = useDispatch();
    const state = useSelector(state => state.users)

    const [users, setUser] = useState([]);

    useEffect(() => {
        console.log("cambio")
        setUser(state);
        console.log(users)

    }, [state])



    return (

        <>
            <h4>Players</h4>
            {
                users.map(note => {
                    return (
                        <div className="d-flex align-items-center player">
                            <img src={`/images/${note.avatar}`} className="list-players"></img>
                            <img className="online" src="/images/online.jpg"></img>
                  
                            <p>{note.nameUser}</p>

                            
                     
                            
                            
                        </div>

                    )
                }




                )
            }

        </>
    )




}

export default ListUserRace;