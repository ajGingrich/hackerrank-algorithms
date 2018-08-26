select H.hacker_id, H.name, sum(M.max_score) total from Hackers H
    join (select S.hacker_id, max(S.score) max_score from Submissions S group by S.challenge_id, S.hacker_id) M
    on H.hacker_id=M.hacker_id
    group by H.hacker_id, H.Name
    having total > 0
    order by total DESC, H.hacker_id
