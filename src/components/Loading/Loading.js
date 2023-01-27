import React from 'react'
import styled, { css } from 'styled-components'

const LoaingWrapper=styled.h2`
    font-size:32px;
    padding-top:48px;
    &.center{
        text-align:center;
    }
`

function Loading({center}) {
  return (
    <LoaingWrapper className={center && "center"} > Loading...</LoaingWrapper>
  )
}

export default Loading