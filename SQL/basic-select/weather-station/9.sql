-- Query the list of CITY names from STATION that do not start with vowels. Your result cannot contain duplicates.

select distinct CITY from STATION where CITY NOT REGEXP '^[a|e|i|o|u]'
