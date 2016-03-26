require 'rails_helper'

RSpec.describe "bcards/show", type: :view do
  before(:each) do
    @bcard = assign(:bcard, Bcard.create!(
      :address => "MyText",
      :linkedin => "Linkedin",
      :facebook => "Facebook",
      :twitter => "Twitter",
      :instagram => "Instagram",
      :pinterest => "Pinterest",
      :first_name => "First Name",
      :last_name => "Last Name"
    ))
  end

  it "renders attributes in <p>" do
    render
    expect(rendered).to match(/MyText/)
    expect(rendered).to match(/Linkedin/)
    expect(rendered).to match(/Facebook/)
    expect(rendered).to match(/Twitter/)
    expect(rendered).to match(/Instagram/)
    expect(rendered).to match(/Pinterest/)
    expect(rendered).to match(/First Name/)
    expect(rendered).to match(/Last Name/)
  end
end
