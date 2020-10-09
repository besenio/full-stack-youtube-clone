# == Schema Information
#
# Table name: videos
#
#  id          :bigint           not null, primary key
#  uploader_id :integer          not null
#  title       :string           not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Video < ApplicationRecord

    validates :uploader_id, presence: true
    validates :title, presence: true

    validate :ensure_video
    validate :ensure_thumbnail

    belongs_to :uploader,
        primary_key: :id,
        foreign_key: :uploader_id,
        class_name: :User

    has_many :comments,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Comment

    has_many :likes,
        primary_key: :id,
        foreign_key: :video_id,
        class_name: :Like

    has_one_attached :video
    has_one_attached :thumbnail

    def ensure_video
        unless self.video.attached?
            errors[:video] << "Must be attached"
        end
    end

    def ensure_thumbnail
        unless self.thumbnail.attached?
            errors[:thumbnail] << "Must be attached"
        end
    end

    def num_likes
        self.likes.count { |like| like.liked }
    end

    def num_dislikes
        self.likes.count { |like| !like.liked }
    end

end
