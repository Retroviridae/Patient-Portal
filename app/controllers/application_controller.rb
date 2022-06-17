class ApplicationController < ActionController::API
    def world
        hello = {message:"Hello Nerd"}
        render json: hello
    end
end
