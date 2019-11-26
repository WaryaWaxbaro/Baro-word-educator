import {useState} from "react";

export const useToggleState = initialVal => {
    const [state, setState] = useState(initialVal);

    const toggle = () => {
        setState(!state);
        console.log('is toggling');
    }

    return [state, toggle];
}