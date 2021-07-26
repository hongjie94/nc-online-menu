import ToggleCategory from './ToggleCategory'

const MenuItems = ({Category, SearchInput}) => {

  const { CategoryItems, HideSize, WithRice, SearchResults } = ToggleCategory(Category, SearchInput);
 

    return (
      <>
        { CategoryItems && 
      
          <div className="col-lg-8 MenuItems">
       
          {SearchResults && 
            <>
              { SearchResults.length < 1 && SearchInput !== '' &&
              <div className="searchResult">
                <h1>No menu items found</h1>
                <span>We couldn't find any menu items <br/>
                that match your search</span>
              </div>
              }
            </>
          }
          
          { SearchInput === '' && 
            <div id={Category}  className="category_header"> 
              <img src="" alt=""/>
              {!WithRice && <h1>{Category}</h1> }         
              {WithRice && <h1 className="withRice">{Category}</h1> }
              
              {Category === "Soups" && <span className="category_sub">(with Fried Noodles)</span> }  

              {Category === "Chow Mein" && <span className="category_sub">(with Rice & Fried Noodles)</span> }

              {Category === "Suggestions" && <span className="category_sub">
                (All Mixed w. Broccoli, Snow Peas, Black Mushroom & Baby Corn)</span> } 

              {Category === "Combination Plates" && <span className="category_sub">
                (Served with Egg Roll & Roast Pork Fried Rice)</span> }

              {Category === "Lunch Specil" && <span className="category_sub"> 
              (Served with Roast Pork Fried Rice) <br/> (<b>Everday From 11:00AM - 3:00PM</b>) </span> }          
            </div>
          }
          
          {!HideSize && !SearchInput && 
            <div className="category_size">
              <span className="pt">Pt. </span> 
              <span className="qt">Qt.</span> 
            </div>
          }
        
         { SearchInput === '' && 
          <>
            {CategoryItems.map((Item, index) => (
              <div  className="allItems" key={index}>
                <div className="item">
                <div className="item__num">
                <span>{Item.item_num}</span>.
                  </div>
                  <div className="item__name">
                    {Item.name} {Item.spicy && <i className="fas fa-pepper-hot"></i>}
                  </div>
                  <div className="item__price">
                    { Item.price && <span className="ml-1" >${Item.price}</span>}
                    { Item.pt_price && <span className="mr-4">${Item.pt_price}</span>}
                    { Item.qt_price && <span>${Item.qt_price}</span>}
                  </div>
                </div>
                {Item.description && <span className="item__description">{Item.description}</span>}
              </div>
            ))}
          </>
          }

          {SearchInput && SearchResults && 
            <>
            {SearchResults.map((Item, index) => (
              <div key={index}>
                <div className="item">
                  <div className="item__name">
                    <span>{Item.item_num}</span>. {Item.name} {Item.spicy && <i className="fas fa-pepper-hot"></i>}
                  </div>
                  <div className="item__price">
                    { Item.price && <span className="ml-1" >${Item.price}</span>}
                    { Item.pt_price && <span className="mr-4">${Item.pt_price}</span>}
                    { Item.qt_price && <span>${Item.qt_price}</span>}
                  </div>
                </div>
                {Item.description && <span className="item__description">{Item.description}</span>}
              </div>
              ))}
            </>
          }
        </div>}
      </>
    )
}


export default MenuItems;