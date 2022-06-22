class ProviderSerializer < ActiveModel::Serializer
  attributes :id, :name, :specialty, :office_location
end
