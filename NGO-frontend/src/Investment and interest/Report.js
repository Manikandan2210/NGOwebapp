import logo from './logo.svg';
import './App.css';
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell, Paper, Box, Typography, Link, Button, TextField } from '@mui/material';

function Report() {
  return (
    <div className="App">
    <br/>
   
    <Typography sx={{
      fontFamily:'-moz-initial',
      fontSize:'20px',
      color:'primary',
      backgroundColor:'#B2E9F9',
      color:'#0A5064',
      align:'center'
    }} >REPORT</Typography>
    <br/>
    <Box mx={17}>
   <TableContainer component={Paper} sx={{maxHeight: '500px'}}>
    <Table aria-aria-label='simple table' stickyHeader> 
      <TableHead>
        <TableRow sx={{border: '1px solid'}}>
          <TableCell sx={{ backgroundColor: '#B2E9F9', width:'500px', align:'center',  fontFamily:'-moz-initial',}}> </TableCell>
          <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> </TableCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {tableData.map((row)=>(
        <TableRow
          key = {row.id}
          sx= {{ '&:last-child td, &:last-child th':{border:0 }}}
        >
          <TableCell sx={{align: 'center'}}>{row.investments}</TableCell>
          <TableCell>{row.amount}</TableCell>
          
          </TableRow>
         
          
        
        ))}
      </TableBody>
    </Table>

   </TableContainer>
   </Box>
  </div>
);
}

const tableData = [
{
  investments: 'Invested date',
  amount: '26/02/2023',
  sree:'wwwwwwwww',
  action:'do action'
},
{
  investments: 'Maturity date',
  amount: '26/02/2028',
  action:'do action'
},
{
  investments: 'No. of Days',
  amount: '1890',
  action:'do action'
},
{
  investments: 'Principal',
  amount: '1090',
  action:'do action'
},
{
  investments: 'Premium',
  amount: '1390',
  action:'do action'
},
{
  investments: 'Premium amortization annual',
  amount: '1390',
  action:'do action'
},
{
  investments: 'Discount',
  amount: '1390',
  action:'do action'
},
{
  investments: 'Discount amortization annual',
  amount: '1390',
  action:'do action'
},
{
  investments: 'Other charges',
  amount: 'nil',
  action:'do action'
},
{
  investments: 'Accrued interest on purchase',
  amount: '1000',
  action:'do action'
},
{
  investments: 'JV ref of accrued interest nullification',
  amount: '1390',
  action:'do action'
},
{
  investments: 'type of investment ',
  amount: 'corpus',
  action:'do action'
},
{
  investments: 'Financial institution',
  amount: 'sbi',
  action:'do action'
},
{
  investments: 'INSTRUMENT Reference number',
  amount: '120930393',
  action:'do action'
},
{
  investments: 'Purpose',
  amount: 'education',
  action:'do action'
},
{
  investments: 'Class',
  amount: 'A',
  action:'do action'
},
{
  investments: 'Inactive/Active',
  amount: 'Active',
  action:'do action'
},

{
  investments: 'Category',
  amount: 'education',
  action:'do action'
},
{
  investments: 'NAV',
  amount: 'education',
  action:'do action'
},

{
  investments: 'int from date',
  amount: '22/01/2024',
  action:'do action'
},
{
  investments: 'int due date',
  amount: '22/02/2024',
  action:'do action'
},
{
  investments: 'rate of interest',
  amount: '10',
  action:'do action'
},
{
  investments: 'interest',
  amount: '130',
  action:'do action'
},
{
  investments: 'cumulative interest',
  amount: '2',
  action:'do action'
},
{
  investments: 'source of funds',
  amount: 'corpus',
  action:'do action'
},
{
  investments: 'fund source reference',
  amount: '1278950',
  action:'do action'
},
{
  investments: 'Foreign Indian portion of invested amount',
  amount: 'indian',
  action:'do action'
},
{
  investments: 'pre closure',
  amount: 'done',
  action:'do action'
},
{
  investments: 'Interest credit to SB account number',
  amount: '000000000000',
  action:'do action'
},

{
  investments: 'renewals without credit to the bank',
  amount: '26/02/2024',
  action:'do action'
},
{
  investments: 'date of credit of interest',
  amount: '26/02/2024',
  action:'do action'
},



]


export default Report;
