import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import {useStaticQuery,graphql} from 'gatsby'
import { Button } from './Button'
import {ImLocation} from 'react-icons/im'
const Trips = () => {
   
        const data=useStaticQuery(graphql
            `query TripsQuery{
                allTripsJson{
                    edges{
                        node{
                            alt
                            button
                            name
                            img{
                                childImageSharp{
                                    fluid{
                                        ...GatsbyImageSharpFluid
                                    }
                                }
                            }
                        }
                    }
                }
            }`)

            function getTrips(data){
                const tripsArray=[]
                data.allTripsJson.edges.forEach((item,index) =>{
                    tripsArray.push(
                    <ProductCard>
                        cdcd
                        <ProductImg src={item.node.img.childElementSharp.fluid.src}
                        fluid={item.node.img.childElementSharp.fluid} />
                        <ProductInfo>
                            <TextWrap>
                                <ImLocation />
                                <ProductTitle>{item.node.name}</ProductTitle>
                            </TextWrap>
                            <Button to="/trips">{item.node.button}</Button>
                        </ProductInfo>
                    </ProductCard>)

                })
                return tripsArray
            }
            return (
            <ProductionContainer>
                <ProductsHeading>Heading</ProductsHeading>
                <ProductWrapper>Wrapper</ProductWrapper>

            </ProductionContainer>
        
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

const ProductWrapper=styled.div
`
display:grid;
grid-template-columns:repeat(4,1fr);
grid-gap:10px;
justify-items:center;
padding:0 2rem;

@media screen and (max-width:1200px){
    
grid-template-columns:1fr 1fr;
}
@media screen and (max-width:868px){
    
    grid-template-columns:1fr;
    }
`

const ProductCard=styled.div
`
line-height:2;
width:100%;
height:500px;
position:relative;
border-radius:10px;
transition:1.2s ease;

`

const ProductInfo= styled.div
`

`

const TextWrap=styled.div
`

`

const ProductTitle=styled.div
`

`