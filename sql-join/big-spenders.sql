SELECT "c"."firstName",
       "c"."lastName",
       "p"."amount" as "Largest Payments"
FROM "payments" as "p"
JOIN "customers" as "c" using ("customerId")
ORDER BY "Largest Payments" desc
LIMIT 10;
