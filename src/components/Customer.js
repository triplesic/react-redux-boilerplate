import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash'

import RaisedButton from 'material-ui/RaisedButton'
import TableModule from './modules/TableModule'
import DropdownModule from './modules/DropdownModule'
import TextFieldModule from './modules/TextFieldModule'


const tableData = [
    {
        name: 'Honda',
        type: 'Type 00',
        status: 'active',
    },
    {
        name: 'Toyota',
        type: 'Type 00',
        status: 'active',
    },
    {
        name: 'Ford',
        type: 'Type 01',
        status: 'active',
    },
    {
        name: 'Tata',
        type: 'Type 01',
        status: 'inactive',
    },
    {
        name: 'Maserati',
        type: 'Type 02',
        status: 'inactive',
    },
    {
        name: 'Nisson',
        type: 'Type 02',
        status: 'active',
    },
    {
        name: 'Misubishi',
        type: 'Type 02',
        status: 'inactive',
    },
];

const statusType = [
    {
        id: 1,
        name: 'All'
    },
    {
        id: 2,
        name: 'Active'
    },
    {
        id: 3,
        name: 'Inactive'
    }
]

const customerType = [
    {
        id: 1,
        name: "Type 00"
    },
    {
        id: 2,
        name: "Type 01"
    },
    {
        id: 3,
        name: "Type 02"
    }
]

const headerColumns = [
    {
        value: "Customer name"
    },
    {
        value: "Type"
    },
    {
        value: "Status"
    }
]
class Customer extends Component {

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    renderCustomerList() {
        return <div></div>
    }

    render() {
        return (
            <div className='container'>
                <h1>Customer Management</h1>

                <div className='col-md-4'>
                    <TextFieldModule
                        value=''
                        lableName='Name'
                        hintText='Search customer name'
                        onChange={this.changeTextField} />
                </div>
                <div className='col-md-4'>
                    <DropdownModule
                        data={statusType}
                        lableName='Status'
                        onChange={this.changeDropDown} />
                </div>
                <div className='col-md-4'>
                    <DropdownModule
                        data={customerType}
                        lableName='Customer Type'
                        onChange={this.changeDropDown} />
                </div>
                <div className='col-md-12 text-right'>
                    <RaisedButton label="Filter" className='common-button' />
                    <RaisedButton label="Print" primary={true} className='common-button' />
                    <RaisedButton label="Export" primary={true} className='common-button' />
                    {/* <RaisedButton label="temp" secondary={true} className='common-button' /> */}

                </div>

                <div className='col-md-12 '>
                    <TableModule
                        headerText='Customer list'
                        headerColumns={headerColumns}
                        data={tableData} />
                </div>



                <div>
                    {this.renderCustomerList()}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {

    };
}

export default connect(mapStateToProps, {})(Customer)