class PatientSerializer < ActiveModel::Serializer
  attributes :id, :name, :gender, :age, :height, :weight, :email
  has_many :prescriptions
  has_many :providers
  has_many :appointments
end
