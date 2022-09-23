import React from "react";
import './App.css';
import Button from "./components/Button";
import Dogs from "./components/Dogs";

function App() {

  const[getImage, setImage] = React.useState({});

  const handleSubmit = async ()=>{
    const getImage = "https://dog.ceo/api/breeds/image/random"

    let response = await fetch(getImage);
    let json = await response.json();
    setImage(json);
  }

  return (
    <div className="App">
      <Button handleSubmitFromApp={handleSubmit}/>
      <Dogs getImage={getImage}/>
    </div>
  );
};

export default App;
