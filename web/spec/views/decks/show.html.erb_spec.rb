require 'rails_helper'

RSpec.describe "decks/show", type: :view do
  before(:each) do
    @deck = assign(:deck, Deck.create!(
      :user_id => 1,
      :description => "Description",
      :tagcards => 2
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/Description/)
    expect(rendered).to match(/2/)
  end
end
