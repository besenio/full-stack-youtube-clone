class CreateVideos < ActiveRecord::Migration[5.2]
  def change
    create_table :videos do |t|
      t.integer :uploader_id, null: false
      t.string :title, null: false
      t.text :description
      t.timestamps
    end

    add_index :videos, :uploader_id
    add_index :videos, :title
  end
end
