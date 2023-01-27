import React from 'react'
import { useEffect } from 'react'
import { Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getAllJobs } from '../../features/AllJobs/allJobsSlice'
import Job from '../Job/Job'
import Loading from '../Loading/Loading'
import PageBtnContainer from '../PageBtn Container/PageBtnContainer'
import { Button } from '../styles/Common/Buttons/Buttons.styled'
import { JobContainerWrapper } from '../styles/Single Job/singleJob.styled'

function JobContainer() {
  const {jobs,loading,totalJobs,numOfPages,page,search, searchStatus, searchType, sort}=useSelector(store=>store.allJobs)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getAllJobs())
  },[page,search, searchStatus, searchType, sort])
  if(loading){
    return <Loading center/>
  }
  if(jobs.length===0){
     return <div className='no-jobs-container'>
       <div className='no-jobs'>No jobs found </div>
      <Button outlined as={Link} to="/add-job">Add job</Button>
     </div>
  }
  return (
   <JobContainerWrapper>
       <Container >
         <h4 className='job-found'>{`${totalJobs} job${totalJobs>1 ? "s":""} found`}</h4>
          <Row>
              {jobs.map((job,index)=>{
                 return <Job key={index} {...job}/>
              })}
          </Row>
          {numOfPages >1 && <PageBtnContainer/>}
       </Container>
   </JobContainerWrapper>
  )
}

export default JobContainer