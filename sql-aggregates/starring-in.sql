-- Lisa Monroe - actorId = 178
-- actors(actorId) -> castMembers(filmId) -> filmGenre(genreId) -> genres
-- want genres of movies and # of movies per genre where actorId = 178

-- select "g"."name" as "genre",
--        "g"."name",
--        count("f".*) as "totalFilms"
--   from "castMembers" as "cM"
--   join "filmGenre" as "f" using ("filmId"),
--   from "filmGenre" as "f"
--   join "genres" as "g" using ("genreId");
--   where "actorId" = 178
-- group by "g"."genreId";


SELECT
  "genre"."name" as "genre",
  COUNT(genre) as "Lisa Monroe's Movie Count"
  FROM "actors"
  JOIN "castMembers" using ("actorId")
  JOIN "filmGenre" using ("filmId")
  JOIN "genres" as "genre" using ("genreId")
  WHERE ("firstName", "lastName") = ('Lisa', 'Monroe')
  GROUP BY "genreId";
