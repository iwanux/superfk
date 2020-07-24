import React,{useState} from 'react';
import logo from './logo.svg';
import './App.scss';
import Screen2OBJ from './screen2OBJ'




// image for first background
import FirstBG from './assets/images/f68217cb8d16716e729b3fe2c8d2b425.jpg'
// first section or screen
import FirstSec from './assets/images/GettyImages-694542042-e1586274805503.jpg'
// import screen 1
import Screen1 from './section/screen1/screen1.section'
// import screen 2
import Screen2 from './section/screen2/screen2.section'


function Title(){
  document.title = 'SuperFK'
}

const screenBackgroundStyle = {
  backgroundImage:`url(${FirstBG})`,
}

const firstScreenSec = {
  backgroundImage:`url(${FirstSec})`,
}


function App() {
  Title()
  const [screenObj, setScreenObj] = useState(Screen2OBJ);
  return (
    <div className="App">
      <div className="screenBackground" style={screenBackgroundStyle}>
      </div>
      <Screen1 firstScreenSec={firstScreenSec} />
      <div className="screen2"></div>
      {
        screenObj.map((item,index)=>{
          var upperTitle = item.data.upperTitle
          var lowerTitle = item.data.lowerTitle
          return(
            <Screen2 key={upperTitle} id={`desc${index}`} upperTitle={upperTitle} lowerTitle={lowerTitle}/>
          )
        })
      }
    </div>
  );
}

export default App;
