require "rails_helper"

RSpec.describe TagcardsController, type: :routing do
  describe "routing" do

    it "routes to #index" do
      expect(:get => "/tagcards").to route_to("tagcards#index")
    end

    it "routes to #new" do
      expect(:get => "/tagcards/new").to route_to("tagcards#new")
    end

    it "routes to #show" do
      expect(:get => "/tagcards/1").to route_to("tagcards#show", :id => "1")
    end

    it "routes to #edit" do
      expect(:get => "/tagcards/1/edit").to route_to("tagcards#edit", :id => "1")
    end

    it "routes to #create" do
      expect(:post => "/tagcards").to route_to("tagcards#create")
    end

    it "routes to #update via PUT" do
      expect(:put => "/tagcards/1").to route_to("tagcards#update", :id => "1")
    end

    it "routes to #update via PATCH" do
      expect(:patch => "/tagcards/1").to route_to("tagcards#update", :id => "1")
    end

    it "routes to #destroy" do
      expect(:delete => "/tagcards/1").to route_to("tagcards#destroy", :id => "1")
    end

  end
end
