class CreateBcards < ActiveRecord::Migration
  def change
    create_table :bcards do |t|
      t.text :address
      t.string :linkedin
      t.string :phone
      t.string :email_address
      t.string :position
      t.string :facebook
      t.string :twitter
      t.string :instagram
      t.string :pinterest
      t.string :name
      t.integer :user_id
      t.string :company
      t.string :website

      t.timestamps null: false
    end
  end
end
