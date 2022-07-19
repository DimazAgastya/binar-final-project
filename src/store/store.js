import { combineReducers, createStore } from "redux";
import sidebar from "./sidebar/reducers/sidebar";
import productReducer from "./product/reducer";

window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const reducers = combineReducers({
	sidebar: sidebar,
	product: productReducer,
});

const store = createStore(reducers);

export default store;

/*

import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";

const store = configureStore({
	reducer: {
		user: userSlice.reducer,
	},
});

export default store;



import React from "react";

const store = () => {
	return <div>ini tes store binar-finalproject</div>;
};

export default store;

*/
