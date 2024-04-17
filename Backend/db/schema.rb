# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2024_04_17_091556) do

  create_table "choices", charset: "utf8mb3", force: :cascade do |t|
    t.string "ip_address"
    t.string "option"
    t.bigint "poll_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poll_id"], name: "index_choices_on_poll_id"
  end

  create_table "players", charset: "utf8mb3", force: :cascade do |t|
    t.string "name"
    t.string "teamName"
    t.string "nationality"
    t.string "roll"
    t.string "dob"
    t.integer "matches"
    t.integer "debut"
    t.string "image"
    t.bigint "team_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "runs"
    t.integer "wickets"
    t.index ["team_id"], name: "index_players_on_team_id"
  end

  create_table "polls", charset: "utf8mb3", force: :cascade do |t|
    t.string "question"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.json "option"
    t.json "result"
  end

  create_table "schedules", charset: "utf8mb3", force: :cascade do |t|
    t.string "fixture"
    t.string "date"
    t.string "venue"
    t.string "time"
    t.string "won_by"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "teams", charset: "utf8mb3", force: :cascade do |t|
    t.string "teamName"
    t.json "titleYears"
    t.string "owner"
    t.string "coach"
    t.string "venue"
    t.string "captain"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.string "image"
    t.integer "matches_played"
    t.integer "matches_won"
    t.integer "matches_lost"
    t.integer "matches_tied"
    t.integer "points"
    t.float "run_rate"
  end

end
