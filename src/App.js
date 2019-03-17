import React, { Component } from 'react';
//import repeat from './components/test1.js'
import Counter from './components/counter'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : [],
      filled: false,
      city: 'delhi'
    }
    console.log('constructor')
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(json => {
      this.setState({
        filled: true,
        items: json,
        city: 'mumbai'
      })
    })
    console.log('componentDidMount')
  }

  

  render() {
    console.log('render');
    const {filled, items} = this.state;
    
    if(!filled){
      return <div>Loading...</div>
    }

    else{
      return (
        
        <div className="App">
          <Counter city={this.state.city} />
          <ul>
            {items.map(item => (
              <li key={item.id}>
                Name:{item.name}  |  Email:{item.email}     
                city:{item.address.city}
              </li>
            ))}
            
          </ul>

          
        </div>
    );
  }}
}

export default App;
