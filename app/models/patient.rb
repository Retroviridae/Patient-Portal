class Patient < ApplicationRecord
    has_many :appointments
    has_many :providers, through: :appointments
    has_many :prescriptions
    has_one :user

    validates :gender, inclusion: { in: %w(M F) }
end
