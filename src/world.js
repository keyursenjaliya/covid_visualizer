import React, { Fragment } from "react";
import "./App.css";
import Chart from "./bargraph";
import Bargraph from "./bargraph";

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = [];
  }

  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "__cfduid=d946f63c6f9065fc919b1f04c6efc83731587646972"
    );

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch("https://corona.lmao.ninja/v2/countries", requestOptions)
      .then((response) => response.json())
      .then((result) =>
        this.setState({
          ...result,
        })
      )
      .catch((error) => console.log("error", error));
  }

  render() {
    //this.state.length !=0 && console.log(this.state);
    return (
        <Fragment>
            <div className="App">
                <p>Covid-19 Contest</p>
                <br />
                <h1 className="top-name"> World Data </h1>
                { 
                    this.state.length !=0 && <Bargraph data={this.state} />
                }
                
            </div>
        </Fragment>
    );
  }
}

export default World;
