import React from 'react';
import ExpenseListItem from './ExpenseListItem.jsx';


class ExpenseList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 42
    };

  }



  render() {
    return (

      <div>
        Expense lister here
      </div>
    );
  }
}



export default ExpenseList;