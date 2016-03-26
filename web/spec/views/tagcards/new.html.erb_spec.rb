require 'rails_helper'

RSpec.describe "tagcards/new", type: :view do
  before(:each) do
    assign(:tagcard, Tagcard.new(
      :user_id => 1,
      :tags => 1,
      :bcard_id => 1
    ))
  end

  it "renders new tagcard form" do
    render

    assert_select "form[action=?][method=?]", tagcards_path, "post" do

      assert_select "input#tagcard_user_id[name=?]", "tagcard[user_id]"

      assert_select "input#tagcard_tags[name=?]", "tagcard[tags]"

      assert_select "input#tagcard_bcard_id[name=?]", "tagcard[bcard_id]"
    end
  end
end
