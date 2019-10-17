import React from 'react';
import Fruits from './Fruits';
import { Link } from 'react-router-dom';
import WildAnimals from './WildAnimals';

export default function ComponentList(props){
    const goToLink = id => {
        //props.history.push(`/${id}`);
    }

    return(
        <div>
            <Link to="/fruitsandvegetables">
                <div style={{
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'lightgreen'
                }}>
                    Fruits go here
                </div>
            </Link>
            <Link to="wildanimals">
                <div style={{
                    width: '150px',
                    height: '150px',
                    backgroundColor: 'lightblue'
                }}>
                    WildAnimals
                </div>
            </Link>
        </div>
    )
}