import GetMenuItems from './GetMenuItems';
import headerBg from '../../../images/Menu/thaiHeader.png';
import animation from '../../Animations';
const ThaiMenu = () => {
  animation("ThaiMenu");
  
    return (
        <div className="thaiMenu">

        <div className="thaiMenu__content">

          <div className="headerText">
            <h1>THAI MENU</h1>
            <span> <b>Tel :</b>  <a href="tel:518-673-8292">  518 673 8292</a></span>
            <span> <b>Tel :</b><a href="tel:518-673-2380">  518 673 2380</a></span>
          </div>

          <div className="thaiMenu__headerImg">
            <img src={headerBg} alt="mark"/>
          </div>

          <div className="row">
            <div className="col-lg-4 col-12">
                <div className="row"> 
                  <h1 className="ThaiCategory"> Soups</h1>
                  <div className="col-12">
                    <GetMenuItems 
                      Category={'Soups'}
                    />
                  </div>
                </div>

                <div className="row">
                <h1 className="ThaiCategory"> Salads</h1>
                  <div className="col-12">
                    <GetMenuItems 
                      Category={'Salads'}
                    />
                  </div>
                </div>

                <div className="row">
                  <h1 className="ThaiCategory"> Appetizers</h1>
                  <div className="col-12">
                    <GetMenuItems 
                      Category={'Appetizers'}
                    /> 
                  </div>
                </div>
                    
                <div className="row">
                  <h1 className="ThaiCategory"> Desserts</h1>
                  <div className="col-12">
                    <GetMenuItems 
                      Category={'Desserts'}
                    /> 
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                  <div className="row">
                  <h1 className="ThaiCategory"> Noodles & Rice</h1>
                   <span className="category_sub">Choice of Chicken, Beef or Shrimp $10</span> 
                   <span className="category_sub">Tofu & Vegetables $9</span> 
                    <div className="col-12">
                    <GetMenuItems 
                      Category={'Noodles & Rice'}
                      /> 
                    </div>
                  </div>
                  <div className="row">
                  <h1 className="ThaiCategory"> Thai Curry</h1>
                  <span className="category_sub">Choice of Chicken, Beef or Shrimp $11</span> 
                   <span className="category_sub">Tofu & Vegetables $10</span> 
                    <div className="col-12">
                    <GetMenuItems 
                      Category={'Thai Curry'}
                      /> 
                    </div>
                </div>
              </div>

              <div className="col-lg-4 col-12">
                <div className="row"> 
                  <h1 className="ThaiCategory"> Thai Cuisine</h1>
                  <span className="category_sub">Choice of Chicken, Beef or Shrimp $11</span> 
                  <span className="category_sub">(Choose From M1-M4)</span> 
                  <div className="col-12">
                  <GetMenuItems 
                      Category={'Thai Cuisine'}
                    /> 
                  </div>
                </div>
                <div className="row"> 
                <h1 className="ThaiCategory"> Chef Specils</h1>
                  <div className="col-12">
                  <GetMenuItems 
                      Category={'Chef Specils'}
                    /> 
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ThaiMenu;
