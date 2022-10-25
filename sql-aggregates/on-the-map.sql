select "country"."name" as "country",
       count("city".*) as "totalCities"
  from "cities" as "city"
  join "countries" as "country" using ("countryId")
 group by "country"."countryId";
