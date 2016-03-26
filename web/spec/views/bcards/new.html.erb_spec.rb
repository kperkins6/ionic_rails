require 'rails_helper'

RSpec.describe "bcards/new", type: :view do
  before(:each) do
    assign(:bcard, Bcard.new(
      :address => "MyText",
      :linkedin => "MyString",
      :facebook => "MyString",
      :twitter => "MyString",
      :instagram => "MyString",
      :pinterest => "MyString",
      :first_name => "MyString",
      :last_name => "MyString"
    ))
  end

  it "renders new bcard form" do
    render

    assert_select "form[action=?][method=?]", bcards_path, "post" do

      assert_select "textarea#bcard_address[name=?]", "bcard[address]"

      assert_select "input#bcard_linkedin[name=?]", "bcard[linkedin]"

      assert_select "input#bcard_facebook[name=?]", "bcard[facebook]"

      assert_select "input#bcard_twitter[name=?]", "bcard[twitter]"

      assert_select "input#bcard_instagram[name=?]", "bcard[instagram]"

      assert_select "input#bcard_pinterest[name=?]", "bcard[pinterest]"

      assert_select "input#bcard_first_name[name=?]", "bcard[first_name]"

      assert_select "input#bcard_last_name[name=?]", "bcard[last_name]"
    end
  end
end
