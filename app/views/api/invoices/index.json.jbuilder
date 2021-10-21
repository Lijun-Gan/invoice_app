@invoices.each do |invoice|
    
    json.set! invoice.id do 
        
        json.extract! invoice, :id, :amount, :company, :contragent, :currency, :date
    end
end