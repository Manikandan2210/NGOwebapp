import { Button, Card, CardContent, Grid,  TextField, Typography } from "@mui/material";
import { useFormik } from "formik";

const initialValues = {
    name: '',
      budget: '',
      sanctionedamount: '',
      installmentnumber:''

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

    if(!values.sanctionedamount) {
      errors.sanctionedamount = "REQUIRED"
    }

    if(!values.installmentnumber) {
      errors.installmentnumber = "REQUIRED"
    }

    return errors
  }

function Amountsanctioned() {
  const formik = useFormik({
    initialValues,
    onSubmit,
    validate
  })
    console.log('Form values', formik.values)
    console.log('Form errors', formik.errors)

  return (
    <>
      <Typography variant="h6" align="center" >
        AMOUNT SANCTIONED
      </Typography>

      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "50px 10px" }}>
        <CardContent>
          <form onSubmit={formik.handleSubmit}>
            <Grid container spacing={1}></Grid>

            <Typography variant="h6" align="center" >
              PROJECT NAME
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField  id='name' label="Project Name" placeholder="Enter title of your project" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.name} required></TextField>
            </Grid>
            <br />

            <Typography variant="h6" align="center" >
              Project ID
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='budget' type="number" label="Project Budget" placeholder="Enter budget of your project" variant="outlined" fullWidth  onChange={formik.handleChange} value={formik.values.budget} required></TextField>
            </Grid>
            <br />

            <Typography variant="h6" align="center" >
              SANCTIONED AMOUNT
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='sanctionedamount' type='number' label=" Enter Sanctionedamount" placeholder="Enter detailed sanctionedamount of your project" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.sanctionedamount} required></TextField>
            </Grid>
            <br />

            <Typography variant="h6" align="center" >
              INSTALLMENT NUMBER
            </Typography>
            <Grid xs={3} sm={4} item>
              <TextField id='installmentnumber' type='number' label="installmentnumber" placeholder="Upload your project installmentnumberation" variant="outlined" fullWidth onChange={formik.handleChange} value={formik.values.installmentnumber} required></TextField>
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

export default Amountsanctioned;


