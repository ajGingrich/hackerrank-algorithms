select H.hacker_id, H.name from Hackers H
    inner join Challenges C on H.hacker_id=C.hacker_id
    inner join Submissions S on S.challenge_id=C.challenge_id
    inner join Difficulty D on C.difficulty_level=D.difficulty_level and D.score=S.score
    group by H.hacker_id, H.name
    having count(H.hacker_id) > 1

-- wip
