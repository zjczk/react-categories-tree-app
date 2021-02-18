import React, { Component } from 'react';

import './Entry.css'; 

import Entries from '../Entries';
import Aux from '../../../hoc/Auxiliary';

class Entry extends Component {
    constructor(props) {
        super(props);
        this.state = { subOptionsVisible: false }
    }

    handleClick = () => {
        this.setState({ 
            subOptionsVisible: !this.state.subOptionsVisible
        })
    }
    
    editTrigger = (name) => {
        this.setState({
            edit: true,
            value: name,
            name: name
        })
    }

    nameChangedHandler = (event) => {
        const entryIndex = this.props.entry.subOptions.findIndex(s => {
            return s.name === this.state.name;
          });

        const option = {...this.props.entry.subOptions[entryIndex]};
        
        option.name = event.target.value

        const options = [...this.props.entry.subOptions]

        options[entryIndex] = option

          this.setState({
            edit: true,
            value: option.name,
            saveIndex: entryIndex
        })
    }

    saveHandler = () => {
        if (this.props.entry.subOptions[this.state.saveIndex]) {
        this.props.entry.subOptions[this.state.saveIndex].name = this.state.value
        }
        this.setState({
            edit: false
        })
    }

    render() {
        const hasSubOptions = this.props.entry.subOptions ? true : false;

        return (
            <Aux>
                {this.state.edit && 
                    <div className='editor'>
                        <p>Enter new name for {this.state.name}:</p>
                        <input 
                        type="text"  
                        onChange={this.nameChangedHandler}
                        value={this.state.value}
                        />
                    <button className='save-btn' type='button' onClick={this.saveHandler}></button>
                </div>}
                <div className='entry-container'>
                    <div className='entry'>
                        <p 
                        onClick={this.handleClick} 
                        style={{
                            cursor: hasSubOptions && this.props.entry.subOptions.length ? 'pointer' : null,
                            color: !!this.props.entry.subOptions.length ? '#03506f' : '#5eaaa8'
                            }}>
                        {`${this.props.entry.name}`}
                        </p>
                    <div className='controls'>
                        <button className='add-btn' type='button' onClick={this.props.add}></button>
                        {this.props.entry.name !== 'Category article' && [
                        <button key="b1" className='edit-btn' type='button' onClick={this.props.edit}></button>,
                        <button key="b2" className='delete-btn' type='button' onClick={this.props.delete}></button>]}
                    </div>
                    </div>
                    {hasSubOptions && this.state.subOptionsVisible && (
                        <div>
                            <ul style={{listStyleType: 'none'}}>
                            <Entries 
                                entries={this.props.entry.subOptions}
                                trigger={() => {this.setState({subOptionsVisible: true})}}
                                editTrigger={this.editTrigger}
                                />
                            </ul>
                        </div>
                    )}
                </div>
            </Aux>
        );
    }
}
    
export default Entry;
