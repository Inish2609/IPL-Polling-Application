class AddRunsWicketToPlayer < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :runs, :integer
    add_column :players, :wickets, :integer
  end
end
