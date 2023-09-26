
 let createUserTable = `CREATE TABLE user(userId int AUTO_INCREMENT,`+
 `firstName VARCHAR(30) DEFAULT '',`+
 `middleName VARCHAR(30) DEFAULT '',`+
 `lastName VARCHAR(30) DEFAULT '',`+
 `userEmail VARCHAR(255) DEFAULT '',`+
 `userAddress VARCHAR(255) DEFAULT '',`+
 `birthDate VARCHAR(255) DEFAULT '',`+
 `userPhone VARCHAR(255) DEFAULT '',`+
 `userPassword VARCHAR(255) DEFAULT '',`+
 `userToken VARCHAR(255) DEFAULT '',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `PRIMARY KEY(userId))`;
let createAdminTable = `CREATE TABLE admin(adminId int AUTO_INCREMENT,`+
`adminToken VARCHAR(255) DEFAULT '',`+
`isSuper BOOLEAN DEFAULT false,`+
`adminName VARCHAR(255) DEFAULT '',`+
`adminUserName VARCHAR(255) DEFAULT '',`+
`adminEmail VARCHAR(255) DEFAULT '',`+
`adminPassword VARCHAR(255) DEFAULT '',`+
`createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
`updatedAt datetime,`+
`PRIMARY KEY(adminId))`;

let createMainCategoryTable = `CREATE TABLE mainCategory(`+
 `mainCategoryNameAr VARCHAR(255) DEFAULT '',`+
 `mainCategoryNameEn VARCHAR(255) DEFAULT '',`+
 `mainCategoryId int AUTO_INCREMENT,`+
 `mainCategoryImage VARCHAR(255) DEFAULT '',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `PRIMARY KEY(mainCategoryId))`;

 let creatCategoriesTable = `CREATE TABLE categories (`+
     `categoryNameAr VARCHAR(255) DEFAULT '',`+
     `categoryNameEn VARCHAR(255) DEFAULT '',`+
     `mainCategoryId int,`+
     `categoryImage VARCHAR(255) DEFAULT '',`+
     `categoryId int AUTO_INCREMENT,`+
     `mainCategoryNameAr VARCHAR(255) DEFAULT '',`+
     `mainCategoryNameEn VARCHAR(255) DEFAULT '',`+
     `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
     `updatedAt datetime,`+
      `PRIMARY KEY (categoryId),`+
      `FOREIGN KEY (mainCategoryId) REFERENCES mainCategory (mainCategoryId))`;

let createProductTable = `CREATE TABLE products (`+
 `nameAr VARCHAR(255) DEFAULT '',`+
 `nameEn VARCHAR(255) DEFAULT '',`+
 `productId int AUTO_INCREMENT,`+
 `mainCategoryId int,`+
 `mainCategoryNameAr VARCHAR(255) DEFAULT '',`+
 `categoryId int,`+
 `mainCategoryNameEn VARCHAR(255) DEFAULT '',`+
 `categoryNameEn VARCHAR(255) DEFAULT '',`+
 `categoryNameAr VARCHAR(255) DEFAULT '',`+
 `brandName VARCHAR(255) DEFAULT '',`+
 `storeName VARCHAR(255) DEFAULT '',`+
 `storeId int,`+ `sizeId int,`+
 `brandId int,`+
 `sellerRatingPercentage DOUBLE DEFAULT 0.0,`+
 `sellerDeliverySpeed DOUBLE DEFAULT 0.0,`+
 `sellerQualityRating DOUBLE DEFAULT 0.0,`+
 `isOfficialStore BOOLEAN DEFAULT false,`+
 `price DOUBLE DEFAULT 0.0,`+
 `priceAfterDiscount DOUBLE DEFAULT 0.0,`+
 `stockCount int,`+
 `deliveryCost DOUBLE DEFAULT 0.0,`+
 `isFreeDeliveryAvailable BOOLEAN DEFAULT false,`+
 `DeliveryExpectedDate VARCHAR(255) DEFAULT '',`+
 `availableSizes VARCHAR(255) DEFAULT '',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `PRIMARY KEY(productId),`+
 `FOREIGN KEY (mainCategoryId) REFERENCES mainCategory(mainCategoryId),`+
 `FOREIGN KEY (sizeId) REFERENCES sizes(sizeId),`+
 `FOREIGN KEY (categoryId) REFERENCES categories(categoryId))`;      
  
 let createStockTable = 'CREATE TABLE stock('+
 'stockId int AUTO_INCREMENT,'+
 'stockCount int,'+
 'sizeId int,'+
 'sizeType int,'+
 'productId int ,'+
 `storeId int,`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 'PRIMARY KEY (stockId,stockCount),'+
 `FOREIGN KEY (productId) REFERENCES products(productId),`+
 `FOREIGN KEY (storeId) REFERENCES store(storeId))`;


let createMainOrderTable = `CREATE TABLE mainOrder (`+
 `mainOrderId int AUTO_INCREMENT,userId int,PRIMARY KEY(mainOrderId))`;    

let createOrderTable = `CREATE TABLE orders (`+
 `orderId int AUTO_INCREMENT,`+
 `mainOrderId int,`+
 `userId int,`+
 `extraDetails VARCHAR(255) DEFAULT '',`+
 `productId int,`+
 `productStatus VARCHAR(255) DEFAULT '',`+
 `productQuantity int,`+
 `userAddress VARCHAR(255) DEFAULT '',`+
 `brandName VARCHAR(255) DEFAULT '',`+
 `storeName VARCHAR(255) DEFAULT '',`+
 `storeId int,`+
 `brandId int,`+
 `orderStatues VARCHAR(50) DEFAULT 'pending',`+
 `deliveryId int,`+
 `totalPrice DOUBLE DEFAULT 0.0,`+
 `deliveryCost DOUBLE DEFAULT 0.0,`+
 `isFreeDeliveryAvailable BOOLEAN DEFAULT false,`+
 `DeliveryExpectedDate VARCHAR(255) DEFAULT '',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `mainCategoryId int,`+
 `categoryId int,`+
 `offerId int DEFAULT 0,`+
 `promoId int,`+
 `promoDiscount DOUBLE DEFAULT 0.0,`+
 `deliveryStatus VARCHAR(255) DEFAULT '',`+
 `PRIMARY KEY(orderId),`+
 `FOREIGN KEY(storeId) REFERENCES store(storeId),`+
 `FOREIGN KEY(brandId) REFERENCES brands(brandId),`+
 `FOREIGN KEY(mainOrderId) REFERENCES mainOrder(mainOrderId),`+
 `FOREIGN KEY(userId) REFERENCES user(userId),`+
 `FOREIGN KEY(stockCount) REFERENCES stock(stockCount),`+
 `FOREIGN KEY(offerId) REFERENCES offers(offerId),`+
 `FOREIGN KEY (mainCategoryId) REFERENCES mainCategory(mainCategoryId),`+
 `FOREIGN KEY (categoryId) REFERENCES categories(categoryId),`+
 `FOREIGN KEY(promoId) REFERENCES promoCodes(promoId))`;

 let createPromoTable = 'CREATE TABLE promoCodes('+
  'promoId int AUTO_INCREMENT,'+
  'promoDiscount DOUBLE DEFAULT 0.0,'+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  'userId int, promoCode VARCHAR(50) NOT NULL,'+
  'PRIMARY KEY (promoId),FOREIGN KEY (userId) REFERENCES user (userId))';

  let createProductImagesTable = 'CREATE TABLE productImages('+
  'imageId int AUTO_INCREMENT,'+
  'productId int,'+
  'imageUrl VARCHAR(50) NOT NULL,'+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  'PRIMARY KEY (imageId),'+
  'FOREIGN KEY (productId) REFERENCES products (productId))';

 let createSizesTable = 'CREATE TABLE sizes('+
  'sizeId int AUTO_INCREMENT,'+
  'sizeType int,'+
  'sizeName VARCHAR(50) NOT NULL,'+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  'PRIMARY KEY (sizeId))';

  let createNamedSizeType = 'CREATE TABLE namedSizeType('+
  'sizeId int AUTO_INCREMENT,'+
  'sizeName VARCHAR(50) NOT NULL,'+
  'sizeType int,'+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  'PRIMARY KEY (sizeId))';

  let updatetable = 'ALTER TABLE products ADD COLUMN `sizeType` int';
  let updatetables = 'ALTER TABLE nameSizeType ADD FOREIGN KEY (`sizeType`) REFERENCES sizes(`sizeId`)';
  let createNumericSizeType = 'CREATE TABLE numericSizeType('+
  'sizeId int AUTO_INCREMENT,'+
  'sizeName VARCHAR(50) NOT NULL,'+
  'sizeType int,'+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  'PRIMARY KEY (sizeId))';



let createUserAdressesTable = `CREATE TABLE userAddresses (`+
`street VARCHAR(255) DEFAULT '',`+
`addressId int AUTO_INCREMENT,`+
`userId int,`+
`buildNumber VARCHAR(255) DEFAULT '',`+
`city VARCHAR(255) DEFAULT '',`+
`region VARCHAR(255) DEFAULT '',`+
`lat DECIMAL DEFAULT 0.0,`+
`lng DECIMAL DEFAULT 0.0,`+
`createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
`updatedAt datetime,`+
`PRIMARY KEY(addressId),`+
`FOREIGN KEY(userId) REFERENCES user(userId))`;

let createStoreTable = `CREATE TABLE store (`+
`storeId int AUTO_INCREMENT,`+
`storeToken VARCHAR(255) DEFAULT '',`+
`storePassword VARCHAR(255) DEFAULT '',`+
`storeMobile VARCHAR(255) DEFAULT '',`+
`storeEmail VARCHAR(255) DEFAULT '',`+
`storeName VARCHAR(255) DEFAULT '',`+
`storeImage VARCHAR(255) DEFAULT '',`+
`isAcceptVisa VARCHAR(255) DEFAULT '',`+
`isAccepted VARCHAR(255) DEFAULT '',`+
`isOfficialStore BOOLEAN DEFAULT false,`+
`createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
`updatedAt datetime,`+
`PRIMARY KEY(storeId))`;

let createBrandsTable = `CREATE TABLE brands (`+
 `brandId int AUTO_INCREMENT,`+
 `brandNameAr VARCHAR(50) DEFAULT '',`+
 `brandNameEn VARCHAR(50) DEFAULT '',`+
 `brandImage VARCHAR(255) DEFAULT '',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `PRIMARY KEY(brandId))`; 

let createOrderStatusTable = `CREATE TABLE orderStatues (`+
 `id int AUTO_INCREMENT,pending VARCHAR(50) DEFAULT 'Pending',`+
 `inProgress VARCHAR(50) DEFAULT 'InProgress',`+
 `delivered VARCHAR(50) DEFAULT 'Delivered',`+
 `canceled VARCHAR(50) DEFAULT 'Canceled',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,PRIMARY KEY (id))`;

let createOffersTable = `CREATE TABLE offers (`+
 `offerId int AUTO_INCREMENT,`+
 `offerName VARCHAR(255) DEFAULT '',`+
 `offerDetails VARCHAR(255) DEFAULT '',`+
 `discountPercentage DOUBLE DEFAULT 0.0,`+
 `productId int,`+
 `offerImage VARCHAR(255) DEFAULT '',`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `PRIMARY KEY(offerId))`;  
 
let createCartTable = `CREATE TABLE cart (cartId int AUTO_INCREMENT,`+
 `userId int,`+
 `productIds VARCHAR(255) DEFAULT '',`+
 `productsQuantity VARCHAR(255) DEFAULT '',`+
 `totalPrice DOUBLE DEFAULT 0.0,`+
 `isFromMainSeller BOOLEAN DEFAULT false,`+
 `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
 `updatedAt datetime,`+
 `productImage VARCHAR(255) DEFAULT '',`+
 `PRIMARY KEY(cartId))`;    

let createDeliveryCompnyTable  = `CREATE TABLE deliveryCompany (`+
  `deliveryCompanyId int AUTO_INCREMENT,`+
  `deliveryCompanyToken VARCHAR(255) DEFAULT '',`+
  `deliveryCompanyName VARCHAR(255) DEFAULT '',`+
  `deliveryCompanyAddress VARCHAR(255) DEFAULT '',`+
  `deliveryCompanyLicenceImage VARCHAR(255) DEFAULT '',`+
  `deliveryCompanyTaxesLicenceImage VARCHAR(255) DEFAULT '',`+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  `PRIMARY KEY(deliveryCompanyId))`;

 let createStoreRatesTable = `CREATE TABLE storeRates (`+
     `rateId int AUTO_INCREMENT,`+
     `storeId int DEFAULT 0,`+
     `sellerDeliverySpeed DOUBLE DEFAULT 0.0,`+
     `sellerQualityRating DOUBLE DEFAULT 0.0,`+
     `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
     `updatedAt datetime,`+
     `PRIMARY KEY(rateId))`;


let createDeliveryTable =`CREATE TABLE delivery (deliveryId int AUTO_INCREMENT,`+
  `deliveryFirstName VARCHAR(255) DEFAULT '',`+
  `deliveryMiddleName VARCHAR(255) DEFAULT '',`+
  `deliveryLastName VARCHAR(255) DEFAULT '',`+
  `deliveryEmail VARCHAR(255) DEFAULT '',`+
  `deliveryAddress VARCHAR(255) DEFAULT '',`+
  `deliveryBirthDate VARCHAR(255) DEFAULT '',`+
  `deliveryPhone VARCHAR(255) DEFAULT '',`+
  `deliveryPassword VARCHAR(255) DEFAULT '',`+
  `deliveryIdImage VARCHAR(255) DEFAULT '',`+
  `deliveryCompanyId int,`+
  `deliveryBalance DECIMAL DEFAULT 0.0,`+
  `createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,`+
  `updatedAt datetime,`+
  `PRIMARY KEY(deliveryId),`+
  `FOREIGN KEY(deliveryCompanyId) REFERENCES deliveryCompany(deliveryCompanyId))`;

module.exports = {creatCategoriesTable,createAdminTable,createBrandsTable,createSizesTable,
createCartTable,createDeliveryCompnyTable,createDeliveryTable,createMainCategoryTable,
createMainOrderTable,createOffersTable,
createOrderStatusTable,createOrderTable,createProductTable,createStoreTable,
createUserAdressesTable,createUserTable,createPromoTable,
createProductImagesTable,createStoreRatesTable,
 createNamedSizeType,createNumericSizeType,updatetable,updatetables,createStockTable}