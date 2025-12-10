// questions.js - Question data structure
const womenDirectors = [
  // Contemporary/Recent
  "greta gerwig", "chloé zhao", "chloe zhao", "kathryn bigelow", "ava duvernay", 
  "patty jenkins", "sofia coppola", "lulu wang", "céline sciamma", "celine sciamma",
  "lynne ramsay", "kelly reichardt", "miranda july", "gina prince-bythewood",
  "karyn kusama", "dee rees", "marielle heller", "olivia wilde", "emerald fennell",
  "julia ducournau", "alice rohrwacher", "mati diop", "lucile hadžihalilović", 
  "lucile hadzihalilovic", "joanna hogg", "nicole holofcener", "debra granik",
  "cathy yan", "lorene scafaria", "melina matsoukas", "jennifer kent", "anna boden",
  
  // Classic/Historical
  "agnès varda", "agnes varda", "chantal akerman", "claire denis", "jane campion",
  "ida lupino", "maya deren", "barbara loden", "elaine may", "penny marshall",
  "nora ephron", "nancy meyers", "barbara kopple", "lina wertmüller", "lina wertmuller",
  "margarethe von trotta", "věra chytilová", "vera chytilova", "larisa shepitko",
  "julie dash", "mira nair", "deepa mehta", "gurinder chadha", "sally potter",
  "gillian armstrong", "amy heckerling", "susan seidelman", "martha coolidge",
  
  // International
  "naomi kawase", "hirokazu koreeda", "hirokazu kore-eda", "lucrecia martel", 
  "andrea arnold", "samira makhmalbaf", "lynne ramsay", "jessica hausner",
  "alice guy-blaché", "alice guy-blache", "lois weber", "dorothy arzner", 
  "germaine dulac", "esther shub", "larisa shepitko", "kira muratova",
  "agnès varda", "marguerite duras", "liliana cavani", "lina wertmüller"
];
const imdbTop250Films = [
  // Top 50 (most likely to be known)
  "the shawshank redemption", "shawshank redemption", "the godfather", "godfather",
  "the dark knight", "dark knight", "the godfather part ii", "the godfather: part ii",
  "godfather part ii", "12 angry men", "schindler's list", "schindlers list",
  "the lord of the rings: the return of the king", "return of the king",
  "pulp fiction", "the lord of the rings: the fellowship of the ring", "fellowship of the ring",
  "the good, the bad and the ugly", "good bad ugly", "forrest gump",
  "the lord of the rings: the two towers", "two towers", "fight club", "inception",
  "star wars: episode v - the empire strikes back", "empire strikes back",
  "the matrix", "matrix", "goodfellas", "one flew over the cuckoo's nest", "one flew over the cuckoos nest",
  "se7en", "seven", "it's a wonderful life", "its a wonderful life", "the silence of the lambs",
  "silence of the lambs", "saving private ryan", "interstellar", "city of lights",
  "life is beautiful", "the green mile", "green mile", "star wars", "a new hope",
  "terminator 2: judgment day", "terminator 2", "back to the future", "spirited away",
  "the pianist", "pianist", "psycho", "parasite", "léon: the professional", "leon: the professional",
  "leon", "the lion king", "lion king", "gladiator", "american history x",
  "the departed", "departed", "the usual suspects", "usual suspects", "the prestige", "prestige",
  "whiplash", "casablanca", "the intouchables", "intouchables", "modern times",
  "harakiri", "grave of the fireflies", "cinema paradiso", "rear window", "alien",
  "apocalypse now", "raiders of the lost ark", "memento", "django unchained",
  "the great dictator", "great dictator", "the lives of others", "lives of others",
  "paths of glory", "sunset boulevard", "witness for the prosecution", "the shining", "shining",
  "dr. strangelove", "oldboy", "once upon a time in america", "aliens",
  "coco", "american beauty", "braveheart", "das boot", "toy story",
  "avengers: infinity war", "infinity war", "princess mononoke", "joker",
  "full metal jacket", "amadeus", "inglourious basterds", "2001: a space odyssey",
  "2001 a space odyssey", "bicycle thieves", "reservoir dogs", "toy story 3",
  "the kid", "singin' in the rain", "singing in the rain", "snatch",
  "for a few dollars more", "monty python and the holy grail", "l.a. confidential",
  "la confidential", "the apartment", "apartment", "scarface", "a clockwork orange",
  "clockwork orange", "taxi driver", "double indemnity", "vertigo", "north by northwest",
  "citizen kane", "metropolis", "rebecca", "lawrence of arabia", "the sting", "sting",
  "eternal sunshine of the spotless mind", "eternal sunshine", "amélie", "amelie",
  "requiem for a dream", "the sixth sense", "sixth sense", "the truman show", "truman show",
  "the big lebowski", "big lebowski", "fargo", "no country for old men",
  "there will be blood", "the social network", "social network", "gone girl",
  "her", "drive", "nightcrawler", "prisoners", "arrival", "blade runner",
  "blade runner 2049", "the thing", "indiana jones", "jaws", "the terminator", "terminator",
   "the batman", "batman begins", "the avengers", "avengers", "titanic",
  "avatar", "jurassic park", "the wizard of oz", "wizard of oz", "star wars: return of the jedi",
  "return of the jedi", "the breakfast club", "breakfast club", "die hard",
  "the exorcist", "exorcist", "rocky", "top gun", "E.T.", "et the extra terrestrial",
  "the sound of music", "sound of music", "gone with the wind", "ben-hur", "benhur",
  "west side story", "my fair lady", "the graduate", "graduate", "chinatown",
  "raging bull", "the deer hunter", "deer hunter", "annie hall", "all about eve",
  "the treasure of the sierra madre", "sierra madre", "to kill a mockingbird",
  "kill mockingbird", "mr. smith goes to washington", "some like it hot",
  "singin' in the rain", "the maltese falcon", "maltese falcon", "city lights",
  "the gold rush", "gold rush", "it happened one night", "the philadelphia story",
  "philadelphia story", "bringing up baby", "his girl friday", "duck soup",
  "the grapes of wrath", "grapes of wrath"
];
  
