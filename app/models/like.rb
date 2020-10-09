class Like < ApplicationRecord
   validates :user_id, presence: true
   validates :video_id, presence: true, uniqueness: { scope: :user_id }
   validates :liked, inclusion: { in: [true, false] }

   belongs_to :user,
      primary_key: :id,
      foreign_key: :user_id,
      class_name: :User

   belongs_to :video,
      primary_key: :id,
      foreign_key: :video_id,
      class_name: :Video
end
