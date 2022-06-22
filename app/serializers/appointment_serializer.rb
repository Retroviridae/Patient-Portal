class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :purpose, :patient_id, :provider_id

  belongs_to :patient
  belongs_to :provider
end
