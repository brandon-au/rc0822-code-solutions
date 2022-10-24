SELECT
  "a"."firstName" as "First Name",
  "a"."lastName" as "Last Name"


FROM "actors" as "a"
JOIN "castMembers" as "cM" using ("actorId")
JOIN "films" as "f" using ("filmId")
WHERE ("title") = ('Jersey Sassy');
