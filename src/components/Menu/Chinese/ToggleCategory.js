import ChineseMenuitems from '../data/chineseMenu.json';
import { useState, useEffect } from 'react'

const ToggleCategory = (target) => {
    const [ CategoryItems, setCategoryItems ] = useState(null)
    useEffect(() => {
        setCategoryItems(ChineseMenuitems.filter(
            (item) => item.category === target
        ));
    }, [target]);
    return { CategoryItems }
}

export default ToggleCategory;