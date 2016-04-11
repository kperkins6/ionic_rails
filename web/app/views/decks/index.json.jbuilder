json.array!(@decks) do |deck|
  json.extract! deck, :id, :user_id, :description, :tagcards, :name
  json.url deck_url(deck, format: :json)
end
