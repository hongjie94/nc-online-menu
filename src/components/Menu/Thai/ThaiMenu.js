import GetMenuItems from './GetMenuItems';
import slider1 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/1.png';
import slider2 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/2.png';
import slider3 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/3.png';
import slider4 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/4.png';
import slider5 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/5.png';
import slider6 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/6.png';
import slider7 from '../../../images/Menu/ThaiMenu/ThaiSliderImgs/7.png';
import animation from '../../Animations';
import Carousel from 'react-elastic-carousel';
const ThaiMenu = () => {
  // Animation
  animation("ThaiMenu");
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2, pagination: false },
    { width: 850, itemsToShow: 4 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
    { width: 1450, itemsToShow: 5 },
    { width: 1750, itemsToShow: 6 },
  ];

  const SliderImgs = [
    {
      "src": slider1,
      "price": "$10",
      "name": "Pineapple Fried Rice"
    }, 
    {
      "src": slider2,
      "price": "$12",
      "name": "S1. Thai's Beef"
    }, 
    {
      "src": slider3,
      "price": "$11",
      "name": "S2. Thai Mango Chicken"
    }, 
    {
      "src": slider4,
      "price": "$11",
      "name": "C2. Green Curry"
    }, 
    {
      "src": slider5,
      "price": "$11",
      "name": "C1. Red Curry"
    }, 
    {
      "src": slider6,
      "price": "$11",
      "name": "C3. Massaman Curry"
    }, 
    {
      "src": slider7,
      "price": "$11",
      "name": "S3. Coconut Shrimp"
    }
  ];
  return (
      <div className="thaiMenu">
        <div className="thaiMenu__content">
          <div className="headerText">
            <h1>THAI MENU</h1>
            <span> <b>Tel :</b>  <a href="tel:518-673-8292">  518 673 8292</a></span>
            <span> <b>Tel :</b><a href="tel:518-673-2380">  518 673 2380</a></span>
          </div> 
      
        <Carousel breakPoints={breakPoints} className="thaiMenuCarousel">
        { SliderImgs.map((img, index) => (
          <div className="sliderImgs" key={index}>
            <img src={img.src} alt={index}/>
            <p>{img.name} - {img.price}</p>
          </div> 
        ))}
        </Carousel>
  
     
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
