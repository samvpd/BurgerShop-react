import {useEffect} from 'react';

export const useTitle = openItem => {
    useEffect(() => {
        document.title = openItem ? openItem.name : `MR.donald's`;
    }, [openItem])
}