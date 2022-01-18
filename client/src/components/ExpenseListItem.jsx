import React from 'react';


class ExpenseListItem extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      counter: 42
    };


  }



  render() {
    return (

      <div>
        item text
      </div>
    );
  }
}



export default ExpenseListItem;