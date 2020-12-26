Setting Up ProductService Database:

All query to setup with the database is given in the ProductServiceDB
Just run the queries in the Datagrip/Mysql Workbench to create the new 'productservice' Database.

Setting Up ProductService:

opening terminal in ProductService folder
run `npm install -g` will automatically download all packages

In somecases `npm install express` if the node does not have express. 

then in the _index.js_ file , the mysqlConnection details where the _user_ and _password_ needed to be changed according to Own mysql server. Or as given kept default.

then run `node index.js` will start the server in port 3005. 

If the port is busy,then post number have to be changed in _index.js_ file.

Setting Up ratingService:

Opening the _RatingService.sln_ solution in Visual Studio

then in the _RatingRepository.cs_ file _LoadData()_ and _SaveData()_ have the address of the _rating.json_ which needs to be changed according to the path taken from the properties of the file _rating.json_.

#### The RatingService is built on .Net Core 3.1 framework ####
