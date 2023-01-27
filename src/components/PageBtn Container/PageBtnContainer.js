import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { changePage } from '../../features/AllJobs/allJobsSlice'
import { PageBtnsWrapper } from '../styles/PageBtnContainer/PageBtns.styled'

function PageBtnContainer() {
 const {numOfPages,page}=useSelector(store=>store.allJobs)
 const dispatch=useDispatch()
 const pages=Array.from({length:numOfPages},(_,index)=>{
    return index+1
 })

  return (
    <PageBtnsWrapper>
         {pages.map(btn=>{
            return (
                <button
                 type='button'
                 className={btn===page ? "page-btn active":'page-btn'}
                 onClick={()=>dispatch(changePage(btn))}
                >
                    {btn}
                </button>
            )
         })}
    </PageBtnsWrapper>
  )
}

export default PageBtnContainer