import React from 'react';
import './NutritionalInfo.css'

class NutritionalInfo extends React.Component {

    render(){
        const weight = this.props.weight;
        const carbs = Math.round(this.props.carbs * weight) / 100;
        const protein =  Math.round(this.props.protein * weight) / 100;
        const fat = Math.round(this.props.fat * weight) / 100;
        const fibre = Math.round(this.props.fibre * weight) / 100;
        
        return(
            <div className="nutri-container">
                <h2 className="nutri-head">Nutritional Information</h2>
                <div className="nutri-flex">
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Carb</h3>
                        <p className="nutri-text">{carbs}g</p>
                    </div>
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Protein</h3>
                        <p className="nutri-text">{protein}g</p>
                    </div>
                    <div className="nutri-segment">
                        <h3 className="nutri-header">Fat</h3>
                        <p className="nutri-text">{fat}g</p>
                    </div>
                        <div className="nutri-segment">
                        <h3 className="nutri-header">Fibre</h3>
                        <p className="nutri-text">{fibre}g</p>
                    </div>
                </div>
            </div>
        )
    };
};

export default NutritionalInfo;