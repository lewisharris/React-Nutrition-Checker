import React from 'react';
import FoodInfo from './FoodInfo';
import MacroInfo from './MacroInfo';

class Card extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            side:'front'
        }
        this.changeCard = this.changeCard.bind(this)
    }

    changeCard(){
           this.state.side === 'front' ?
           this.setState(
               {side:'back'}
           )
           :
           this.setState(
               {side:'front'}
           )
    }

    render(){
       const style= {
            width:'300px',
            background:'#336699',
            margin:'10px',
            boxShadow: '0px 0px 20px rgba(0,0,0,0.4)',
            fontFamily:'sans-serif',
            color:'#FAFBFB',
            textAlign:'center',
            display:'flex',
            flexDirection:'column',
            padding:0
        }

        return(
            <div style={style}>
                {this.state.side === 'front'?
                <FoodInfo switch={this.changeCard} {...this.props}/>
                :
                <MacroInfo switch={this.changeCard} {...this.props}/>
        }
            </div>
        )
    }
};


export default Card;