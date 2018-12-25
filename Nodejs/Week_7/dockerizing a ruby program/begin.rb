def message(msg)
    puts "#{msg}"
end
message "hello world"

puts "Welcome to Ruby"

=begin
    this is multi line comment in ruby
=end

# this is a single line comment in ruby

puts ("-------Loops in RUBY------------")
os=['windows','linux','ubuntu']
i=0
puts "---while statement---"
while i < os.length  do
    puts("#{os[i]}")
    i +=1
 end
 puts "---while Modifer---"
 i=0
 begin
    puts("#{os[i]}")
    i +=1
 end while i < os.size
 puts "---until statement---"
 i=0
until i >= os.length  do
    puts("#{os[i]}")
    i +=1
 end
 puts "---until Modifier---"
 i=0
 begin
    puts("#{os[i]}")
    i +=1
 end until i >= os.size
 puts "---for loop---"
 for i in 0...os.length
    puts("#{os[i]}")
 end
puts "---new approach---"
 (0...os.size).each do |i|
    puts("#{os[i]}")
 end

 puts ("---------Ranges in RUBY--------------")
 digits = Array(0..10)     #.. and ... are range operators in ruby
 puts "#{digits}"          #.. includes the high end value where as ... excludes the high end value
 digits = Array(0...10)
 puts "#{digits}"