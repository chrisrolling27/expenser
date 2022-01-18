import React from 'react';
import ExpenseList from './ExpenseList.jsx';

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 42
    };

  }

  componentDidMount() {
    console.log('App mounted');
  }

  render() {
    return (

      <div>
        App
        <ExpenseList />
      </div>
    );
  }
}



export default App;