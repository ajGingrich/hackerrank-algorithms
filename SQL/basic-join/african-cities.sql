-- Given the CITY and COUNTRY tables, query the names of all cities where the CONTINENT is 'Africa'.
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

SELECT t1.NAME FROM CITY t1
    INNER JOIN COUNTRY t2 on t1.CountryCode=t2.Code
    WHERE t2.CONTINENT='Africa'
