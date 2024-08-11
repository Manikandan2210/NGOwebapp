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

function Donation() {
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
        DONATION 
      </Typography>

      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "50px 10px" }}>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}></Grid>

            <Typography variant="h6" align="left" >
              DONATION NAME
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='name' label="Donation Name" placeholder="Donation Name" variant="outlined" onChange={formik.handleChange} value={formik.values.name} fullWidth required></TextField>
            </Grid>
            <br />

            

            <Grid xs={3} sm={4} item>
              <Button sx={{
                fontFamily: '-moz-initial',
                fontSize: '20px',
                color: 'primary',
                backgroundColor: '#B2E9F9'
              }} type="submit" variant="contained"  fullWidth>SUBMIT</Button>
            </Grid>
            <br />
          </form>

        </CardContent>
      </Card>
    </>

  );
}

export default Donation;


