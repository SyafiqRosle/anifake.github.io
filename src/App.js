import React,{useEffect, useState} from 'react';
import Anime from './Anime'
import Result from './Result'
import './App.css';
import Fade from 'react-reveal/Fade';

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';

const App=()=>{
  const[results, getResult] = useState([]);
  const [search,setSearch] = useState('');
  const [query, setQuery] = useState('one');
  const [animes, setAnime] = useState([]);
  const [day, setDay] =useState('wednesday');

  useEffect(()=>{
  getAnime();
  },[day,query]);

  
  
  const btnClick = e =>{
    setDay(e.target.value);
    console.log(e.target.value);
  }

  const updateSearch = e =>{
    setSearch(e.target.value);
    console.log(search);
  }

  const getSearch =e=>{
    e.preventDefault();
    setQuery(search);
  }

  let days =['monday','tuesday','wednesday','thursday','friday','saturday','sunday'];


  const getAnime = async()=>{
    const response = await fetch(`https://api.jikan.moe/search/anime/${query}`);
    const data= await response.json();
   // console.log(data.result);

   
    for(let i=0;i<5;i++){
      results[i] = data.result[i];
     
    }
   
      

    const sched = await fetch(`https://api.jikan.moe/v3/schedule/${day}`);
    const s_data= await sched.json();
    console.log(s_data);
    //UGLY CODE BELOW
    if(day===days[0])setAnime(s_data.monday);
    else if(day===days[1])setAnime(s_data.tuesday);
    else if(day===days[2])setAnime(s_data.wednesday);
    else if(day===days[3])setAnime(s_data.thursday);
    else if(day===days[4])setAnime(s_data.friday);
    else if(day===days[5])setAnime(s_data.saturday);
    else setAnime(s_data.sunday);

  }
  
  return(
    <div className="App">
      
      <div className="header">
      <Fade bottom>
      <h1 className="header-title">Ani</h1>
      </Fade>
        <h1 className="fake">Fake</h1>
        <ScrollAnimation animateIn="fadeInUp">
        <p className="create">Anime.</p></ScrollAnimation>
        <ScrollAnimation animateIn="fadeIn"><p className="for">For</p><p className="every"> Everyone.</p></ScrollAnimation>
        <Fade top>
          <img className="kokoro" src="https://lachocolablog.files.wordpress.com/2018/09/roselia-bang-dream-full-2317916.png" alt=""/>
          </Fade>
      <div className="cool">
      <div className="container">
      <ScrollAnimation offset="100"animateIn="fadeInRight"  animateOut="fadeOut"> 
      <img className="ako" src="https://i.bandori.party/u/c/transparent/863Ako-Udagawa-Happy-Abyssal-Necromancer-JBhNke.png"/>
     </ScrollAnimation><p2>Searching for Anime?</p2>
      <form onSubmit={getSearch} className="search-form">
        <input
          placeholder="Search for anime"
          className="search-bar"
          type="text"
          value={search}
          onChange={updateSearch}/>
          <button
            className="search-button"
            type="submit"> Search</button>
          </form>
      </div>
      
      <div className="white"><h4>Built with Jikan REST API.</h4>
      <ScrollAnimation animateIn="fadeInLeft"><p>Jikan is an open source API that scrapes data from the MyAnimeList.net database.<br/>Click the button below for further details.</p></ScrollAnimation>
          <button >Jikan API</button>
         
          
          </div>
      
     
      
      </div>
      
      </div>

      <div className="SearchResult">
     
        { query==="one"
          ? console.log('nothing searched')
          : results.map(anime=>( 
            <Result
              title={anime.title}
              image={anime.image_url}
              description={anime.desc}
            />))}
           
      </div>

      <div className="Bottom">
      <div className="OngoingHeader">
      <h1>Ongoing Anime This Week</h1>
      </div>
     

      <div className="tabContainer">

       <div className="buttonContainer">
      {days.map(d=>(
        <button className="Buttons" value={d} onClick={btnClick}>
         {d}
        </button>))}
        </div>
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOut">
        <div className="Ongoing">
      
      {animes.map(anime=>(
       
       <Anime
          title={anime.title}
          image={anime.image_url}
          synopsis={anime.synopsis}
        />))}
      </div>
      </ScrollAnimation>
      </div>
      
      
      </div>
     
    </div>
  )

}

export default App;
