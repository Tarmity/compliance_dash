import React, { useState } from 'react'
import { FormLabel, Radio, TextField, FormControlLabel, RadioGroup, InputLabel, Select, FormControl } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import styled from 'styled-components'

const useStyle = makeStyles((theme) => ({
    record: {
        width: '250px',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',

    },
    review: {
        width: '300px',
        margin: '1rem',
        display: 'flex',
        justifyContent: 'center',

    },
    radio: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    formControl: {
        margin: '1rem',
        width: '220px',
    },
    signature: {
        width: '440px',
        alignContent: 'center'
    }

}))

// const intialformValues = {
//     id: 0,
//     record: '',
//     reviewOf: '',
//     physicalRecords: 'yes',
//     electronicRecords: 'no',
//     resonsibleDepart: '',
//     frequency: 'Annually',
//     nextDueDate: new Date(),

// }

// const Spacer = styled.div`
//     height: 2rem;
//     display: flex;
//     justify-content: center;
// `

const Button = styled.button`
    height: 50px;
    width: 100px;
    padding: 12px 20px;
    border-radius: 4px;
    border: none;
    background: blue;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
`
const Section = styled.section`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 1.8rem;
`
const Section2 = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1.8rem;
`



const AddDocForm = ({ showPopup, setShowPopup }) => {

    // const [values, setValues] = useState(intialformValues);
    const classes = useStyle();

    const [physical, setPhysical] = useState('yes')

    const handleChange = (event) => {
        setPhysical(event.target.value);
    };
    const [electronic, setElectronic] = useState('yes')

    const swapChange = (event) => {
        setElectronic(event.target.value);
    };

    return (
        <form>
            <Section>
                <TextField
                    variant="filled"
                    label="Record"
                    multiline maxRows={4}
                    className={classes.record} />


                <TextField
                    variant="filled"
                    label="Review Of"
                    multiline maxRows={4}
                    className={classes.review} />

            </Section>


            <Section>
                <FormLabel
                    component="legend"
                    className={classes.radio}>Physical Records kept for 7 years
                </FormLabel>

                <FormLabel
                    component="legend"
                    className={classes.radio}>Electronic Records kept for 7 years
                </FormLabel>
            </Section>

            <Section>
                <RadioGroup
                    row name="physical"
                    value={physical}
                    onChange={handleChange}
                    className={classes.radio}>
                    <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes" />
                    <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No" />
                </RadioGroup>

                <RadioGroup
                    row name="physical"
                    value={electronic}
                    onChange={swapChange}
                    className={classes.radio}>
                    <FormControlLabel
                        value="yes"
                        control={<Radio />}
                        label="Yes" />
                    <FormControlLabel
                        value="no"
                        control={<Radio />}
                        label="No" />
                </RadioGroup>
            </Section>

            <Section>
                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel >Responsible Department</InputLabel>
                    <Select
                    // native
                    // value={state.age}
                    // onChange={handleChange}
                    // inputProps={{
                    //     name: 'age',
                    //     id: 'filled-age-native-simple',
                    // }}
                    >
                        <option aria-label="None" value="" />
                        <option >Compliance</option>
                        <option >Credit</option>
                        <option >HR</option>
                    </Select>
                </FormControl>

                <FormControl variant="filled" className={classes.formControl}>
                    <InputLabel >Fequency</InputLabel>
                    <Select
                    // native
                    // value={state.age}
                    // onChange={handleChange}
                    // inputProps={{
                    //     name: 'age',
                    //     id: 'filled-age-native-simple',
                    // }}
                    >
                        <option aria-label="None" value="" />
                        <option >Annually</option>
                        <option >Bi Annually</option>
                        <option >6 Monthly</option>
                        <option >Quarterly</option>
                    </Select>
                </FormControl>

                <TextField variant="filled"
                    id="date"
                    label="Due Date"
                    type="date"
                    defaultValue="2021-07-23"
                    className={classes.formControl}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </Section>
            <Section2>
                <TextField
                    variant="filled"
                    label="Compliance Officer Signature and Date"
                    className={classes.signature}
                >
                </TextField>

            </Section2>


            <Section2>
                <Button type="submit" onClick={() => setShowPopup(prev => !prev)}>Add</Button>
            </Section2>
        </form>
    )
}

export default AddDocForm

