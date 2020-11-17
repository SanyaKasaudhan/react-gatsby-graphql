import React from 'react'
import styled from 'styled-components'

const Trips = () => {
    return (
        <div>
            <ProductionContainer>
                <ProductsHeading>Heading</ProductsHeading>
                <ProductWrapper>Wrapper</ProductWrapper>

            </ProductionContainer>
        </div>
    )
}

export default Trips

const ProductionContainer=styled.div
`min-height:100vh;
padding:5rem calc((100vw-1300px)/2);
background:red;
color:#fff;
`

const ProductsHeading =styled.div
`
font-soze:clamp(1.2rem,5vw,3rem);
text-align:center;
margin-bottom:5rem;
color:#000;
`
