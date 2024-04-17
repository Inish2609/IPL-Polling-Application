class CreateChoices < ActiveRecord::Migration[6.1]
  def change
    create_table :choices do |t|
      t.string :ip_address
      t.string :option
      t.references :poll
      t.timestamps
    end
  end
end
