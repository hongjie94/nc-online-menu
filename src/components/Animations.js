import { useState, useEffect } from 'react'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {TextPlugin} from 'gsap/TextPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const Animation = () => {
  const [ HeroAnimation, setHeroAnimation ] = useState(null);
  const [ SpecilsAnimation, setSpecilsAnimation ] = useState(null);
  const [ AboutAnimation, setAboutAnimation ] = useState(null);
  const [ QuoteAnimation, setQuoteAnimation ] = useState(null);
       
  useEffect(() => {
    
    /*
    Animation for Hero section
    */ 
    setHeroAnimation( 
      gsap.fromTo(".Hero", { css: { visibility: 'invisible', opacity: 0}},
      {duration: 0, css: { visibility: 'visible', opacity: 1}}),

      gsap.fromTo(".HeroText",{opacity: 0 }, 
      { duration: 2, y: 0, opacity: 1, ease: "back"}),

      gsap.fromTo(".fishImage",{ opacity: 0 },
      { duration: 2, y: 0, opacity: 1, rotation: 685, ease: "power1"}),

      gsap.fromTo(".fishImage2", { opacity: 0 },
      { duration: 2, y: 0, opacity: 1, rotation: 505,  ease: "power1"})
    );


    /*
    Animation for Specils section
    */ 
    setSpecilsAnimation(ScrollTrigger.matchMedia({

      "(min-width: 992px)" : () => {
         // Chinese Specils top
        gsap.fromTo(".num_s15, .num_51", { opacity: 0, scale: 0.2, x: -500, }, 
        { stagger: .5, opacity: 1, scale: 1, duration: 1, x: 0,
          scrollTrigger: { 
            trigger: ".num_s15, .num_51",
            toggleActions: "restart none none reset",
            start: "top 80%" 
          }
        });

        // Chinese Specils bottom
        gsap.fromTo(".num_99a, .num_h21", { opacity: 0, scale: 0.2, x: 500 }, 
        { opacity: 1, scale: 1, duration: 1, stagger: .5, x: 0,
          scrollTrigger: {
            trigger: ".num_99a, .num_h21", 
            toggleActions: "restart none none reset",
            start: "top 80%"
          }});
        // Thai Specils top
        gsap.fromTo(".num_S2, .num_S3", { opacity: 0, scale: 0.2, x: 500, }, 
        { stagger: .5, opacity: 1, scale: 1, duration: 1, x: 0, 
          scrollTrigger: { 
          trigger: ".num_S2, .num_S3",
          toggleActions: "restart none none reset", 
          start: "top 80%"}, 
        });

        // Thai Specils bottom
        gsap.fromTo(".num_C2, .num_S1", { opacity: 0, scale: 0.2, x: -500 }, 
        { opacity: 1, scale: 1, duration: 1, stagger: .5, x: 0,
          scrollTrigger: {
            trigger: ".num_C2, .num_S1", 
            toggleActions: "restart none none reset",
            start: "top 80%"
          }
        })
      },

      "(max-width: 990px)" : () => {
        // Items sliding left
        const SlideLeft = [".num_s15", ".num_99a", ".num_S2", ".num_S3"];

        SlideLeft.forEach((items) => {
          gsap.fromTo(items, {x: 400, opacity: 0 },
          {duration: 1, x: 0, opacity: 1,  scale: 1, 
            scrollTrigger: {
              trigger: items, 
              start: "top 80%",
              toggleActions: "restart none none reset"
            } 
          });
        });
        
        // Items sliding right
        const SlideRight = [".num_51", ".num_h21", ".num_C2", ".num_S1"];

        SlideRight.forEach((items) => {
          gsap.fromTo(items, {x: -400, opacity: 0 },
          {duration: 1, x: 0, opacity: 1,  scale: 1, 
            scrollTrigger: {
              trigger: items, 
              start: "top 80%",
              toggleActions: "restart none none reset"
            } 
          });
        });
      }
    }));


    /*
    Animation for About section
    */ 
    setAboutAnimation(
      gsap.fromTo(".aboutText", {opacity: 0, scale: 0.01},
      {duration: 1.5,  opacity: 1 , scale: 1, 
        scrollTrigger: {
          trigger: '.aboutText', 
          toggleActions: "restart none none reset",  
          start: "top 80%",
        }
      }),

      gsap.fromTo(".aboutButtons", {opacity: 0, scale: 0.01, y: 200},
      {duration: 1.5,  opacity: 1 , scale: 1, y: 0,
        scrollTrigger: {
          trigger: '.aboutButtons', 
          toggleActions: "restart none none reset",  
          start: "top 150%",
        }
      }),
    );

    /*
    Animation for Quote section
    */ 
   setQuoteAnimation(
    gsap.fromTo(".Quote", { y: "-100%"},
    {duration: 1, y: 0}),
    gsap.fromTo(".Quote__content, .Quote__author", {opacity: 0, scale: 0.01},
    {duration: 1.5,  opacity: 1 , scale: 1, scrollTrigger: 
      {trigger: '.Quote__content, .Quote__author', 
        toggleActions: "restart none none reset", 
        start: "top 80%",
      }}),
    );

    }, []);
    return { HeroAnimation, SpecilsAnimation, AboutAnimation, QuoteAnimation } 
}

export default Animation;
