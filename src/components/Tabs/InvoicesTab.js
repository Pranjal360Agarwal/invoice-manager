import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const InvoicesTab = () => {
  const invoices = useSelector((state) => state.app.invoices);

  if (!Array.isArray(invoices)) return <Typography>No invoices to display. Please upload a file.</Typography>;

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Invoices
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Serial Number</TableCell>
            <TableCell>Customer Name</TableCell>
            <TableCell>Product Name</TableCell>
            <TableCell>Qty</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Total Amount</TableCell>
            <TableCell>Date</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {invoices.map((invoice, idx) => (
            <TableRow key={idx}>
              <TableCell>{invoice.serialNumber}</TableCell>
              <TableCell>{invoice.customerName}</TableCell>
              <TableCell>{invoice.productName}</TableCell>
              <TableCell>{invoice.qty}</TableCell>
              <TableCell>{invoice.tax}</TableCell>
              <TableCell>{invoice.totalAmount}</TableCell>
              <TableCell>{invoice.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default InvoicesTab;
