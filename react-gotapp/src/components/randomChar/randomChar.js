import React, { Component } from 'react';
import './randomChar.css';
import GotService from '../../services/got-service/';
import Spinner from '../spinner/';
import ErrorMessage from '../errorMessage';

export default class RandomChar extends Component {

    constructor() {
        super();
        this.updateChar();
    }

    gotService = new GotService();


    state = {
        char: {},
        loading: true,
        error:false
    }

    onCharLoaded = (char) => {
        this.setState({
            char,
            loading: false,
            
        })
    }
    onError = (err) => {
        this.setState({
        error: true,
        loadding: false
    })
}
    updateChar() {
        const id = Math.floor(Math.random() * 140 + 25); //от 25 до 140
        this.gotService.getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    

    render() {
        const { char, loading, error} = this.state;    

        const errorMessage = error ? <ErrorMessage/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? <View char={char}/> : null;

       
       
        return (
            <div className="random-block rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );

    }
}

const View = ({char}) => {
    const { name, gender, born, died, culture} = char;
    function checkData(data) {
        if (data === ''){
            return '--- No Data ---'
        } else {
            return data;
        }
    }
    
        return( <><h4>Random Character: {checkData(name)}</h4>
        <ul className="list-group list-group-flush">
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Gender </span>
                <span>{checkData(gender)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Born </span>
                <span>{checkData(born)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Died </span>
                <span>{checkData(died)}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between">
                <span className="term">Culture </span>
                <span>{checkData(culture)}</span>
            </li>
        </ul></>)
    
}
