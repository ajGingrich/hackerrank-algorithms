select max(months*salary), count(employee_id) from employee
   group by months, salary
   having months*salary=(
    select max(months*salary) from employee
   )
