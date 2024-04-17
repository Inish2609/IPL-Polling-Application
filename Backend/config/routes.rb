Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  get "teams/:team_name",to:"teams#show"
  get "players/:id",to:"players#show"
  get 'polls',to:"polls#index"

  post "add_value/:id",to:"choices#create"

  get 'check/:id',to:"choices#check"
  get 'points_table',to:"teams#points"
  get 'orange_cap',to:"teams#most_runs"
  get 'most_wickets',to:"teams#most_wickets"

  get 'schedules',to:"schedules#index"

end
