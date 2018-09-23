select concat_ws('', name, concat('(', left(occupation, 1), ')')) from occupations
    order by name;
select concat_ws('', 'There are a total of ', count(occupation), ' ', lower(occupation), 's.') from occupations
    group by occupation
    order by count(occupation), occupation;