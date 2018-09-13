SET sql_mode = ''; -- set to default sql mode
SELECT Start_Date, End_Date
FROM
    (SELECT Start_Date FROM Projects WHERE Start_Date NOT IN (SELECT End_Date FROM Projects)) a, -- get only start dates that don't also have same end date
    (SELECT End_Date FROM Projects WHERE End_Date NOT IN (SELECT Start_Date FROM Projects)) b -- get only end dates that don't also have same start
WHERE Start_Date < End_Date -- make sure start date comes first
GROUP BY Start_Date -- only unique start dates
ORDER BY DATEDIFF(End_Date, Start_Date), Start_Date -- get min start date

--credit to timcottenio discussions
