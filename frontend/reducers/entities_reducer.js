import { combineReducers } from "redux";
import invoiceReducer from './invoices_reducer';

const entitiesReducer = combineReducers({
    invoices: invoiceReducer
})

export default entitiesReducer