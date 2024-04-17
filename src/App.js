import { useState } from 'react';
import './App.css';

function App() {
  const movieList =[
    {
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-T1Un_k_r3sDR1uhgnPrTZWGsXjRgI_jNxWyCRtxgetn6GMdZ7lrazoCC24aiToNR98&usqp=CAU",
      name:"Breaking Bad",
      rating:"9.5",
      summary:"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    },
    {
      poster:"https://assets-prd.ignimgs.com/2022/01/14/gameofthrones-allseasons-sq-1642120207458.jpg",
      name:"Game of Thrones",
      rating:"9.2",
      summary:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
      name:" Dexter",
      rating:"8.6",
      summary:"He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      name:"Daredevil ",
      rating:"8.6",
      summary:"A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR2,0,140,209_AL_.jpg",
      name:"Limitless",
      rating:"7.4",
      summary:"A mysterious pill that enables the user to access 100% of his brain's abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers."
    },
    {
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-T1Un_k_r3sDR1uhgnPrTZWGsXjRgI_jNxWyCRtxgetn6GMdZ7lrazoCC24aiToNR98&usqp=CAU",
      name:"Breaking Bad",
      rating:"9.5",
      summary:"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    },
    {
      poster:"https://assets-prd.ignimgs.com/2022/01/14/gameofthrones-allseasons-sq-1642120207458.jpg",
      name:"Game of Thrones",
      rating:"9.2",
      summary:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
      name:" Dexter",
      rating:"8.6",
      summary:"He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      name:"Daredevil ",
      rating:"8.6",
      summary:"A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR2,0,140,209_AL_.jpg",
      name:"Limitless",
      rating:"7.4",
      summary:"A mysterious pill that enables the user to access 100% of his brain's abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers."
    },
    {
      poster:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy-T1Un_k_r3sDR1uhgnPrTZWGsXjRgI_jNxWyCRtxgetn6GMdZ7lrazoCC24aiToNR98&usqp=CAU",
      name:"Breaking Bad",
      rating:"9.5",
      summary:"A chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine with a former student in order to secure his family's future.",
    },
    {
      poster:"https://assets-prd.ignimgs.com/2022/01/14/gameofthrones-allseasons-sq-1642120207458.jpg",
      name:"Game of Thrones",
      rating:"9.2",
      summary:"Nine noble families fight for control over the lands of Westeros, while an ancient enemy returns after being dormant for millennia."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BZjkzMmU5MjMtODllZS00OTA5LTk2ZTEtNjdhYjZhMDA5ZTRhXkEyXkFqcGdeQXVyOTA3MTMyOTk@._V1_.jpg",
      name:" Dexter",
      rating:"8.6",
      summary:"He's smart. He's lovable. He's Dexter Morgan, America's favorite serial killer, who spends his days solving crimes and nights committing them."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BODcwOTg2MDE3NF5BMl5BanBnXkFtZTgwNTUyNTY1NjM@._V1_UY209_CR0,0,140,209_AL_.jpg",
      name:"Daredevil ",
      rating:"8.6",
      summary:"A blind lawyer by day, vigilante by night. Matt Murdock fights the crime of New York as Daredevil."
    },
    {
      poster:"https://m.media-amazon.com/images/M/MV5BYmViZGM0MGItZTdiYi00ZDU4LWIxNDYtNTc1NWQ5Njc2N2YwXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_UY209_CR2,0,140,209_AL_.jpg",
      name:"Limitless",
      rating:"7.4",
      summary:"A mysterious pill that enables the user to access 100% of his brain's abilities transforms a struggling writer into a financial wizard, but it also puts him in a new world with many dangers."
    },
    
  ]
    return (
    <div className='App'>

      <div className='movie-list'>
        {movieList.map((mv, index)=>(
          <Movie key={index} movie={mv} />
        ))}
      </div>

 
    </div>
  );
}


export default App;

function Counter(){
  const [like, setLike] = useState(0);
  const [disLike, setdisLike] = useState(0);

  return <div className='counter-container'>
    <button onClick={()=> setLike(like+1)}>👍{like}</button>
    <button onClick={()=> setdisLike(disLike+1)}>👎{disLike}</button>

  </div>
}

function Movie({movie}){

  const styles ={
    color:movie.rating > 8 ? "green" : "red",
  };

  const [show, setShow]= useState(true);

  const paraStyle ={
    display: show ? "block": "none",
  }
  
  
  return(
    <div className='movie-container'>
      <img src={movie.poster} alt={movie.name} className='movie-poster' />
      <div className='movie-specs'>
        <h2 className='movie-name'>{movie.name}</h2>
        <p style={styles} className='movie-rating'>⭐{movie.rating}</p>
      </div>
      <button onClick={()=>setShow(!show)} >Toggle Summary</button>
      <p style={paraStyle} className="movie-summary">{movie.summary}</p>
      <Counter />
    </div>
  )
}
