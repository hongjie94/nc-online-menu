import { useState, useEffect } from 'react'
import ThaiMenuitems from '../../../data/thaiMenu.json';

    const GetMenuItems = ({Category}) => {

    const [ThaiCategoryItems, setThaiCategoryItems ] = useState(null);

    useEffect(() => {
        
        setThaiCategoryItems(ThaiMenuitems.filter(
            (item) => item.category === Category
          )
        );

    }, [Category]);

    return (
        <>
        {ThaiCategoryItems && ThaiCategoryItems.map((Item, index) => (
          <div className="thaiItems" key={index}>
            <div className="thaiItems__header">
              <div className="thaiItemsHeader_left">
                  {Item.item_num && <span> {Item.item_num}. </span> } 
                  <p className="thaiItemsName">{ Item.name}
                    { Item.spicy &&  <i className="fas fa-pepper-hot"></i>}
                  </p>  
                </div>
                <div className="thaiItemsHeader__right">
                  { Item.price && <span> ${ Item.price}</span>}
                </div>
            </div>
            {Item.options && 
              <div className="thaiItems__options">
                <span>{Item.options}</span>
              </div>
            }

            {Item.description &&  
              <div className="thaiItems__descriptions">
                <span>{Item.description }</span>
              </div> 
            }
          </div>
        ))}
        </>
    );
};


export default GetMenuItems;
