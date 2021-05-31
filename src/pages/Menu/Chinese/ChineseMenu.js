import { useState } from 'react'
import MenuItems from './MenuItems';
import MenuCategory from './MenuCategory';
import logo from '../../../images/Menu/mark.png';


const ChineseMenu = () => {

  // Set default category as Appetizers
  const [Category, setCategory] = useState('Appetizers');

  // Set default Search vlaue null
  const [SearchInput, setSearchInput] = useState('');
    return (
      <div className="chineseMenu">
        <div className="container MenuContents">
          <div>
            <img  id={Category} src={logo} alt="search-mark"/>
            <div>
            Our Chinese menu 
            <h1>Explore the menu</h1>
                
            </div>
            <div className="menu_phone mb-3">
              <i className="fas fa-phone-alt"></i> Tel1: <a href="tel:518-673-8292"> (518)-673-8292 </a> 
              <br/>   
              <i className="fas fa-phone-alt"></i>Tel2: <a href="tel:518-673-2380"> (518)-673-2380</a> 
            </div>
          </div>

          <div className="row">
            <MenuCategory
              setCategory={setCategory}
              setSearchInput= {setSearchInput}
            />
            <MenuItems 
              Category={Category}
              SearchInput = {SearchInput}
            />
          </div>
        </div>
      </div>
    )
}

export default ChineseMenu;
