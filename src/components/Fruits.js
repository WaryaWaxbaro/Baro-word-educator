import React from 'react';
import useKeyPressState from '../Hooks/useKeyPressState';
import Fruit from './Fruit';

export default function Fruits(){
    //const random = useRandomState(0);
    const [iskeyPressed, random] = useKeyPressState(10);
    return(
        <Fruit random={random} iskeyPressed={iskeyPressed}/>
    )
}