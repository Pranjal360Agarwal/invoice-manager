import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setInvoices, setProducts, setCustomers } from '../features/appSlice';
import { extractData } from '../utils/dataExtraction';

const FileUpload = () => {
  const [files, setFiles] = useState([]);
  const dispatch = useDispatch();

  const handleFileChange = (e) => {
    setFiles([...e.target.files]);
  };

  const handleUpload = async () => {
    try {
      const extractedData = await Promise.all(files.map(extractData));
      extractedData.forEach((data) => {
        dispatch(setInvoices(data.invoices));
        dispatch(setProducts(data.products));
        dispatch(setCustomers(data.customers));
      });
    } catch (error) {
      alert('Error during file upload.');
    }
  };

  return (
    <div>
      <input type="file" multiple onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload and Process</button>
    </div>
  );
};

export default FileUpload;
