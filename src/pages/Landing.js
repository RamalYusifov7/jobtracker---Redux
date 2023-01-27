import React from 'react'
import { LandingWrapper } from '../components/styles/Landing/Landing.styled'
import { Button } from '../components/styles/Common/Buttons/Buttons.styled'
import Logo from "../components/Logo/Logo"
import landingImg from "../assets/img/landing-image.png"
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Landing() {
  return (
    <LandingWrapper>
        <header>
           <Container fluid>
             <Logo />
              <Button as={Link} to="/login">Log in</Button>
           </Container>
        </header>
        <main>
          <Container fluid>
            <Row>
              <Col xs={12} md={6} >
              <div className='left'>
                <h2 className='left-title'>
                  Get More Jobs with <span>Job</span>tracker
                </h2>
                <p className='left-text'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Exercitationem, esse sint rem dolorem, cupiditate laudantium minus dolorum accusantium, praesentium modi assumenda aut velit labore nesciunt dolore similique? Assumenda, inventore velit!
                </p>
              </div>
              </Col>
            <Col xs={12} md={6}>
              <div className='landing-page-img'>
                <img src={landingImg} alt="landing" />
              </div>
            </Col>
           </Row>
          </Container>
        </main>
    </LandingWrapper>
  )
}

export default Landing