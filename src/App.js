

import {useState} from "react";
import  "./styles.css"

export default function App(){

  const [title, setTitle]=useState("");
  const [info,setInfo]=useState("");
  const url=`https://www.googleapis.com/books/v1/volumes?q=${title}`

  const fetchImg=(e)=>{
   
    e.preventDefault();

    fetch(url)
    .then((data) => data.json())
    .then((jsonData) => setInfo(jsonData.items[0].volumeInfo.imageLinks.thumbnail))
    .catch((err) => console.log(err));


  }

  return(
    <div className="App">
      <form className="form">
          <div>
          <span>Title:</span>
          <input type="text" onChange={(e) => setTitle(e.target.value)}/>
          <button onClick={fetchImg}>Go</button>
          <img src={info} alt="cover Image"></img>
          </div>
      </form>


    </div>


  )


}