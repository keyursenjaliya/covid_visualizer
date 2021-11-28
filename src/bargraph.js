import React from "react";
import { HorizontalBar } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class Bargraph extends React.Component {
  constructor(props) {
    super(props);
    this.countries = new Array()
    this.cases = new Array()
    this.recovered = new Array()
    
    // console.log(props.data)
    for(let i=0;i<211;i++){
        if(props.data[i].cases>1000){
        this.countries.push(props.data[i].country)
        this.cases.push(props.data[i].cases)
        this.recovered.push(props.data[i].recovered)
        }
    }

    this.state = {
      dataHorizontal: {
        labels: this.countries,
        datasets: [
          {
            label: "total cases",
            data: this.cases,
            fill: true,
            backgroundColor: "#FF0000",
            borderColor:"#FF0000",
            borderWidth: 1,
          },
          {
            label: "Recovered cases",
            data: this.recovered,
            fill: false,
            backgroundColor: "#008000",
            borderColor:"#008000",
            borderWidth: 1,
          },
        ],
      },
    };
  }

  click(e){
    console.log(e)
  }

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Significantly affected countries</h3>
        <HorizontalBar
          data={this.state.dataHorizontal}
          options={{ responsive: true , onClick:  (e) => this.click(e)  }}
          height = "700px"
        />
      </MDBContainer>
    );
  }
}

export default Bargraph;
