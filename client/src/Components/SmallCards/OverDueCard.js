import React from 'react';
import styled from 'styled-components';
import * as AiIcons from 'react-icons/ai';





const Container = styled.div`
  height: 100px;
  width: 250px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 2px 2px 10px black;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  @media (min-width: 768px) {
        height: 80px;
        width: 200px; 
    }

`

const Box = styled.div`
  height: 60px;
  width: 60px;
  background-color: red;
  border-radius: 5px;
  margin-left: 15px;
  position: relative;
  top: -.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 5px grey;
  @media (min-width: 768px) {
        height: 50px;
        width: 50px;
        margin-left: 7px;
       
    }
`
const Heading = styled.div`
  margin-right: 20px;
  font-size: 1rem;
  @media (min-width: 768px) {
        font-size: 1.1rem;
       
    }
`

const OverDueIcon = styled.div`
  color: #fff;
  font-size: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
      font-size: 2rem;
       
    }
`

const Number = styled.div`
    display: flex;
    justify-content: center;
    font-size: 2rem;
`

const OverDueCard = () => {

  return (
    <>
      <Container>
        <Box>
          <OverDueIcon>
            <AiIcons.AiOutlineInfoCircle />
          </OverDueIcon>
        </Box>
        <Heading>Over Due
        <Number>0</Number>
        </Heading>
      
      </Container>
    </>
  )
}

export default OverDueCard;



