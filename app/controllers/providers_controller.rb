class ProvidersController < ApplicationController
    def index
        providers = Provider.all
        render json: providers
    end

    def show
        provider = Provider.find(params[:id])
        render json: provider
    end

end
