import animation from '../../Animations';

const About = () => {
  animation("About");
  return (
    <section id="About" className="About">
      <h1 className="aboutText">About</h1>

      <p className="aboutText"> New China Restaurant is located on 109 Price Chopper Plaza in Plaatine Bridge, NY. Restaurant 

      Serving up a good variety Chinese dishes including Hunan, Szechuan, and Cantonese dishes. 
      New China also Serving delicious Thai dishes. Feel free to check out our Chinese and Thai 
      menus. As of COVID-19 Restaurant Move To a Takeout-Only Model. 
      </p>
      <div className="aboutButtons">
        <div className="aboutButton">
          <a href="/ChineseMenu">
            <p><span className="bg"></span><span className="base"></span><span className="text">Chinese Menu</span></p>
          </a>
        </div>  
        <div className="aboutButton">
          <a href="/ThaiMenu">
            <p><span className="bg"></span><span className="base"></span><span className="text">Thai Menu</span></p>
          </a>
        </div> 
      </div>
  </section>
  )
};

export default About;
