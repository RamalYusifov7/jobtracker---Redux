import React from 'react'
import { ErrorWrapper } from '../components/styles/Error/Error.styled'
import  errorImg from "../assets/img/not-found.png"
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Error() {
  return (
    <ErrorWrapper>
          <Container>
            <div className="img-wrapper">
              <img src={errorImg} alt="not found" />
            </div>
             <h3>Ohh! Page Not Found</h3>
             <Link to="/">back to home</Link>
          </Container>
    </ErrorWrapper>
  )
}

export default Error