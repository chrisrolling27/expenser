import React from 'react';


class ExpenseListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      expense: props.expense
    };

  }



  render() {
    return (

      <div>
        {this.state.expense.title}
      </div>
    );
  }
}



export default ExpenseListItem;