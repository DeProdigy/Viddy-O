# == Schema Information
#
# Table name: videos
#
#  id             :integer          not null, primary key
#  compilation_id :integer
#  seq_id         :integer
#  video_url      :string(255)
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

class Video < ActiveRecord::Base
  attr_accessible :compilation_id, :seq_id, :video_url, :img_url

  # validates :compilation_id, presence: true
  # validates :video_url, presence: true

  belongs_to :compilation
end
