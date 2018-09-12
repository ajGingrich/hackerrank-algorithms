select round(lat_n, 4) from station S
    where (select count(lat_n) from station where lat_n < S.lat_n) = -- get number of smaller than lat_n
    (select count(lat_n) from station where lat_n > S.lat_n) -- get number greater than lat_n

-- doesn't work when table has even numbers. For example 500
