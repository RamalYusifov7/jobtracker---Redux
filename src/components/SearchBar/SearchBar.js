import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { clearValues, handleChange } from '../../features/AllJobs/allJobsSlice'
import FormItem from '../FormItem/FormItem'
import FormSelect from '../FormSelect/FormSelect'
import { Button } from '../styles/Common/Buttons/Buttons.styled'
import { SectionTitle } from '../styles/Common/Section Title/SectionTilte.styled'
import { MainForm } from '../styles/MainForm/MainFrom.styled'

function SearchBar() {
    const{loaidng,search ,searchStatus, searchType,sort ,sortOptions,searchStatusOptions,searchTypeOptions }=useSelector(store=>store.allJobs)
    
    const dispatch=useDispatch()
    const handleSearch=(e)=>{
       const name=e.target.name
       const value=e.target.value
       dispatch(handleChange({name,value}))
    }
 
    const handleClearBtn=(e)=>{
        e.preventDefault()
        dispatch(clearValues())
    }
    return (
        <section className='content-section'>
            <Container>
                <SectionTitle>Search for jobs</SectionTitle>
                <MainForm>
                    <Row>
                        <Col lg={4}>
                            <FormItem
                                type="text"
                                name="search"
                                value={search}
                                label="Search"
                                handleChange={handleSearch}
                            />
                        </Col>
                        <Col lg={4}>
                            <FormSelect
                                name='searchStatus'
                                label="Status"
                                list={searchStatusOptions}
                                value={searchStatus}
                                handleChange={handleSearch}
                            />
                        </Col>
                        <Col lg={4}>
                            <FormSelect
                                name='searchType'
                                label="Job Type"
                                list={searchTypeOptions}
                                value={searchType}
                                handleChange={handleSearch}
                            />
                        </Col>
                        <Col lg={4}>
                            <FormSelect
                                name='sort'
                                label="Sort"
                                list={sortOptions}
                                value={sort}
                                handleChange={handleSearch}
                            />
                        </Col>
                        <Col lg={4}>
                            <Button onClick={handleClearBtn} type='button'>Clear all</Button>
                        </Col>
                    </Row>
                </MainForm>
            </Container>
        </section>
    )
}

export default SearchBar