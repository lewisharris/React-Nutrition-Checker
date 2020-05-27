import React from 'react';
import headerImage from "./images/pork.jpeg";

const headerStyle = {
    color:'#0D3B66',
    textAlign:'center',
    padding:20,
    backgroundImage: `url(${headerImage})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:300
}

const mainHeaderContainerStyle = {
    maxWidth:700,
    background:'rgb(255,255,255, 0.7)',
    margin:'0px auto',
}

const mainHeaderStyle = {
    fontSize:50,
    Margin:'0px auto',
    textAlign:'center',
    color:'#2F6690',
    padding: '20px 20px 0px 20px'
}

const mainTextStyle = {
    fontSize:16,
    Margin:'0px auto',
    textAlign:'center',
    color:'#2F6690',
    padding: '20px 20px',
    fontWeight:'lighter'
}

function Header () {
    return <div style = {headerStyle}>
                <div style={mainHeaderContainerStyle}>
                    <h1 style={mainHeaderStyle}>Nutrition Checker</h1>
                    <p style={mainTextStyle}>Enter keyword below to find required food</p>
                </div>
    
            </div>
}

export default Header;