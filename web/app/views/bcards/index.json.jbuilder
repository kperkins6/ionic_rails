json.array!(@bcards) do |bcard|
  json.extract! bcard, :id, :address, :linkedin, :facebook, :twitter, :instagram, :pinterest, :name, :company, :website
  json.url bcard_url(bcard, format: :json)
end
