select H.hacker_id, H.name from Hackers H
    inner join Submissions S on S.hacker_id=H.hacker_id
    inner join Challenges C on C.challenge_id=S.challenge_id
    inner join Difficulty D on C.difficulty_level=D.difficulty_level and D.score=S.score
    group by H.hacker_id, H.name
    having count(H.hacker_id) > 1
    order by count(H.hacker_id) DESC, H.hacker_id ASC
