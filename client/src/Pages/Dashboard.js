import React from 'react'
import styled from "styled-components";
import DocumentsCard from '../Components/MainCards/DocumentsCard';
import OverDueCard from '../Components/SmallCards/OverDueCard';
import ThirtyCard from '../Components/SmallCards/ThirtyCard';
import SixtyCard from '../Components/SmallCards/SixtyCard';
import ComplianceCard from '../Components/MainCards/ComplianceCard';
import ContractsAgreeCard from '../Components/MainCards/ContractsAgreeCard';


const SmallBoxContainer = styled.div`
    /* background-color: lightblue; */
    height: 20vh;
    margin-top: 3rem;
    margin-left: 7rem;
    margin-right: 7rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

   @media (min-width: 992px) and (max-width: 1200px){
    flex-direction: row;
    width: 90vw;
    height: 20vh;
    margin: 3rem 3rem;
   }

   @media (min-width: 768px) and (max-width: 992px) {
    flex-direction: row;
    width: 90vw;
    margin-left: 3rem;
    margin-right: 3rem;
    margin-top: 3rem;
    margin-bottom: 5rem;
   }

   @media (min-width: 576px) and (max-width: 767px){
    flex-direction: column;
    height: 40vh; 
   }

   @media (min-width: 0px) and (max-width: 575px){
    flex-direction: column;
    height: 60vh; 
   }

   
`

const LargeBoxContainer = styled.div`
    /* background-color: lightblue; */
     margin-top: 4rem;
     margin-left: 5rem;
     margin-right: 5rem;
     height: 40vh;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: space-between;
   
    @media (min-width: 992px) and (max-width: 1230px){
        margin: 2rem 1rem;
        flex-direction: column;
        height: 90vh;
        justify-content: space-between;
    }
    @media (min-width: 768px) and (max-width: 992px) {
        margin: 2rem 1rem;
        flex-direction: column;
        height: 95vh;
        justify-content: space-between;
    }
    @media (min-width: 576px) and (max-width: 767px) {
        height: 80vh;
        flex-direction: column;
    }
    @media (min-width: 0px) and (max-width: 575px){
        height: 80vh;
        flex-direction: column;
    }
    
`

const Dashboard = () => {
    document.body.style = 'background: #f9f9f9';


    return (
        <>
            <div classNaame='dashboard'>
                <h1 style={{ textAlign: 'center' }}>Dashboard</h1>
                <SmallBoxContainer>
                    <OverDueCard />
                    <ThirtyCard />
                    <SixtyCard />
                </SmallBoxContainer>
                <LargeBoxContainer>
                    <ComplianceCard />
                    <ContractsAgreeCard />
                    <DocumentsCard />
                </LargeBoxContainer>

            </div>
        </>
    )
}

export default Dashboard;

