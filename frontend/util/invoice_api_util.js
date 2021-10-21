

export const createInvoice = invoice => {
    return ($.ajax({
        method: "POST",
        url: "api/invoices",
        data: {invoice}
        })
    )
}

export const fetchInvoices = () => {
    
    return  ($.ajax({
        method: "GET",
        url: "api/invoices"
        })
    )
}

export const fetchInvoice = (invoiceId) => {

    return ($.ajax({
        method: "GET",
        url: `api/invoices/${invoiceId}`
        })
    )
}

