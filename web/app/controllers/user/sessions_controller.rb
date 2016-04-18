class User::SessionsController < Devise::SessionsController
  respond_to :json, :html

  # GET /resource/sign_in
  def new
    self.resource = resource_class.new(sign_in_params)
    clean_up_passwords(resource)
    yield resource if block_given?
    respond_with(resource, serialize_options(resource))
  end

  # POST /resource/sign_in
  def create
    sign_out(:user) if current_user
    self.resource = warden.authenticate!(auth_options)
    set_flash_message(:notice, :signed_in) if is_flashing_format?
    sign_in(resource_name, resource)
    yield resource if block_given?
      respond_with resource, location: after_sign_in_path_for(resource)
  end

  # DELETE /resource/sign_out
  def destroy
    signed_out = (Devise.sign_out_all_scopes ? sign_out : sign_out(resource_name))
    set_flash_message! :notice, :signed_out if signed_out
    yield if block_given?
    respond_to_on_destroy
  end

  private

# Check if there is no signed in user before doing the sign out.
#
# If there is no signed in user, it will set the flash message and redirect
# to the after_sign_out path.
def verify_signed_out_user
  if all_signed_out?
    set_flash_message! :notice, :already_signed_out

    respond_to_on_destroy
  end
end

def all_signed_out?
  users = Devise.mappings.keys.map { |s| warden.user(scope: s, run_callbacks: false) }

  users.all?(&:blank?)
end

def respond_to_on_destroy
  # We actually need to hardcode this as Rails default responder doesn't
  # support returning empty response on GET request
  respond_to do |format|
    format.all { head :no_content }
    format.any(*navigational_formats) { redirect_to after_sign_out_path_for(resource_name) }
  end
end

end
