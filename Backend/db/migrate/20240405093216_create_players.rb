class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :teamName
      t.string :nationality
      t.string :roll
      t.string :dob
      t.integer :matches
      t.integer :debut
      t.string :image
      t.references :team
      t.timestamps
    end
  end
end
