class CreatePrescriptions < ActiveRecord::Migration[7.0]
  def change
    create_table :prescriptions do |t|
      t.string :name
      t.string :dose
      t.string :schedule
      t.integer :patient_id
      t.integer :provider_id

      t.timestamps
    end
  end
end
