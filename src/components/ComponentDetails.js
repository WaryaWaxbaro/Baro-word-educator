import React from 'react';
import Fruits from './Fruits';
import WildAnimals from './WildAnimals';

export default function ComponentDetails(props){
    const { name } = props.match.params;
    const renderComponent = name => {
        switch (name.toLowerCase()) {
            case 'wildanimals':
                return <WildAnimals />
            case 'fruitsandvegetables':
                return <Fruits />
        }
    }
    return(
        <>
        {renderComponent(name)}
        </>
    )
};