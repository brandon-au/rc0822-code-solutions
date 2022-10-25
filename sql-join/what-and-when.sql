SELECT
  "f"."title" as "filmTitle",
  "f"."releaseYear" as "releaseYear",
  "g"."name" as "genre"

FROM "films" as "f"
JOIN "filmGenre" as "fG" using ("filmId")
JOIN "genres" as "g" using ("genreId")
WHERE ("title") = ('Boogie Amelie');
