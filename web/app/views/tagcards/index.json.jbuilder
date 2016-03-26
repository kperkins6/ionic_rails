json.array!(@tagcards) do |tagcard|
  json.extract! tagcard, :id, :user_id, :tags, :bcard_id
  json.url tagcard_url(tagcard, format: :json)
end
