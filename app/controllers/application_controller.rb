class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid




    private 

    # def authorize
    #     @current_user = Patient.find_by(id: session[:user_id])
    #     render json: { errors: ["Not authorized"] }, status: :unauthorized unless @current_user
    # end

    def invalid(invalid)
        render json: {errors: invalid.record.errors.full_messages}, status: 422
    end

    def not_found(error)
        render json: {errors: error }, status: 404
    end

end
