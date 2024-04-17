class CreateTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :teams do |t|
      t.string :teamName
      t.json :titleYears
      t.string :owner
      t.string :coach
      t.string :venue
      t.string :captain
      t.timestamps
    end
  end
end
