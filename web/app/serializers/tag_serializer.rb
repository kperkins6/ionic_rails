class TagSerializer < ActiveModel::Serializer
  attributes :id, :text, :hits
end
