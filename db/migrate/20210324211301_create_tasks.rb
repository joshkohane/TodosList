class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :list_id, null: false
      t.boolean :status, null: false, default: false

      t.timestamps
    end
    add_index :tasks, :list_id
    add_index :tasks, :title
  end
end
