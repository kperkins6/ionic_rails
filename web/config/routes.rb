Rails.application.routes.draw do
  devise_for :users, :controllers => {sessions: 'user/sessions', registrations: 'user/registrations', passwords: 'user/passwords' }
  # delete 'users/sign_out' => "devise/sessions#destroy"
  # match "/bcards" => "application#index", via: :options
  # devise_for :users, :controllers => {sessions: 'sessions'}
  # scope devise_for :users do
    # get '/users' => 'user/sessions#destroy'
  # end\
  # devise_scope :users do
  # # get '/logout' => '/user/sessions#destroy'
  #   post 'users' => 'user/registrations#create', :as => 'user_registration'
  # end

  scope '/bcards' do
    get '/' => 'bcards#index'
    post '/' => 'bcards#create'
    put '/' => 'bcards#update'
  end
  scope '/tagcards' do
    get '/' => 'tagcards#index'
    post '/' => 'tagcards#create'
    put '/' => 'tagcards#update'
  end

  resources :decks
  resources :tagcards
  resources :bcards
  resources :tags
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
