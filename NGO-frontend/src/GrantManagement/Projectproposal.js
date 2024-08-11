import { Button, Card, CardContent, Grid,  TextField, Typography,  } from "@mui/material";

import { useFormik } from "formik";

const initialValues = {
    name: '',
      budget: '',
      description: '',
      document:''

}

const onSubmit = values => {
    console.log('Form data', values)
  }

  const validate = values => {
    let errors = {}

    if(!values.name) {
      errors.name = "REQUIRED"
    }

    if(!values.budget) {
      errors.budget = "REQUIRED"
    }

    if(!values.description) {
      errors.description = "REQUIRED"
    }

    if(!values.document) {
      errors.document = "REQUIRED"
    }

    return errors
  }

function Projectproposal() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
    console.log('Form values', formik.values)
    console.log('Form errors', formik.errors)

  return (
    <>
      <Typography sx={{
        fontFamily: '-moz-initial',
        fontSize: '20px',
       color: 'primary',
       backgroundColor:'#B2E9F9'}} align="center">
        PROJECT PROPOSAL
      </Typography>

      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "50px 10px" }}>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}></Grid>

            <Typography variant="h6" align="left" >
              PROJECT NAME
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='name' label="Project Name" placeholder="Enter title of your project" variant="outlined" onChange={formik.handleChange} value={formik.values.name} fullWidth required></TextField>
            </Grid>
            <br />

            <Typography variant="h6" align="left" >
              PROJECT Budget
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='budget' type="number" label="Project Budget" placeholder="Enter budget of your project" variant="outlined"  onChange={formik.handleChange} value={formik.values.budget} fullWidth required></TextField>
            </Grid>
            <br />

            <Typography variant="h6" align="left" >
              PROJECT Description
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='description' label="Project Description" placeholder="Enter detailed description of your project" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.description} required ></TextField>
            </Grid>
            <br />

            <Typography variant="h6" align="left" >
              PROJECT Document
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField  id='document' label="Project Document" placeholder= "Upload your project documentation" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.document} required></TextField>
             
            </Grid>
            <br />

            <Grid xs={3} sm={4} item>
              <Button sx={{
                fontFamily: '-moz-initial',
                fontSize: '20px',
                color: 'primary',
                backgroundColor: '#B2E9F9'
              }}type="submit" variant="contained"  fullWidth>SUBMIT</Button>
            </Grid>
            <br />
          </form>

        </CardContent>
      </Card>
    </>

  );
}

export default Projectproposal;


