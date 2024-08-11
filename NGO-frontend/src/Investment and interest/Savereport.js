import logo from './logo.svg';
import './App.css';import Grid from "@mui/material/Grid";
import { Formik } from "formik";
import Typography from "@mui/material/Typography";
import { Button, InputLabel, MenuItem, Select, TextField } from "@mui/material";


function Savereport() {
  const validate = (values) => {
    const errors = {};
    if (!values.Investeddate) {
        errors.Investeddate = "Required";
    }
    if (!values.Maturitydate) {
        errors.Maturitydate = "Required";
    }
    if (!values.Noofdays) {
        errors.Noofdays = "Required";
    }
    if (!values.Principal) {
        errors.Principal = "Required";
    }
    if (!values.Premium) {
        errors.Premium = "Required";
    }
    if (!values.Premiumamortizationannual) {
        errors.Premiumamortizationannual = "Required";
    }
    if (!values.Discount) {
        errors.Discount = "Required";
    }
    if (!values.Discountamortizationannual) {
        errors.Discountamortizationannual = "Required";
    }
    if (!values.Othercharges) {
        errors.Othercharges = "Required";
    }
    if (!values.Accruedinterestonpurchase) {
        errors.Accruedinterestonpurchase = "Required";
    }
    if (!values.JVrefofaccruedinterestnullification) {
        errors.JVrefofaccruedinterestnullification = "Required";
    }
    if (!values.Typeofinvestment) {
        errors.Typeofinvestment = "Required";
    }
    if (!values.Financialinstitution) {
        errors.Financialinstitution = "Required";
    }
    if (!values.Instrumentrefnumber) {
        errors.Instrumentrefnumber = "Required";
    }
    if (!values.Purpose) {
        errors.Purpose = "Required";
    }
    if (!values.Class) {
        errors.Class = "Required";
    }
    if (!values.Oldoractive) {
        errors.Oldoractive = "Required";
    }
    if (!values.Category) {
        errors.Category = "Required";
    }
    if (!values.Nav) {
        errors.Nav = "Required";
    }
    if (!values.Intfromdate) {
        errors.Intfromdate = "Required";
    }
    if (!values.Intduedate) {
        errors.Intduedate = "Required";
    }
    if (!values.Rateofinterest) {
        errors.Rateofinterest = "Required";
    }
    if (!values.Intcode) {
        errors.Intcode = "Required";
    }
    if (!values.Interest) {
        errors.Interest = "Required";
    }
    if (!values.Cumulativeinterest) {
        errors.Cumulativeinterest = "Required";
    }
    if (!values.Periodicityofinterest) {
        errors.Periodicityofinterest = "Required";
    }
    if (!values.Sourceoffunds) {
        errors.Sourceoffunds = "Required";
    }
    if (!values.Fundsourcereference) {
        errors.Fundsourcereference = "Required";
    }
    if (!values.Foreignorindianportionofinvestedamount) {
        errors.Foreignorindianportionofinvestedamount = "Required";
    }
    if (!values.preclosure) {
        errors.preclosure = "Required";
    }
    if (!values.attachment) {
      errors.attachment = "Required";
  }
    if (!values.interestcredittoSBaccountnumber) {
        errors.interestcredittoSBaccountnumber = "Required";
    }
    if (!values.renewalswithoutcredittothebank) {
      errors.renewalswithoutcredittothebank = "Required";
  }
  if (!values.dateofcreditofinterest) {
    errors.dateofcreditofinterest = "Required";
}
    return errors;
};
return (
    <Formik
        initialValues={{
            Investeddate: "",
            Maturitydate: "",
            Noofdays: "",
            Principal: "",
            Premium: "",
            Premiumamortizationannual: "",
            Discount: "",
            Discountamortizationannual: "",
            Othercharges: "",
            Accruedinterestonpurchase:"",
            JVrefofaccruedinterestnullification: "",
            Typeofinvestment : "",
            Financialinstitution: "",
            Instrumentrefnumber: "",
            Purpose: "",
            Class: "",
            Oldoractive:"",
            Category:"",
            Nav: "",
            Intfromdate: "",
            Intduedate: "",
            Rateofinterest: "",
            Intcode: "",
            Interest: "",
            Cumulativeinterest: "",
            Periodicityofinterest: "",
            Sourceoffunds: "",
            Fundsourcereference: "",
            Foreignorindianportionofinvestedamount: "",
            preclosure: "",
            attachment: "",
            interestcredittoSBaccountnumber: "",
            renewalswithoutcredittothebank: "",
            dateofcreditofinterest : ""
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
                    sx={{ color: "white", backgroundColor: "#B2E9F9", fontFamily:"-moz-initial" }}
                >
                   Generate Report 
                </Typography>
                <br />
                <Grid container rowSpacing={6} columnSpacing={{ xs: 1, sm: 2, md: 12 }} >
                <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Invested date
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Invested date"
                            variant="outlined"
                            placeholder=" Enter the Invested date"
                            value={formik.values.Investeddate} name="Investeddate" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Investeddate && (
                                <span style={{ color: "red" }}>{formik.errors.Investeddate}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        Maturity date
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Maturity date"
                            variant="outlined"
                            placeholder="Enter the Maturity date"
                            value={formik.values.Maturitydate} name="Maturitydate" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Maturitydate && (
                                <span style={{ color: "red" }}>{formik.errors.Maturitydate}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        No. of Days
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="No. of Days"
                            variant="outlined"
                            placeholder="Enter the No. of Days"
                            value={formik.values.Noofdays} name="Noofdays" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Noofdays && (
                                <span style={{ color: "red" }}>{formik.errors.Noofdays}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Principal
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="Principal"
                            variant="outlined"
                            placeholder="Enter the Principal"
                            value={formik.values.Principal} name="Principal" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Principal && (
                                <span style={{ color: "red" }}>{formik.errors.Principal}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Premium
                        </Typography>
                        <br /> <br/>
                        <TextField
                            id="outlined-basic"
                            label="Premium"
                            variant="outlined"
                            placeholder="Enter the Premium"
                            value={formik.values.Premium} name="Premium" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Premium && (
                                <span style={{ color: "red" }}>{formik.errors.Premium}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        Premium amortization annual
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="Premium amortization annual"
                            variant="outlined"
                            placeholder="Enter the Premium amortization annual"
                            value={formik.values.Premiumamortizationannual} name="Premiumamortizationannual" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Premiumamortizationannual && (
                                <span style={{ color: "red" }}>{formik.errors.Premiumamortizationannual}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Discount
                        </Typography>
                        <br /> <br/>
                        <TextField
                            id="outlined-basic"
                            label=" Discount"
                            variant="outlined"
                            placeholder="Enter the Discount"
                            value={formik.values.Discount} name="Discount" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Discount && (
                                <span style={{ color: "red" }}>{formik.errors.Discount}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Discount amortization annual
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Discount amortization annual"
                            variant="outlined"
                            placeholder="Enter the Discount amortization annual"
                            value={formik.values.Discountamortizationannual} name="Discountamortizationannual" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Discountamortizationannual && (
                                <span style={{ color: "red" }}>{formik.errors.Discountamortizationannual}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Other charges
                        </Typography>
                        <br /> <br/>
                        <TextField
                            id="outlined-basic"
                            label="Other charges"
                            variant="outlined"
                            placeholder="Enter the Other charges"
                            value={formik.values.Othercharges} name="Othercharges" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Othercharges && (
                                <span style={{ color: "red" }}>{formik.errors.Othercharges}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Accrued interest on purchase
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Accrued interest on purchase"
                            variant="outlined"
                            placeholder="Enter the Accrued interest on purchase"
                            value={formik.values.Accruedinterestonpurchase} name="Accruedinterestonpurchase" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Accruedinterestonpurchase && (
                                <span style={{ color: "red" }}>{formik.errors.Accruedinterestonpurchase}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        JV ref of accrued interest nullification
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="JV ref of accrued interest nullification"
                            variant="outlined"
                            placeholder="Enter the JV ref of accrued interest nullification value"
                            value={formik.values.JVrefofaccruedinterestnullification} name="JVrefofaccruedinterestnullification" onChange={formik.handleChange}
                            fullWidth
                        />
                        <div>
                            {formik.errors.JVrefofaccruedinterestnullification && (
                                <span style={{ color: "red" }}>{formik.errors.JVrefofaccruedinterestnullification}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px" >
                        type of investment 
                        </Typography>
                        <br /> <br/>
                        <TextField
                            id="outlined-basic"
                            label=" type of investment "
                            variant="outlined"
                            placeholder="Enter the type of investment "
                            value={formik.values.Typeofinvestment} name="Typeofinvestment" onChange={formik.handleChange}
                            fullWidth
                        />
                        <div>
                            {formik.errors.Typeofinvestment && (
                                <span style={{ color: "red" }}>{formik.errors.Typeofinvestment}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Financial institution
                        </Typography>
                        <br /> <br/>
                        <TextField
                            id="outlined-basic"
                            label="Financial institution"
                            variant="outlined"
                            placeholder="Financial institution"
                            value={formik.values.Financialinstitution} name="Financialinstitution" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Financialinstitution && (
                                <span style={{ color: "red" }}>{formik.errors.Financialinstitution}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Instrument Ref number
                        </Typography>
                        <br /> <br />
                        <TextField
                            id="outlined-basic"
                            label="INSTRUMENT ref number"
                            variant="outlined"
                            placeholder="Enter the REF number"
                            value={formik.values.Instrumentrefnumber} name="Instrumentrefnumber" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Instrumentrefnumber && (
                                <span style={{ color: "red" }}>{formik.errors.Instrumentrefnumber}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Purpose
                        </Typography>
                        <br /> <br />
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
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px">
                        Class
                        </Typography>
                        <br /> <br/>
                        <TextField
                            id="outlined-basic"
                            label="Class"
                            variant="outlined"
                            placeholder="Enter the Class"
                            value={formik.values.Class} name="Class" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Class && (
                                <span style={{ color: "red" }}>{formik.errors.Class}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Old/active
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="  Old/active"
                            variant="outlined"
                            placeholder="Enter the Inactive/active "
                            value={formik.values.Oldoractive} name="Oldoractive" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Oldoractive && (
                                <span style={{ color: "red" }}>{formik.errors.Oldoractive}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        Category 
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="Category "
                            variant="outlined"
                            placeholder="Enter the Category "
                            value={formik.values.Category} name="Category" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Category && (
                                <span style={{ color: "red" }}>{formik.errors.Category}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        NAV
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="NAV"
                            variant="outlined"
                            placeholder="Enter the NAV"
                            value={formik.values.Nav} name="Nav" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Nav && (
                                <span style={{ color: "red" }}>{formik.errors.Nav}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        Int from date
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label=" Int from date"
                            variant="outlined"
                            placeholder="Enter the  Int from date"
                            value={formik.values.Intfromdate} name="Intfromdate" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Intfromdate && (
                                <span style={{ color: "red" }}>{formik.errors.Intfromdate}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Int due date
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label=" Int due date"
                            variant="outlined"
                            placeholder="Enter the Int due date"
                            value={formik.values.Intduedate} name="Intduedate" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Intduedate && (
                                <span style={{ color: "red" }}>{formik.errors.Intduedate}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        Rate of Interest
                        </Typography>
                        <br /> 
                        <TextField
                            id="outlined-basic"
                            label="Rate of Interest"
                            variant="outlined"
                            placeholder="Enter the Rate of Interest "
                            value={formik.values.Rateofinterest} name="Rateofinterest" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Rateofinterest && (
                                <span style={{ color: "red" }}>{formik.errors.Rateofinterest}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                       Int Code
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label=" Int Code"
                            variant="outlined"
                            placeholder="Enter the  Int Code"
                            value={formik.values.Intcode} name="Intcode" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Intcode && (
                                <span style={{ color: "red" }}>{formik.errors.Intcode}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Interest
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label=" Interest"
                            variant="outlined"
                            placeholder="Enter the Interest"
                            value={formik.values.Interest} name="Interest" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Interest && (
                                <span style={{ color: "red" }}>{formik.errors.Interest}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                       Cumulative Interest 
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Cumulative Interest "
                            variant="outlined"
                            placeholder="Enter the Cumulative Interest "
                            value={formik.values.Cumulativeinterest} name="Cumulativeinterest" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Cumulativeinterest && (
                                <span style={{ color: "red" }}>{formik.errors.Cumulativeinterest}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        Periodicity of interest
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label=" Periodicity of interest"
                            variant="outlined"
                            placeholder="Enter the   Periodicity of interest"
                            value={formik.values.Periodicityofinterest} name="Periodicityofinterest" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Periodicityofinterest && (
                                <span style={{ color: "red" }}>{formik.errors.Periodicityofinterest}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        source of funds
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="source of funds"
                            variant="outlined"
                            placeholder="Enter the source of funds"
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
                        fund source reference
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label=" fund source reference"
                            variant="outlined"
                            placeholder="Enter the fund source reference number"
                            value={formik.values.Fundsourcereference} name="Fundsourcereference" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Fundsourcereference && (
                                <span style={{ color: "red" }}>{formik.errors.Fundsourcereference}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={5}>
                        <Typography variant="h6" component="h4" align="left">
                        Foreign Indian portion of invested amount
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="Foreign Indian portion of invested amount"
                            variant="outlined"
                            fullWidth="required"
                            placeholder="Enter the Foreign Indian portion of invested amount"
                            value={formik.values.Foreignorindianportionofinvestedamount} name="Foreignorindianportionofinvestedamount" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.Foreignorindianportionofinvestedamount && (
                                <span style={{ color: "red" }}>{formik.errors.Foreignorindianportionofinvestedamount}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left">
                        pre closure
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="pre closure"
                            variant="outlined"
                            fullWidth="required"
                            placeholder="Enter the pre closure"
                            value={formik.values.preclosure} name="preclosure" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.preclosure && (
                                <span style={{ color: "red" }}>{formik.errors.preclosure}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="h4" align="left" >
                        attachment
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="attachment"
                            variant="outlined"
                            fullWidth="required"
                            placeholder="Enter the attachment "
                            value={formik.values.attachment} name="attachment" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.attachment && (
                                <span style={{ color: "red" }}>{formik.errors.attachment}</span>
                            )}
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <Typography variant="h6" component="h4" align="left" >
                        Interest credit to SB account number
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="interest credit to SB account number"
                            variant="outlined"
                            fullWidth="required"
                            placeholder="Enter the account number "
                            value={formik.values.interestcredittoSBaccountnumber} name="interestcredittoSBaccountnumber" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.interestcredittoSBaccountnumber && (
                                <span style={{ color: "red" }}>{formik.errors.interestcredittoSBaccountnumber}</span>
                            )}
                        </div>
                    </Grid>

                    <Grid item xs={3}>
                        <Typography variant="h6" component="h4" align="left" >
                        renewals without credit to the bank
                        </Typography>
                        <br />
                        <TextField
                            id="outlined-basic"
                            label="renewals without credit to the bank"
                            variant="outlined"
                            fullWidth="required"
                            placeholder="Enter the renewals without credit to the bank "
                            value={formik.values.renewalswithoutcredittothebank} name="renewalswithoutcredittothebank" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.renewalswithoutcredittothebank && (
                                <span style={{ color: "red" }}>{formik.errors.renewalswithoutcredittothebank}</span>
                            )}
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant="h6" component="h4" align="left" marginBottom="10px" >
                        date of credit of interest 
                        </Typography>
                        <br />  <br />
                        <TextField
                            id="outlined-basic"
                            label="date of credit of interest "
                            variant="outlined"
                            fullWidth="required"
                            placeholder="Enter the date "
                            value={formik.values.dateofcreditofinterest} name="dateofcreditofinterest" onChange={formik.handleChange}
                        />
                        <div>
                            {formik.errors.dateofcreditofinterest && (
                                <span style={{ color: "red" }}>{formik.errors.dateofcreditofinterest}</span>
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
export default Savereport;
