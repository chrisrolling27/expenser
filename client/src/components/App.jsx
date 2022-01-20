import React from 'react';
import ExpenseList from './ExpenseList.jsx';
import ExpenseAdder from './ExpenseAdder.jsx';

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

  render() {

    let total = this.state.expenses.reduce((prev, current) => {
      return prev + current.cost;
    }, 0);

    return (

      <div>
        <div className="scoreboard">
          <div> Total cost: ${total} </div>
        </div>

        <ExpenseList expenses={this.state.expenses} />
        <ExpenseAdder />
      </div>
    );
  }
}



export default App;