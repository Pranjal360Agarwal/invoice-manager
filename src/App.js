import React, { useState } from 'react';
import FileUpload from './components/FileUpload';
import InvoicesTab from './components/Tabs/InvoicesTab';
import ProductsTab from './components/Tabs/ProductsTab';
import CustomersTab from './components/Tabs/CustomersTab';

const App = () => {
  const [currentTab, setCurrentTab] = useState('Invoices');

  const renderTab = () => {
    switch (currentTab) {
      case 'Invoices':
        return <InvoicesTab />;
      case 'Products':
        return <ProductsTab />;
      case 'Customers':
        return <CustomersTab />;
      default:
        return null;
    }
  };

  return (
    <div>
      <FileUpload />
      <nav>
        <button onClick={() => setCurrentTab('Invoices')}>Invoices</button>
        <button onClick={() => setCurrentTab('Products')}>Products</button>
        <button onClick={() => setCurrentTab('Customers')}>Customers</button>
      </nav>
      {renderTab()}
    </div>
  );
};

export default App;
