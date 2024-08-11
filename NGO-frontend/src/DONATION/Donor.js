import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import { Button,TextField } from "@mui/material";

function Donor() {
    const validate = (values) => {
        const errors = {};
        if (!values.Salutation) {
            errors.Salutation = "Required";
        }
        if (!values.DonorName) {
            errors.DonorName = "Required";
        }
        if (!values.Address) {
            errors.Address = "Required";
        }
        if (!values.State) {
            errors.State = "Required";
        }
        if (!values.Country) {
            errors.Country = "Required";
        }
        if (!values.Pincode) {
            errors.Pincode = "Required";
        }
        if (!values.Email) {
            errors.Email = "Required";
        }
        if (!values.WhatsappNumber) {
            errors.WhatsappNumber = "Required";
        }
        if (!values.TelephoneNumber) {
            errors.TelephoneNumber = "Required";
        }
        if (!values.DataOfBirth) {
            errors.DataOfBirth = "Required";
        }
        
        return errors;
    };
    return (
        <Formik
            initialValues={{
                Salutation: "",
                DonorName: "",
                Address: "",
                State: "",
                Country: "",
                Pincode: "",
                Email: "",
                WhatsappNumber: "",
                TelephoneNumber: "",
                DataOfBirth: "",
            }}
            onSubmit={(values) => alert(JSON.stringify(values, null, 2))}
            validate={validate}
        >
            {(formik) => (
                <form onSubmit={formik.handleSubmit} style={{ margin: "2%", height: "90vh" }} >
                    <Typography
                        variant="h4"
                        component="h1"
                        align="center"
                        sx={{ color: "white", backgroundColor: "#002984" }}
                    >
                        Donor Details
                    </Typography>
                    <br />
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Salutation
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Salutation"
                                variant="outlined"
                                placeholder="Enter the Salutation"
                                value={formik.values.Salutation} name="Salutation" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Salutation && (
                                    <span style={{ color: "red" }}>{formik.errors.Salutation}</span>
                                )}
                            </div>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Donor Name
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Donor Name"
                                variant="outlined"
                                placeholder="Enter the Donor Name"
                                value={formik.values.DonorName} name="DonorName" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.DonorName && (
                                    <span style={{ color: "red" }}>{formik.errors.DonorName}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Address
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Address"
                                variant="outlined"
                                placeholder="Enter the Address"
                                value={formik.values.Address} name="Address" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Address && (
                                    <span style={{ color: "red" }}>{formik.errors.Address}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            State
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="State"
                                variant="outlined"
                                placeholder="Enter the State"
                                value={formik.values.State} name="State" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.State && (
                                    <span style={{ color: "red" }}>{formik.errors.State}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Country
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Country"
                                variant="outlined"
                                placeholder="Enter the  Country"
                                value={formik.values.Country} name="Country" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Country && (
                                    <span style={{ color: "red" }}>{formik.errors.Country}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Pincode
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Pincode"
                                variant="outlined"
                                placeholder="Enter the Pincode"
                                value={formik.values.Pincode} name="Pincode" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Pincode && (
                                    <span style={{ color: "red" }}>{formik.errors.Pincode}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Email
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Email"
                                variant="outlined"
                                placeholder="Enter the Email"
                                value={formik.values.Email} name="Email" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Email && (
                                    <span style={{ color: "red" }}>{formik.errors.Email}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                               Whatsapp Number
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Whatsapp Number"
                                variant="outlined"
                                placeholder="Enter the Whatsapp Number"
                                value={formik.values.WhatsappNumber} name="WhatsappNumber" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.WhatsappNumber && (
                                    <span style={{ color: "red" }}>{formik.errors.WhatsappNumber}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                               Telephone Number
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Telephone Number"
                                variant="outlined"
                                placeholder="Enter the Telephone Number"
                                value={formik.values.TelephoneNumber} name="TelephoneNumber" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.TelephoneNumber && (
                                    <span style={{ color: "red" }}>{formik.errors.TelephoneNumber}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Data Of Birth
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Data Of Birth"
                                variant="outlined"
                                placeholder="Enter the Data Of Birth"
                                value={formik.values.DataOfBirth} name="DataOfBirth" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.DataOfBirth && (
                                    <span style={{ color: "red" }}>{formik.errors.DataOfBirth}</span>
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
export default Donor;
