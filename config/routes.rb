Rails.application.routes.draw do
  root to: "static_pages#root"
  
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:index, :create, :show, :update, :destroy]
    resources :comments, only: [:index, :create, :destroy]
    resources :likes, only: [:create, :update, :destroy]

    patch 'videos/:id/views', to: 'videos#update_views'
  end

end
