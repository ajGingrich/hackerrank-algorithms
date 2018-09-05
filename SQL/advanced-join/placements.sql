select S.name from students S
    join friends F on F.id=S.id
    where (select salary from packages where id=S.id) < (select salary from packages where id=F.friend_id)
    order by (select salary from packages where id=F.friend_id)

--
