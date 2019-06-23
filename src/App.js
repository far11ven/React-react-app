import React, { Component } from 'react';
import NavBar from './components/navbar'
import Counters from './components/counters'
import './App.css';

class App extends Component {
  state = {
    counters: [
      { id: 0, value: 0 }
    ]
  };

  handleIncrement = counter => {
    console.log("clicked increment button");
    const countersNew = [...this.state.counters];
    const index = countersNew.indexOf(counter);

    countersNew[index] = { ...counter };

    countersNew[index].value++;

    console.log("countersNew[index] :", countersNew[index])

    this.setState({counters: countersNew});
  };

  handleDecrement = counter => {
    console.log("clicked decrement button");

    const countersNew = [...this.state.counters];
    const index = countersNew.indexOf(counter);

    countersNew[index] = { ...counter };

    if ( countersNew[index].value >0){

    countersNew[index].value--;
    this.setState({counters: countersNew});
    }
    
  };

  handleAdd = () => {
    console.log("clicked ADD button");

    var countersNew = this.state.counters.slice();    

    if(this.state.counters.length > 0 ){
    countersNew.push(  { id: this.state.counters[this.state.counters.length-1].id+1 , value: 0 });   
    }
    else {
      countersNew.push(  { id: 0, value: 0});
    }
    this.setState({ counters: countersNew });
  };

  handleReset = () => {
    console.log("clicked RESET button");
    const countersNew = this.state.counters.map( c => {
      c.value =0;
      return c;
    })

    this.setState({ counters: countersNew });
  };

  handleDelete = counterId  => {

    const counters = this.state.counters.filter(c => c.id !== counterId);
    this.setState({ counters: counters });
  };

  render() {
    return (

    <React.Fragment>
    <NavBar totalCounters = {this.state.counters.filter( c => c.value > 0 ).length}/>
      <main className="container">
      <Counters 
      counters={this.state.counters}
      onAdd= {this.handleAdd}
      onReset= {this.handleReset}
      onIncrement= {this.handleIncrement}
      onDecrement= {this.handleDecrement}
      onDelete= {this.handleDelete}
      />
      </main>
    </React.Fragment>
    
    );
  }
}

export default App;
