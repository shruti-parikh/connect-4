import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Game from './Game';





export default function BasicExample() {
  return (
    <Router>
      <div className="container"> 
        <center><div className="Nav " >
          <NavLink  className="navbar justify-content-end three" to="/"><button type="button" class="btn b2">Home</button></NavLink>
          < NavLink className="navbar justify-content-end three"to="/rules"><button type="button" class="btn b2">Rules</button></ NavLink>
          < NavLink className="navbar justify-content-end three" to="/players"><button type="button" class="btn b2">Player Details</button></ NavLink>
        </div></center>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/rules">
            <Rules />
          </Route>
          <Route path="/players">
            <Player />
          </Route> 
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <div>
      <div className="card one">
        <br></br>
      <h1>Wanna Play this Game!!!!</h1>
      <p>Click on Rules and add player details and get started ...</p>
      <p>Have fun!!</p>
      </div>
      
      <div class="img">
        <img src="https://cdn.game.tv/game-tv-content/images_3/fb18d4991b4f4112deb57f206a857829/Logo.png" class="d-block w-100" alt="..." width="200" height="350"/>
      </div>
    </div>

  );
}


function Rules() {
  return (
    <div className="card two">
      <br/>
      <h1 className="card-header ">Welcome to Connect4 Game!!</h1>
      <br/>
      <div className="card-body ">
      <p>Connect four of your checkers in a row while preventing your opponent from doing the same. But, look out -- your opponent can sneak up on you and win the game!</p>
      <br/>
      <h2>Rules :</h2>
      <ul>
        <p>Players must connect 4 of the same colored discs in a row to win.</p>
        <p>Only one piece is played at a time. </p>
        <p>The game ends when there is a 4-in-a-row or a stalemate. </p>
      </ul>
    </div>
    </div>
  );
}


function Player() {

  return (
    <div className="App">
      <Search />
    </div>
  );

}

const Search = () => {
  // const [playerstate, setplayerstate] = useState(false);
  // const onClick = () => setplayerstate(true)

  const [Gamestate, setGstate] = useState(false)
  const onClick = () => setGstate(true)

  const [p1name, changep1Name] = useState("");
  const [p2name, changep2Name] = useState("");



  return (
    
    <div className="card name" >
      <div className="card-header">
      
      <b>Enter Player Details !!!</b>
      </div>
      <div className="container">
        <br></br>
        <label>Player 1  : </label>
        <input type="text" onChange={e => changep1Name(e.target.value)}></input>
        
        <br></br>
        <label>Player 2   : </label>
        <input type="text" onChange={e => changep2Name(e.target.value)}></input>
      
        <br></br>
        <br></br>
        {/* <input type="button" className="btn b1" value="Start Game" onClick={onClick} /> */}
        {
          Gamestate ?
          null
          :
          <input type="button" className="btn b1" value="Start Game" onClick={onClick} />

        }
      

        
        { Gamestate ? <Game p1name={p1name} p2name={p2name} /> : null }
      </div>
    </div>
)
}