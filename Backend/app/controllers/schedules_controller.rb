class SchedulesController < ApplicationController

  def index
    @schedules = Schedule.all
    render json:@schedules
  end

end
