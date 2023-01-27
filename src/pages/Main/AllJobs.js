import React from 'react'
import JobContainer from '../../components/JobContainer/JobContainer'
import SearchBar from '../../components/SearchBar/SearchBar'

function AllJobs() {
  return (
        <>
          <SearchBar/>
          <JobContainer/>
        </>
  )
}

export default AllJobs