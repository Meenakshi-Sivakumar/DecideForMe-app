import React from "react";
import Option from "./Option";

//this bind magangement using the constructor and bind method.
const Options =(props)=>(
    <div>
    <div className="widget--header">
    <h3 className="widget--header__title">Your Options</h3>
    <button className='button button--link' onClick={props.handleDeleteOptions}>Remove all</button>
    </div>
    {props.option.length === 0 && <p className="widget__message">Please add an option to get started!</p>}
    {
        props.option.map((e,index)=>(
            <Option 
            key={e} 
            optionText={e} 
            count={index+1}
            handleDeleteOption={props.handleDeleteOption}
            />
            ))
    }
    </div>
);

export default Options;