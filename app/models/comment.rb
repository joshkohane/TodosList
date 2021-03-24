# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  text       :text             not null
#  task_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
    validates :text, :task_id, presence: true

    belongs_to :task
end
