Rails.application.routes.draw do
  resources :users, only: [:index, :create]
  resources :prescriptions
  resources :appointments
  resources :providers
  resources :patients

  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"

  post "/signup", to: "users#create"
  get "/me", to: "users#show"

  get "/reset", to: "application#create"
  
  get '*path',
      to: 'fallback#index',
      constraints: ->(req) { !req.xhr? && req.format.html? }
      
end
