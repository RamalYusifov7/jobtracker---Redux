import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import FormItem from '../../components/FormItem/FormItem'
import { Button } from '../../components/styles/Common/Buttons/Buttons.styled'
import { SectionTitle } from '../../components/styles/Common/Section Title/SectionTilte.styled'
import { MainForm } from '../../components/styles/MainForm/MainFrom.styled'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify';
import FormSelect from '../../components/FormSelect/FormSelect'
import { addJob, clearInputs, editJob, handleChange } from '../../features/Job/jobSlice'
function AddJob() {
  const {
    loading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }

    if (isEditing) {
      dispatch(
        editJob({
          jobId: editJobId,
          job: {
            position,
            company,
            jobLocation,
            jobType,
            status,
          },
        })
      );
      return;
    }
    dispatch(addJob({position, company, jobLocation, jobType, status }))
  };
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }))
  };

  

  return (
    <section className='addJob-section content-section'>
      <Container>
        <SectionTitle>{isEditing ? "Edit job" : "Add job"}</SectionTitle>
        <MainForm onSubmit={handleSubmit}>
          <Row>
            <Col lg={4}>
              <FormItem
                type="text"
                name="position"
                value={position}
                placeholder="Enter your position"
                label="Position"
                handleChange={handleJobInput}
              />
            </Col>
            <Col lg={4}>
              <FormItem
                type="text"
                name="company"
                value={company}
                placeholder="Enter your company"
                label="Company"
                handleChange={handleJobInput}
              />
            </Col>
            <Col lg={4}>
              <FormItem
                type="text"
                name="jobLocation"
                value={jobLocation}
                placeholder="Enter your job location"
                label="Job location"
                handleChange={handleJobInput}
              />
            </Col>
            <Col lg={4}>
              <FormSelect
                name='status'
                value={status}
                handleChange={handleJobInput}
                list={statusOptions}
                label="Status"
              />
            </Col>
            <Col lg={4}>
              <FormSelect
                name="jobType"
                value={jobType}
                handleChange={handleJobInput}
                list={jobTypeOptions}
                label="Job Type"
              />
            </Col>
            <Col lg={4}>
              <Button onClick={()=>dispatch(clearInputs())} outlined type='button' className='clear-form'>Clear</Button>
              <Button type='submit'>Submit</Button>
            </Col>
          </Row>
        </MainForm>
      </Container>
    </section>
  )
}

export default AddJob