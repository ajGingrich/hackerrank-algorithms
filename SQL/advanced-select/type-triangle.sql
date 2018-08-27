select case when a + b <= c OR a + c <= b OR b + c <= a then 'Not A Triangle'
    when a=b and b=c then 'Equilateral'
    when a=b or b=c or a=c then 'Isosceles'
    else 'Scalene' end
    from TRIANGLES
