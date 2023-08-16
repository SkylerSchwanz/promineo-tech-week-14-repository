// Array of JSON Movie objects.
const moviesData = [
  {
    id: 1,
    name: 'Spider-Man: Across the Spider-Verse',
    genre: 'Action',
    runtime: 140,
    director: 'Joaquim Dos Santos',
    releaseDate: '2023-06-02',
    description:
      'Miles Morales catapults across the Multiverse, where he encounters a team of Spider-People charged with protecting its very existence. When the heroes clash on how to handle a new threat, Miles must redefine what it means to be a hero.',
  },

  {
    id: 2,
    name: 'Alien',
    genre: 'Thriller',
    runtime: 117,
    director: 'Ridley Scott',
    releaseDate: '1979-06-22',
    description: 'The crew of a commercial spacecraft encounters a deadly lifeform after investigating an unknown transmission.',
  },

  {
    id: 3,
    name: 'Avengers: Infinity War',
    genre: 'Action',
    runtime: 149,
    director: 'Anthony Russo',
    releaseDate: '2018-04-27',
    description:
      'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.',
  },

  {
    id: 4,
    name: 'Barbie',
    genre: 'Comedy',
    runtime: 114,
    director: 'Greta Gerwig',
    releaseDate: '2023-07-21',
    description: 'Barbie suffers a crisis that leads her to question her world and her existence.',
  },

  {
    id: 6,
    name: 'Godzilla vs. Kong',
    genre: 'Action',
    runtime: 113,
    director: 'Adam Wingard',
    releaseDate: '2021-03-31',
    description:
      'The epic next chapter in the cinematic Monsterverse pits two of the greatest icons in motion picture history against each other--the fearsome Godzilla and the mighty Kong--with humanity caught in the balance.',
  },

  {
    id: 7,
    name: 'Interstellar',
    genre: 'Science Fiction',
    runtime: 169,
    director: 'Christopher Nolan',
    releaseDate: '2014-11-07',
    description:
      'When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.',
  },

  {
    id: 8,
    name: 'Shang-Chi and the Legend of the Ten Rings',
    genre: 'Action',
    runtime: 132,
    director: 'Destin Daniel Cretton',
    releaseDate: '2021-09-03',
    description: 'Shang-Chi, the master of weaponry-based Kung Fu, is forced to confront his past after being drawn into the Ten Rings organization.',
  },

  {
    id: 9,
    name: 'Star Wars: A New Hope',
    genre: 'Science Fiction',
    runtime: 121,
    director: 'George Lucas',
    releaseDate: '1977-05-25',
    description:
      "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
  },

  {
    id: 10,
    name: 'The Batman',
    genre: 'Action',
    runtime: 176,
    director: 'Matt Reeves',
    releaseDate: '2022-03-04',
    description:
      "When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement.",
  },

  {
    id: 11,
    name: 'The Thing',
    genre: 'Thriller',
    runtime: 109,
    director: 'John Carpenter',
    releaseDate: '1982-06-25',
    description:
      'In a US research station in Antarctica, a dog escapes from a nearby Norwegian base, leading to a deadly encounter. The Americans find a mysterious alien life form, capable of assimilating and imitating any living being. As paranoia grows, they realize anyone among them could be The Thing, and survival becomes a nerve-wracking battle for trust and survival.',
  },

  {
    id: 12,
    name: '65',
    genre: 'Science Fiction',
    runtime: 93,
    director: 'Scott Beck, Bryan Woods',
    releaseDate: '2023-03-10',
    description: "An astronaut crash lands on a mysterious planet only to discover he's not alone.",
  },

  {
    id: 13,
    name: 'Gravity',
    genre: 'Science Fiction',
    runtime: 91,
    director: 'Alfonso Cuarón',
    releaseDate: '2013-10-04',
    description: 'Two astronauts work together to survive after an accident leaves them stranded in space.',
  },

  {
    id: 14,
    name: 'Parasite',
    genre: 'Thriller',
    runtime: 132,
    director: 'Bong Joon-ho',
    releaseDate: '2019-08-11',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
  },

  {
    id: 15,
    name: 'Scream VI',
    genre: 'Thriller',
    runtime: 122,
    director: 'Matt Bettinelli-Olpin, Tyler Gillett',
    releaseDate: '2023-03-10',
    description: 'In the next installment, the survivors of the Ghostface killings leave Woodsboro behind and start a fresh chapter in New York City.',
  },

  {
    id: 16,
    name: 'Nope',
    genre: 'Thriller',
    runtime: 130,
    director: 'Jordan Peele',
    releaseDate: '2022-07-22',
    description: 'The residents of a lonely gulch in inland California bear witness to an uncanny and chilling discovery.',
  },

  {
    id: 17,
    name: 'The Conjuring: The Devil Made Me Do It',
    genre: 'Thriller',
    runtime: 112,
    director: 'Michael Chaves',
    releaseDate: '2021-06-04',
    description: 'The Warrens investigate a murder that may be linked to a demonic possession.',
  },

  {
    id: 18,
    name: 'Smile',
    genre: 'Thriller',
    runtime: 115,
    director: 'Parker Finn',
    releaseDate: '2022-09-30',
    description:
      'After witnessing a bizarre, traumatic incident involving a patient, a psychiatrist becomes increasingly convinced she is being threatened by an uncanny entity..',
  },

  {
    id: 19,
    name: 'Guardians Of The Galaxy Vol. 3',
    genre: 'Action',
    runtime: 150,
    director: 'James Gunn',
    releaseDate: '2023-05-05',
    description:
      'Still reeling from the loss of Gamora, Peter Quill rallies his team to defend the universe and one of their own - a mission that could mean the end of the Guardians if not successful.',
  },

  {
    id: 20,
    name: 'The Super Mario Bros. Movie',
    genre: 'Action',
    runtime: 92,
    director: 'Aaron Horvath, Michael Jelenic',
    releaseDate: '2023-05-05',
    description: 'A plumber named Mario travels through an underground labyrinth with his brother, Luigi, trying to save a captured princess.',
  },

  {
    id: 21,
    name: 'War for the Planet of the Apes',
    genre: 'Science Fiction',
    runtime: 140,
    director: 'Matt Reeves',
    releaseDate: '2017-07-14',
    description: 'After the apes suffer unimaginable losses, Caesar wrestles with his darker instincts and begins his own mythic quest to avenge his kind.',
  },
];

export { moviesData };