import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';
import './App.css';
import AgeStats from './AgeStats';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      newDate: '',
      birthday: '',
      stateShow: false
    };
  }
  changeDate(event) {
    this.setState({newDate: event.target.value});
  }
  changeBirthday() {
    this.setState({birthday: this.state.newDate, stateShow: true});
  }
  render() {
    return (
      <div className="App">
        <h2>Input Your Birth Date!</h2>
        <Form inline>
          <FormControl type="date" onChange={this.changeDate.bind(this)}></FormControl>
          {' '}
          <Button onClick={this.changeBirthday.bind(this)}>Submit</Button>
          {this.state.stateShow ? <AgeStats date={this.state.birthday} /> : <div></div>}
        </Form>
      </div>
    );
  }
}

export default App;
