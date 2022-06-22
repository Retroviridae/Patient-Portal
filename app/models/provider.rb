class Provider < ApplicationRecord
    has_many :appointments
    has_many :patients, through: :appointments
    has_many :prescriptions
end
