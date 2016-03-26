require 'rails_helper'

RSpec.describe "decks/index", type: :view do
  before(:each) do
    assign(:decks, [
      Deck.create!(
        :user_id => 1,
        :description => "Description",
        :tagcards => 2
      ),
      Deck.create!(
        :user_id => 1,
        :description => "Description",
        :tagcards => 2
      )
    ])
  end

  it "renders a list of decks" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => "Description".to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
  end
end
