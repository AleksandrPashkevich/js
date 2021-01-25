import React, {Component} from 'react';
import './charDetails.css';
import gotService from '../../services/got-service'
import Spinner from '../spinner';


export default class CharDetails extends Component {

        gotService = new gotService();

        state = {
            char: null
        }
        componentDidMount(){
            this.updateChar();
        }

        componentDidUpdate(prevProps){
            if(this.props.charId !== prevProps.charId) {
                this.updateChar();
            }
        }

        updateChar(){
            const{charId} = this.props;
            if (!charId) {
                return;
            }
            this.gotService.getCharacter(charId)
            .then((char) => {
                this.setState({
                    char
                })
            })
          // this.foo.bar = 0;
        }

        postData(data){
            if (data === ''){
                return '-=No Data=-';
            }else{
                return data;
            }
        }

    render() {
        if(!this.state.char) {
            return <span className='select-error'><Spinner/></span>
        }

        const {name, gender, born, died, culture} = this.state.char;
        return (
            <div className="char-details rounded">
                <h4>{this.postData(name)}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Gender</span>
                        <span>{this.postData(gender)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Born</span>
                        <span>{this.postData(born)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Died</span>
                        <span>{this.postData(died)}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <span className="term">Culture</span>
                        <span>{this.postData(culture)}</span>
                    </li>
                </ul>
            </div>
        );
    }
}