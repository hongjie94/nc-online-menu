import ChineseMenuitems from '../../../data/chineseMenu.json';
import { useState, useEffect } from 'react'

const ToggleCategory = (target, SearchInput) => {
    
    const [ CategoryItems, setCategoryItems ] = useState(null);
    const [ SearchResults, setSearchResults ] = useState(null);
    const [ HideSize, setHideSize ] = useState(null);
    const [ WithRice, setWithRice ] = useState(null);
    
    useEffect(() => {

      // Filter category from menu data
      setCategoryItems(ChineseMenuitems.filter(
        (item) => item.category === target
      ));

      // Filter all items for search results
      if (SearchInput) {
        setSearchResults(ChineseMenuitems.filter (
          (result) => 
          result.name.toLowerCase().includes(SearchInput.toLowerCase())
        ));
      };
     
      // Hide size for following categories
      switch (target) {
        case "Appetizers":
          setHideSize(true);
        break;
        case "Vegetable Dishes":
          setHideSize(true);
        break;
        case "Chow Fun or Rice Noodles":
          setHideSize(true);
        break;
        case "Cantonese Dishes":
          setHideSize(true);
        break;
        case "Hunan Dishes":
          setHideSize(true);
        break;
        case "Egg Foo Young":
          setHideSize(true);
        break;
        case "Suggestions":
          setHideSize(true);
        break;
        case "Combination Plates":
          setHideSize(true);
        break;
        case "Side Order":
          setHideSize(true);
        break;
        case "Lunch Specil":
          setHideSize(true);
        break;
        default:
          setHideSize(false);
      };

      // Hide servce with rice for following categories 
      switch (target) {
        case "Appetizers":
          setWithRice(false);
        break;
        case "Soups":
          setWithRice(false);
        break;
        case "Chow Mein":
          setWithRice(false);
        break;
        case "Fried Rice":
          setWithRice(false);
        break;
        case "Lo Mein":
          setWithRice(false);
        break;
        case "Chow Fun or Rice Noodles":
          setWithRice(false);
        break;
        case "Combination Plates":
          setWithRice(false);
        break;
        case "Side Order":
          setWithRice(false);
        break;
        case "Lunch Specil":
          setWithRice(false);
        break;
        default:
          setWithRice(true);
      };
    }, [target, SearchInput]);
    return { CategoryItems, HideSize, WithRice, SearchResults }
}

export default ToggleCategory;