import React, { Component } from 'react';

import checkAll from './CheckAll';


class Game extends Component{
    constructor(props){
        super(props);
        this.state ={
          sec: 0,
          min : 0,
          isOn: false,
          count1 : 1,
          count2: 1,
          player1 : 1,
          player2 : 2,
          currPlay: null,
          board : [],
          gameover: false,
          message: '',
          p1name : this.props.p1name,
          p2name: this.props.p2name,
           
        }
        this.play = this.play.bind(this);
        this.startTimer = this.startTimer.bind(this)
        
    }

    startTimer = () => {
      
      if (this.state.sec > 60){
        this.setState({ min: this.state.min + 1})
        this.setState({sec: 0})
      } else {
        this.setState({ sec: this.state.sec+1 })
      }
    }

    timer = () => {
      this.intervalID = setInterval(this.startTimer, 1000)
      this.setState({ isOn: true })
      
    }

    // Stoptimer = () => {
    //   clearInterval(this.intervalID)
    //   this.setState({ isOn: false })
    // }
    start() {
        let board = [];
        for (let r = 0; r < 6; r++) {
            let row = [];
            for (let c = 0; c < 7; c++){ 
                row.push(null) 
            }
            board.push(row);
        }

        this.setState({
          board: board,
          currPlay: this.state.player1,
          gameOver: false,
          message: '',
  
        });
    }
    change() {
        if(this.state.currPlay === this.state.player1){
            this.state.count1+=1
          return this.state.player2;
        }
        else{
            this.state.count2+=1
          return this.state.player1;
        }
    }

    play(c) {
        if (!this.state.gameOver) {
            

            let board = this.state.board;
            for (let r = 5; r >= 0; r--) {
            if (!board[r][c]) {
                board[r][c] = this.state.currPlay;
                break;
            }
            }
            let result = checkAll(board);
            if (result === this.state.player1) {
            this.setState({ board: board, gameOver: true, isOn:false, message:  this.state.p1name + ' (red) wins! total moves are ' +this.state.count1});
            } else if (result === this.state.player2) {
            this.setState({ board: board, gameOver: true,isOn:false, message: this.state.p2name + ' (black) wins! total moves are '+this.state.count2});
            } else if (result === 'draw') {
            this.setState({ board: board, gameOver: true, isOn:false,message: 'Draw game.' });
            } else {
            this.setState({ board: board, currPlay: this.change() });
            }
            
        }
      
        
    }
    componentWillMount() {
        this.start();
        this.timer();
       
        
        
    }
    render() {
        return (
          <div className="App">
            {/* <button className="btn b1" onClick={() => {this.start()}}>New Game</button> */}
            <a  href="/players"><button type="button" class="btn b1">New Game</button></a>

            <div> Timer {this.state.min}:{this.state.sec}</div>

            <br></br>
            <div className="side">
                <p> player 1 : {this.state.p1name} &nbsp; player 2 : {this.state.p2name}</p> 
               
            </div>
            <table >
              <thead>
              </thead>
              <tbody>
                {this.state.board.map((row, i) => (
                    <tr>
                    {row.map((cell, i) => <Cell key={i} value={cell} columnIndex={i} play={this.play} />)}
                  </tr>
                ))}
              </tbody>
            </table>
            
            <p className="message">{this.state.message}</p>
            
           
          </div>
        );
    }
}


const Cell = ({ value, columnIndex, play }) => {
    let color = 'white';
    if (value === 1) {
      color = 'red';
    } else if (value === 2) {
      color = 'black';
    }
      
    return (
      <td>
        <div className="cell" onClick={() => {play(columnIndex)}}>
          <div className={color}></div>
        </div>
      </td>
    );
  };

    

export default Game;