class BcardsController < ApplicationController
  before_action :set_bcard, only: [:show, :edit, :update, :destroy]
    before_filter :authenticate_user!

    respond_to :json
    # GET /bcards
    # GET /bcards.json
    def index
      @bcards = Bcard.all
    end

    # GET /bcards/1
    # GET /bcards/1.json
    def show
    end

    # GET /bcards/new
    def new
      @bcard = Bcard.new
    end

    # GET /bcards/1/edit
    def edit
    end

    # POST /bcards
    # POST /bcards.json
    def create
      @bcard = Bcard.new(bcard_params)

      respond_to do |format|
        if @bcard.save
          # format.html { redirect_to @bcard, notice: 'Bcard was successfully created.' }
          format.json { render :show, status: :created, location: @bcard }
        else
          # format.html { render :new }
          format.json { render json: @bcard.errors, status: :unprocessable_entity }
        end
      end
    end

    # PATCH/PUT /bcards/1
    # PATCH/PUT /bcards/1.json
    def update

      respond_to do |format|
        if @bcard.update(bcard_params)
          # format.html { redirect_to @bcard, notice: 'Bcard was successfully updated.' }
          format.json { render :show, status: :ok, location: @bcard }
        else
          # format.html { render :edit }
          format.json { render json: @bcard.errors, status: :unprocessable_entity }
        end
      end
    end

    # DELETE /bcards/1
    # DELETE /bcards/1.json
    def destroy
      @bcard.destroy
      respond_to do |format|
        # format.html { redirect_to bcards_url, notice: 'Bcard was successfully destroyed.' }
        format.json { head :no_content }
      end
    end

    private
      # Use callbacks to share common setup or constraints between actions.
      def set_bcard
        @bcard = Bcard.find(params[:id])
      end

      # Never trust parameters from the scary internet, only allow the white list through.
      def bcard_params
        params.permit(:id, :address, :linkedin, :facebook, :twitter, :instagram, :pinterest, :name, :company, :website, :user_id, :created_at, :updated_at)
      end
  end
