require 'rails_helper'

RSpec.describe "bcards/index", type: :view do
  before(:each) do
    assign(:bcards, [
      Bcard.create!(
        :address => "MyText",
        :linkedin => "Linkedin",
        :facebook => "Facebook",
        :twitter => "Twitter",
        :instagram => "Instagram",
        :pinterest => "Pinterest",
        :first_name => "First Name",
        :last_name => "Last Name"
      ),
      Bcard.create!(
        :address => "MyText",
        :linkedin => "Linkedin",
        :facebook => "Facebook",
        :twitter => "Twitter",
        :instagram => "Instagram",
        :pinterest => "Pinterest",
        :first_name => "First Name",
        :last_name => "Last Name"
      )
    ])
  end

  it "renders a list of bcards" do
    render
    assert_select "tr>td", :text => "MyText".to_s, :count => 2
    assert_select "tr>td", :text => "Linkedin".to_s, :count => 2
    assert_select "tr>td", :text => "Facebook".to_s, :count => 2
    assert_select "tr>td", :text => "Twitter".to_s, :count => 2
    assert_select "tr>td", :text => "Instagram".to_s, :count => 2
    assert_select "tr>td", :text => "Pinterest".to_s, :count => 2
    assert_select "tr>td", :text => "First Name".to_s, :count => 2
    assert_select "tr>td", :text => "Last Name".to_s, :count => 2
  end
end
