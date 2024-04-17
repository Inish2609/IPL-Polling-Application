class AddPointsTableDetails < ActiveRecord::Migration[6.1]
  def change
    add_column :teams, :matches_played, :integer
    add_column :teams, :matches_won, :integer
    add_column :teams, :matches_lost, :integer
    add_column :teams, :matches_tied, :integer
    add_column :teams, :points, :integer
    add_column :teams, :run_rate, :float
  end
end
