select n, case when p is null then 'Root'
    when find_in_set(n, (select cast(group_concat(p separator ',') as char) from BST)) = 0
        then 'Leaf'
    else 'Inner' end
    from BST
    order by n
