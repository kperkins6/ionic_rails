class TagcardSerializer < ActiveModel::Serializer
  attributes :id, :user_id,:bcard_id, :tagss => []
end
