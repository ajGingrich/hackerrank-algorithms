-- wip --not finished..

select L.x, L.y from functions L
where L.x in (select C.y from (select x, y from functions where x=2) C)
and L.y in (select D.x from (select x, y from functions where y=24) D)
order by L.x
