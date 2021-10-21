class Ivoice < ActiveRecord::Migration[5.2]
  def change
    create_table :invoices do |t|
      t.float :amount, null:false
      t.string :company, null:false
      t.string :contragent, null:false
      t.string :currency, :default => 'USD'
      t.date :date

      t.timestamps null: false
    end
  end
end
