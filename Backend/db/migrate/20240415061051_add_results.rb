class AddResults < ActiveRecord::Migration[6.1]
  def change
    add_column :polls, :result, :json
  end
end
