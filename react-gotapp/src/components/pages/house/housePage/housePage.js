import React, {Component}from 'react';
import ItemList from '../../../itemList';
import ErrorMessage from '../../../errorMessage';
import HouseDetails from '../houseDetails';
import gotService from '../../../../services/got-service';
import RowBlock from '../../../rowBlock';
import Field from '../../field';

export default class HousePage extends Component {

    gotService = new gotService();

    state = {
        selectedHouse: 2,
        error: false
    }

    onItemSelected= (id) => {
        this.setState({
            selectedHouse:id
        })
    }

    componentDidCatch() {
        this.setState({
            error:true
        })
    }

    render() {
        if (this.state.error) {
            <ErrorMessage/>
        }
        const itemList = (
            <ItemList onItemSelected={this.onItemSelected}
                      getData={this.gotService.getAllHouses}
                      renderItem={({name}) => `${name}`}/>
        );

        const houseDetails = (
            <HouseDetails houseId = {this.state.selectedHouse}>
                <Field field='region' label='Region'/>
                <Field field='words' label = 'House'/>
                <Field fiels='titles' label='Titles'/>
                <Field field='overlord' label='Overlord'/>
                <Field field='ancestralWeapons' label='Ansestral weapons'/>

            </HouseDetails>
        );
        
        return(
            <RowBlock left={itemList} right={houseDetails}/>
        );
    }
}