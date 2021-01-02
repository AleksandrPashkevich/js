import React, { Component } from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';
export default class PostStatusFilter extends Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'Все'},
            {name: 'like', label: 'Понравилось.'}
        ]
        this.state = {

        }
    }
    
    
    render(){
        const buttons = this.buttons.map(({name, label}) => {            
            const {filter, onFilterSelect} = this.props;
            const active = filter === name;
            const clazz = active ? 'info' : 'secondary'
            return(
                <Button 
                key={name}
                 outline color= {clazz}
                 onClick={() => onFilterSelect(name)}
                 >{label}</Button>
            )
        });
    return(
 
        <div className="btn-group">
           {buttons}
        </div>
    )
}
}
