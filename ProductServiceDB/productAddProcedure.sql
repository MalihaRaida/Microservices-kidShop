drop procedure if exists productAdd;
create procedure productAdd(
IN guid varchar(36),
IN name varchar(100),
IN categoryId varchar(36),
OUT output varchar(5)
)
begin
    set @checkname =
        (select count(name) from product where product.name = name);
    if @checkname=1 then
        set output='YES';
    else
        set output='NO';
    set @categoryname =
        (select categoryName from category where category.categoryId = categoryId );
    INSERT INTO product(id, name, categoryId, categoryName) VALUES
    (guid,name,categoryId,@categoryname);
    end if ;
end;

call productAdd('250afc7a-6c7d-4518-91b4-671bba502908','lego','847435b4-125c-4bfc-9d03-9832b3aacd64',@value );

select @value ;