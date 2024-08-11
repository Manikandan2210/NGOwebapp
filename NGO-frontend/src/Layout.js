import { FormLabel, TextField } from "@mui/material";
import Grid from "@mui/material/Grid";
function App() {
  return (
    <Grid
      container
      rowSpacing={1}
      columnSpacing={{ xs: 1, sm: 2, md: 3 }}
      sx={{ height: "100vh" }}
    >
      <Grid item xs={3}>
        <FormLabel>Remittance Mode</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Donor Types</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Tax Exemption category</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Fund source</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Nature of Donation</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Purpose</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Currency</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Amount in the Instrument if Fc is Applicable</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Exchange Rate</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Amount in Rs</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>

      <Grid item xs={3}>
        <FormLabel>Bank Charges</FormLabel>
        <br />
        <TextField size="small" type="text" />
      </Grid>
    </Grid>
  );
}
export default App;
<TextField
            id="outlined-basic"
            label="Remittance Mode"
            variant="outlined"
            placeholder="Enter Remittance Mode"
          />