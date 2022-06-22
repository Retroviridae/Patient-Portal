class PrescriptionSerializer < ActiveModel::Serializer
  attributes :id, :name, :dose, :schedule, :patient_id, :provider_id
end
