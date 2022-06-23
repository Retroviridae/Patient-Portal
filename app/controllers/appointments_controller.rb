class AppointmentsController < ApplicationController
    def index
        appointments = Appointment.all
        render json: appointments
    end

    def create
        appointment = Appointment.create!(time:Time.local(params[:time]), purpose:params[:purpose], provider_id:params[:provider_id],patient_id: session[:user_id])
        render json: appointment, status: :created
    end

    def update
        appointment = Appointment.find(params[:id])
        appointment.update!(purpose: params[:purpose])
        render json: appointment, status: :ok
    end

    def destroy
        appointment = Appointment.find(params[:id])
        appointment.destroy
        head :no_content
    end

end
