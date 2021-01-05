Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  

  resources :components, only: [:index] do
    get :calendar, on: :collection
  end

  resource :interface, only: [] do
    get :calendar, on: :collection
  end
end
