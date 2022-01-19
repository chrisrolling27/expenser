import React from 'react';
import ExpenseListItem from './ExpenseListItem.jsx';


class ExpenseList extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expenses: props.expenses
    };

  }

  render() {
    return (

      <div>

       <div className='listeds' > {this.state.expenses.map((expense, i) => <ExpenseListItem expense={expense}
       key={i}/>)} </div>
      </div>
    );
  }
}



export default ExpenseList;