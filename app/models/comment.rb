class Comment < ApplicationRecord

    validates :author_id, presence: true
    validates :video_id, presence: true
    validates :body, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :video,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Video

end
