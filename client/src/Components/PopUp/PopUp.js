import React from 'react'
import styled from 'styled-components';

import AddDocForm from '../AddDocumentForm/AddDocForm';

const Background = styled.div`
    width: 100%;
    height: 60vh;
    /* background: white; */
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    
`

const PopupWrapper = styled.div`
    width: 800px;
    height: 500px;
    box-shadow: 1px 5px 16px #333;
    background: #fffafa;
    color: #000;
    z-index: 10;
    border-radius: 10px;
`

const FormDiv = styled.div`
    margin: 1rem;
`


 const PopUp = ({ showPopup, setShowPopup }) => {



    return (
        <>
            {showPopup ? (
                <Background>
                    <PopupWrapper showPopup={showPopup}>
                        <FormDiv >
                            <AddDocForm showPopup={showPopup} setShowPopup={setShowPopup} />
                        </FormDiv>
                    </PopupWrapper>
                </Background>

            ) : null}



        </>
    )
}

export default PopUp;