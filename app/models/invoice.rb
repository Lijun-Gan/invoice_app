class Invoice < ApplicationRecord
    validates :amount, presence: true
    validates :company, presence: true
    validates :contragent, presence: true
end
