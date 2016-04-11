class TagSerializer < ActiveModel::Serializer
  attributes :id, :address, :linkedin, :facebook, :twitter, :instagram, :pinterest, :name
end
