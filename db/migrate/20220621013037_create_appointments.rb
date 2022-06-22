class CreateAppointments < ActiveRecord::Migration[7.0]
  def change
    create_table :appointments do |t|
      t.datetime :time
      t.string :purpose
      t.integer :patient_id
      t.integer :provider_id

      t.timestamps
    end
  end
end
