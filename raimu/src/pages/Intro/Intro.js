import React, { Component } from 'react';
import { Container, Row} from '../../components/Grid';
import RaimuLogo from '../../Images/RaimuLogo.jpg';

class Intro extends Component {

    render() {

        return(

        <Container>
            <Row>
                <img src={RaimuLogo} alt="website logo" />
            </Row>
        </Container>

        )
    }

}

export default Intro;