import './App.css';
import Color from './component/Color';

function App() {
  // eslint-disable-next-line
  const Color_code=[
    {
      color_name:"pink",
      color_code:"#FFC0CB",
    },
    {
      color_name:"Red",
      color_code:"#c90b0b",
    },
    {
      color_name:"Orange",
      color_code:"#ff8000",
    },
    {
      color_name:"Black",
      color_code:"#000000",
    }, {
      color_name:"Grey",
      color_code:"#333333",
    },
    {
      color_name:"Green",
      color_code:"#38bb14",
    },
    {
      color_name:"Yellow",
      color_code:"#fff500",
    },
    {
      color_name:"Blue",
      color_code:"#0000ff",
    },
    {
      color_name:"Purple",
      color_code:"#7e41a2",
    },
    {
      color_name:"Brown",
      color_code:"#c14911",
    }

  ];
  console.log(Color_code);
  return (
    
    <>
    <h1 style={{textAlign:"center"}}>Colors & ColorCode</h1>
    {Color_code.map((e,idx)=>{
      return(
        <Color key={idx} color_code={e.color_code} color_name={e.color_name}/>
      )
    })}
    
    </>
   
  );
}

export default App;
