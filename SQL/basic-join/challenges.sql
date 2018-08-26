select H.hacker_id, H.name, count(C.challenge_id) num from Hackers H
    join Challenges C on C.hacker_id=H.hacker_id
    group by H.hacker_id, H.name
    /* check that the count is 1*/
    having num in (select T.count from (
                  select count(*) count from challenges group by hacker_id) T
            group by T.count
            having count(T.count)=1)
    /* or is equal to max number */
    or num=(
      select max(M.count) from (select count(*) count from challenges group by hacker_id) M
      group by M.count order by M.count desc limit 1
    )
    order by num Desc, H.hacker_id
