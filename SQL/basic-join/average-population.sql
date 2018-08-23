-- Given the CITY and COUNTRY tables, query the names of all the continents (COUNTRY.Continent) and their
-- respective average city populations (CITY.Population) rounded down to the nearest integer.
--
-- Note: CITY.CountryCode and COUNTRY.Code are matching key columns.

SELECT t2.CONTINENT, FLOOR(AVG(t1.POPULATION)) FROM CITY t1
    INNER JOIN COUNTRY t2 on t1.CountryCode=t2.Code
    group by t2.CONTINENT
