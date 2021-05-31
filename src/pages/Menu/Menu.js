import React from 'react'
import {Link} from 'react-router-dom';
const Menu = () => {
    return (
      <div className="MainMenu">
        <div className="menuOptions">
          <Link className="option_cn" to='/ChineseMenu'>
            <h1>Chinese Menu</h1>
          </Link>

          <Link className="option_thai" to='/ThaiMenu'>
              <h1>Thai  Menu</h1>
          </Link>
          
        </div>
        
      </div>
    )
}

export default Menu
