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
  
end
