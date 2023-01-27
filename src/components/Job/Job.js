import React from 'react'
import moment from 'moment/moment';
import { Col, Row } from 'react-bootstrap'
import { Button } from '../styles/Common/Buttons/Buttons.styled';
import { useDispatch } from 'react-redux';
import { deleteJob, setEditJob } from '../../features/Job/jobSlice';
import { Link } from 'react-router-dom';
function Job({ _id,position, company,jobLocation,jobType,createdAt,status}) {   
 const jobDate=moment(createdAt).format('ll')
 const dispatch=useDispatch()
  return (
    <Col md={6} xl={4}>
        <div className='single-job'>
            <header className="header">
                <div className="header-content">
                    <p className='company'>{company}</p>
                    <h4 className='position'>{position}</h4>
                </div>
                <div className="company-logo">
                    {company.charAt(0)}
                </div>
            </header>
            <div className='job-content'>
                <Row>
                    <Col>
                       <div className='job-type'>{jobType}</div>
                       <div className='job-location'> {jobLocation}</div>
                    </Col>
                    <Col>
                       <div className='job-time'>{jobDate}</div>
                       <div className={`status ${status}`}>{status}</div>
                    </Col>
                </Row>
            </div>
             <footer>
                <Button outlined as={Link} to={`/add-job`} onClick={()=>dispatch(setEditJob({editJobId:_id,position, company,jobLocation,jobType,createdAt,status}))} small>Edit</Button>
                <Button small danger  onClick={()=>dispatch(deleteJob( _id))}>Delete</Button>
             </footer>
        </div>
    </Col>
  )
}

export default Job