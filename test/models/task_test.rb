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
require 'test_helper'

class TaskTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
