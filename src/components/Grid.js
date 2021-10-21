import Components from './index'
import React from 'react'
import styled from 'styled-components'
import SbEditable from 'storyblok-react'

const Wrapper = styled.div`
    display: flex;
    width: 100%;
`

export default (props) => {
    return (
        <SbEditable content={props.content}>
            <Wrapper className="grid">
                {props.content.columns.map((blok) =>
                    Components(blok)
                )}
            </Wrapper>
        </SbEditable>
    )
}