import React from "react";
import { Line } from "react-chartjs-2";
import { MDBContainer } from "mdbreact";

class ChartsPage extends React.Component {
    constructor(props){
        super(props)
        this.confirmed = new Array()
        this.dates = new Array()
        this.recovered = new Array()
        props.data.forEach(element => {
            this.confirmed.push(element.totalconfirmed)
            this.recovered.push(element.totalrecovered)
            this.dates.push(element.date)
        });
    
    this.state = {
        dataLine: {
            labels: this.dates,
            datasets: [
                {
                    label: "confirmed cases",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(225, 204,230, .3)",
                    borderColor: "rgb(205, 130, 158)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(205, 130, 158)",
                    pointBackgroundColor: "rgba(225, 204,230, .3)",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.confirmed
                },
                {
                    label: "Recovered",
                    fill: true,
                    lineTension: 0.3,
                    backgroundColor: "rgba(184, 185, 210, .3)",
                    borderColor: "rgb(35, 26, 136)",
                    borderCapStyle: "butt",
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: "miter",
                    pointBorderColor: "rgb(35, 26, 136)",
                    pointBackgroundColor: "rgb(255, 255, 255)",
                    pointBorderWidth: 5,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgb(0, 0, 0)",
                    pointHoverBorderColor: "rgba(220, 220, 220, 1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.recovered
                  }
            ]
        }
    }
  };

  render() {
    return (
      <MDBContainer>
        <h3 className="mt-5">Indian Covid chart</h3>
         <Line data={this.state.dataLine} options={{ responsive: true }} />
      </MDBContainer>
    );
  }
}

export default ChartsPage;
