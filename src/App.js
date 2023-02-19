
import { useState } from 'react';
import './App.css';
import Header from './header/Header';
import Main from './main/Main';



function App() {

  const [itemInfo,setItemInfo] = useState([
        {
          id : "1",
          img : "images/1.svg",
          content_type : "Lifestyle",
          title : "Eat Right For Your Exercise",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/1-960.png 2x,images/1-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "2",
          img : "images/2.svg",
          content_type : "Lifestyle",
          title : "The Look: Perfect Balance",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/2-960.png 2x,images/2-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "3",
          img : "images/3.svg",
          content_type : "Style",
          title : "Fun Things to Do in Rome",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/3-960.png 2x,images/3-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "4",
          img : "images/4.svg",
          content_type : "Style",
          title : "24 Colorful Ceilings That Add Unexpected Contrast to Any Room",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/4-960.png 2x,images/4-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "5",
          img : "images/5.png",
          content_type : "Lifestyle",
          title : "9 New Songs to Heat Up Your Fall Playlist",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/5-960.png 2x,images/5-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "6",
          img : "images/6.png",
          content_type : "Events",
          title : "What You Need on Your Bedside Table",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/6-960.png 2x,images/6-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "7",
          img : "images/7.svg",
          content_type : "Travel",
          title : "When Two Wheels Are Better Than Four",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/7-960.png 2x,images/7-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "8",
          img : "images/8.png",
          content_type : "Travel",
          title : "26 Living Room Ideas from the Homes of Top Designers",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/8-960.png 2x,images/8-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        },
        {
          id : "9",
          img : "images/9.svg",
          content_type : "Music",
          title : "What Makes Your City's Style Unique",
          author : "Niek Bove",
          date : "April 8, 2018",
          views : "3K Views",
          src_set : "images/9-960.png 2x,images/9-1440.png 3x,",
          description : "Structured gripped tape invisible moulded cups for sauppor firm hold strong powermesh front liner sport detail. Warmth comfort hangs loosely from the body large pocket at the front full button…"
        }
  ])

  

  return (
    <div className="App">
        <Header />
        <Main itemInfo={itemInfo}/>
    </div>
  );
}

export default App;
