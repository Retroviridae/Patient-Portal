class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid

    def create
        Patient.destroy_all
        Provider.destroy_all
        Appointment.destroy_all
        Prescription.destroy_all
        User.destroy_all
        puts "creating Patients"

        p1 = Patient.create(name: "Kate", gender:"F", age: 19, height: 72, weight: 145, email: "ellie@email.com")
        p2 = Patient.create(name: "Josh", gender:"M", age: 24, height: 73, weight: 220, email: "josh@email.com")
        p3 = Patient.create(name: "Hailey", gender:"F", age: 26, height: 66, weight: 130, email: "hailey@email.com")
        p4 = Patient.create(name: "Ryan", gender:"M", age: 25, height: 75, weight: 150, email: "ryan@email.com")
        p5 = Patient.create(name: "Cody", gender:"M", age: 30, height: 78, weight: 200, email: "cody@email.com")

        puts "creating providers"

        d1 = Provider.create(name: "Tori P., P.A-C", specialty:"surgery", office_location: "123 place St.")
        d2 = Provider.create(name: "Kelly C., MD", specialty:"ortho", office_location: "Bee Caves")
        d3 = Provider.create(name: "Shane K., MD", specialty:"FM", office_location: "Walgreens")

        puts "creating appointments"

        a1 = Appointment.create(time: Time.local(2000,1,1,00,00), purpose: "bored", patient:p1, provider:d1)
        a2 = Appointment.create(time: Time.local(2022,6,20,8,00), purpose: "Heart Attack", patient:p1, provider:d2)
        a3 = Appointment.create(time: Time.local(2022,9,11,8,30), purpose: "Knee Pain", patient:p5, provider:d3)
        a4 = Appointment.create(time: Time.local(2022,10,27,9,00), purpose: "Have a booboo", patient:p2, provider:d1)
        a5 = Appointment.create(time: Time.local(2022,10,29,14,15), purpose: "Foreign body, 'slipped in the shower'-pt", patient:p2, provider:d2)
        a6 = Appointment.create(time: Time.local(2022,12,25,15,45), purpose: "Bike crash", patient:p4, provider:d1)

        puts "creating prescriptions"

        s1 = Prescription.create(name: "Ibuprofen", dose: "200mg", schedule: "PRN: as needed", patient:p1, provider:d1)
        s2 = Prescription.create(name: "Insulin", dose: "2 units", schedule: "TID: 3 times, daily", patient:p1, provider:d2)
        s3 = Prescription.create(name: "Benadryl", dose: "80mcg", schedule: "BID: twice a day", patient:p1, provider:d3)
        s4 = Prescription.create(name: "Meropenem", dose: "500mg", schedule: "QID:4 times a day", patient:p2, provider:d2)
        s5 = Prescription.create(name: "Epinephrine", dose: "0.3mg", schedule: "PRN: as needed", patient:p3, provider:d3)
        s6 = Prescription.create(name: "Losartan", dose: "50mg", schedule: "QD: once daily", patient:p4, provider:d3)

        puts "creating users"

        u1 = User.create(username: "KateSkate", password: "1234", patient:p1)
        u2 = User.create(username: "JoshMadMan", password: "1234", patient:p2)
        u3 = User.create(username: "HaileyRedHerring", password: "1234", patient:p3)
        u4 = User.create(username: "Updog", password: "1234", patient:p4)
        u5 = User.create(username: "CodyT", password: "1234", patient:p5)



        puts "done"
    end




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
