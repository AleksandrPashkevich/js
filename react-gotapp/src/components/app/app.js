import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import BookPage from '../pages/books/bookPage';
import HousePage from '../pages/house/housePage';
import BooksItem from '../pages/books/booksItem';
import gotService from '../../services/got-service';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'; 
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.css'
import './app.css'







export default class App extends Component {

    gotService = new gotService();

    state = {
        showRCcontent: false,
        error: false    
    }

    componentDidCatch() {
        console.log('Error');
        this.setState({
            error: true
        })
    }

    showRCcontent = () => {
        this.setState((state) => {
            return {
                showRCcontent: !state.showRCcontent
            }
        })
    };
  
    
    



    render() {

        let btn;      
    
        const rCcontent = this.state.showRCcontent ? <RandomChar interval={60000} /> : null;
        
        if (this.state.error) {
            return <ErrorMessage />
        }

        if (this.state.showRCcontent) {
            btn = <Button color="success" onClick={this.showRCcontent}>Hide random character...</Button>
        } else {
            btn = <Button color="primary" onClick={this.showRCcontent}>Show random character...</Button>
        }
        
        return (
            <Router>
                <div className="app">
                <Container>
                    <Header />
                    {btn}
                </Container>
                <Container>
                    <Row>
                        <Col lg={{ size: 5, offset: 0 }}>
                            {rCcontent}

                        </Col>
                    </Row>
                                     
                    <Row>
                        <Route path='/character' component={CharacterPage}/>
                        <Route path='/houses' component={HousePage}/>
                        <Route path='/books' exact  component={BookPage}/>
                        <div className=".app">
                        <Route path='/books/:id' render={
                            ({match}) => {
                                console.log(match);
                                const {id} = match.params;
                               return (    <Row xs="1">                             
                                   <BooksItem bookId={id}/>
                                   <Link to="/books/">
                                   <Button color="secondary"><h1> Back</h1> </Button>
                                   </Link>
                                   </Row>
                               )
                                   
                            }
                                }/>
                                </div>
                       
                    </Row>                

                </Container>
                </div>
            </Router>
        );
    }
};


