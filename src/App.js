import React from "react";


function Food({fav}){  // 매개변수 {fav} 는 props.fav 랑 같은 표현 , 즉 props내부 객체에서 fav의 value값을 가져와라 의미
  return <h1>i like {fav}</h1>;
}

const foodLike =[
  {
    name : "kimchi",
    image : "C:\Users\Smile\Desktop\prac1\reactprac1\kimchi.jpg"
  },
  {
    name : "ramen",
    image : "C:\Users\Smile\Desktop\prac1\reactprac1\ramen.jpg"
     
  }
]

function App() {
  return (
    <div >
      <h1>hello</h1>
      <Food fav="gimchi"/>    // Food component에 fav라는 props를 준것 gimchi는 value  ,rsx문법  
    </div>

  );
}

export default App;
