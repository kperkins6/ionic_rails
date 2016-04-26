class DeckSerializer < ActiveModel::Serializer
  attributes :id, :description, :user_id,:name, :tagcards => []
end
