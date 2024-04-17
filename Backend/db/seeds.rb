# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# db/seeds.rb

matches_data = [
    { fixture: "CSK vs RCB", date: "2024-03-22", venue: "Chennai", time: "7:30 PM IST" },
    { fixture: "PBKS vs DC", date: "2024-03-23", venue: "Mohali", time: "3:30 PM IST" },
    { fixture: "KKR vs SRH", date: "2024-03-23", venue: "Kolkata", time: "7:30 PM IST" },
    { fixture: "RR vs LSG", date: "2024-03-24", venue: "Jaipur", time: "3:30 PM IST" },
    { fixture: "GT vs MI", date: "2024-03-24", venue: "Ahmedabad", time: "7:30 PM IST" },
    { fixture: "RCB vs PBKS", date: "2024-03-25", venue: "Bengaluru", time: "7:30 PM IST" },
    { fixture: "CSK vs GT", date: "2024-03-26", venue: "Chennai", time: "7:30 PM IST" },
    { fixture: "SRH vs MI", date: "2024-03-27", venue: "Hyderabad", time: "7:30 PM IST" },
    { fixture: "RR vs DC", date: "2024-03-28", venue: "Jaipur", time: "7:30 PM IST" },
    { fixture: "RCB vs KKR", date: "2024-03-29", venue: "Bengaluru", time: "7:30 PM IST" },
    { fixture: "LSG vs PBKS", date: "2024-03-30", venue: "Lucknow", time: "7:30 PM IST" },
    { fixture: "GT vs SRH", date: "2024-03-31", venue: "Ahmedabad", time: "3:30 PM IST" },
    { fixture: "DC vs CSK", date: "2024-03-31", venue: "Visakhapatnam", time: "7:30 PM IST" },
    { fixture: "MI vs RR", date: "2024-04-01", venue: "Mumbai", time: "7:30 PM IST" },
    { fixture: "RCB vs LSG", date: "2024-04-02", venue: "Bengaluru", time: "7:30 PM IST" },
    { fixture: "DC vs KKR", date: "2024-04-03", venue: "Visakhapatnam", time: "7:30 PM IST" },
    { fixture: "GT vs PBKS", date: "2024-04-04", venue: "Ahmedabad", time: "7:30 PM IST" },
    { fixture: "SRH vs CSK", date: "2024-04-05", venue: "Hyderabad", time: "7:30 PM IST" },
    { fixture: "RR vs RCB", date: "2024-04-06", venue: "Jaipur", time: "7:30 PM IST" },
    { fixture: "MI vs DC", date: "2024-04-07", venue: "Mumbai", time: "3:30 PM IST" },
    { fixture: "LSG vs GT", date: "2024-04-07", venue: "Lucknow", time: "7:30 PM IST" },
    # Add the remaining match data here
  ]
  
  matches_data.each do |data|
    Schedule.create(data)
  end
  
  puts "Matches data inserted successfully!"
  