import React, {Component} from 'react';
import gotService from '../../../../services/got-service';
import BooksDetails from '../../books/bookDetails';
import Field from '../../field';

export default class BooksItem extends Component {

    gotService = new gotService();
 
   

    render() {
        return(
            <BooksDetails 
            bookId = {this.props.bookId}>
            <Field field = 'numberOfPages' label='Number of pages'/>
            <Field field='publisher' label='Publisher'/>
            <Field field='released' label='Released'/>
        </BooksDetails>
        )
    }
}