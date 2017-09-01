import React from 'react';
import CustomModal from './CustomModal';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

const createModal = (onUpdate, props) => (
    <CustomModal onUpdate={onUpdate} {...props} />
);

class TableData extends React.Component {
    render() {
        const cellEditProp = {
            mode: 'click'
        };
        const options = {
            page: 1,  // which page you want to show as default
            hideSizePerPage: true,
            sizePerPage: 10,
            pageStartIndex: 1,
            paginationSize: 3
        };
        return (
            <BootstrapTable className="myTable"
                            data={this.props.data}
                            cellEdit={cellEditProp}
                            pagination={true} options={options}
                            striped hover>
                <TableHeaderColumn dataField="Id" isKey hidden>Идентификатор</TableHeaderColumn>
                <TableHeaderColumn
                    customEditor={{ getElement: createModal }}
                    headerAlign='center' dataAlign='center'
                    dataField="Date">Дата документа</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' dataAlign='center'
                    customEditor={{ getElement: createModal }}
                    dataField="OrgName">Юридическое лицо</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' dataAlign='center'
                    customEditor={{ getElement: createModal }}
                    dataField="CustomerName">Заказчик</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' dataAlign='center'
                    customEditor={{ getElement: createModal }}
                    dataField="TotalAmount">Сумма документа</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' dataAlign='center'
                    customEditor={{ getElement: createModal }}
                    dataField="FinanceNumber">Номер акта об оказании услуг</TableHeaderColumn>
                <TableHeaderColumn headerAlign='center' dataAlign='center'
                    customEditor={{ getElement: createModal }}
                    dataField="FinanceTaxNumber">Номер счета фактуры к данному акту об оказании
                    услуг</TableHeaderColumn>
                <TableHeaderColumn dataField="FinanceActLines" hidden>Строки</TableHeaderColumn>
            </BootstrapTable>
        )
    }
}

export default TableData;