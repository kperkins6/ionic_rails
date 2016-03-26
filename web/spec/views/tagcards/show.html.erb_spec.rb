require 'rails_helper'

RSpec.describe "tagcards/show", type: :view do
  before(:each) do
    @tagcard = assign(:tagcard, Tagcard.create!(
      :user_id => 1,
      :tags => 2,
      :bcard_id => 3
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/1/)
    expect(rendered).to match(/2/)
    expect(rendered).to match(/3/)
  end
end
