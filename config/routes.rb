Rails.application.routes.draw do
  mount GraphiQL::Rails::Engine, at: '/graphiql', graphql_path: '/graphql'
  post '/graphql', to: 'graphql#execute'

  get :form, to: 'root#form'

  # Defines the root path route ("/")
  root "root#index"
end
