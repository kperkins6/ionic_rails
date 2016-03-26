require "rails_helper"

RSpec.describe BcardsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/bcards").to route_to("bcards#index")
    end

    it "routes to #new" do
      expect(:get => "/bcards/new").to route_to("bcards#new")
    end

    it "routes to #show" do
      expect(:get => "/bcards/1").to route_to("bcards#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/bcards/1/edit").to route_to("bcards#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/bcards").to route_to("bcards#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/bcards/1").to route_to("bcards#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/bcards/1").to route_to("bcards#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/bcards/1").to route_to("bcards#destroy", :id => "1")
    end

  end
end
