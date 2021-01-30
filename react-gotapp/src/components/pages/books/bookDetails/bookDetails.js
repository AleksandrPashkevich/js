import React, {Component} from 'react';
//import './bookDetails.css';
import gotService from '../../../../services/got-service';
import Spinner from '../../../spinner';



export default class BookDetails extends Component {

    gotService = new gotService();

    state = {
        item:null
    }

    componentDidMount(){
        this.updateBook();
    }

    componentDidUpdate(prevProps){
        if(this.props.bookId !== prevProps.bookId){
            this.updateBook();
        }
    }
    updateBook() {
        const{bookId} = this.props;
        if (!bookId){
            return;
        }
        this.gotService.getBook(bookId)
        .then((item) => {
            this.setState({
                item
            })
        })
    }

    render() {
        if (!this.state.item) {
            return <span className='select-error'><Spinner/></span>
        }

        const {item} = this.state;
        const{name} = item;

        return (
            <div className="char-details rounded">
            <h4>{name}</h4>
            <ul className="list-group list-group-flush">
               {React.Children.map(this.props.children, (child) => {
                   return React.cloneElement(child, {item})
               })
               }
            </ul>
        </div>
        );
    }
}