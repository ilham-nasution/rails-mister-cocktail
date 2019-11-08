require 'faker'
require 'json'
require 'open-uri'

url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?i=list'
data = open(url).read
ingredient = JSON.parse(data)

puts "creating ingredients...."
ingredient["drinks"].each do |x|
  Ingredient.create!(name: x["strIngredient1"])
end
puts "... ingredients finished"

puts "creating cocktails...."
20.times do
  Cocktail.create!(name: Faker::Coffee.blend_name)
end
puts "...cocktails finished"
