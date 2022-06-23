class PrescriptionsController < ApplicationController
    def index
        prescriptions = Prescription.all
        render json: prescriptions
    end

    def destroy
        prescription = Prescription.find(params[:id])
        prescription.destroy
        head :no_content
    end

end
