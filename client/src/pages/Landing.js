import React from "react";
import Hero from "../components/Hero";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Powerballs from "../components/Powerballs";
import WinningNum from "./WinningNum"

function Landing() {
    return (
        <div>
            <Hero>
                <h1 className="logo">POWERBALL <span id="pro">PRO</span></h1>
                <h4 className="tagline">BECAUSE WINNING IS A TEAM SPORT</h4>
                <button className="hero-button">Become A Member</button>
            </Hero>
            <Container style={{ marginTop: 30 }}>
                <Row>
                    <Col size="md-4">
                        <Jumbotron> <h3>POWERBALL</h3><hr></hr>
                            <h4 class="jackpot">$50 MILLION</h4>
                            <br></br>
                            <h6 className="win-date-announcement"><strong><em>Winning numbers for <span class="dateTime"></span>Feb 15, 2020</em></strong></h6>
                            {/* <Powerballs></Powerballs> */}
                            <br></br>
                            <br></br>
                            <h4><WinningNum></WinningNum></h4>
                        </Jumbotron>
                    </Col>
                    <Col size="md-4">
                        <Jumbotron> <h3>PB<span id="pro">PRO</span> CHAT</h3><hr></hr>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                                consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                                bulum suscipit nunc non egestas tristique. </p></Jumbotron>
                    </Col>

                    <Col size="md-4">
                        <Jumbotron> <h3>UPCOMING EVENTS</h3><hr></hr>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
                                consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis
                                bulum suscipit nunc non egestas tristique. </p></Jumbotron>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Landing;