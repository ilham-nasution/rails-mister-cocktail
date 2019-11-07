require 'faker'

puts "creating...."
20.times do
  Cocktail.create!(name: Faker::Coffee.blend_name)
end
puts "...finished"
