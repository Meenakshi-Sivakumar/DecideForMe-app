import React from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Action from './Action';
import Header from './Header';
import OptionModal from './OptionModal';

//Root or main component.
export default class IndecisionApp extends React.Component {
    state = {
        options : [],
        selected: undefined
    }
    componentDidMount(){
        try{
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
        if(options){
            this.setState(()=>({
                options 
            }))
        }
        }catch(e){
            //do nothing if valid inputs.
        }
    }
    //order of the attributes important.
    componentDidUpdate(prevProps,prevState ) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options',json);
        }
    }
    //as props dont flow upstream , we forma  func and make the child call it when needed.
    handleDeleteOptions = () => {
        this.setState(()=>( 
            { options: [] } 
            ))}
    handleDeleteOption = (input) => {
        this.setState((prevState)=>({
            options: prevState.options.filter(e => e !== input)
        }))
    }
    handleClose = () =>{
        this.setState(()=>({
            selected: undefined
        }))
    }
    handlePick= () =>{
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(()=>({
            selected: option
        }))
    }
    handleAddOption = (input) => {
        this.setState((prevState)=>{
            return {
                options: prevState.options.concat(input)
            }
        })
    }
    render(){
        const title = 'Indecision App'
        return (
            <div>
            <Header title={title} />
            <div className='container'>
            <Action 
            hasOptions={this.state.options.length>0}
            handlePick = {this.handlePick}
            />
            <div className='widget'>
            <Options 
            option={this.state.options}
            handleDeleteOption = {this.handleDeleteOption} 
            handleDeleteOptions = {this.handleDeleteOptions}
            />
            <AddOption handleAddOption={this.handleAddOption}/>
            </div>
            <OptionModal 
            selected={this.state.selected}
            handleClose={this.handleClose}
            />
            </div>
            </div>
        );
    }
}

