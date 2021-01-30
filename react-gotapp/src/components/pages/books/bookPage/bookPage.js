import React, {Component} from 'react';
import ItemList from '../../../itemList';

import ErrorMessage from '../../../errorMessage';
import gotService from '../../../../services/got-service';

import {withRouter} from 'react-router-dom';


class BookPage extends Component {
    gotService = new gotService();

    state = {        
        error:false
    }

    onItemSelected = (id) => {
        this.setState({
            selectedBook:id
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
     
           return(
            <ItemList
            onItemSelected={(itemId) => {
                this.props.history.push(itemId);
            }}
           getData={this.gotService.getAllBooks}
           renderItem={({name}) => `${name}`}/>
            
           )
    }
}

export default withRouter(BookPage);