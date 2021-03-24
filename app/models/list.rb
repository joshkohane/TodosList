# == Schema Information
#
# Table name: lists
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class List < ApplicationRecord
    validates :title, presence: true

    has_many :tasks, dependent: :destroy
    has_many :comments, 
        through: :tasks,
        source: :comments
end
