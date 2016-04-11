class CreateTagcards < ActiveRecord::Migration
  def change
    create_table :tagcards do |t|
      t.integer :user_id
      t.integer :tags, array: true, default: []
      t.integer :bcard_id

      t.timestamps null: false
    end
  end
end
