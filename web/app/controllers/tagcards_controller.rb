class TagcardsController < ApplicationController
   before_action :set_tagcard, only: [:show, :edit, :update, :destroy]
   before_filter :authenticate_user!

   respond_to :json
   # GET /tagcards
   # GET /tagcards.json
   def index
     @tagcards = Tagcard.all
   end

   # GET /tagcards/1
   # GET /tagcards/1.json
   def show
   end

   # GET /tagcards/new
   def new
     @tagcard = Tagcard.new
   end

   # GET /tagcards/1/edit
   def edit
   end

   # POST /tagcards
   # POST /tagcards.json
   def create
     @tagcard = Tagcard.new(tagcard_params)

     respond_to do |format|
       if @tagcard.save
         # format.html { redirect_to @tagcard, notice: 'Tagcard was successfully created.' }
         format.json { render :show, status: :created, location: @tagcard }
       else
         # format.html { render :new }
         format.json { render json: @tagcard.errors, status: :unprocessable_entity }
       end
     end
   end

   # PATCH/PUT /tagcards/1
   # PATCH/PUT /tagcards/1.json
   def update
     respond_to do |format|
       if @tagcard.update(tagcard_params)
         # format.html { redirect_to @tagcard, notice: 'Tagcard was successfully updated.' }
         format.json { render :show, status: :ok, location: @tagcard }
       else
         # format.html { render :edit }
         format.json { render json: @tagcard.errors, status: :unprocessable_entity }
       end
     end
   end

   # DELETE /tagcards/1
   # DELETE /tagcards/1.json
   def destroy
     @tagcard.destroy
     respond_to do |format|
       format.html { redirect_to tagcards_url, notice: 'Tagcard was successfully destroyed.' }
       format.json { head :no_content }
     end
   end

   private
     # Use callbacks to share common setup or constraints between actions.
     def set_tagcard
       @tagcard = Tagcard.find(params[:id])
     end

     # Never trust parameters from the scary internet, only allow the white list through.
     def tagcard_params
       params.permit(:id, :user_id, :bcard_id, :tags => [])
     end
 end
