require 'rails_helper'

RSpec.describe "Bcards", type: :request do
  describe "GET /bcards" do
    it "works! (now write some real specs)" do
      get bcards_path
      expect(response).to have_http_status(200)
    end
  end
end
