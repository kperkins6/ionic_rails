class CreateDecks < ActiveRecord::Migration
  def change
    create_table :decks do |t|
      t.integer :user_id
      t.string :description
      t.string :name
      t.integer :tagcards, array:true, default: []

      t.timestamps null: false
    end
  end
end
