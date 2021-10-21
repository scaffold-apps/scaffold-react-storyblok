import React from 'react'
import styled from 'styled-components'
import SbEditable from 'storyblok-react'

const Wrapper = styled.div`
    flex: 1;
    margin: 0 24px;
    background-color: #f4f4f4;
    text-align: center;
    padding: 24px;
`

export default (props) => (
    <SbEditable content={props.content}>
        <Wrapper className="column feature">
            <h2>{props.content.headline}</h2>
            <p>{props.content.text}</p>
        </Wrapper>
    </SbEditable>
)
