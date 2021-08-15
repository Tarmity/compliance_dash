import React, {useState} from 'react'
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
const Heading = styled.div`
    font-size: 3rem;
    margin-top: 1rem;
`

const ContractsAgreeMentsSupplies = () => {
    const [showPopup, setShowPopup] = useState(false)

    const openPopup = () => {
        setShowPopup(prev => !prev);
    };

    return (
        <div>
            <h1 style={{textAlign: "center"}}>Contracts, Agreements, Supplies</h1>
            <Container>
                <Button  onClick={openPopup}>+ NEW</Button>
            </Container>
            <Container>
              <Heading> Contacts Table</Heading>
            </Container>
            <PopUp showPopup={showPopup} setShowPopup={setShowPopup} />
            <Table />
           
            <Container>
            <Heading>Agreements Table</Heading>
            </Container>

            <Table />

            <Container>
            <Heading> Supplies Table</Heading>
            </Container>
            <Table />
        </div>
    )
}

export default ContractsAgreeMentsSupplies
