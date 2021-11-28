import { MDBDataTable } from 'mdbreact';
import React from 'react'

class Table extends React.Component{
    constructor(props){
        super(props)
        this.data = {
            columns: [
                {
                    label: 'state',
                    field: 'state',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'confirmed',
                    field: 'confirmed',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'active',
                    field: 'active',
                    sort: 'asc',
                    width: 150
                },
                
                {
                    label: 'deaths',
                    field: 'deaths',
                    sort: 'asc',
                    width: 150
                },
                {
                    label: 'recovered',
                    field: 'recovered',
                    sort: 'asc',
                    width: 150
                }
            ],
            rows:[
                ...props.data
            ]     
          }
    }

    render(){
        return(
            <MDBDataTable
                striped
                bordered
                small
                sortable={false}
                data={this.data}
          />
        );
    }
}

export default Table;