import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const ListUserRace = () => {


    const dispatch = useDispatch();
    const state = useSelector(state => state.users)

    const [users, setUser] = useState([]);

    useEffect(() => {

        setUser(state);


    }, [state])



    return (

        <>
            <h4>Players</h4>
            {
                users.map(user => {
                    return (
                        <div className="d-flex align-items-center player">
                            <img src={`/images/${user.avatar}`} className="list-players"></img>
                            <img className="online" src="/images/online.jpg"></img>
                  
                            <p>{user.userName}</p>

                            
                     
                            
                            
                        </div>

                    )
                }




                )
            }

        </>
    )




}

export default ListUserRace;