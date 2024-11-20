import React from "react";
import { useSelector } from "react-redux";
import { Table, TableBody, TableCell, TableHead, TableRow, Typography } from "@mui/material";

const ProductsTab = () => {
  const products = useSelector((state) => state.app.products);

  return (
    <div>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Products
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Product Name</TableCell>
            <TableCell>Quantity</TableCell>
            <TableCell>Unit Price</TableCell>
            <TableCell>Tax</TableCell>
            <TableCell>Price with Tax</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((product, idx) => (
            <TableRow key={idx}>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.quantity}</TableCell>
              <TableCell>{product.unitPrice}</TableCell>
              <TableCell>{product.tax}</TableCell>
              <TableCell>{product.priceWithTax}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductsTab;
