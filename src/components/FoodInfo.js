import React from 'react';
import './cardStyle.css';
import NutritionalInfo from './NutritionalInfo';

class FoodInfo extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            weight:100
        }
        this.setWeight = this.setWeight.bind(this)
    }
    setWeight (element) {
        this.setState(
            {weight:element.target.value}
        )
    }

    render(){
            const foodStyle={
                textAlign:'center',
                height:'100%',
                display:'flex',
                flexDirection:'column',
                justifyContent:'flex-end',
                padding:0,
                margin:0
            }
            const weight = this.state.weight;
            const calories = Math.floor(this.props.calories);
            const totalCalories = Math.floor(calories * weight ) / 100;

        return(
            <div style={foodStyle}>
                <h2 className='food-header'>{this.props.brand} {this.props.food}</h2>
                <h3>Calories per 100g</h3>
                <p>{calories}Kcal</p>
                <NutritionalInfo {...this.props}
                                    weight={this.state.weight}
                                    />
                <p onClick={this.props.switch} className='flip-btn'>See Macros</p>
                <div className='weight-input-container'>
                    <label className='weight-label'>Change Amount (g):</label>
                    <input type='number' className='weight-input' value={this.state.weight} placeholder='100' onChange={this.setWeight}></input>
                </div>
                <p>Total Calories: {totalCalories}Kcal</p>
            </div>
        )
    }
}

export default FoodInfo;