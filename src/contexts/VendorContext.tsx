// src/contexts/VendorContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface VendorContextType {
  vendor: any;
  setVendor: (vendor: any) => void;
}

const VendorContext = createContext<VendorContextType>({
  vendor: null,
  setVendor: () => {},
});

const VendorProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [vendor, setVendor] = useState(null);

  return (
    <VendorContext.Provider value={{ vendor, setVendor }}>
      {children}
    </VendorContext.Provider>
  );
};

const useVendor = () => useContext(VendorContext);

export { VendorContext, VendorProvider, useVendor };
