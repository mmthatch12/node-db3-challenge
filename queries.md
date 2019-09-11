# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

    SELECT p.productname, c.categoryname FROM [Products] as p
    join categories as c
    on p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

    select o.orderid, o.orderdate, s.shippername from orders as o
    join shippers as s
    on o.shipperid= s.shipperid
    where o.orderdate < '1997-01-09'

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

    SELECT od.orderid, p.productname, od.quantity FROM orderdetails as od
    join products as p
    on od.productid = p.productid
    where od.orderid = 10251

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

    SELECT o.orderid, c.customername as [Customer], e.lastname as [Employee's Last Name] FROM [Orders] as o
    join customers as c
    on o.customerid = c.customerid
    join employees as e
    on o.employeeid = e.employeeid

### (Stretch)  Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

    SELECT Count(p.productname) as [Count], c.categoryname FROM [Products] as p
    join categories as c
    on p.categoryid = c.categoryid
    group by categoryname

### (Stretch) Display OrderID and a  column called ItemCount that shows the total number of products placed on the order. Shows 196 records. 