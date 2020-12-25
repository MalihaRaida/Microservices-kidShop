use productservice;

drop procedure if exists productUpdate;
create procedure ratingUpdate
(
IN productId varchar(36),
IN averageRating float,
IN numberOfRaters int
)
BEGIN
    update product
        set product.averageRating=averageRating and
                                  product.numberOfRaters
    where product.id=productId;
end;