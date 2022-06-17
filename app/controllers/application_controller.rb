class ApplicationController < ActionController::API
    def world
        hello = {message:"Hello There..."}
        render json: hello
    end
end
