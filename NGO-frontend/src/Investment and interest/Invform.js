import logo from './logo.svg';
import './App.css';import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function Invform() {
    const validate = (values) => {
        const errors = {};
        if (!values.Investmentcommitteeapproval) {
            errors.Investmentcommitteeapproval = "Required";
        }
        if (!values.Nameofthebank) {
            errors.Nameofthebank = "Required";
        }
        if (!values.Typeofinstrument) {
            errors.Typeofinstrument = "Required";
        }
        if (!values.Dateofinvestment) {
            errors.Dateofinvestment = "Required";
        }
        if (!values.Maturitydate) {
            errors.Maturitydate = "Required";
        }
        if (!values.Amountofinvestment) {
            errors.Amountofinvestment = "Required";
        }
        if (!values.Rateofinterestifapplicable) {
            errors.Rateofinterestifapplicable = "Required";
        }
        if (!values.Cumulativeinterestvalue) {
            errors.Cumulativeinterestvalue = "Required";
        }
        if (!values.Exinterestvalue) {
            errors.Exinterestvalue = "Required";
        }
        if (!values.Facevalue) {
            errors.Facevalue = "Required";
        }
        if (!values.PremiumorDiscount) {
            errors.PremiumorDiscount = "Required";
        }
        if (!values.Othercharges) {
            errors.Othercharges = "Required";
        }
        if (!values.Periodicityofinterestpayout) {
            errors.Periodicityofinterestpayout = "Required";
        }
        if (!values.Purposeofinvestment) {
            errors.Purposeofinvestment = "Required";
        }
        if (!values.Sourceoffunds) {
            errors.Sourceoffunds = "Required";
        }
        if (!values.Newinvestmentorrenewal) {
            errors.Newinvestmentorrenewal = "Required";
        }
        if (!values.Referencenumberofthedonation) {
            errors.Referencenumberofthedonation = "Required";
        }
        if (!values.Nameofthedonor) {
            errors.Nameofthedonor = "Required";
        }
        if (!values.Sourceofdonation) {
            errors.Sourceofdonation = "Required";
        }
        if (!values.Purposeofdonation) {
            errors.Purposeofdonation = "Required";
        }
        if (!values.Investmentamountofthedonation) {
            errors.Investmentamountofthedonation = "Required";
        }
        if (!values.Sector) {
            errors.Sector = "Required";
        }
        if (!values.Fundsourcereference) {
            errors.Fundsourcereference = "Required";
        }
        if (!values.Fundtransferforinvestment) {
            errors.Fundtransferforinvestment = "Required";
        }
        if (!values.Interestcreditedtobank) {
            errors.Interestcreditedtobank = "Required";
        }
        if (!values.Maturityproceedscreditedtobank) {
            errors.Maturityproceedscreditedtobank = "Required";
        }
        if (!values.Approver) {
            errors.Approver = "Required";
        }
        if (!values.Investmentreferencenumber) {
            errors.Investmentreferencenumber = "Required";
        }
        if (!values.Custodianofinstruments) {
            errors.Custodianofinstruments = "Required";
        }
        if (!values.Accounting) {
            errors.Accounting = "Required";
        }
        if (!values.Signofcustodian) {
            errors.Signofcustodian = "Required";
        }
        return errors;
    };
    return (
        <Formik
            initialValues={{
                Investmentcommitteeapproval: "",
                Nameofthebank: "",
                Typeofinstrument: "",
                Dateofinvestment: "",
                Maturitydate: "",
                Amountofinvestment: "",
                Rateofinterestifapplicable: "",
                Cumulativeinterestvalue: "",
                Exinterestvalue: "",
                Facevalue: "",
                PremiumorDiscount: "",
                Othercharges: "",
                Periodicityofinterestpayout: "",
                Purposeofinvestment: "",
                Sourceoffunds: "",
                Newinvestmentorrenewal: "",
                Referencenumberofthedonation: "",
                Nameofthedonor: "",
                Sourceofdonation: "",
                Purposeofdonation: "",
                Investmentamountofthedonation: "",
                Sector: "",
                Fundsourcereference: "",
                Fundtransferforinvestment: "",
                Interestcreditedtobank: "",
                Maturityproceedscreditedtobank: "",
                Approver: "",
                Investmentreferencenumber: "",
                Custodianofinstruments: "",
                Accounting: "",
                Signofcustodian: ""
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
                        sx={{ color: "#0A5064", backgroundColor: "#B2E9F9", fontFamily:"-moz-initial" }}
                    >
                        Form of Investment
                    </Typography>
                    <br />
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
                    <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Investment Committee Approval
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Investment Committee Approval"
                                variant="outlined"
                                placeholder=" Enter the Approval"
                                value={formik.values.Investmentcommitteeapproval} name="Investmentcommitteeapproval" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Investmentcommitteeapproval && (
                                    <span style={{ color: "red" }}>{formik.errors.Investmentcommitteeapproval}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                                 Name of the bank
                            </Typography>
                            <br /><br />
                            <TextField
                                id="outlined-basic"
                                label="Name of the bank"
                                variant="outlined"
                                placeholder="Enter the Name of the bank"
                                value={formik.values.Nameofthebank} name="Nameofthebank" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Nameofthebank && (
                                    <span style={{ color: "red" }}>{formik.errors.Nameofthebank}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Type of instrument
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Type of instrument"
                                variant="outlined"
                                placeholder="Enter the Type of instrument"
                                value={formik.values.Typeofinstrument} name="Typeofinstrument" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Typeofinstrument && (
                                    <span style={{ color: "red" }}>{formik.errors.Typeofinstrument}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Date of investment
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label=" Date of investment"
                                variant="outlined"
                                placeholder="Enter the Date DD/MM/YYYY"
                                value={formik.values.Dateofinvestment} name="Dateofinvestment" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Dateofinvestment && (
                                    <span style={{ color: "red" }}>{formik.errors.Dateofinvestment}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Maturity date
                            </Typography>
                            <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="Maturity date"
                                variant="outlined"
                                placeholder="Enter the date DD/MM/YYYY"
                                value={formik.values.Maturitydate} name="Maturitydate" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Maturitydate && (
                                    <span style={{ color: "red" }}>{formik.errors.Maturitydate}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Amount of investment
                            </Typography>
                            <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="Amount of investment"
                                variant="outlined"
                                placeholder="Enter the Amount in Rs"
                                value={formik.values.Amountofinvestment} name="Amountofinvestment" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Amountofinvestment && (
                                    <span style={{ color: "red" }}>{formik.errors.Amountofinvestment}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Rate of interest if applicable
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Rate of interest"
                                variant="outlined"
                                placeholder="Enter the Rate of interest"
                                value={formik.values.Rateofinterestifapplicable} name="Rateofinterestifapplicable" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Rateofinterestifapplicable && (
                                    <span style={{ color: "red" }}>{formik.errors.Rateofinterestifapplicable}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Cumulative interest value
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Cumulative interest value"
                                variant="outlined"
                                placeholder="Enter the Cumulative interest value"
                                value={formik.values.Cumulativeinterestvalue} name="Cumulativeinterestvalue" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Cumulativeinterestvalue && (
                                    <span style={{ color: "red" }}>{formik.errors.Cumulativeinterestvalue}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Ex interest value
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Ex interest value"
                                variant="outlined"
                                placeholder="Enter the Ex interest value"
                                value={formik.values.Exinterestvalue} name="Exinterestvalue" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Exinterestvalue && (
                                    <span style={{ color: "red" }}>{formik.errors.Exinterestvalue}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Face value
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Face value"
                                variant="outlined"
                                placeholder="Enter the Face value"
                                value={formik.values.Facevalue} name="Facevalue" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Facevalue && (
                                    <span style={{ color: "red" }}>{formik.errors.Facevalue}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" >
                            Premium / Discount
                            </Typography>
                            <br /> 
                            <TextField
                                id="outlined-basic"
                                label="Premium / Discount"
                                variant="outlined"
                                placeholder="Enter the value"
                                value={formik.values.PremiumorDiscount} name="PremiumorDiscount" onChange={formik.handleChange}
                                fullWidth
                            />
                            <div>
                                {formik.errors.PremiumorDiscount && (
                                    <span style={{ color: "red" }}>{formik.errors.PremiumorDiscount}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" >
                            Other charges
                            </Typography>
                            <br /> 
                            <TextField
                                id="outlined-basic"
                                label=" Other charges"
                                variant="outlined"
                                placeholder="Enter the any other charges"
                                value={formik.values.Othercharges} name="Othercharges" onChange={formik.handleChange}
                                fullWidth
                            />
                            <div>
                                {formik.errors.Othercharges && (
                                    <span style={{ color: "red" }}>{formik.errors.Othercharges}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Periodicity of interest payout
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Periodicity"
                                variant="outlined"
                                placeholder="Q/H/A"
                                value={formik.values.Periodicityofinterestpayout} name="Periodicityofinterestpayout" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Periodicityofinterestpayout && (
                                    <span style={{ color: "red" }}>{formik.errors.Periodicityofinterestpayout}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Purpose of investment
                            </Typography>
                            <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="Purpose"
                                variant="outlined"
                                placeholder="Enter the Purpose"
                                value={formik.values.Purposeofinvestment} name="Purposeofinvestment" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Purposeofinvestment && (
                                    <span style={{ color: "red" }}>{formik.errors.Purposeofinvestment}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Source of funds
                            </Typography>
                            <br /> <br />
                            <TextField
                                id="outlined-basic"
                                label="Source of funds"
                                variant="outlined"
                                placeholder="Enter the Source of funds"
                                value={formik.values.Sourceoffunds} name="Sourceoffunds" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Sourceoffunds && (
                                    <span style={{ color: "red" }}>{formik.errors.Sourceoffunds}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            New investment or renewal
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="New investment or renewal"
                                variant="outlined"
                                placeholder="Enter the new investment"
                                value={formik.values.Newinvestmentorrenewal} name="Newinvestmentorrenewal" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Newinvestmentorrenewal && (
                                    <span style={{ color: "red" }}>{formik.errors.Newinvestmentorrenewal}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Reference number of the donation
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Reference number "
                                variant="outlined"
                                placeholder="Enter the Reference number "
                                value={formik.values.Referencenumberofthedonation} name="Referencenumberofthedonation" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Referencenumberofthedonation && (
                                    <span style={{ color: "red" }}>{formik.errors.Referencenumberofthedonation}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Name of the donor
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Donor name"
                                variant="outlined"
                                placeholder="Enter the name of the donor"
                                value={formik.values.Nameofthedonor} name="Nameofthedonor" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Nameofthedonor && (
                                    <span style={{ color: "red" }}>{formik.errors.Nameofthedonor}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Source of donation
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Source of donation"
                                variant="outlined"
                                placeholder="Enter the Source of donation"
                                value={formik.values.Sourceofdonation} name="Sourceofdonation" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Sourceofdonation && (
                                    <span style={{ color: "red" }}>{formik.errors.Sourceofdonation}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Purpose of donation
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Purpose of donation"
                                variant="outlined"
                                placeholder="Enter the Purpose of donation"
                                value={formik.values.Purposeofdonation} name="Purposeofdonation" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Purposeofdonation && (
                                    <span style={{ color: "red" }}>{formik.errors.Purposeofdonation}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Investment Amount of the donation
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Investment Amount of the donation"
                                variant="outlined"
                                placeholder="Enter the Amount in Rs"
                                value={formik.values.Investmentamountofthedonation} name="Investmentamountofthedonation" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Investmentamountofthedonation && (
                                    <span style={{ color: "red" }}>{formik.errors.Investmentamountofthedonation}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Sector
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Sector"
                                variant="outlined"
                                placeholder="Enter the Sector "
                                value={formik.values.Sector} name="Sector" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Sector && (
                                    <span style={{ color: "red" }}>{formik.errors.Sector}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Fund source reference
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Fund source reference"
                                variant="outlined"
                                placeholder="Enter the Fund source reference"
                                value={formik.values.Fundsourcereference} name="Fundsourcereference" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Fundsourcereference && (
                                    <span style={{ color: "red" }}>{formik.errors.Fundsourcereference}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Fund transfer for investment
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Fund transfer for investment"
                                variant="outlined"
                                placeholder="Enter the Bank Account No."
                                value={formik.values.Fundtransferforinvestment} name="Fundtransferforinvestment" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Fundtransferforinvestment && (
                                    <span style={{ color: "red" }}>{formik.errors.Fundtransferforinvestment}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Interest credited to bank
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Interest credited to bank"
                                variant="outlined"
                                placeholder="Enter the  Bank Account No."
                                value={formik.values.Interestcreditedtobank} name="Interestcreditedtobank" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Interestcreditedtobank && (
                                    <span style={{ color: "red" }}>{formik.errors.Interestcreditedtobank}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Maturity proceeds credited to bank
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Maturity proceeds credited to bank"
                                variant="outlined"
                                placeholder="Enter the  Bank Account No."
                                value={formik.values.Maturityproceedscreditedtobank} name="Maturityproceedscreditedtobank" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Maturityproceedscreditedtobank && (
                                    <span style={{ color: "red" }}>{formik.errors.Maturityproceedscreditedtobank}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                            Approver
                            </Typography>
                            <br />  <br />
                            <TextField
                                id="outlined-basic"
                                label="Approver"
                                variant="outlined"
                                placeholder="Enter the Approver name"
                                value={formik.values.Approver} name="Approver" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Approver && (
                                    <span style={{ color: "red" }}>{formik.errors.Approver}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Investment reference number
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Investment reference number"
                                variant="outlined"
                                placeholder="Enter the  Investment reference number"
                                value={formik.values.Investmentreferencenumber} name="Investmentreferencenumber" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Investmentreferencenumber && (
                                    <span style={{ color: "red" }}>{formik.errors.Investmentreferencenumber}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" component="h4" align="left">
                            Custodian of instruments
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Custodian of instruments"
                                variant="outlined"
                                placeholder="Enter the  Custodian name"
                                value={formik.values.Custodianofinstruments} name="Custodianofinstruments" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Custodianofinstruments && (
                                    <span style={{ color: "red" }}>{formik.errors.Custodianofinstruments}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                            Accounting
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Accounting"
                                variant="outlined"
                                placeholder="Enter the Accounting"
                                value={formik.values.Accounting} name="Accounting" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Accounting && (
                                    <span style={{ color: "red" }}>{formik.errors.Accounting}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="h6" component="h4" align="left" >
                            Sign of custodian
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label=" Sign of custodian"
                                variant="outlined"
                                fullWidth="required"
                                placeholder="Enter the  Sign "
                                value={formik.values.Signofcustodian} name="Signofcustodian" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Signofcustodian && (
                                    <span style={{ color: "red" }}>{formik.errors.Signofcustodian}</span>
                                )}
                            </div>
                        </Grid>

                    </Grid>
                    <br/>
                    <Button sx={{ backgroundColor:'#B2E9F9'}} variant="contained" color="primary" type="submit">
                        submit
                    </Button>
                </form>
                
            )}
        </Formik>
    );
}
export default Invform;
