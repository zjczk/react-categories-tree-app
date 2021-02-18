import React, { Component } from 'react';

import Entry from './Entry/Entry'; 

class Entries extends Component {

    addHandler = (index) => {
        const newSubOption = {name: `Category article ${Math.floor((Math.random()*100) + 1)}`, subOptions: []}

        this.props.entries[index].subOptions.push(newSubOption)

        this.props.trigger()
    }

    editHandler = (index) => {
        const name = this.props.entries[index].name
        
        this.props.editTrigger(name, index)
    }

    deleteHandler = (index) => {
        this.props.entries.splice(index, 1);

        this.props.trigger()
    }

    render() {
        return (
            <ul style={{listStyleType: 'none'}}>
                {this.props.entries.map((entry, index) => {
                return <li  key={index} style={{padding: '0.77rem 1.27rem'}}>
            <Entry
            entry={entry}
            add={() => this.addHandler(index)}
            edit={() => this.editHandler(index)}
            delete={() => this.deleteHandler(index)}
            />
            </li>})}
            </ul>
        );
    }
}
    
export default Entries;
