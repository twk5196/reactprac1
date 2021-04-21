import React from "react";


function Food({fav}){
  return <h1>i like {fav}</h1>;

}

function App() {
  return (
    <div >
      <h1>hello</h1>
      <Food fav="gimchi"/>
    </div>

  );
}

export default App;
