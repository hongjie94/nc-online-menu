import { useState } from 'react'
import MenuItems from './MenuItems';
import MenuCategory from './MenuCategory';
import animation from '../../Animations';


const ChineseMenu = () => {

  animation("ChineseMenu");
  // Set default category as Appetizers
  const [Category, setCategory] = useState('Appetizers');

  // Set default Search vlaue null
  const [SearchInput, setSearchInput] = useState('');
    return (
      <div className="chineseMenu">
        <div className="container MenuContents">
          <div className="chineseMenu_header">
            <div className="hederText">
              <h1> CHINESE MENU </h1>
               <span className="lunchTime">(Lunch Everday From 11AM-3PM)</span>
               <span> <b>Tel :</b>  <a href="tel:518-673-8292">  518 673 8292</a></span>
               <span> <b>Tel :</b><a href="tel:518-673-2380">  518 673 2380</a></span>
            </div>
          </div>
          <div className="CNmenu row">
        
            <MenuCategory
              setCategory={setCategory}
              setSearchInput= {setSearchInput}
            />
            <MenuItems 
              id="MenuItems"
              Category={Category}
              SearchInput = {SearchInput}
            />
          </div>
        </div>
      </div>
    )
}

export default ChineseMenu;
