import React, { createContext, useState } from 'react';
import data from '../data/data.json';


export const PetStoreContext = createContext();

export const PetStoreProvider = ({ children }) => {
  const [products, setProducts] = useState(data.productos);

  return (
    <PetStoreContext.Provider value={{ products }}>
      {children}
    </PetStoreContext.Provider>
  );
};
