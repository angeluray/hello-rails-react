class Api::V1::GreetingsController < ApplicationController
  def index
    greetings = Greeting.all
    render json: greetings, status: 200
  end
end
