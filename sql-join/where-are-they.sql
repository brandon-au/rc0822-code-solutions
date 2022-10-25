SELECT
  "a"."line1" as "Street",
  "cities"."name" as "City",
  "a"."district" as "District",
  "countries"."name" as "Country"

FROM "addresses" as "a"
JOIN "cities" using ("cityId")
Join "countries" using ("countryId");
