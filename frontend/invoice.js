import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import {createInvoice, fetchInvoices, fetchInvoice} from './actions/invoice_actions';
// import 'bootstrap/dist/css/bootstrap.min.css';
// questions: Cannot solve this with webpack
document.addEventListener("DOMContentLoaded", ()=>{
    const root = document.getElementById("root");
    const store = configureStore()

    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.createInvoice = createInvoice
    window.fetchInvoice = fetchInvoice
    window.fetchInvoices = fetchInvoices
// dispatch(createInvoice({company: "amazen",contragent: "lijun", amount: "2.00", currency: "us", date:""}))
    ReactDOM.render(<Root store={store} />, root);

})