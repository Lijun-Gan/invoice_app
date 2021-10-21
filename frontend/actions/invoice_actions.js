import * as APIUtil from '../util/invoice_api_util';

export const RECEIVE_INVOICES = "RECEIVE_INVOICES";
export const RECEIVE_INVOICE = "RECEIVE_INVOICE";

export const recieveInvoices = (invoices) =>{
    return{
        type: RECEIVE_INVOICES,
        invoices,
    }
}

export const recieveInvoice = (invoice) => {
    return {
        type: RECEIVE_INVOICE,
        invoice,
    }
}

export const createInvoice = invoice => dispatch => {
    return(
        APIUtil.createInvoice(invoice).then(
            (invoice) => {
            
                dispatch(recieveInvoice(invoice))
            }
        )
    )
}

export const fetchInvoices = () => dispatch =>{
    
    return(
        APIUtil.fetchInvoices().then((invoices) => dispatch(recieveInvoices(invoices)))
    )
}

export const fetchInvoice = (invoiceId) => dispatch =>{
    return(
        APIUtil.fetchInvoice(invoiceId).then((invoice) => dispatch(recieveInvoices(invoice)))
    )
}