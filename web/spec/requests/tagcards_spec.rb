require 'rails_helper'

RSpec.describe "Tagcards", type: :request do
  describe "GET /tagcards" do
    it "works! (now write some real specs)" do
      get tagcards_path
      expect(response).to have_http_status(200)
    end
  end
end
