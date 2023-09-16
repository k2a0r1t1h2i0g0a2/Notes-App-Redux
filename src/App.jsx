import React from 'react';
import Home from './components/Home';
import { Routes, Route } from 'react-router-dom';
import AddNote from './components/AddNote';
import { Provider } from "react-redux";
import RootReducer from "./Features/RootReducer";
import { configureStore } from "@reduxjs/toolkit";
import EditNote from './components/EditNote';
const store = configureStore({
  reducer: RootReducer, 
});

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="addnote" element={<AddNote />} />
          <Route path="/editnote/:noteId" element={<EditNote />} />
        </Routes>
      </Provider>
    </div>
  );
};

export default App;