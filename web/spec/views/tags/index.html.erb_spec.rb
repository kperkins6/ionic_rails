require 'rails_helper'

RSpec.describe "tags/index", type: :view do
  before(:each) do
    assign(:tags, [
      Tag.create!(
        :text => "Text",
        :hits => 1
      ),
      Tag.create!(
        :text => "Text",
        :hits => 1
      )
    ])
  end

  it "renders a list of tags" do
    render
    assert_select "tr>td", :text => "Text".to_s, :count => 2
    assert_select "tr>td", :text => 1.to_s, :count => 2
  end
end
