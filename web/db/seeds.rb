# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: , address: 'Chicago' }, { name: , address: 'Copenhagen' }])
#   Mayor.create(name: , address: 'Emanuel', city: cities.first)
# WARNING: these seeds assume you have edited the devise config to allow for single letter passwords
#
#
# uses this dictionary to generate random tags
load "#{Rails.root}/db/words.rb"

def gen_tag
  str = String.new
  len = rand(4) + 1
  for i in 1..len
    str += $words.sample + " "
  end
  return str
end

users = User.create(
  [
    { email: 'a@a.com', name: "Mr. Aardvark", password: "aaaaaaaa", password_confirmation: "aaaaaaaa", bcard_id: "1"},
    { email: 'b@b.com', name: "Mr. Bear", password: "bbbbbbbb", password_confirmation: "bbbbbbbb", bcard_id: "2"},
    { email: 'c@c.com', name: "Mr. Cat", password: "cccccccc", password_confirmation: "cccccccc", bcard_id: "3"},
    { email: 'd@d.com', name: "Mr. Dog", password: "dddddddd", password_confirmation: "dddddddd", bcard_id: "4"},
    { email: 'e@e.com', name: "Mr. Elephant", password: "eeeeeeee", password_confirmation: "eeeeeeee", bcard_id: "5"},
    { email: 'f@f.com', name: "Mr. Fox", password: "ffffffff", password_confirmation: "ffffffff", bcard_id: "6"},
    { email: 'g@g.com', name: "Mr. Gopher", password: "gggggggg", password_confirmation: "gggggggg", bcard_id: "7"},
    { email: 'h@h.com', name: "Mr. Horse", password: "hhhhhhhh", password_confirmation: "hhhhhhhh", bcard_id: "8"},
    { email: 'i@i.com', name: "Mr. Iguana", password: "iiiiiiii", password_confirmation: "iiiiiiii", bcard_id: "9"},
    { email: 'j@j.com', name: "Mr. Jackrabbit", password: "jjjjjjjj", password_confirmation: "jjjjjjjj", bcard_id: "10"},
    { email: 'k@k.com', name: "Mr. Kangaroo", password: "kkkkkkkk", password_confirmation: "kkkkkkkk", bcard_id: "11"},
    { email: 'l@l.com', name: "Mr. Llama", password: "llllllll", password_confirmation: "llllllll", bcard_id: "12"},
    { email: 'm@m.com', name: "Mr. Mouse", password: "mmmmmmmm", password_confirmation: "mmmmmmmm", bcard_id: "13"},
    { email: 'n@n.com', name: "Mr. Numbat", password: "nnnnnnnn", password_confirmation: "nnnnnnnn", bcard_id: "14"},
    { email: 'o@o.com', name: "Mr. Opossum", password: "oooooooo", password_confirmation: "oooooooo", bcard_id: "15"},
    { email: 'p@p.com', name: "Mr. Peacock", password: "pppppppp", password_confirmation: "pppppppp", bcard_id: "16"},
    { email: 'q@q.com', name: "Mr. Quail", password: "qqqqqqqq", password_confirmation: "qqqqqqqq", bcard_id: "17"},
    { email: 'r@r.com', name: "Mr. Rabbit", password: "rrrrrrrr", password_confirmation: "rrrrrrrr", bcard_id: "18"},
    { email: 's@s.com', name: "Mr. Snake", password: "ssssssss", password_confirmation: "ssssssss", bcard_id: "19"},
    { email: 't@t.com', name: "Mr. Tiger", password: "tttttttt", password_confirmation: "tttttttt", bcard_id: "20"},
    { email: 'u@u.com', name: "Mr. Urial", password: "uuuuuuuu", password_confirmation: "uuuuuuuu", bcard_id: "21"},
    { email: 'v@v.com', name: "Mr. Vulture", password: "vvvvvvvv", password_confirmation: "vvvvvvvv", bcard_id: "22"},
    { email: 'w@w.com', name: "Mr. Wombat", password: "wwwwwwww", password_confirmation: "wwwwwwww", bcard_id: "23"},
    { email: 'x@x.com', name: "Mr. Xerox", password: "xxxxxxxx", password_confirmation: "xxxxxxxx", bcard_id: "24"},
    { email: 'y@y.com', name: "Mr. Yak", password: "yyyyyyyy", password_confirmation: "yyyyyyyy", bcard_id: "25"},
    { email: 'z@z.com', name: "Mr. Zebra", password: "zzzzzzzz", password_confirmation: "zzzzzzzz", bcard_id: "26"},
    { email: 'kevin@kevin.com', name: "Kevin Perkins", password: "kevin", password_confirmation: "kevin", bcard_id: "31"}
  ]
)

