import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import { Button,TextField } from "@mui/material";

function Bank() {
    const validate = (values) => {
        const errors = {};
        if (!values.Name_of_bank_branch) {
            errors.Name_of_bank_branch = "Required";
        }
        if (!values.IFSC_code) {
            errors.IFSC_code = "Required";
        }
        if (!values.BankReference) {
            errors.BankReference = "Required";
        }
        if (!values.Date_of_Credit) {
            errors.Date_of_Credit = "Required";
        }
        if (!values.ForiegnSource) {
            errors.ForiegnSource = "Required";
        }
        if (!values.ReceiptDetails) {
            errors.ReceiptDetails = "Required";
        }
        return errors;
    };
    return (
        <Formik
            initialValues={{
                Name_of_bank_branch: "",
                IFSC_code: "",
                BankReference: "",
                Date_of_Credit: "",
                ForiegnSource: "",
                ReceiptDetails: "",  
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
                        Bank Details
                    </Typography>
                    <br />
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Name of bank branch
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Name of bank branch"
                                variant="outlined"
                                placeholder="Enter the Name of bank branch"
                                value={formik.values.Name_of_bank_branch} name="Name_of_bank_branch" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Name_of_bank_branch && (
                                    <span style={{ color: "red" }}>{formik.errors.Name_of_bank_branch}</span>
                                )}
                            </div>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            IFSC code
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="IFSC code"
                                variant="outlined"
                                placeholder="Enter the IFSC code"
                                value={formik.values.IFSC_code} name="IFSC_code" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.IFSC_code && (
                                    <span style={{ color: "red" }}>{formik.errors.IFSC_code}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Bank Reference
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Bank Reference"
                                variant="outlined"
                                placeholder="Enter the Bank Reference"
                                value={formik.values.BankReference} name="BankReference" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.BankReference && (
                                    <span style={{ color: "red" }}>{formik.errors.BankReference}</span>
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
                                label="Date of Credit"
                                variant="outlined"
                                placeholder="Enter the Date of Credit"
                                value={formik.values.Date_of_Credit} name="Date_of_Credit" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Date_of_Credit && (
                                    <span style={{ color: "red" }}>{formik.errors.Date_of_Credit}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Foriegn Source
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Foriegn Source"
                                variant="outlined"
                                placeholder="Enter the  Foriegn Source"
                                value={formik.values.ForiegnSource} name="ForiegnSource" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.ForiegnSource && (
                                    <span style={{ color: "red" }}>{formik.errors.ForiegnSource}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Receipt Details
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Receipt Details"
                                variant="outlined"
                                placeholder="Enter the Receipt Details"
                                value={formik.values.ReceiptDetails} name="ReceiptDetails" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.ReceiptDetails && (
                                    <span style={{ color: "red" }}>{formik.errors.ReceiptDetails}</span>
                                )}
                            </div>
                        </Grid>
                        
                    </Grid>
                    <br/>
                    <Button variant="contained" color="primary" type="submit" >
                       Store Report
                    </Button>
                </form>
            )}
        </Formik>
    );
}
export default Bank;
