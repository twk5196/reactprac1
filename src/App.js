import React from "react";


function Food({name , picture}){  // 매개변수 {fav} 는 props.fav 랑 같은 표현 , 즉 props내부 객체에서 fav의 value값을 가져와라 의미
  return (
    <div>
      <h3>I like {name}</h3>
      <img src ={picture} alt={name}/>
    </div>
    );
}

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg"
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg"
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb"
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg"
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg"
  }
];

function renderFood(dish){
  return <Food key={dish.id} name ={dish.name} picture ={dish.image} /> ;
}

function App() {
  return (
    <div >
          { /*<Food fav="gimchi"/>   // Food component에 fav라는 props를 준것 gimchi는 value  ,rsx
          밑에 Food 끝에 / 질문 */}
      {foodILike.map(renderFood)}   {/* 여기서 매개변수 () 안쓰는 이유?*/}
    </div>

  );
}

export default App;
