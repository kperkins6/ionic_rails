require 'rails_helper'

RSpec.describe "decks/edit", type: :view do
  before(:each) do
    @deck = assign(:deck, Deck.create!(
      :user_id => 1,
      :description => "MyString",
      :tagcards => 1
    ))
  end

  it "renders the edit deck form" do
    render

    assert_select "form[action=?][method=?]", deck_path(@deck), "post" do

      assert_select "input#deck_user_id[name=?]", "deck[user_id]"

      assert_select "input#deck_description[name=?]", "deck[description]"

      assert_select "input#deck_tagcards[name=?]", "deck[tagcards]"
    end
  end
end
