SELECT
  "c"."firstName" as "First Name",
  "c"."lastName" as "Last Name"

FROM "customers" as "c"
JOIN "rentals" as "r" using ("customerId")
JOIN "inventory" as "i" using ("inventoryId")
JOIN "films" as "f" using ("filmId")
WHERE ("title") = ('Magic Mallrats');
