import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const CustomersTab = () => {
  const customers = useSelector((state) => state.app.customers);

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Customers
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer Name</TableCell>
            <TableCell>Phone Number</TableCell>
            <TableCell>Total Purchase Amount</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {customers.map((customer, idx) => (
            <TableRow key={idx}>
              <TableCell>{customer.name}</TableCell>
              <TableCell>{customer.phoneNumber}</TableCell>
              <TableCell>{customer.totalPurchaseAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomersTab;
