class AddTimestampsToLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :created_at, :datetime, null: false
    add_column :likes, :updated_at, :datetime, null: false
  end
end
