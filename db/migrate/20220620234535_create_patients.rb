class CreatePatients < ActiveRecord::Migration[7.0]
  def change
    create_table :patients do |t|
      t.string :name
      t.string :gender
      t.integer :age
      t.integer :height
      t.integer :weight
      t.string :email
      
      t.timestamps
    end
  end
end
