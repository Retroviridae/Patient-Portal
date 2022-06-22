class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :patient_id
end
