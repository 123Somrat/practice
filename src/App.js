import React from "react";
  
class App extends React.Component {
    state = {
      count:0
    }
    Increment =()=>{
      this.setState({
        count : this.state.count + 1
      })
    }
     
    Decrement =()=>{
      this.setState({
        count : this.state.count - 1
      })
    }
     
    Reset =()=>{
      this.setState({
        count : 0
      })
    }
     
    

  render(){
    return (
    <div className="app">
        <p>Count : {this.state.count}</p>
        <button onClick={this.Increment}>Increment</button>
        <button onClick={this.Decrement}>Decrement</button>
        <button onClick={this.Reset}>Reset</button>  
    </div>
    )
    
  }
}

export default App;