bcards = Bcard.create(
  [
    { name: "Mr. Aardvark", address: "1 West First Street, Chico CA 95926", facebook: "/ardiemisprime", pinterest: "/ardie12", instagram: "/ardie", twitter: "/ardie117", website: "www.mraardvark.com", company: "Deloitte Consulting", user_id: 1 },
    { name: "Mr. Bear", address: "2 West First Street, Chico CA 95926", pinterest: "f", user_id: 2 },
    { name: "Mr. Cat", address: "3 West First Street, Chico CA 95926", pinterest: "f", user_id: 3 },
    { name: "Mr. Dog", address: "4 West First Street, Chico CA 95926", pinterest: "t", user_id: 4 },
    { name: "Mr. Elephant", address: "5 West First Street, Chico CA 95926", pinterest: "t", user_id: 5 },
    { name: "Mr. Fox", address: "6 West First Street, Chico CA 95926", pinterest: "f", user_id: 6 },
    { name: "Mr. Gopher", address: "7 West First Street, Chico CA 95926", pinterest: "f", user_id: 7 },
    { name: "Mr. Horse", address: "8 West First Street, Chico CA 95926", pinterest: "f", user_id: 8 },
    { name: "Mr. Iguana", address: "9 West First Street, Chico CA 95926", pinterest: "f", user_id: 9 },
    { name: "Mr. Jackrabbit", address: "10 West First Street, Chico CA 95926", pinterest: "f", user_id: 10 },
    { name: "Mr. Kangaroo", address: "11 West First Street, Chico CA 95926", pinterest: "f", user_id: 11 },
    { name: "Mr. Llama", address: "12 West First Street, Chico CA 95926", pinterest: "f", user_id: 12 },
    { name: "Mr. Mouse", address: "13 West First Street, Chico CA 95926", pinterest: "t", user_id: 13 },
    { name: "Mr. Numbat", address: "14 West First Street, Chico CA 95926", pinterest: "t", user_id: 14 },
    { name: "Mr. Opossum", address: "15 West First Street, Chico CA 95926", pinterest: "f", user_id: 15 },
    { name: "Mr. Peacock", address: "16 West First Street, Chico CA 95926", pinterest: "t", user_id: 16 },
    { name: "Mr. Quail", address: "17 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    { name: "Mr. Rabbit", address: "18 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    { name: "Mr. Snake", address: "19 West First Street, Chico CA 95926", pinterest: "f", user_id: 19 },
    { name: "Mr. Tiger", address: "20 West First Street, Chico CA 95926", pinterest: "t", user_id:20 },
    { name: "Mr. Urial", address: "21 West First Street, Chico CA 95926", pinterest: "t", user_id: 21 },
    { name: "Mr. Vulture", address: "22 West First Street, Chico CA 95926", pinterest: "f", user_id: 22 },
    { name: "Mr. Wombat", address: "23 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    { name: "Mr. Xerox", address: "24 West First Street, Chico CA 95926", pinterest: "f", user_id: 24 },
    { name: "Mr. Yak", address: "25 West First Street, Chico CA 95926", pinterest: "t", user_id: 25 },
    { name: "Mr. Zebra", address: "26 West First Street, Chico CA 95926", pinterest: "f", user_id: 26 },
    { name: "John Doe", address: "27 West First Street, Chico CA 95926", pinterest: "t", user_id: 14 },
    { name: "Jane Doe", address: "70 West First Street, Chico CA 95926", pinterest: "f", user_id: 10 },
    { name: "Jack Smith", address: "81 West First Street, Chico CA 95926", pinterest: "f", user_id: 2 },
    { name: "Arnold Palmer", address: "100 West First Street, Chico CA 95926", pinterest: "f", user_id: 25 },
    { name: "Kevin Perkins", address: "1337 Leet Street", pinterest: "kevinnopinterest", company: "Deloitte Consulting LLP", position: "Business Technology Analyst", facebook: "/hashtaghashbrown", instagram: "kevinnoinsta", twitter: "kevinnotwitter", website: "159.203.247.39", user_id: 27, phone: "5555555555", email_address: "kevin@aol.com"},
    { name: "Tyson Henry", address: "136 West First Street, Chico CA 95926", pinterest: "f", user_id: 7 },
    { name: "Rick Sanchez", address: "163 West First Street, Chico CA 95926", pinterest: "f", user_id: 24 },
    { name: "Jan Michael Vincent", address: "187 West First Street, Chico CA 95926", pinterest: "f", user_id: 10 }
  ]
)

#Create a random amount of decks per user
users.each do |user|
  for i in 0..rand(4)
    random_name = gen_tag
    random_desc = gen_tag
    Deck.create(name: random_name, description: random_desc, user_id: user.id)
  end
end

decks = Deck.all
Tag.create(text: "Create some tags!", hits: 0)

#Assign business cards to decks
bcards.each do |bcard|

  # create access objects for current bcard
    user_indexes = Array.new
    size = 3 + rand(6)
    for i in 0..size
      while (user_indexes[i] = (rand 25) + 1) == bcard.user_id
      end
    end
    user_indexes.uniq!
    user_indexes.each do |user_id|
      #assign each deck new business cards with tags using Tagcard
      decks.each do |deck|
        if deck.user_id == user_id
          tCard = Tagcard.where(bcard_id: bcard.id, user_id: user_id).first_or_create
          #create Tags
          for i in 0..rand(4)
              random_tag_string = gen_tag
              # if Tag.exists?(:conditions => { :text => params[random_tag_string] })
              #     nTag = Tag.where(text: random_tag_string)
              #     nTag.hits = nTag.hits + 1
              #     puts "Incremented " + nTag.text + ".hits by 1"
              # else
                nTag=Tag.where(text: random_tag_string, hits: user_id).first_or_create
              # end
              tCard.tags.push(nTag.id)
          end
          tCard.save!
          deck.tagcards.push(tCard.id)
          deck.save!
          # puts "Added Tagcard to Deck"
        end
      end
    end

end
