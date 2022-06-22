class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :purpose, :patient_id, :provider_id
end
