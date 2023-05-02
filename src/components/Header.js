import React from 'react';

//stateless functional components
const Header = (props)=>(
    <div className='header'>
    <div className='container'>
    <h1 className='header__title'>{props.title}</h1>
    <h4 className='header__subtitle'>put your life in the hands of a computer!</h4>
    </div>
    </div>
);

export default Header;