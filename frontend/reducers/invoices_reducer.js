import  {RECEIVE_INVOICE, RECEIVE_INVOICES} from '../actions/invoice_actions';

export default (state={},action) => {
    Object.freeze(state)
    const nextState = Object.assign({}, state)

    switch(action.type){
        case RECEIVE_INVOICES:
            
            return Object.assign({} ,action.invoices)

        case RECEIVE_INVOICE:
            nextState[action.invoice.id] = action.invoice
            return nextState

        default: {
            return state
        }
    }
}