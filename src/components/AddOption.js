import React from 'react';


export default class AddOption extends React.Component {
    constructor(props){
        super(props)
        this.addOption = this.addOption.bind(this)
    }
    addOption(e){
        e.preventDefault();
        const input = e.target.elements.inputBox.value.trim();
        if(input){
            this.props.handleAddOption(input)
            e.target.elements.inputBox.value='';
        }
    }
    render(){
        return (
            <form onSubmit={this.addOption} className='add-option'>
            <input className='add-option__input' type='text' name='inputBox'></input>
            <button className='button'>Add Option</button>
            </form>
            );
    }
}