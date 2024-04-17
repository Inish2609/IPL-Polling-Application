class AddChoices < ActiveRecord::Migration[6.1]
  def change
    add_column :polls, :option, :json
  end
end
