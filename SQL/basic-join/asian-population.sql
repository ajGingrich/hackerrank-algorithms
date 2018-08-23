-- Given the CITY and COUNTRY tables, query the sum of the populations of all cities where the CONTINENT is 'Asia'.
--
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

SELECT SUM(t1.population) FROM CITY t1
    INNER JOIN COUNTRY t2 on t1.CountryCode=t2.Code
    WHERE t2.CONTINENT='Asia'
