const mysql = require('mysql2');
const dbModel = require('./dbQueries')
const db = mysql.createConnection({
    host:'localhost',
    //  port:8080,
    user:'root',
        //  password:'AndroidDeveloper8309',
              database:'elzinistore'
});
//create database
let sql = 'CREATE DATABASE IF NOT EXISTS elzinistore';
db.query(sql,(err)=>{
    if(err){
        console.log(err.message)
    } else {
        console.log('Database Created');
    }
});
// connect to mysql
db.connect(function(err){
    if(err){
        console.log('mysql connection error')
         throw err;
        }
    console.log('mysql connected')
    // deleteTable("store")
});
 



    //   db.query('DROP TABLE stock');
    //  db.query('DROP TABLE products');
    // db.query('DROP TABLE numericSizeType');
    //   db.query('DROP TABLE sizes');
        // db.query('DROP TABLE officialStores');
      
    //   db.query('DROP TABLE officialStores');
    //   db.query('DROP TABLE officialStores');
      // create userTable
    db.query(dbModel.createUserTable,(err)=>{
        if(err){
            console.log('createUserTable errrrrr' + err)
        } else {
        console.log('createUserTable Created');
    }
    });

// create CategoriesTable
db.query(dbModel.creatCategoriesTable,(err)=>{
    if(err){
        console.log('creatCategoriesTable errrrrr' + err)
    } else {
    console.log('creatCategoriesTable Created');
}
});

// create createProductImagesTable
db.query(dbModel.createProductImagesTable,(err)=>{
    if(err){
        console.log('createProductImagesTable errrrrr' + err)
    } else {
    console.log('createProductImagesTable Created');
}
});


// // create updatetable
// db.query(dbModel.updatetable,(err)=>{
//     if(err){
//         console.log('updatetable errrrrr' + err)
//     } else {
//     console.log('updatetable Created');
// }
// });
// create createStoreRatesTable
db.query(dbModel.createStoreRatesTable,(err)=>{
    if(err){
        console.log('createStoreRatesTable errrrrr' + err)
    } else {
    console.log('createStoreRatesTable Created');
}
});

// create ProductTable
db.query(dbModel.createProductTable,(err)=>{
    if(err){
        console.log('createProductTable errrrrr' + err)
    } else {
    console.log('createProductTable Created');
}
});

// create storeRatesTable
db.query(dbModel.createSizesTable,(err)=>{
    if(err){
        console.log('createSizesTable errrrrr' + err)
    } else {
    console.log('createSizesTable Created');
}
});


// create createClothesSizeType
db.query(dbModel.createNamedSizeType,(err)=>{
    if(err){
        console.log('createClothesSizeType errrrrr' + err)
    } else {
    console.log('createClothesSizeType Created');
}
});
// create createStockTable
db.query(dbModel.createStockTable,(err)=>{
    if(err){
        console.log('createStockTable errrrrr' + err)
    } else {
    console.log('createStockTable Created');
}
});
 
// create createNumericSizeType
db.query(dbModel.createNumericSizeType,(err)=>{
    if(err){
        console.log('createNumericSizeType errrrrr' + err)
    } else {
    console.log('createNumericSizeType Created');
}
});

function deleteTable(tableName){ 
    let sql = 'DROP DATABASE '+tableName;
        db.query(sql,err =>{
            if(err){
                console.log(err.message);
                return err.message;
            }
            console.log("deleted");
            return "success";
        });
    }
   
// create AdminTable
db.query(dbModel.createAdminTable,(err)=>{
    if(err){
        console.log('createAdminTable errrrrr' + err)
    } else {
    console.log('createAdminTable Created');
}
});

// create BrandsTable
db.query(dbModel.createBrandsTable,(err)=>{
    if(err){
        console.log('createBrandsTable errrrrr' + err)
    } else {
    console.log('createBrandsTable Created');
}
});

// create DeliveryCompnyTable
db.query(dbModel.createDeliveryCompnyTable,(err)=>{
    if(err){
        console.log('createDeliveryCompnyTable errrrrr' + err)
    } else {
    console.log('createDeliveryCompnyTable Created');
}
});

// create DeliveryTable
db.query(dbModel.createDeliveryTable,(err)=>{
    if(err){
        console.log('createDeliveryTable errrrrr' + err)
    } else {
    console.log('createDeliveryTable Created');
}
});

// create MainCategoryTable
db.query(dbModel.createMainCategoryTable,(err)=>{
    if(err){
        console.log('createMainCategoryTable errrrrr' + err)
    } else {
    console.log('createMainCategoryTable Created');
}
});
// create MainOrderTable
db.query(dbModel.createMainOrderTable,(err)=>{
    if(err){
        console.log('createMainOrderTable errrrrr' + err)
    } else {
    console.log('createMainOrderTable Created');
}
});

// create OfficialStoreTable
db.query(dbModel.createOfficialStoreTable,(err)=>{
    if(err){
        console.log('createOfficialStoreTable errrrrr' + err)
    } else {
    console.log('createOfficialStoreTable Created');
}
});
// create StoreTable
db.query(dbModel.createStoreTable,(err)=>{
    if(err){
        console.log('createStoreTable errrrrr' + err)
    } else {
    console.log('createStoreTable Created');
}
});
// create OrderStatusTable
db.query(dbModel.createOrderStatusTable,(err)=>{
    if(err){
        console.log('createOrderStatusTable errrrrr' + err)
    } else {
    console.log('createOrderStatusTable Created');
}
});



// create UserAdressesTable
db.query(dbModel.createUserAdressesTable,(err)=>{
    if(err){
        console.log('createUserAdressesTable errrrrr' + err)
    } else {
    console.log('createUserAdressesTable Created');
}
});
 
// create PromoTable
db.query(dbModel.createPromoTable,(err)=>{
    if(err){
        console.log('createPromoTable errrrrr' + err)
    } else {
    console.log('createPromoTable Created');
}
});
 // create CartTable
db.query(dbModel.createCartTable,(err)=>{
    if(err){
        console.log('createCartTable errrrrr' + err)
    } else {
    console.log('createCartTable Created');
}
});

// create OffersTable
db.query(dbModel.createOffersTable,(err)=>{
    if(err){
        console.log('createOffersTable errrrrr' + err)
    } else {
    console.log('createOffersTable Created');
}
});


// create OrderTable
db.query(dbModel.createOrderTable,(err)=>{
    if(err){
        console.log('createOrderTable errrrrr' + err)
    } else {
    console.log('createOrderTable Created');
}
});

    module.exports = db;
