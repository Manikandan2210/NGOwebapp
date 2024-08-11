import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { InputLabel, MenuItem, Select, TextField } from "@mui/material";

function DonationDetails() {
  return (
    <form style={{ margin: "2%", backgroundColor:"whitesmoke", height:"90vh" }} >
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
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            Remittance Mode
          </Typography>
          <br />
          <InputLabel id="menu"  >Remittance Mode</InputLabel>
          <Select labelId="menu" label="Age" fullWidth>
          <MenuItem value={'SBI Collect'}>SBI Collect</MenuItem>
          <MenuItem value={'NEFT/RTGS'}>NEFT/RTGS</MenuItem>
          <MenuItem value={'Cash'}>Cash</MenuItem>
          <MenuItem value={'Cheque'}>Cheque</MenuItem>
          <MenuItem value={'DD'}>DD</MenuItem>
          <MenuItem value={'IMPS'}>IMPS</MenuItem>
          <MenuItem value={'Swift'}>Swift</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            Donor Types
          </Typography>
          <br />
          <InputLabel id="menu"  >Donor Types</InputLabel>
          <Select labelId="menu" label="Donor Types" fullWidth>
          <MenuItem value={'Alumini'}>Alumini</MenuItem>
          <MenuItem value={'Corporate'}>Corporate</MenuItem>
          <MenuItem value={'General Donor'}>General Donor</MenuItem>
          <MenuItem value={'Trust'}>Trust</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            TaxExemption category
          </Typography>
          <br />
          <InputLabel id="menu"  >TaxExemption category</InputLabel>
          <Select labelId="menu" label="TaxExemption category" fullWidth>
          <MenuItem value={'80G'}>80G</MenuItem>
          <MenuItem value={'NON-80G'}>NON-80G</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            Fund source
          </Typography>
          <br />
          <InputLabel id="menu"  >Fund source</InputLabel>
          <Select labelId="menu" label="Fund source" fullWidth>
          <MenuItem value={'Indian'}>Indian</MenuItem>
          <MenuItem value={'Foreign'}>Foreign</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            Nature of Donation
          </Typography>
          <br />
          <InputLabel id="menu"  >Nature of Donation</InputLabel>
          <Select labelId="menu" label="Nature of Donation" fullWidth>
          <MenuItem value={'Indian'}>CORPUS</MenuItem>
          <MenuItem value={'Foreign'}>NON CORPUS</MenuItem>
          </Select>
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
          />
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            Currency
          </Typography>
          <br />
          <InputLabel id="menu"  >Currency</InputLabel>
          <Select labelId="menu" label="Nature of Donation" fullWidth>
          <MenuItem value={'Indian'}>Indian</MenuItem>
          <MenuItem value={'Foreign'}>Foreign</MenuItem>
          </Select>
        </Grid>
        <Grid item xs={3}>
          <Typography variant="h6" component="h4" align="left">
            Exchange Rate
          </Typography>
          <br/><br/>
          <TextField
            id="outlined-basic"
            label="Exchange Rate"
            variant="outlined"
            placeholder="Enter the Exchange Rate"
          />
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
          />
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
          />
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
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
}
export default DonationDetails;
