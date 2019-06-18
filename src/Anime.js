import React from 'react'
import style from './anime.module.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
const Anime=({title,image,synopsis})=>{
    return(
      <ScrollAnimation delay="200"animateIn="fadeInUp">
     <div className={style.main}>
        <div className={style.anim}>
         <div className={style.front}>
            <h2 className={style.animetitle}>{title}</h2>
            <img className={style.pic} src={image} alt=""></img>  

         </div>
           
           
         <div className={style.back}>
            <div className={style.synopsis}>Description:<br></br>{synopsis}</div>
         </div>

        </div>
     </div>
     </ScrollAnimation>
    )
}
export default Anime;