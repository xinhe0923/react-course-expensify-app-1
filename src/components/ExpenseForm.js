import React from "react";
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//const date =new Date();
// const now = moment();
// console.log(now.format("MMM Do YYYY"));

export default class ExpenseForm extends React.Component {
  constructor(props){
    super(props);
    this.state= {
      description: props.expense? props.expense.description : '',
      note: props.expense? props.expense.note: "",
      amount: props.expense? (props.expense.amount/100).toString(): "",
      createdAt: props.expense? moment(props.expense.createdAt): moment(), //this is the initial value for the calender day picker
      calenderFocused: false,
      error: "",
    };

  }
 
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({
        amount,
      }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({
        createdAt,
      }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calenderFocused: focused }));
  };

  onSubmit = (e) => {
    e.preventDefault(); //no full page refresh
    if (!this.state.description || !this.state.amount) {
      //set error state eqaul to 'please provide description and amount'
      this.setState(() => ({
        error: "please provide description and amount",
      }));
    } else {
      //clear the error
      this.setState(() => ({
        error: "",
      }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10)*100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange} //change the value?
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <SingleDatePicker
            date={this.state.createdAt} //the moment object represents when you wanna start
            onDateChange={this.onDateChange}
            focused={this.state.calenderFocused}
            onFocusChange={this.onFocusChange}
            numberOfMonths={1}
            isOutsideRange={() => false}
          />
          <textarea
            type="text"
            placeholder="add a note for your expense"
            value={this.state.note}
            onChange={this.onNoteChange}
          ></textarea>
          <button>add expenses</button>
        </form>
      </div>
    );
  }
}
