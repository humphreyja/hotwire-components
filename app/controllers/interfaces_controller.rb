class InterfacesController < ApplicationController
  layout 'interface'
  def calendar
    @selected_date = params[:selected] ? Date.parse(params[:selected]) : Date.today
    @display_date = params[:show] ? Date.parse(params[:show]) : @selected_date
    @target = params[:target]
  end
end

