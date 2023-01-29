import React, { Component } from "react";
import "./Report.css"
import axios from "axios";
class PostEmail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      Email: "",
      Message: "",
      sent: false,
    };
  }

  // changeHandler = e => {
  // 	this.setState({ [e.target.name]: e.target.value })
  // }

  handlName = (e) => {
    this.setState({
      Name: e.target.value,
    });
  };
  handlEmail = (e) => {
    this.setState({
      Email: e.target.value,
    });
  };
  handlMessage = (e) => {
    this.setState({
      Message: e.target.value,
    });
  };

  // submitHandler = () => {
  //     const url = 'localhost:4000/storedata';
  //     const data = [{ data: this.state }]
  //     axios.post(url,)
  //         .then(res => console.log('Data send'))
  //         .catch(err => console.log(err.data))
  // }

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    let data = {
      name: this.state.Name,
      email: this.state.Email,
      message: this.state.Message,
    };
    axios
      .post("http://localhost:8080/mail", data)
      .then((res) => {
        this.setState({ sent: true });
        console.log("data: " + data);
      })
      .catch(() => {
        console.log("msg not sent");
      });

    // fetch("http://localhost:8080/mail", {
    //   mode: "no-cors",
    //   method: "POST",
    //   // We convert the React state to JSON and send it as the POST body
    //   header: { "Content-Type": "application/json" },
    //   body: JSON.stringify(data),
    // })
    //   .then(function (response) {
    //     console.log(response);
    //     return response.json();
    //   })
    //   .catch(() => {
    //     console.log("msg not sent");
    //   });
   };
  

  render() {
    const { userId, title, body } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <div className="form-group">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              name="userId"
              value={userId}
              onChange={this.handlName}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              className="form-control"
              type="text"
              name="title"
              value={title}
              onChange={this.handlEmail}
            />
          </div>
          <div>
            <label>Body</label>
            <input
              className="form-control"
              type="text"
              name="body"
              value={body}
              onChange={this.handlMessage}
            />
          </div>
          <button className="btn btn-outline-primary btn-sm" type="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostEmail;
