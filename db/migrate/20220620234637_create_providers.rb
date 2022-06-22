class CreateProviders < ActiveRecord::Migration[7.0]
  def change
    create_table :providers do |t|
      t.string :name
      t.string :specialty
      t.string :office_location

      t.timestamps
    end
  end
end
