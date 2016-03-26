class CreateTags < ActiveRecord::Migration
  def change
    create_table :tags do |t|
      t.string :text
      t.integer :hits

      t.timestamps null: false
    end
  end
end
