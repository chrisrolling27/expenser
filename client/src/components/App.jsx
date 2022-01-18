import React from 'react';
import ExpenseList from './ExpenseList.jsx';

let mocky = [{
  title: 'coasters',
  cost: 12,
  category: 'home',
  vendor: 'Amazon',
  notes: 'necessary for dishes and dusting'
}, {
  title: 'chicken',
  cost: 5,
  category: 'grocery',
  vendor: 'Trader Joes',
  notes: 'restaurant quality'
}, {
  title: 'book',
  cost: 15,
  category: 'entertainment',
  vendor: 'Amazon',
  notes: 'Maurices Strategikon'
}
]

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expenses: mocky
    };

  }

  componentDidMount() {
    console.log('App mounted');
  }

  render() {
    return (

      <div>

        <ExpenseList expenses={this.state.expenses}/>
      </div>
    );
  }
}



export default App;