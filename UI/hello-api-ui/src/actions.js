const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

const removeEmptyFields = (obj) => {
  return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null && v !== ''));
};

