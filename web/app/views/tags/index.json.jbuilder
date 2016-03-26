json.array!(@tags) do |tag|
  json.extract! tag, :id, :text, :hits
  json.url tag_url(tag, format: :json)
end
