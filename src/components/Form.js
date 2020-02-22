import React from "react";

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="firstName"
            placeholder="first name"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.firstName}
          />

          <input
            type="text"
            name="lastName"
            placeholder="last name"
            onChange={event => this.props.handleChange(event)}
            value={this.props.formData.lastName}
          />
        </form>
      </div>
    );
  }
}

export default Form;
