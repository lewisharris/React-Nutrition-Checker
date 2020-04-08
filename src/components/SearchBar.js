import React from 'react';

class SearchBar extends React.Component {

    render(){
        const searchBarStyle = {
            maxWidth:'800px',
            height:40,
            margin:'5px auto',
            display:'flex',
            flexDirection:'row',
            border:'solid 2px #2F6690'
        }
        const inputStyle = {
            height:'100%',
            padding:'0px 10px',
            border:'none',
            minWidth:150,
            background:'#white',
            color:'#000',
            flexGrow:2,
            fontSize:18,
        }
        const submitStyle = {
            minWidth:100,
            maxWidth:400,
            border:'none',
            background:'#2F6690',
            color:'#EBF5DF'
        }
        return(
            <form style={searchBarStyle}>
                <input style={inputStyle} placeholder='Search Food' onChange={this.props.changeInput}></input>
                <button style={submitStyle} onClick={this.props.getFood} type='submit'>Search</button>
            </form>
        )
    }
}

export default SearchBar