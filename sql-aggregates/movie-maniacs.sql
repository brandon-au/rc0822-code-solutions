-- customer -> payments
-- order by total amount desc

SELECT
  "lastName",
  "firstName",
  SUM("p"."amount") as "Total Amount"
FROM "customers"
JOIN "payments" as "p" using ("customerId")
GROUP BY "customerId",
        "p"."amount"
ORDER BY "Total Amount" desc;
