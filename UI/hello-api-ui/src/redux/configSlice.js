import {createSlice} from '@reduxjs/toolkit';

// Load config from localStorage or use a default value
const initialConfig = JSON.parse(localStorage.getItem('appConfig')) || {
  name: 'Incognito',
  language: 'en'
};

const configSlice = createSlice({
  name: 'config',
  initialState: initialConfig,
  reducers: {
    updateConfig: (state, action) => {
      // Update the config object
      const newConfig = {...state, ...action.payload};

      // Save the updated config to localStorage
      localStorage.setItem('appConfig', JSON.stringify(newConfig));

      return newConfig;
    },
    resetConfig: () => {
      // Clear config from localStorage and reset to default
      localStorage.removeItem('appConfig');
      return initialConfig;
    },
  },
});

export const {updateConfig, resetConfig} = configSlice.actions;
export default configSlice.reducer;