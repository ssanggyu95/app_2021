import React from 'react';

function Food({fav}){
  
  return <h1> I like {fav}</h1>;
}


function App() {
    return (
    <div>
      <h1>Hi?</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="삼겹살" />
      <Food fav="쭈꾸미" />
    </div>
    );
}

export default App;