const questions = [
  // Question 1
  {
    id: 1,
    text: '"How Would You Describe Yourself As A Film Viewer?"',
    options: [
      { value: 0, text: "I Appreciate All Cinema, From Arthouse To Blockbuster", points: { H: 0 } },
      { value: 1, text: "I Prefer Films That Challenge Conventions And Make You Think", points: { H: 0 } },
      { value: 2, text: "I Watch What I Enjoy, No Pretension Needed", points: { H: 0 } },
      { value: 3, text: "I'm Into Technically Masterful Filmmaking", points: { T: 6 } }
    ]
  },
  
  // Question 2
  {
    id: 2,
    text: '"Which Statement Resonates Most With You?"',
    options: [
      { value: 0, text: "Nolan Is The Greatest Living Director", points: { C: 5 } },
      { value: 1, text: "Tarantino Invented Nonlinear Storytelling", points: { C: 5 } },
      { value: 2, text: "Fincher's Mastery Of Tone Is Unmatched", points: { C: 4 } },
      { value: 3, text: "I Appreciate Many Directors For Different Reasons", points: { E: 0 } }
    ]
  },
  
  // Question 3
  {
    id: 3,
    text: '"How Do You Feel About Popular Films?"',
    options: [
      { value: 0, text: "Most Popular Films Are Mindless Entertainment For The Masses", points: { C: 5 } },
      { value: 1, text: "Some Are Good, But I Prefer Hidden Gems", points: { C: 4 } },
      { value: 2, text: "Popular Films Can Be Genuinely Great", points: { E: 1 } },
      { value: 3, text: "I Only Watch Films With A Criterion Release", points: { C: 5 } }
    ]
  },

   // Question 4 - Women directors with optional validation
  {
    id: 4,
    text: '"Name 5 Women Film Directors"',
    type: 'text',
    placeholder: 'Enter director names separated by commas (e.g., Greta Gerwig, Jane Campion, Agnès Varda)',
    validation: 'directors',
    helpText: 'Feel free to skip if you need to - but give it a try!'
  },

  // Question 5 - Films NOT on IMDb Top 250 with optional validation
  {
    id: 5,
    text: '"Name 5 Films NOT On The IMDb Top 250"',
    type: 'text',
    placeholder: 'Enter film titles separated by commas (e.g., Moonlight, Lady Bird, The Handmaiden)',
    validation: 'films',
    helpText: 'Any films you love that aren\'t on the mainstream "greatest" lists'
  },


  // Question 6 - Multiple select
  {
    id: 6,
    text: '"Which Directors Can You Confidently Discuss?" (Select all that apply)',
    type: 'multiple',
    options: [
      { value: 0, text: "Christopher Nolan", gender: "male" },
      { value: 1, text: "Quentin Tarantino", gender: "male" },
      { value: 2, text: "David Fincher", gender: "male" },
      { value: 3, text: "Martin Scorsese", gender: "male" },
      { value: 4, text: "Stanley Kubrick", gender: "male" },
      { value: 5, text: "Denis Villeneuve", gender: "male" },
      { value: 6, text: "Paul Thomas Anderson", gender: "male" },
      { value: 7, text: "Wes Anderson", gender: "male" },
      { value: 8, text: "Céline Sciamma", gender: "female" },
      { value: 9, text: "Greta Gerwig", gender: "female" },
      { value: 10, text: "Kathryn Bigelow", gender: "female" },
      { value: 11, text: "Kelly Reichardt", gender: "female" },
      { value: 12, text: "Agnès Varda", gender: "female" },
      { value: 13, text: "Chantal Akerman", gender: "female" },
      { value: 14, text: "Ava DuVernay", gender: "female" },
      { value: 15, text: "Jane Campion", gender: "female" }
    ]
  },

  // Question 7
  {
    id: 7,
    text: '"What Makes A Film Great?"',
    options: [
      { value: 0, text: "Cinematography And Technical Execution", points: { T: 6 } },
      { value: 1, text: "Story And Character Development", points: { H: 2 } },
      { value: 2, text: "Emotional Resonance And Themes", points: { H: 1 } },
      { value: 3, text: "All Of These In Balance", points: { H: 0 } }
    ]
  },

  // Question 8
  {
    id: 8,
    text: '"You Haven\'t Really Seen A Film Unless..."',
    options: [
      { value: 0, text: "You've Seen It In IMAX", points: { T: 5 } },
      { value: 1, text: "You've Seen It On 35mm Film", points: { T: 6 } },
      { value: 2, text: "You've Analyzed The Aspect Ratio Choices", points: { T: 6 } },
      { value: 3, text: "You've Just... Seen It?", points: { H: 0 } }
    ]
  },

  // Question 9
  {
    id: 9,
    text: '"How Often Do You Mention Roger Deakins In Conversation?"',
    options: [
      { value: 0, text: "Constantly - He's A Cinematography God", points: { T: 5 } },
      { value: 1, text: "When Relevant To Discussing Cinematography", points: { T: 2 } },
      { value: 2, text: "Who?", points: { H: 0 } },
      { value: 3, text: "Sometimes, Among Other Talented Cinematographers", points: { H: 1 } }
    ]
  },

  // Question 10
  {
    id: 10,
    text: '"Your Favorite \'Underrated\' Film Is Probably:"',
    options: [
      { value: 0, text: "Moon (2009)", points: { C: 4 } },
      { value: 1, text: "Primer (2004)", points: { C: 4 } },
      { value: 2, text: "The Man From Earth (2007)", points: { C: 4 } },
      { value: 3, text: "A Film Most People Actually Haven't Heard Of", points: { E: 0 } }
    ]
  },

  // Question 11
  {
    id: 11,
    text: '"How Do You Feel About Romantic Comedies?"',
    options: [
      { value: 0, text: "Formulaic Garbage For People Who Don't Appreciate Real Cinema", points: { S: 6 } },
      { value: 1, text: "Not My Thing, But Some Are Well-Made", points: { S: 2 } },
      { value: 2, text: "Some Are Genuinely Great Films", points: { O: 0 } },
      { value: 3, text: "I Have A Secret Soft Spot For Them", points: { O: -2 } }
    ]
  },

  // Question 12
  {
    id: 12,
    text: '"When Discussing Film, You Most Often Reference:"',
    options: [
      { value: 0, text: "Male Protagonists Dealing With Violence/Corruption", points: { D: 4, S: 4 } },
      { value: 1, text: "Technical Achievements In Filmmaking", points: { T: 3, S: 2 } },
      { value: 2, text: "A Diverse Range Of Characters And Stories", points: { B: 0, O: 0 } },
      { value: 3, text: "How A Film Made You Feel", points: { H: 0, O: 0 } }
    ]
  },

  // Question 13
  {
    id: 13,
    text: '"Have You Ever Started A Sentence With \'Well, Actually...\'?"',
    options: [
      { value: 0, text: "Frequently - People Need To Be Corrected", points: { modifier_T: 3 } },
      { value: 1, text: "Sometimes, When I Know I'm Right", points: { modifier_T: 2 } },
      { value: 2, text: "Rarely, Only When Really Necessary", points: {} },
      { value: 3, text: "I Try To Avoid This", points: { modifier_T: -1 } }
    ]
  },

  // Question 14
  {
    id: 14,
    text: '"How Do You Typically Share Film Opinions?"',
    options: [
      { value: 0, text: "Through Detailed Analysis Others Might Find Condescending", points: { modifier_T: 2 } },
      { value: 1, text: "With Strong Conviction - I Know What I'm Talking About", points: { modifier_C: 2 } },
      { value: 2, text: "As Personal Perspective, Open To Discussion", points: {} },
      { value: 3, text: "Casually, Without Making It A Big Deal", points: {} }
    ]
  },

  // Question 15
  {
    id: 15,
    text: '"Someone Says They Loved A \'Mainstream\' Blockbuster. You:"',
    options: [
      { value: 0, text: "Explain Why They Should Watch Better Films", points: { modifier_C: 3, modifier_S: 2 } },
      { value: 1, text: "Recommend Something More 'Sophisticated'", points: { modifier_C: 2, modifier_S: 2 } },
      { value: 2, text: "Ask What They Liked About It", points: {} },
      { value: 3, text: "Share In Their Enthusiasm If You Also Enjoyed It", points: { modifier_C: -1 } }
    ]
  },

  // Question 16
  {
    id: 16,
    text: '"Your Letterboxd Bio Probably Includes:"',
    options: [
      { value: 0, text: "Your Favorite Aspect Ratio", points: { C: 3, T: 3 } },
      { value: 1, text: "A Scorsese Or Kubrick Quote", points: { C: 3 } },
      { value: 2, text: "List Of Auteurs You Worship", points: { C: 3 } },
      { value: 3, text: "Just Films I Like / I Don't Have Letterboxd", points: { E: 0, H: 0 } }
    ]
  },

  // Question 17 - Multiple select with limit
  {
    id: 17,
    text: '"Pick Your Top 3 Favorite Films From This List:"',
    type: 'multiple',
    limit: 3,
    options: [
      { value: 0, text: "The Godfather (1972)", points: { C: 2 } },
      { value: 1, text: "The Shawshank Redemption (1994)", points: { C: 2 } },
      { value: 2, text: "Pulp Fiction (1994)", points: { C: 2 } },
      { value: 3, text: "The Dark Knight (2008)", points: { C: 2 } },
      { value: 4, text: "Fight Club (1999)", points: { C: 2 } },
      { value: 5, text: "Goodfellas (1990)", points: { C: 2 } },
      { value: 6, text: "Inception (2010)", points: { C: 2 } },
      { value: 7, text: "Interstellar (2014)", points: { C: 2 } },
      { value: 8, text: "Blade Runner (1982)", points: { C: 2 } },
      { value: 9, text: "Taxi Driver (1976)", points: { C: 2 } },
      { value: 10, text: "The Matrix (1999)", points: { C: 2 } },
      { value: 11, text: "Se7en (1995)", points: { C: 2 } },
      { value: 12, text: "Drive (2011)", points: { C: 2 } },
      { value: 13, text: "There Will Be Blood (2007)", points: { C: 2 } },
      { value: 14, text: "No Country For Old Men (2007)", points: { C: 2 } },
      { value: 15, text: "Apocalypse Now (1979)", points: { C: 2 } },
      { value: 16, text: "2001: A Space Odyssey (1968)", points: { C: 2 } },
      { value: 17, text: "Citizen Kane (1941)", points: { C: 2 } },
      { value: 18, text: "Parasite (2019)", points: {} },
      { value: 19, text: "Get Out (2017)", points: {} }
    ]
  }
];