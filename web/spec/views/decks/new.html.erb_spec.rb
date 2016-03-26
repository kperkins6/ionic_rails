require 'rails_helper'

RSpec.describe "decks/new", type: :view do
  before(:each) do
    assign(:deck, Deck.new(
      :user_id => 1,
      :description => "MyString",
      :tagcards => 1
    ))
  end

  it "renders new deck form" do
    render

    assert_select "form[action=?][method=?]", decks_path, "post" do

      assert_select "input#deck_user_id[name=?]", "deck[user_id]"

      assert_select "input#deck_description[name=?]", "deck[description]"

      assert_select "input#deck_tagcards[name=?]", "deck[tagcards]"
    end
  end
end
