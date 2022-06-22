class PatientsController < ApplicationController
    before_action :authorize

    def index
        patients = Patient.all
        render json: patients, status: 200
    end

    def show
        patient = find_patient
        render json: patient, status: 200, include: ['appointments', 'appointments.provider','prescriptions']
    end

    def create
        patient = Patient.create!(patient_params)
        render json: patient, status: 201
    end

    def update
        patient = find_patient
        patient.update!(patient_params)
        render json: patient, status: 202
    end

    def destroy
        patient = find_patient
        patient.destroy
        head 204
    end

    private

    def find_patient
        patient = Patient.find(params[:id])
        patient
    end

    def patient_params
        params.permit(:name,:gender,:age,:height,:weight,:email,:password)
    end

    def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
    end

end
