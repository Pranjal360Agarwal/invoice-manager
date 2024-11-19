import React, { useState } from "react";
import FileUpload from "./components/FileUpload";
import InvoicesTab from "./components/Tabs/InvoicesTab";
import ProductsTab from "./components/Tabs/ProductsTab";
import CustomersTab from "./components/Tabs/CustomersTab";
import { Button, Box } from "@mui/material";

const App = () => {
  const [currentTab, setCurrentTab] = useState("Invoices");

  const renderTab = () => {
    switch (currentTab) {
      case "Invoices":
        return <InvoicesTab />;
      case "Products":
        return <ProductsTab />;
      case "Customers":
        return <CustomersTab />;
      default:
        return null;
    }
  };

  return (
    <Box sx={{ padding: 4 }}>
      <FileUpload />
      <Box sx={{ display: "flex", gap: 2, marginBottom: 4 }}>
        <Button variant={currentTab === "Invoices" ? "contained" : "outlined"} onClick={() => setCurrentTab("Invoices")}>
          Invoices
        </Button>
        <Button variant={currentTab === "Products" ? "contained" : "outlined"} onClick={() => setCurrentTab("Products")}>
          Products
        </Button>
        <Button variant={currentTab === "Customers" ? "contained" : "outlined"} onClick={() => setCurrentTab("Customers")}>
          Customers
        </Button>
      </Box>
      {renderTab()}
    </Box>
  );
};

export default App;
