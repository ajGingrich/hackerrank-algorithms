--wip
select M.start_date, M.end_date from projects M
    join projects P on P.end_date = date_add(M.end_date, interval 1 day)
    
