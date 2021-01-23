import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import Header from '../header';
import RandomChar from '../randomChar';
import ItemList from '../itemList';
import CharDetails from '../charDetails';
import { Button } from 'reactstrap';




export default class App extends Component {   

state = {
        showRCcontent: false        
   }


   showRCcontent = () => {
      this.setState((state) => {
          return {
              showRCcontent: !state.showRCcontent
          }
      })  
   }

    render () {
        let btn;      
       
        const rCcontent =  this.state.showRCcontent ? <RandomChar/> : null;

        if (this.state.showRCcontent){
                btn = <Button color="success" onClick = {this.showRCcontent}>Hide random character...</Button>
        } else {
            btn = <Button color="primary" onClick = {this.showRCcontent}>Show random character...</Button>
        }

        return(
        <> 
            <Container>
                <Header />
                {btn}
            </Container>
            <Container>
                <Row>
                    <Col lg={{size: 5, offset: 0}}>
                        {rCcontent}              
                                          
                    
                    </Col>
                </Row>
                <Row>
                    <Col md='6'>
                        <ItemList />
                    </Col>
                    <Col md='6'>
                        <CharDetails />
                    </Col>
                </Row>
            </Container>
        </>  
        );
}
};


