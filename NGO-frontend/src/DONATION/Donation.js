import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";

function Donation() {
    const validate = (values) => {
        const errors = {};
        if (!values.RemittanceMode) {
            errors.RemittanceMode = "Required";
        }
        if (!values.DonorTypes) {
            errors.DonorTypes = "Required";
        }
        if (!values.TaxExemptioncategory) {
            errors.TaxExemptioncategory = "Required";
        }
        if (!values.Fundsource) {
            errors.Fundsource = "Required";
        }
        if (!values.NatureofDonation) {
            errors.NatureofDonation = "Required";
        }
        if (!values.Purpose) {
            errors.Purpose = "Required";
        }
        if (!values.Currency) {
            errors.Currency = "Required";
        }
        if (!values.ExchangeRate) {
            errors.ExchangeRate = "Required";
        }
        if (!values.Amount) {
            errors.Amount = "Required";
        }
        if (!values.BankCharges) {
            errors.BankCharges = "Required";
        }
        if (!values.Fundsource) {
            errors.Fundsource = "Required";
        }
        if (!values.AmountinInstrumentifFcisApplicable) {
            errors.AmountinInstrumentifFcisApplicable = "Required";
        }
        return errors;
    };
    return (
        <Formik
            initialValues={{
                RemittanceMode: "",
                DonorTypes: "",
                TaxExemptioncategory: "",
                Fundsource: "",
                NatureofDonation: "",
                Purpose: "",
                Currency: "",
                ExchangeRate: "",
                Amount: "",
                BankCharges: "",
                AmountinInstrumentifFcisApplicable: "",
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
                        sx={{ color: "white", backgroundColor: "#B2E9F9" }}
                    >
                        Donation Details
                    </Typography>
                    <br />
                    <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 12 }}>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Remittance Mode
                            </Typography>
                            <br />
                            <InputLabel id="menu"  >Remittance Mode</InputLabel>
                            <Select labelId="menu" label="Remittance Mode" value={formik.values.RemittanceMode} name="RemittanceMode" onChange={formik.handleChange} fullWidth>
                                <MenuItem value={'SBI Collect'}>SBI Collect</MenuItem>
                                <MenuItem value={'NEFT/RTGS'}>NEFT/RTGS</MenuItem>
                                <MenuItem value={'Cash'}>Cash</MenuItem>
                                <MenuItem value={'Cheque'}>Cheque</MenuItem>
                                <MenuItem value={'DD'}>DD</MenuItem>
                                <MenuItem value={'IMPS'}>IMPS</MenuItem>
                                <MenuItem value={'Swift'}>Swift</MenuItem>
                            </Select>
                            <div>
                                {formik.errors.RemittanceMode && (
                                    <span style={{ color: "red" }}>{formik.errors.RemittanceMode}</span>
                                )}
                            </div>
                        </Grid>

                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Donor Types
                            </Typography>
                            <br />
                            <InputLabel id="menu"  >Donor Types</InputLabel>
                            <Select labelId="menu" label="Donor Types" value={formik.values.DonorTypes} name="DonorTypes" onChange={formik.handleChange} fullWidth>
                                <MenuItem value={'Alumini'}>Alumini</MenuItem>
                                <MenuItem value={'Corporate'}>Corporate</MenuItem>
                                <MenuItem value={'General Donor'}>General Donor</MenuItem>
                                <MenuItem value={'Trust'}>Trust</MenuItem>
                            </Select>
                            <div>
                                {formik.errors.DonorTypes && (
                                    <span style={{ color: "red" }}>{formik.errors.DonorTypes}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                TaxExemption category
                            </Typography>
                            <br />
                            <InputLabel id="menu"  >TaxExemption category</InputLabel>
                            <Select labelId="menu" label="TaxExemption category" value={formik.values.TaxExemptioncategory} name="TaxExemptioncategory" onChange={formik.handleChange} fullWidth>
                                <MenuItem value={'80G'}>80G</MenuItem>
                                <MenuItem value={'NON-80G'}>NON-80G</MenuItem>
                            </Select>
                            <div>
                                {formik.errors.TaxExemptioncategory && (
                                    <span style={{ color: "red" }}>{formik.errors.TaxExemptioncategory}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Fund source
                            </Typography>
                            <br />
                            <InputLabel id="menu"  >Fund source</InputLabel>
                            <Select labelId="menu" label="Fund source" value={formik.values.Fundsource} name="Fundsource" onChange={formik.handleChange} fullWidth>
                                <MenuItem value={'Indian'}>Indian</MenuItem>
                                <MenuItem value={'Foreign'}>Foreign</MenuItem>
                            </Select>
                            <div>
                                {formik.errors.Fundsource && (
                                    <span style={{ color: "red" }}>{formik.errors.Fundsource}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Nature of Donation
                            </Typography>
                            <br />
                            <InputLabel id="menu"  >Nature of Donation</InputLabel>
                            <Select labelId="menu" label="Nature of Donation" value={formik.values.NatureofDonation} name="NatureofDonation" onChange={formik.handleChange} fullWidth>
                                <MenuItem value={'Indian'}>CORPUS</MenuItem>
                                <MenuItem value={'Foreign'}>NON CORPUS</MenuItem>
                            </Select>
                            <div>
                                {formik.errors.NatureofDonation && (
                                    <span style={{ color: "red" }}>{formik.errors.NatureofDonation}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Purpose
                            </Typography>
                            <br /><br />
                            <TextField
                                id="outlined-basic"
                                label="Purpose"
                                variant="outlined"
                                placeholder="Enter the Purpose"
                                value={formik.values.Purpose} name="Purpose" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Purpose && (
                                    <span style={{ color: "red" }}>{formik.errors.Purpose}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Currency
                            </Typography>
                            <br />
                            <InputLabel id="menu"  >Currency</InputLabel>
                            <Select labelId="menu" label="Nature of Donation" value={formik.values.Currency} name="Currency" onChange={formik.handleChange} fullWidth>
                                <MenuItem value={'Indian'}>Indian</MenuItem>
                                <MenuItem value={'Foreign'}>Foreign</MenuItem>
                            </Select>
                            <div>
                                {formik.errors.Currency && (
                                    <span style={{ color: "red" }}>{formik.errors.Currency}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Exchange Rate
                            </Typography>
                            <br /><br />
                            <TextField
                                id="outlined-basic"
                                label="Exchange Rate"
                                variant="outlined"
                                placeholder="Enter the Exchange Rate"
                                value={formik.values.ExchangeRate} name="ExchangeRate" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.ExchangeRate && (
                                    <span style={{ color: "red" }}>{formik.errors.ExchangeRate}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Amount
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Amount"
                                variant="outlined"
                                placeholder="Enter the Amount in Rs"
                                value={formik.values.Amount} name="Amount" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.Amount && (
                                    <span style={{ color: "red" }}>{formik.errors.Amount}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography variant="h6" component="h4" align="left">
                                Bank Charges
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Bank Charges"
                                variant="outlined"
                                placeholder="Enter the Bank Charges"
                                value={formik.values.BankCharges} name="BankCharges" onChange={formik.handleChange}
                            />
                            <div>
                                {formik.errors.BankCharges && (
                                    <span style={{ color: "red" }}>{formik.errors.BankCharges}</span>
                                )}
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography variant="h6" component="h4" align="left">
                                Amount in the Instrument if Fc is Applicable
                            </Typography>
                            <br />
                            <TextField
                                id="outlined-basic"
                                label="Currency"
                                variant="outlined"
                                placeholder="Enter the Currency"
                                value={formik.values.AmountinInstrumentifFcisApplicable} name="AmountinInstrumentifFcisApplicable" onChange={formik.handleChange}
                                fullWidth
                            />
                            <div>
                                {formik.errors.AmountinInstrumentifFcisApplicable && (
                                    <span style={{ color: "red" }}>{formik.errors.AmountinInstrumentifFcisApplicable}</span>
                                )}
                            </div>
                        </Grid>
                    </Grid>
                    <br/>
                    <Button variant="contained" color="primary" sx={{backgroundColor:'#B2E9F9'}} type="submit" >
                        submit
                    </Button>
                </form>
                
            )}
        </Formik>
    );
}
export default Donation;
