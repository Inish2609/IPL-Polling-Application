class CreateSchedules < ActiveRecord::Migration[6.1]
  def change
    create_table :schedules do |t|
      t.string :fixture
      t.string :date
      t.string :venue
      t.string :time
      t.string :won_by
      t.timestamps
    end
  end
end
