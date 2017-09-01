import React, { Component } from 'react';
import JournalData from './JournalData';
import TableData from './TableData';
import './../styles/App.css';

let data = JournalData();


class App extends Component {
    render() {
        return (
            <div className="App">
                <h1 className="list-title">Акты об оказании услуг</h1>
                <TableData data={data} />
            </div>
        );
    }
}

export default App;
