import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import { Button } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import CharacterPage from '../characterPage';
import CharDetails from '../charDetails';
import ItemList from '../itemList';
import gotService from '../../services/got-service';



export default class App extends Component {

    gotService = new gotService();

    state = {
        showRCcontent: false,
        error: false,
        selectedChar: 100
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

        const rCcontent = this.state.showRCcontent ? <RandomChar /> : null;

        if (this.state.error) {
            return <ErrorMessage />
        }

        if (this.state.showRCcontent) {
            btn = <Button color="success" onClick={this.showRCcontent}>Hide random character...</Button>
        } else {
            btn = <Button color="primary" onClick={this.showRCcontent}>Show random character...</Button>
        }

        return (
            <>
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
                    <CharacterPage />
                    <Row>
                        <Col md='6'>
                            <ItemList
                             onCharSelected={this.onCharSelected}
                            getData={this.gotService.getAllBooks}
                            renderItem={(item) => item.name}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>

                    <Row>
                        <Col md='6'>
                            <ItemList onCharSelected={this.onCharSelected}
                            getData={this.gotService.getAllHouses} 
                            renderItem={(item) => `${item.name}`}/>
                        </Col>
                        <Col md='6'>
                            <CharDetails charId={this.state.selectedChar} />
                        </Col>
                    </Row>

                </Container>
            </>
        );
    }
};


