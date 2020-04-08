import React from 'react';
import './cardStyle.css';
import './NutritionalInfo.css'

class MacroInfo extends React.Component {
    
    render () {

        const carbs = Math.floor(this.props.carbs);
        const protein = Math.floor(this.props.protein);
        const fat = Math.floor(this.props.fat);
        const fibre = Math.floor(this.props.fibre);

        return (
            <div className="nutri-container">
                <h2 className='food-header'>{this.props.brand} {this.props.food}</h2>
                <h3 className="nutri-head">Macros</h3>  
                <div className="nutri-flex">
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Carbs</h3>
                        <p className="nutri-text">{carbs}%</p>
                    </div> 
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Protein</h3>
                        <p className="nutri-text">{protein}%</p>
                    </div> 
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Fat</h3>
                        <p className="nutri-text">{fat}%</p>
                    </div>
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Fibre</h3>
                        <p className="nutri-text">{fibre}%</p>
                    </div>
                </div> 
                <p onClick={this.props.switch} className='flip-btn'>See Nutrition</p>
            </div>
        )
    }
}

export default MacroInfo;