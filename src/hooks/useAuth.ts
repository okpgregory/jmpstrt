// src/hooks/useAuth.ts

// Your hook implementation here
// For example:
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;

// Ensure the file is treated as a module
export {};
