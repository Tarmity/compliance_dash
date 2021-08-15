import React, { useState } from 'react';
import styled from "styled-components";
import  PopUp from '../Components/PopUp/PopUp';
import  Table  from '../Components/Table/Table';


const Container = styled.div`

    margin: 1rem 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
   min-width: 100px;
   padding: 12px 32px;
   border-radius: 4px;
   border: none;
   background: red;
   color: #fff;
   font-size: 16px;
   cursor: pointer;

    
`


const ComplianceRegister = () => {
    const [showPopup, setShowPopup] = useState(false)

    const openPopup = () => {
        setShowPopup(prev => !prev);
    };

    return (
        <>
            <h1 style={{ textAlign: "center" }}>Compliance Register</h1>
            <Container>
                <Button  onClick={openPopup}>+ NEW</Button>
            </Container>
            <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
            <Table />
           
           
        </>
    )
}

export default ComplianceRegister
