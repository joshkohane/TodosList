class CreateLists < ActiveRecord::Migration[5.2]
  def change
    create_table :lists do |t|
      t.string :title, null: false

      t.timestamps
    end
    add_index :lists, :title, unique: true
  end
end
