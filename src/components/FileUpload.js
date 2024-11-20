import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { setInvoices, setProducts, setCustomers } from "../features/appSlice";
import { extractData } from "../utils/dataExtraction";
import { Button, Box, Typography, CircularProgress } from "@mui/material";

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
  setLoading(true);
  try {
    const extractedData = await Promise.all(files.map(extractData));

    // Combine data from multiple files
    const combinedData = extractedData.reduce(
      (acc, data) => ({
        invoices: [...acc.invoices, ...data.invoices],
        products: [...acc.products, ...data.products],
        customers: [...acc.customers, ...data.customers],
      }),
      { invoices: [], products: [], customers: [] }
    );

    console.log("Combined Extracted Data:", combinedData); // Debugging

    dispatch(setInvoices(combinedData.invoices));
    dispatch(setProducts(combinedData.products));
    dispatch(setCustomers(combinedData.customers));

    alert("Data processed successfully!");
  } catch (error) {
    console.error("Error during file upload:", error);
    alert("Failed to process files.");
  } finally {
    setLoading(false);
  }
};

  return (
    <Box sx={{ marginBottom: 4 }}>
      <Typography variant="h5" sx={{ marginBottom: 2 }}>
        Upload Files
      </Typography>
      <input type="file" multiple onChange={handleFileChange} />
      <Button
        variant="contained"
        color="primary"
        onClick={handleUpload}
        sx={{ marginLeft: 2 }}
        disabled={loading || files.length === 0}
      >
        {loading ? <CircularProgress size={24} /> : "Upload and Process"}
      </Button>
    </Box>
  );
};

export default FileUpload;
