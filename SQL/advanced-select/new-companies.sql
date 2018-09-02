select E.company_code, C.founder, count(distinct E.lead_manager_code), count(distinct E.senior_manager_code),
count(distinct E.manager_code), count(distinct E.employee_code) from employee E
    inner join company C on C.company_code=E.company_code
    group by E.company_code, C.founder
    order by company_code

-- without joins from discussions

select c.company_code, c.founder,
    count(distinct l.lead_manager_code), count(distinct s.senior_manager_code),
    count(distinct m.manager_code),count(distinct e.employee_code)
from Company c, Lead_Manager l, Senior_Manager s, Manager m, Employee e
where c.company_code = l.company_code
    and l.lead_manager_code=s.lead_manager_code
    and s.senior_manager_code=m.senior_manager_code
    and m.manager_code=e.manager_code
group by c.company_code order by c.company_code;
