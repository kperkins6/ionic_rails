class BcardSerializer < ActiveModel::Serializer
  attributes :id, :address, :linkedin, :phone, :email_address, :position, :facebook, :twitter, :instagram, :pinterest, :name
end
