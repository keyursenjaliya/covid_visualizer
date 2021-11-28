import React, { Fragment } from "react";
import "./App.css";
import Table from './Indiatable'
import Chart from './Indiachart'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases_time_series:[],
      statewise:[],
      tested:[]
    };
  }

  componentDidMount() {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch("https://api.covid19india.org/data.json", requestOptions)
      .then(response => response.json())
      .then(result =>
        this.setState({
          ...result
        })
        )
      .catch(error => console.log('error', error));
  }

  handleswitchClick = ()=>{
    this.props.history.push('/world')
  }

  render({ cases_time_series,statewise,tested } = this.state) {
    tested.length !=0  && console.log(tested)
    return (
      <Fragment>
        <div className="App">
          <p>Covid-19 Contest</p>
          <br/>
          <h1 className="top-name"> Data Of India </h1>
          { 
            statewise.length !=0  && <Table data = { statewise } /> 
          }
          <br/>
          <button onClick={ this.handleswitchClick } className="btn btn-primary">Click here to see world data</button>
          {
            cases_time_series.length != 0 && <Chart data= { cases_time_series }/>
          }
          
        </div>
        
      </Fragment>
    );
  }
}

export default App;
  