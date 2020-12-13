import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: "",
    charsLeft: 280
  }

  handleType = event => {
    console.log(event.target.value)
    this.setState({message: event.target.value, charsLeft: this.state.charsLeft - 1 })
  }


  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleType} />
        <h4>{this.state.charsLeft} characters left</h4>
      </div>
    );
  }
}

export default TwitterMessage;
