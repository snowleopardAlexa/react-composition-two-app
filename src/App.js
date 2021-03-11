import React from 'react';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import Fourth from './components/Fourth';
import Fifth from './components/Fifth';

class App extends React.Component {
  state = {
    text: 'This is Composition',
    product: 'sugar',
    age: 7
  };

  render() {
    return (
      <First>
        <Second>
          <Third> 
            <Fourth>
              <Fifth 
                text={this.state.text} 
                product={this.state.product} 
                age={this.state.age} 
              />
              <h2>The composition works - we passed the state from First (App.js) to Fifth Component (Fifth.js)</h2>
            </Fourth>
          </Third>
        </Second>
      </First>
    )
  }
}

export default App;

// THIS IS COMPOSITION --> the components First, Second, Third, Fourth don't know
// which other components are their children. 
// We are passing the state via props down to the last component without passing it
// through all the other components. 