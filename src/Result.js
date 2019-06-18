import React from 'react'
import style from './anime.module.css'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
const Result=({title,image,description})=>{
    return(

        <ScrollAnimation delay="200"animateIn="fadeInRight">
    
        <div className={style.anim_res}>
            <h2>{title}</h2>
            <img className={style.pic_res} src={image} alt=""></img>
            <div className={style.desc}>{description}</div>
            
        </div>
        </ScrollAnimation>
    )
}
export default Result;