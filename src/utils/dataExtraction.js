import axios from "axios";

// Mock data extraction for development
export const extractData = async (file) => {
  console.log("Processing file:", file.name);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        invoices: [
          { serialNumber: 1, customerName: "John Doe", productName: "Laptop", qty: 1, tax: 18, totalAmount: 1180, date: "2024-11-19" },
        ],
        products: [
          { name: "Laptop", quantity: 1, unitPrice: 1000, tax: 18, priceWithTax: 1180 },
        ],
        customers: [
          { name: "John Doe", phoneNumber: "1234567890", totalPurchaseAmount: 1180 },
        ],
      });
    }, 2000);
  });
};
