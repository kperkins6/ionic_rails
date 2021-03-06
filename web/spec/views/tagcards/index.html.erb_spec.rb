require 'rails_helper'

RSpec.describe "tagcards/index", type: :view do
  before(:each) do
    assign(:tagcards, [
      Tagcard.create!(
        :user_id => 1,
        :tags => 2,
        :bcard_id => 3
      ),
      Tagcard.create!(
        :user_id => 1,
        :tags => 2,
        :bcard_id => 3
      )
    ])
  end

  it "renders a list of tagcards" do
    render
    assert_select "tr>td", :text => 1.to_s, :count => 2
    assert_select "tr>td", :text => 2.to_s, :count => 2
    assert_select "tr>td", :text => 3.to_s, :count => 2
  end
end
