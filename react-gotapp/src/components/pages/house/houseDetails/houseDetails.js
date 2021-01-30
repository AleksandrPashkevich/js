import React, {Component} from 'react';
import './houseDetails.css';
import gotService from '../../../../services/got-service';
import Spinner from '../../../spinner';


export default class HouseDetails extends Component {
    gotService = new gotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateHouse();
    }

    componentDidUpdate(prevProps) {
        if(this.props.houseId !== prevProps.houseId) {
            this.updateHouse();
        }
    }
    updateHouse() {
        const {houseId} = this.props;

        if (!houseId) {
            return;
        }
        this.gotService.getHouse(houseId)
        .then((item) => {
            this.setState({
                item
            })
        })


    }

    render() {
        if(!this.state.item){
            return<span className='select-error'><Spinner/></span>
        }

        const{item} = this.state;
        const{name} = item;
        return(
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