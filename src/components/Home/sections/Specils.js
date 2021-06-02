import T1 from '../../../images/ThaiSpecils/T1.png';
import T2 from '../../../images/ThaiSpecils/T2.png';
import T3 from '../../../images/ThaiSpecils/T3.png';
import T4 from '../../../images/ThaiSpecils/T4.png';
import C1 from '../../../images/ChineseSpecils/C1.png';
import C2 from '../../../images/ChineseSpecils/C2.png';
import C3 from '../../../images/ChineseSpecils/C3.png';
import C4 from '../../../images/ChineseSpecils/C4.png';

const Specils = () => {
  
    return (
      <>
      <section className="specils">
        <h1 className="chinese">Popular Chinese Dishes</h1>  
        <div className="ChineseSpecils">
          <div className="ChineseSpecils__content"> 
          <div className="top">
            <ul className="topUl">
              <li className="num_s15">
                <div className="img__wrapper">
                  <img src={C1} alt="s15"/>
                </div>
                <div className="description">
                    <h5>S15. Happy Family</h5> <span>$11.90</span>
                      <p>Shrimp, lobster, scallop, chicken, 
                        beef & roast pork with mix vegetables.</p>
                  </div>
              </li>
              <li className="num_51">
              <div className="img__wrapper">
                <img src={C4 } alt="51"/>
                </div>
                <div className="description">
                    <h5>51.Beef & Broccoli</h5> 
                    <span>$8.15</span>
                    <p>Flank steak with broccoli
                        soy sauce, brown sugar & vegetable oil</p>
                  </div>
              </li>
            </ul>
          </div>
          
          <div className="bottom">
            <ul className="bottomUl">
              <li className="num_99a">
              <div className="img__wrapper">
                <img src={C3 } alt="99a"/>
                </div>
                <div className="description">
                    <h5>99a.Singapore Noodles <i className="fas fa-pepper-hot"></i></h5> 
                    <span>$8.15</span>
                    <p>Thin rice noodles with shrimp, 
                      rosat pork, chicken,
                      napa cabbage, soy sauce,
                      oyster sauce & yellow curry powder.</p>
                  </div>
              </li>
              <li className="num_h21">
              <div className="img__wrapper">
                <img src={C2 } alt="h21"/>
                </div>
                <div className="description">
                    <h5>H21.Sesame Chicken <i className="fas fa-pepper-hot"></i></h5> 
                    <span>$9.70</span>
                    <p>Deep fried chicken with sweet & savory sesame sauce.</p>
                </div>
              </li>
            </ul>
          </div>
          </div>
        </div>
        <h1 className="thai">Popular Thai Dishes</h1>
        <div className="ThaiSpecils"> 
          <div className="ThaiSpecils__content left">   
            <ul>
              <li className="num_S2">
                <div className="img__wrapper">
                  <img src={T4 } alt="T4"/>
                </div>
                <div className="description">
                  <h5>S2.Thai Mango Chicken</h5> 
                  <span>$11.00</span>
                  <p>Delicious spicy mango sauce with red onion, 
                  tomato and scallion.</p>
                </div>
              </li>
              <li className="num_C2">
                <div className="img__wrapper">
                  <img src={T3 } alt="T3"/>
                </div>
                <div className="description">
                  <h5>C2.Green Curry <i className="fas fa-pepper-hot"></i></h5> 
                  <span>$11.00</span>
                  <p>Eggplant, 
                    bamboo shoots, string beans, 
                    pepper, basil and coconut milk.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="ThaiSpecils__content right">   
            {/* <h1>Popular Thai Dishes</h1>   */}
            <ul>
              <li className="num_S3">
                <div className="img__wrapper">
                  <img src={T2 } alt="T2"/>
                </div>
                <div className="description">
                  <h5>S3.Coconut Shrimp </h5> 
                  <span>$11.00</span>
                  <p>Stir-fried with pineapple, mushroom, 
                    bell peppers, & water chestnuts in a 
                    sweeet coconut sauce.</p>
                </div>
              </li>
              <li className="num_S1">
                <div className="img__wrapper">
                  <img src={T1 } alt="T1"/>
                </div>
                <div className="description">
                  <h5>S1.Thai's Beef <i className="fas fa-pepper-hot"></i></h5> 
                  {/* <span>Diced with Vietnamese & French Style</span> */}
                  <span>$12.00</span>
                  <p>Freshly cut steak dices caramelized 
                    with spicy herby Thai's spices mixed with
                    vegetables in garlic and black pepper sauce.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      </>
    )
}

export default Specils;
