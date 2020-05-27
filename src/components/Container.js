import React from 'react';
import Card from './Card';
import SearchBar from './SearchBar';
import Header from './Header';
import Loader from './Loader';

class Container extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            foodData: [],
            search:'',
            intro:true,
            content:false,
            loading:false,
            noresults:false
        }
        this.changeInput = this.changeInput.bind(this);
        this.getFood = this.getFood.bind(this);
        this.toggleIntro = this.toggleIntro.bind(this)
    };

    toggleIntro(element){
        element.preventDefault();
        this.getFood(element);
        this.setState(
            {intro:false},
            {content:true}
        )
    }

    //change the state of this Container component to update the search state to the search bar
    changeInput (element) {
        this.setState(
            {search:element.target.value}
            )
    }

    //API calls 
    async getFood (element) {
        element.preventDefault();
            const APP_ID = '5bff40af';
            const APP_KEY = '1d837e056b1d1782ce34af7628d5005f';
            const query = this.state.search;
            const URL = `https://api.edamam.com/api/food-database/parser?nutrition-type=logging&ingr=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
            if(query !== ''){
                this.setState({noresults:false})
                this.setState({loading:true})
                await fetch(URL)
                    .then(response => {return response.json()})
                    .then(data => {
                        const list = data.hints.map(item => {return item})
                        this.setState({foodData: list});
                        this.setState({loading:false})
                    })
                    .catch( () => {
                        this.setState({loading:false})
                        this.setState({noresults:true})
                        }
                        )
                this.setState({search:''})
            }
    };

    render(){
        //Styling
        const containerStyle = {
            background:'#FAFBFB',
            margin:'0px auto',
            minHeight:'100vh',
        }

        const cardContainerStyle = {
            display:'flex',
            flexDirection:'row',
            flexWrap:'wrap',
            justifyContent:'center',
            margin:'30px auto',
            width:'100%'
        }

        const noResultsStyle = {
            margin: '30px auto',
            fontSize:'24px',
            color:'#0D3B66',
            textAlign:'center'
        }
        
        //Filter the list of foods to match the value of the input field and return into new array
        let filteredFood = this.state.foodData.filter(item => {
            return item.food.label.toLowerCase().indexOf(this.state.search) !== -1;
        });

        //render the cards with props
        const renderCards = filteredFood.map(item => {
            return <Card
                    key={item.food.foodId}
                    brand={item.food.brand}
                     food = {item.food.label}
                     calories = {item.food.nutrients.ENERC_KCAL}
                     protein = {item.food.nutrients.PROCNT}
                     fat = {item.food.nutrients.FAT}
                     carbs = {item.food.nutrients.CHOCDF}
                     fibre = {item.food.nutrients.FIBTG}
                    />
            })

        return(
            <div style={containerStyle}>
                    <Header/>
                    <SearchBar  changeInput = {this.changeInput}
                                getFood = {this.getFood}/>

                    {(this.state.loading? <Loader/> : null)}
                    {(this.state.noresults? <div style={noResultsStyle}>No Results</div> : null)}


                    <div style={cardContainerStyle}>
                        {renderCards}
                    </div>


            </div>

        )
    }
};

export default Container;
