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
  ]
)

bcards = Bcard.create(
  [
    { name: "Mr. Aardvark", address: "1 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
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
    { name: "Kevin Perkins", address: "122 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
    { name: "Tyson Henry", address: "136 West First Street, Chico CA 95926", pinterest: "f", user_id: 7 },
    { name: "Rick Sanchez", address: "163 West First Street, Chico CA 95926", pinterest: "f", user_id: 24 },
    { name: "Jan Michael Vincent", address: "187 West First Street, Chico CA 95926", pinterest: "f", user_id: 10 },
    #
    # { name: "John Doe", address: "28 West First Street, Chico CA 95926", pinterest: "t", user_id: 3 },
    # { name: "John Doe", address: "29 West First Street, Chico CA 95926", pinterest: "t", user_id: 25 },
    # { name: "John Doe", address: "30 West First Street, Chico CA 95926", pinterest: "t", user_id: 7 },
    # { name: "John Doe", address: "31 West First Street, Chico CA 95926", pinterest: "f", user_id: 24 },
    # { name: "John Doe", address: "32 West First Street, Chico CA 95926", pinterest: "f", user_id: 11 },
    # { name: "John Doe", address: "33 West First Street, Chico CA 95926", pinterest: "f", user_id: 15 },
    # { name: "John Doe", address: "34 West First Street, Chico CA 95926", pinterest: "f", user_id: 5 },
    # { name: "John Doe", address: "35 West First Street, Chico CA 95926", pinterest: "f", user_id: 12 },
    # { name: "John Doe", address: "36 West First Street, Chico CA 95926", pinterest: "f", user_id: 13 },
    # { name: "John Doe", address: "37 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "John Doe", address: "38 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "John Doe", address: "39 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "John Doe", address: "40 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
    # { name: "John Doe", address: "41 West First Street, Chico CA 95926", pinterest: "f", user_id: 16 },
    # { name: "John Doe", address: "42 West First Street, Chico CA 95926", pinterest: "f", user_id: 13 },
    # { name: "John Doe", address: "43 West First Street, Chico CA 95926", pinterest: "f", user_id: 15 },
    # { name: "John Doe", address: "44 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
    # { name: "John Doe", address: "45 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "John Doe", address: "46 West First Street, Chico CA 95926", pinterest: "t", user_id: 11 },
    # { name: "John Doe", address: "47 West First Street, Chico CA 95926", pinterest: "f", user_id: 5 },
    # { name: "John Doe", address: "48 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
    # { name: "John Doe", address: "49 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "John Doe", address: "50 West First Street, Chico CA 95926", pinterest: "f", user_id: 7 },
    # { name: "John Doe", address: "51 West First Street, Chico CA 95926", pinterest: "t", user_id: 2 },
    # { name: "John Doe", address: "52 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "John Doe", address: "53 West First Street, Chico CA 95926", pinterest: "t", user_id: 12 },
    # { name: "John Doe", address: "54 West First Street, Chico CA 95926", pinterest: "t", user_id: 10 },
    # { name: "John Doe", address: "55 West First Street, Chico CA 95926", pinterest: "t", user_id: 22 },
    # { name: "John Doe", address: "56 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "John Doe", address: "57 West First Street, Chico CA 95926", pinterest: "t", user_id: 4 },
    # { name: "John Doe", address: "58 West First Street, Chico CA 95926", pinterest: "t", user_id: 17 },
    # { name: "John Doe", address: "59 West First Street, Chico CA 95926", pinterest: "f", user_id: 2 },
    # { name: "John Doe", address: "60 West First Street, Chico CA 95926", pinterest: "f", user_id: 9 },
    # { name: "John Doe", address: "61 West First Street, Chico CA 95926", pinterest: "f", user_id: 13 },
    # { name: "John Doe", address: "62 West First Street, Chico CA 95926", pinterest: "f", user_id: 20 },
    # { name: "John Doe", address: "63 West First Street, Chico CA 95926", pinterest: "t", user_id: 18 },
    # { name: "Jane Doe", address: "64 West First Street, Chico CA 95926", pinterest: "f", user_id: 12 },
    # { name: "Jane Doe", address: "65 West First Street, Chico CA 95926", pinterest: "f", user_id: 16 },
    # { name: "Jane Doe", address: "66 West First Street, Chico CA 95926", pinterest: "f", user_id: 14 },
    # { name: "Jane Doe", address: "67 West First Street, Chico CA 95926", pinterest: "t", user_id: 14 },
    # { name: "Jane Doe", address: "68 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "Jane Doe", address: "69 West First Street, Chico CA 95926", pinterest: "t", user_id: 17 },
    # { name: "Jane Doe", address: "70 West First Street, Chico CA 95926", pinterest: "f", user_id: 10 },
    # { name: "Jane Doe", address: "71 West First Street, Chico CA 95926", pinterest: "t", user_id: 1 },
    # { name: "Jane Doe", address: "72 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Jane Doe", address: "73 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Jane Doe", address: "74 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "Jane Doe", address: "75 West First Street, Chico CA 95926", pinterest: "f", user_id: 15 },
    # { name: "Jane Doe", address: "76 West First Street, Chico CA 95926", pinterest: "f", user_id: 19 },
    # { name: "Jane Doe", address: "77 West First Street, Chico CA 95926", pinterest: "t", user_id: 3 },
    # { name: "Jane Doe", address: "78 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Jane Doe", address: "79 West First Street, Chico CA 95926", pinterest: "t", user_id: 17 },
    # { name: "Jane Doe", address: "80 West First Street, Chico CA 95926", pinterest: "f", user_id: 6 },
    # { name: "Jack Smith", address: "82 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Jack Smith", address: "83 West First Street, Chico CA 95926", pinterest: "t", user_id: 24 },
    # { name: "Jack Smith", address: "84 West First Street, Chico CA 95926", pinterest: "t", user_id: 16 },
    # { name: "Jack Smith", address: "85 West First Street, Chico CA 95926", pinterest: "f", user_id: 3 },
    # { name: "Jack Smith", address: "86 West First Street, Chico CA 95926", pinterest: "f", user_id: 3 },
    # { name: "Jack Smith", address: "87 West First Street, Chico CA 95926", pinterest: "f", user_id: 8 },
    # { name: "Jack Smith", address: "88 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
    # { name: "Jack Smith", address: "89 West First Street, Chico CA 95926", pinterest: "f", user_id: 22 },
    # { name: "Jack Smith", address: "90 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Jack Smith", address: "91 West First Street, Chico CA 95926", pinterest: "t", user_id: 13 },
    # { name: "Jack Smith", address: "92 West First Street, Chico CA 95926", pinterest: "f", user_id: 14 },
    # { name: "Jack Smith", address: "93 West First Street, Chico CA 95926", pinterest: "f", user_id: 26 },
    # { name: "Jack Smith", address: "94 West First Street, Chico CA 95926", pinterest: "t", user_id: 11 },
    # { name: "Jack Smith", address: "95 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "Jack Smith", address: "96 West First Street, Chico CA 95926", pinterest: "f", user_id: 24 },
    # { name: "Jack Smith", address: "97 West First Street, Chico CA 95926", pinterest: "t", user_id: 10 },
    # { name: "Jack Smith", address: "98 West First Street, Chico CA 95926", pinterest: "f", user_id: 11 },
    # { name: "Jack Smith", address: "99 West First Street, Chico CA 95926", pinterest: "t", user_id: 20 },
    # { name: "Arnold Palmer", address: "101 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Arnold Palmer", address: "102 West First Street, Chico CA 95926", pinterest: "t", user_id: 2 },
    # { name: "Arnold Palmer", address: "103 West First Street, Chico CA 95926", pinterest: "f", user_id: 8 },
    # { name: "Arnold Palmer", address: "104 West First Street, Chico CA 95926", pinterest: "t", user_id: 9 },
    # { name: "Arnold Palmer", address: "105 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "Arnold Palmer", address: "106 West First Street, Chico CA 95926", pinterest: "f", user_id: 15 },
    # { name: "Arnold Palmer", address: "107 West First Street, Chico CA 95926", pinterest: "f", user_id: 14 },
    # { name: "Arnold Palmer", address: "108 West First Street, Chico CA 95926", pinterest: "f", user_id: 20 },
    # { name: "Arnold Palmer", address: "109 West First Street, Chico CA 95926", pinterest: "t", user_id: 13 },
    # { name: "Arnold Palmer", address: "110 West First Street, Chico CA 95926", pinterest: "t", user_id: 7 },
    # { name: "Arnold Palmer", address: "111 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "Arnold Palmer", address: "112 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "Arnold Palmer", address: "113 West First Street, Chico CA 95926", pinterest: "t", user_id: 3 },
    # { name: "Arnold Palmer", address: "114 West First Street, Chico CA 95926", pinterest: "f", user_id: 16 },
    # { name: "Arnold Palmer", address: "115 West First Street, Chico CA 95926", pinterest: "f", user_id: 9 },
    # { name: "Arnold Palmer", address: "116 West First Street, Chico CA 95926", pinterest: "t", user_id: 22 },
    # { name: "Arnold Palmer", address: "117 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Arnold Palmer", address: "118 West First Street, Chico CA 95926", pinterest: "f", user_id: 20 },
    # { name: "Arnold Palmer", address: "119 West First Street, Chico CA 95926", pinterest: "f", user_id: 12 },
    # { name: "Arnold Palmer", address: "120 West First Street, Chico CA 95926", pinterest: "t", user_id: 7 },
    # { name: "Arnold Palmer", address: "121 West First Street, Chico CA 95926", pinterest: "f", user_id: 5 },
    # { name: "Kevin Perkins", address: "123 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Kevin Perkins", address: "124 West First Street, Chico CA 95926", pinterest: "t", user_id: 9 },
    # { name: "Kevin Perkins", address: "125 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
    # { name: "Kevin Perkins", address: "126 West First Street, Chico CA 95926", pinterest: "t", user_id: 18 },
    # { name: "Kevin Perkins", address: "127 West First Street, Chico CA 95926", pinterest: "t", user_id: 20 },
    # { name: "Kevin Perkins", address: "128 West First Street, Chico CA 95926", pinterest: "f", user_id: 11 },
    # { name: "Kevin Perkins", address: "129 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "Kevin Perkins", address: "130 West First Street, Chico CA 95926", pinterest: "f", user_id: 19 },
    # { name: "Kevin Perkins", address: "131 West First Street, Chico CA 95926", pinterest: "f", user_id: 19 },
    # { name: "Kevin Perkins", address: "132 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "Kevin Perkins", address: "133 West First Street, Chico CA 95926", pinterest: "f", user_id: 17 },
    # { name: "Kevin Perkins", address: "134 West First Street, Chico CA 95926", pinterest: "f", user_id: 19 },
    # { name: "Kevin Perkins", address: "135 West First Street, Chico CA 95926", pinterest: "f", user_id: 15 },
    # { name: "Tyson Henry", address: "137 West First Street, Chico CA 95926", pinterest: "f", user_id: 23 },
    # { name: "Tyson Henry", address: "138 West First Street, Chico CA 95926", pinterest: "t", user_id: 14 },
    # { name: "Tyson Henry", address: "139 West First Street, Chico CA 95926", pinterest: "t", user_id: 17 },
    # { name: "Tyson Henry", address: "140 West First Street, Chico CA 95926", pinterest: "t", user_id: 14 },
    # { name: "Tyson Henry", address: "141 West First Street, Chico CA 95926", pinterest: "t", user_id: 12 },
    # { name: "Tyson Henry", address: "142 West First Street, Chico CA 95926", pinterest: "f", user_id: 4 },
    # { name: "Tyson Henry", address: "143 West First Street, Chico CA 95926", pinterest: "t", user_id: 23 },
    # { name: "Tyson Henry", address: "144 West First Street, Chico CA 95926", pinterest: "t", user_id: 2 },
    # { name: "Tyson Henry", address: "145 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Tyson Henry", address: "146 West First Street, Chico CA 95926", pinterest: "t", user_id: 2 },
    # { name: "Tyson Henry", address: "147 West First Street, Chico CA 95926", pinterest: "f", user_id: 14 },
    # { name: "Tyson Henry", address: "148 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Tyson Henry", address: "149 West First Street, Chico CA 95926", pinterest: "f", user_id: 5 },
    # { name: "Tyson Henry", address: "150 West First Street, Chico CA 95926", pinterest: "t", user_id: 7 },
    # { name: "Tyson Henry", address: "151 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Tyson Henry", address: "152 West First Street, Chico CA 95926", pinterest: "t", user_id: 15 },
    # { name: "Tyson Henry", address: "153 West First Street, Chico CA 95926", pinterest: "f", user_id: 3 },
    # { name: "Tyson Henry", address: "154 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Tyson Henry", address: "155 West First Street, Chico CA 95926", pinterest: "f", user_id: 2 },
    # { name: "Tyson Henry", address: "156 West First Street, Chico CA 95926", pinterest: "t", user_id: 20 },
    # { name: "Tyson Henry", address: "157 West First Street, Chico CA 95926", pinterest: "t", user_id: 11 },
    # { name: "Tyson Henry", address: "158 West First Street, Chico CA 95926", pinterest: "f", user_id: 24 },
    # { name: "Tyson Henry", address: "159 West First Street, Chico CA 95926", pinterest: "t", user_id: 15 },
    # { name: "Tyson Henry", address: "160 West First Street, Chico CA 95926", pinterest: "f", user_id: 3 },
    # { name: "Tyson Henry", address: "161 West First Street, Chico CA 95926", pinterest: "t", user_id: 23 },
    # { name: "Tyson Henry", address: "162 West First Street, Chico CA 95926", pinterest: "t", user_id: 22 },
    # { name: "Rick Sanchez", address: "164 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Rick Sanchez", address: "165 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Rick Sanchez", address: "166 West First Street, Chico CA 95926", pinterest: "t", user_id: 24 },
    # { name: "Rick Sanchez", address: "167 West First Street, Chico CA 95926", pinterest: "f", user_id: 13 },
    # { name: "Rick Sanchez", address: "168 West First Street, Chico CA 95926", pinterest: "f", user_id: 4 },
    # { name: "Rick Sanchez", address: "169 West First Street, Chico CA 95926", pinterest: "t", user_id: 20 },
    # { name: "Rick Sanchez", address: "170 West First Street, Chico CA 95926", pinterest: "f", user_id: 11 },
    # { name: "Rick Sanchez", address: "171 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Rick Sanchez", address: "172 West First Street, Chico CA 95926", pinterest: "f", user_id: 13 },
    # { name: "Rick Sanchez", address: "173 West First Street, Chico CA 95926", pinterest: "t", user_id: 5 },
    # { name: "Rick Sanchez", address: "174 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Rick Sanchez", address: "175 West First Street, Chico CA 95926", pinterest: "t", user_id: 11 },
    # { name: "Rick Sanchez", address: "176 West First Street, Chico CA 95926", pinterest: "t", user_id: 3 },
    # { name: "Rick Sanchez", address: "177 West First Street, Chico CA 95926", pinterest: "f", user_id: 2 },
    # { name: "Rick Sanchez", address: "178 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Rick Sanchez", address: "179 West First Street, Chico CA 95926", pinterest: "t", user_id: 21 },
    # { name: "Rick Sanchez", address: "180 West First Street, Chico CA 95926", pinterest: "t", user_id: 5 },
    # { name: "Rick Sanchez", address: "181 West First Street, Chico CA 95926", pinterest: "t", user_id: 13 },
    # { name: "Rick Sanchez", address: "182 West First Street, Chico CA 95926", pinterest: "t", user_id: 25 },
    # { name: "Rick Sanchez", address: "183 West First Street, Chico CA 95926", pinterest: "t", user_id: 20 },
    # { name: "Rick Sanchez", address: "184 West First Street, Chico CA 95926", pinterest: "f", user_id: 18 },
    # { name: "Rick Sanchez", address: "185 West First Street, Chico CA 95926", pinterest: "f", user_id: 25 },
    # { name: "Rick Sanchez", address: "186 West First Street, Chico CA 95926", pinterest: "f", user_id: 9 },
    # { name: "Jan Michael Vincent", address: "188 West First Street, Chico CA 95926", pinterest: "f", user_id: 12 },
    # { name: "Jan Michael Vincent", address: "189 West First Street, Chico CA 95926", pinterest: "f", user_id: 7 },
    # { name: "Jan Michael Vincent", address: "190 West First Street, Chico CA 95926", pinterest: "t", user_id: 9 },
    # { name: "Jan Michael Vincent", address: "191 West First Street, Chico CA 95926", pinterest: "f", user_id: 6 },
    # { name: "Jan Michael Vincent", address: "192 West First Street, Chico CA 95926", pinterest: "f", user_id: 26 },
    # { name: "Jan Michael Vincent", address: "193 West First Street, Chico CA 95926", pinterest: "f", user_id: 12 },
    # { name: "Jan Michael Vincent", address: "194 West First Street, Chico CA 95926", pinterest: "t", user_id: 9 },
    # { name: "Jan Michael Vincent", address: "195 West First Street, Chico CA 95926", pinterest: "f", user_id: 10 },
    # { name: "Jan Michael Vincent", address: "196 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Jan Michael Vincent", address: "197 West First Street, Chico CA 95926", pinterest: "t", user_id: 19 },
    # { name: "Jan Michael Vincent", address: "198 West First Street, Chico CA 95926", pinterest: "f", user_id: 25 },
    # { name: "Jan Michael Vincent", address: "199 West First Street, Chico CA 95926", pinterest: "t", user_id: 25 },
    # { name: "Jan Michael Vincent", address: "200 West First Street, Chico CA 95926", pinterest: "f", user_id: 1 },
    # { name: "Jan Michael Vincent", address: "201 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Jan Michael Vincent", address: "202 West First Street, Chico CA 95926", pinterest: "f", user_id: 25 },
    # { name: "Jan Michael Vincent", address: "203 West First Street, Chico CA 95926", pinterest: "f", user_id: 9 },
    # { name: "Jan Michael Vincent", address: "204 West First Street, Chico CA 95926", pinterest: "f", user_id: 21 },
    # { name: "Jan Michael Vincent", address: "205 West First Street, Chico CA 95926", pinterest: "f", user_id: 20 },
    # { name: "Jan Michael Vincent", address: "206 West First Street, Chico CA 95926", pinterest: "t", user_id: 8 },
  ]
)

# decks = Deck.create(
#   [
#                     { description: "CSU Chico Faculty", user_id: 1},
#                     { description: "CSU Chico Friends", user_id: 1},
#                     { description: "CSU Chico Colleagues", user_id: 1},
#                     { description: "CSU Chico Advisors", user_id: 1},
#                     { description: "Chico Local Network", user_id: 1},
#                     { description: "Bay Area Professional Network", user_id: 1},
#   ]
# )

#Create a random amount of decks per user
users.each do |user|
  for i in 0..rand(4)
    random_name = gen_tag
    random_desc = gen_tag
    Deck.create(name: "Deck: " + i.to_s, description: random_desc, user_id: user.id)
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
          tCard=Tagcard.create(bcard_id: bcard.id, user_id: user_id)
          #create Tags
          for i in 0..rand(4)
              random_tag_string = gen_tag
              # if Tag.exists?(:conditions => { :text => params[random_tag_string] })
              #     nTag = Tag.where(text: random_tag_string)
              #     nTag.hits = nTag.hits + 1
              #     puts "Incremented " + nTag.text + ".hits by 1"
              # else
                nTag=Tag.create(text: random_tag_string, hits: user_id)
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
