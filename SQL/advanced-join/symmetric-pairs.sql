-- wip

select L.x, L.y from functions L
where L.x in (select C.y from (select x, y from functions where x=2) C)
and L.y in (select D.x from (select x, y from functions where y=24) D)
order by L.x


select x, y from functions f1
    where exists(select * from functions f2 where f2.y=f1.x
    and f2.x=f1.y and f2.x>f1.x) and (x!=y)
union
select x, y from functions f1 where x=y and
    ((select count(*) from functions where x=f1.x and y=f1.x)>1)
        order by x;
