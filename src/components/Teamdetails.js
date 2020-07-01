import React, { Component } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Teampageanimation from './Teampageanimation'
import { Figure, Table }from 'react-bootstrap'

class Teamdetails extends Component {
    constructor(props){
        super(props);
        this.state= {
            items: [],
            isLoaded: false,
        }
    }
    
    componentWillMount(){
        fetch('http://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(json => {
            this.setState({
                isLoaded: true,
                items: json
            })
        })
        }
    
    render() {
        var {items, isLoaded}  = this.state;
        if (!isLoaded) {
            return <div>Loading....</div>
        }
        else{
            return (
                <div className="box"><Container>
                    <Row className="about">Meet the Team</Row>
                       <Row> 
                           <Col>{items.map(item => (
                            <p key={item.id}>
                            <Figure><Figure.Image src="logo.svg/171x180"/> </Figure>: {item.name} 
                            </p>
                        ))}
                            </Col>
                            <Col><Teampageanimation/></Col>
                        </Row>
                        
                
                </Container>
                       
                    
                </div>
    
            );
        }
        
    }
}
export default  Teamdetails