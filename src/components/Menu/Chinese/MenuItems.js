import { useState } from 'react'
import ChineseMenuitems from '../data/chineseMenu.json';
import ToggleCategory from './ToggleCategory'

  const MenuItems = () => {

  // Get category names from data
  const getCategoryNames = ChineseMenuitems.map(
    (item) => item.category 
  );

  // Rmove duplicates names
  const CategoryNames = [...new Set(getCategoryNames)];  

  // Set default category as Appetizers
  const [Category, setCategory] = useState('Appetizers');

  // Update category every time user click on the button
  const { CategoryItems } = ToggleCategory(Category);
 
  return (
    <div className="MenuContents">
        { CategoryNames && <div className="MenuCategory">
        { CategoryNames.map((allCategoryName, index) => (
          <div className="item" key={index}>
            <button 
              name={allCategoryName}
              onClick={e => {
                setCategory(e.target.name)
              }}>
              {allCategoryName}
            </button>
          </div>
        ))}
      </div>}

      { CategoryItems && <div className="MenuItems">
        {CategoryItems.map((Item, index) => (
          <div className="item" key={index}>
            <p>
              {Item.name}
            </p>
          </div>
        ))}
        <p>{Category}</p>
      </div>}
    </div>
  )
}

export default MenuItems;
