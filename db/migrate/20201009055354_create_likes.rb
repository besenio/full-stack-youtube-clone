class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :user_id, null: false
      t.integer :video_id, null: false
      t.boolean :liked, null: false
    end

    add_index :likes, [:user_id, :video_id], unique: true
  end
end
