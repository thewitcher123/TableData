import React from 'react';
import ActiveFormatter from './ActiveFormatter';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';


function activeFormatter(cell, row) {
    return (
        <ActiveFormatter active={ cell } />
    );
}


class ModalTable extends React.Component {
    render() {
        return (
            <div className='modal-body'>
                <BootstrapTable data={this.props.data} striped hover>
                    <TableHeaderColumn dataField="FinanceActId" isKey hidden>Id</TableHeaderColumn>
                    <TableHeaderColumn dataField="Description" headerAlign='center'
                                       tdStyle={ { whiteSpace: 'normal' } }
                                       width='300'>
                        Описание</TableHeaderColumn>
                    <TableHeaderColumn dataField="Qty" headerAlign='center' dataAlign='center'
                                       width='50'>Количество услуг</TableHeaderColumn>
                    <TableHeaderColumn dataField="Rate" headerAlign='center' dataAlign='center'
                                       width='50'>Тариф</TableHeaderColumn>
                    <TableHeaderColumn dataField="Amount" headerAlign='center' dataAlign='center'
                                       width='50'>Сумма</TableHeaderColumn>
                    <TableHeaderColumn dataField="TaxRate" headerAlign='center' dataAlign='center'
                                       width='50'>Ставка НДС</TableHeaderColumn>
                    <TableHeaderColumn dataField="TaxAmount" headerAlign='center' dataAlign='center'
                                       width='50'>Ставка НДС</TableHeaderColumn>
                    <TableHeaderColumn dataField="IsDeleted"
                                       dataFormat={ activeFormatter } headerAlign='center' dataAlign='center'
                                       width='50'>Неактуально</TableHeaderColumn>
                </BootstrapTable>
            </div>
        )
    }
}

export default ModalTable;