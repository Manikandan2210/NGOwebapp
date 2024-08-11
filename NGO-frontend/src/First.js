import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import { Button,  TextField } from "@mui/material";
import axios from 'axios'
import { useState } from "react";

function Donation() {
    const validate = (values) => {
        const errors = {};
        if (!values.DonationName) {
            errors.DonationName = "Required";
        }
        
        return errors;
    };
    const[post, setPost ] = useState({
        DonationName:''
    })
    const handleInput = (event) =>{
   setPost({...post,[event.target.name]: event.target.value})
    }

    function handleSubmit(event){
        event.preventDefault()
        axios.post('http://localhost:8080/donation/',{post})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    return (
        <Formik
            initialValues={{
                DonationName: "",
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            validate={validate}
        >
            {(formik) => (
                <form onSubmit={handleSubmit} style={{ margin: "2%", height: "90vh" }} >
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        sx={{ color: "white", backgroundColor: "#002984" }}
                    >
                        Donation Details
                    </Typography>
                    <br />
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
                        <Grid item xs={3}  >
                            <Typography variant="h6" component="h4" align="left">
                               DonationName
                            </Typography>
                            <br /><br />
                            <TextField
                                id="outlined-basic"
                                label="DonationName"
                                variant="outlined"
                                placeholder="Enter the Donation Name"
                                value={formik.values.DonationName} name="Purpose" onChange={formik.handleInput}
                                fullWidth
                            />
                            <div>
                                {formik.errors.DonationName && (
                                    <span style={{ color: "red" }}>{formik.errors.DonationName}</span>
                                )}
                            </div>
                        </Grid>
                        
                    </Grid>
                    <br/>
                    <Button variant="contained" color="primary" type="submit" >
                        submit
                    </Button>
                </form>
                
            )}
        </Formik>
    );
}
export default Donation;
