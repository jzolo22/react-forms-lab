import React from "react";

class TwitterMessage extends React.Component {

  state = {
    message: ""
  }

  handleType = event => {
    this.setState({message: event.target.value})
  }


  render() {
    let numLeft = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={this.handleType} />
        <h4>{numLeft} characters left</h4>
      </div>
    );
  }
}

export default TwitterMessage;
