import { TableContainer, Table, TableHead, TableBody, TableCell, Paper, TableRow, Typography, Box } from "@mui/material"

function Expensereport() {
  return (
    <>
    <br />
    <Typography  sx={{
        fontFamily: '-moz-initial',
        fontSize: '20px',
       color: 'primary',
       backgroundColor:'#B2E9F9',
       }} align='center'>EXPENSE REPORT</Typography>
       
      <br/>
      <Box mx={17}>
     <TableContainer component={Paper} sx={{maxHeight: '500px'}}>
      <Table aria-label='simple table' stickyHeader> 
        <TableHead>
          <TableRow sx={{border: '1px solid'}}>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width:'500px', align:'center',  fontFamily:'-moz-initial',}}> DATE</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> TYPE of EXPENSE</TableCell>
            <TableCell sx={{ backgroundColor: '#B2E9F9', width: '500px', align:'center',  fontFamily:'-moz-initial',}}> EXPENSE AMOUNT</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {tableData.map((row)=>(
          <TableRow
            key = {row.id}
            sx= {{ '&:last-child td, &:last-child th':{border:0 }}}>

            <TableCell sx={{align: 'center'}}>{row.date}</TableCell>
            <TableCell>{row.type}</TableCell>
            <TableCell>{row.amount}</TableCell>
          </TableRow>
            ))}
        </TableBody>
      </Table>
     </TableContainer>
     </Box>
        </>
    
  );
}

const tableData = [{
  "date": "20/01/2023",
  "type": "travel",
  "amount": "7879",
  
}, {
  "date": "20/02/2023",
  "type": "seminar",
  "amount": "600",
  
}, {
  "date": "20/03/2023",
  "type": "pendrive",
  "amount": "1000",
  
}, {
  "date": "20/04/2023",
  "type": "projector",
  "amount": "56478",
  
}, {
  "date": "20/05/2023",
  "type": "computers",
  "amount": "6758599",
 
}, {
  "date": "20/06/2023",
  "type": "powerbackup",
  "amount": "5000",
  
}, {
  "date": "20/07/2023",
  "type": "graphics card",
  "amount": "3000",
 
}, {
  "date": "20/08/2023",
  "type": "processor",
  "amount": "676767",
  
}, {
  "date": "20/09/2023",
  "type": "case",
  "amount": "5674",
  
}, {
  "date": "20/10/2023",
  "type": "keyboard",
  "amount": "2067",
  
}]

export default Expensereport;



