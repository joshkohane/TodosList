# == Schema Information
#
# Table name: tasks
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :text             not null
#  list_id     :integer          not null
#  status      :boolean          default(FALSE), not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Task < ApplicationRecord
    validates :title, :description, :list_id, presence: true

    belongs_to :list
    has_many :comments, dependent: :destroy
end
