import React, {Component} from 'react';
import './itemList.css';
import Spinner from '../spinner';
import propTypes from 'prop-types';
import gotService from '../../services/got-service';


 class ItemList extends Component {
  

  
    renderItems(arr){
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item);
            return(
                <li
                key = {id} 
                className="list-group-item"
                onClick={ () => {this.props.onItemSelected(id)}}>
                        {label}
                </li>
            )
        });
    }

    render() {
        
        const {data} = this.props;
        const items = this.renderItems(data);
        
        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}

ItemList.defaultProps = {
    onItemSelected: () => {}
}

ItemList.propTypes = {
    onItemSelected: propTypes.func,
    getData:propTypes.arrayOf(propTypes.object)
}

const withData = (View, getData) => {
    return class extends Component {

        state = {
            dataS: null
        }
    
        componentDidMount() {
    
          
    
            getData()
                .then( (data) => {
                    this.setState({
                        data
                    })
                })
        }

        render(){

            const {data} = this.state;
       
            if (!data) {
                return <Spinner/>
            }
            return <View {...this.props} data ={data}/>
        }
    }
}
const{getAllCheractars} = new gotService();
export default withData(ItemList, getAllCheractars);