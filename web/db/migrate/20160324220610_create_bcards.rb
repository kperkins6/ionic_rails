class CreateBcards < ActiveRecord::Migration
  def change
    create_table :bcards do |t|
      t.text :address
      t.string :linkedin
      t.string :facebook
      t.string :twitter
      t.string :instagram
      t.string :pinterest
      t.string :first_name
      t.string :last_name

      t.timestamps null: false
    end
  end
end
