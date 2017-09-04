import React from 'react';
import ModalTable from './ModalTable';

class CustomModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.defaultValue,
            open: true,
            data: props.row.FinanceActLines
        };
    }

    close = () => {
        this.setState({open: false});
        this.props.onUpdate(this.props.defaultValue);
    };

    render() {
        const fadeIn = this.state.open ? 'in' : '';
        const display = this.state.open ? 'block' : 'none';
        let data = this.props.row && this.props.row.FinanceActLines;
        return (
            <div data-backdrop='true' data-keyboard='true'
                 className={`modal fade ${fadeIn}`} id='myModal' role='dialog' style={{ display }}>
                <div className='modal-dialog wideModal'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h2 className='list-title'>Строки документа</h2>
                            <button type='button' id='close-button'
                                    className='btn btn-default' onClick={this.close}>Закрыть
                            </button>
                        </div>
                        <ModalTable data={data}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default CustomModal;