import ChineseMenuitems from '../../../data/chineseMenu.json';
import { Dropdown } from 'react-dropdown-now';
import 'react-dropdown-now/style.css';
import SearchField from "react-search-field";


const MenuItems = ({setCategory, setSearchInput}) => {

  // Get category names from data
  const getCategoryNames = ChineseMenuitems.map(
    (item) => item.category 
  );

  // Rmove duplicates names
  const CategoryNames = [...new Set(getCategoryNames)];  

  
  return (
    <> 
      { CategoryNames && <div className="col-lg-4 MenuCategory">

        <div className="CategorySearchdiv">
          <SearchField
            placeholder="Search Menu Items..."
            onChange={(e)=> {
              setSearchInput(e)
            }}
            classNames="CategorySearch mb-4"
          />
        </div>

        <div className="MobileCategory">
          <Dropdown
            baseClassName="rdn"
            className="CategoryDropdown"
            menu="div"
            onChange={function getValue(e){
              setCategory(e.value);
            }}
            placeholder="Appetizers"
            options={
              CategoryNames
            }
          />
        </div>

        { CategoryNames.map((allCategoryName, index) => (
          <div className="category" key={index}>
            
            <ul className="categoryList">
              <li>
                <a 
                name={allCategoryName}
                href={`#${allCategoryName}`}
                onClick={e => {
                  setCategory(e.target.innerText);
                  setSearchInput('');
                }}>
                <span>{allCategoryName}</span>
              </a>
            </li>
            </ul>
          </div>
        ))}
      </div>}     
    </>
  )
}

export default MenuItems;
