# questions: name space, api. Why do we need name space, api
# what is used for ?
class Api::InvoicesController < ApplicationController

    def index
        
        @invoices = Invoice.all
        render :index
    end

    def show 
        @invoice = Invoice.find_by(id: params[:id])
        render :show
    end

    def create
        @invoice = Invoice.new(invoice_params)
        if @invoice.save
            render :show
        else
            render json: @invoice.errors.full_message, status: 404
        end
    end

    def invoice_params
        params.require(:invoice).permit(:amount, :company, :contragent, :currency, :date)
    end
end
