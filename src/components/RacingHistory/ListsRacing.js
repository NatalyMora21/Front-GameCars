import React, {useEffect} from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { initRacing } from '../../stateHandler/actions/racingAction';

const ListsRacing = () => {

    const dispatch = useDispatch();

    const state = useSelector(state => state.racing)

    console.log({state});

    useEffect(() => {

            dispatch(initRacing())

    }, [])

    return (state.map(race => <p></p>));
}

export default ListsRacing;