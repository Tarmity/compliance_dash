import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Container = styled.div`
    background: white;
    height: 250px;
    width: 350px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border-radius: .3rem;
    box-shadow: 1px 1px .3rem black;
    @media (max-width: 769px) {
        height:200px;
        width: 330px;
    }
   
`

const Box = styled.div`
    background: red;
    height: 150px;
    width: 330px;
    border-radius: .3rem;
    position: relative;
    top: -2.5rem;
    box-shadow: 1px 1px .3rem grey;
    display:flex;
    justify-content: center;
    flex-direction: column;
    align-content: center;
    @media (max-width: 769px) {
        height:110px;
        width: 310px;
    }
  
`

const Header = styled.div`
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    @media (max-width: 769px) {
        font-size: 1.5rem;  
    }

`

const Button = styled(Link)`
    height: 50px;
    width: 120px;
    background: transparent;
    border: .1rem solid blue;
    color: blue;
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: .3rem;

    &:hover {
        background-color: blue;
        color:white;
        opacity: 0.6;
    }
    @media (max-width: 769px) {
        height:40px;
        width: 110px;
    }
    
`

const ComplianceCard = () => {
    return (
        <>
            <Container>
                <Box>
                    <Header>Compliance</Header>
                    <Header>Register</Header>
                </Box>
                <Button>Learn More</Button>

            </Container>

        </>

    )
}

export default ComplianceCard;
