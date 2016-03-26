json.array!(@decks) do |deck|
  json.extract! deck, :id, :user_id, :description, :tagcards
  json.url deck_url(deck, format: :json)
end
