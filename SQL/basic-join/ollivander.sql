select W.id, WP.age, W.coins_needed, W.power from Wands W
    inner join Wands_Property WP on W.code=WP.code
    where WP.is_evil = 0 and W.coins_needed=(
        select min(coins_needed) from wands W1
            inner join wands_property WP1 on W1.code=WP1.code
            where W1.power=W.power and WP.age=WP1.age
    )
    order by W.power DESC, WP.age DESC
