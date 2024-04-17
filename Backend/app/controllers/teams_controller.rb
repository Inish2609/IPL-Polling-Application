class TeamsController < ApplicationController

  def show
    @team = Team.find_by(teamName: params[:team_name])
    @players = @team.players
    render json:{team_details:@team,players:@players}
  end

  def points
    @teams = Team.order(points: :desc,run_rate: :desc)
    render json:@teams
  end

  def most_runs
    @players = Player.order(runs: :desc)
    render json:@players
  end

  def most_wickets
    @players = Player.order(wickets: :desc)
    render json:@players
  end

end
