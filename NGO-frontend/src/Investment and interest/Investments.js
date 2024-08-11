import logo from './logo.svg';
import './App.css';
import { Table,TableContainer,TableHead,TableBody,TableRow,TableCell, Paper, Box, Typography, Link, Button } from '@mui/material';

function Investments() {

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
      }} >TOTAL INVESTMENTS</Typography>
      <br/>
      <Box mx={17}>
     <TableContainer component={Paper} sx={{maxHeight: '500px'}}>
      <Table aria-aria-label='simple table' stickyHeader> 
        <TableHead>
          <TableRow sx={{border: '1px solid'}}>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width:'500px', align:'center',  fontFamily:'-moz-initial',}}> TYPE OF INVESTMENTS</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> INVESTED AMOUNT</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> ACTION</TableCell>
            
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
            <TableCell><Button sx={{backgroundColor:'#D8EFFC', fontFamily:'lowercase'}}>{row.action}</Button></TableCell>
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
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'mutual',
    amount: '1390',
    action:'do action'
  },
  {
    investments: 'fixed',
    amount: '1390',
    action:'do action'
  },
]

export default Investments;
