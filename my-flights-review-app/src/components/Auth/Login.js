import React, { Component } from "react";
import axios from "axios";
import { Navigate} from 'react-router'


export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      loginErrors: "",
      redirect: false
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  handleSubmit(event) {
    const { email, password } = this.state;

    axios.post(
          "http://localhost:3000/users/sign_in",
        // "http://localhost:3000/api/v1/sessions",
        {
          user: {
            email: email,
            password: password
          }
        },{headers: {
          'Access-Control-Allow-Credentials':true
        }},
        { withCredentials: true}
      )
      .then(response => {
        console.log(response)
        if (response.data.logged_in) {
          // this.props.handleSuccessfulAuth(response.data);
          console.log(response)
          this.props.sendToParent(response.data);
          this.setState({redirect:true})

        }
      })
      .catch(error => {
        console.log("login error", error);
      });
    event.preventDefault();
  }

  render() {

    const { redirect } = this.state;

    if (redirect) {
      return <Navigate to='/'/>;
    }

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
