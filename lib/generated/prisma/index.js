
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/library.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}




  const path = require('path')

/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.ProductScalarFieldEnum = {
  id: 'id',
  name: 'name',
  slug: 'slug',
  category: 'category',
  images: 'images',
  brand: 'brand',
  description: 'description',
  stock: 'stock',
  price: 'price',
  rating: 'rating',
  numReviews: 'numReviews',
  isFeatured: 'isFeatured',
  banner: 'banner',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};


exports.Prisma.ModelName = {
  Product: 'Product'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\EnzoP\\OneDrive\\Escritorio\\Enzo Pontet\\Proyecto ECcomercce\\prostore\\lib\\generated\\prisma",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [
      "driverAdapters"
    ],
    "sourceFilePath": "C:\\Users\\EnzoP\\OneDrive\\Escritorio\\Enzo Pontet\\Proyecto ECcomercce\\prostore\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  output          = \"../lib/generated/prisma\"\n  previewFeatures = [\"driverAdapters\"]\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel Product {\n  id          String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n  name        String\n  slug        String   @unique(map: \"product_slug_idx\")\n  category    String\n  images      String[]\n  brand       String\n  description String\n  stock       Int\n  price       Decimal  @default(0) @db.Decimal(12, 2)\n  rating      Decimal  @default(0) @db.Decimal(3, 2)\n  numReviews  Int      @default(0)\n  isFeatured  Boolean  @default(false)\n  banner      String?\n  createdAt   DateTime @default(now()) @db.Timestamp(6)\n  //   OrderItem   OrderItem[]\n  //   Review      Review[]\n}\n\n// model User {\n//   id            String    @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n//   name          String    @default(\"NO_NAME\")\n//   email         String    @unique(map: \"user_email_idx\")\n//   emailVerified DateTime? @db.Timestamp(6)\n//   image         String?\n//   password      String?\n//   role          String    @default(\"user\")\n//   address       Json?     @db.Json\n//   paymentMethod String?\n//   createdAt     DateTime  @default(now()) @db.Timestamp(6)\n//   updatedAt     DateTime  @updatedAt\n//   account       Account[]\n//   session       Session[]\n//   Cart          Cart[]\n//   Order         Order[]\n//   Review        Review[]\n// }\n\n// model Account {\n//   userId            String  @db.Uuid\n//   type              String\n//   provider          String\n//   providerAccountId String\n//   refresh_token     String?\n//   access_token      String?\n//   expires_at        Int?\n//   token_type        String?\n//   scope             String?\n//   id_token          String?\n//   session_state     String?\n\n//   createdAt DateTime @default(now()) @db.Timestamp(6)\n//   updatedAt DateTime @updatedAt\n\n//   user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n//   @@id([provider, providerAccountId])\n// }\n\n// model Session {\n//   sessionToken String   @id\n//   userId       String   @db.Uuid\n//   expires      DateTime @db.Timestamp(6)\n//   user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n//   createdAt DateTime @default(now()) @db.Timestamp(6)\n//   updatedAt DateTime @updatedAt\n// }\n\n// model VerificationToken {\n//   identifier String\n//   token      String\n//   expires    DateTime\n\n//   @@id([identifier, token])\n// }\n\n// model Cart {\n//   id            String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n//   userId        String?  @db.Uuid\n//   sessionCartId String\n//   items         Json[]   @default([]) @db.Json\n//   itemsPrice    Decimal  @db.Decimal(12, 2)\n//   totalPrice    Decimal  @db.Decimal(12, 2)\n//   shippingPrice Decimal  @db.Decimal(12, 2)\n//   taxPrice      Decimal  @db.Decimal(12, 2)\n//   createdAt     DateTime @default(now()) @db.Timestamp(6)\n//   user          User?    @relation(fields: [userId], references: [id], onDelete: Cascade)\n// }\n\n// model Order {\n//   id              String      @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n//   userId          String      @db.Uuid\n//   shippingAddress Json        @db.Json\n//   paymentMethod   String\n//   paymentResult   Json?       @db.Json\n//   itemsPrice      Decimal     @db.Decimal(12, 2)\n//   shippingPrice   Decimal     @db.Decimal(12, 2)\n//   taxPrice        Decimal     @db.Decimal(12, 2)\n//   totalPrice      Decimal     @db.Decimal(12, 2)\n//   isPaid          Boolean     @default(false)\n//   paidAt          DateTime?   @db.Timestamp(6)\n//   isDelivered     Boolean     @default(false)\n//   deliveredAt     DateTime?   @db.Timestamp(6)\n//   createdAt       DateTime    @default(now()) @db.Timestamp(6)\n//   user            User        @relation(fields: [userId], references: [id], onDelete: Cascade)\n//   orderitems      OrderItem[]\n// }\n\n// model OrderItem {\n//   orderId   String  @db.Uuid\n//   productId String  @db.Uuid\n//   qty       Int\n//   price     Decimal @db.Decimal(12, 2)\n//   name      String\n//   slug      String\n//   image     String\n//   order     Order   @relation(fields: [orderId], references: [id], onDelete: Cascade)\n//   product   Product @relation(fields: [productId], references: [id], onDelete: Cascade)\n\n//   @@id([orderId, productId], map: \"orderitems_orderId_productId_pk\")\n// }\n\n// model Review {\n//   id                 String   @id @default(dbgenerated(\"gen_random_uuid()\")) @db.Uuid\n//   userId             String   @db.Uuid\n//   productId          String   @db.Uuid\n//   rating             Int\n//   title              String\n//   description        String\n//   isVerifiedPurchase Boolean  @default(true)\n//   createdAt          DateTime @default(now()) @db.Timestamp(6)\n//   product            Product  @relation(fields: [productId], references: [id], onDelete: Cascade)\n//   user               User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n// }\n",
  "inlineSchemaHash": "dfc11698f4583002bb3601a25a839d69e68b00b6c875ebd98b09aae55eff4235",
  "copyEngine": true
}

const fs = require('fs')

config.dirname = __dirname
if (!fs.existsSync(path.join(__dirname, 'schema.prisma'))) {
  const alternativePaths = [
    "lib/generated/prisma",
    "generated/prisma",
  ]
  
  const alternativePath = alternativePaths.find((altPath) => {
    return fs.existsSync(path.join(process.cwd(), altPath, 'schema.prisma'))
  }) ?? alternativePaths[0]

  config.dirname = path.join(process.cwd(), alternativePath)
  config.isBundled = true
}

config.runtimeDataModel = JSON.parse("{\"models\":{\"Product\":{\"dbName\":null,\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"nativeType\":[\"Uuid\",[]],\"default\":{\"name\":\"dbgenerated\",\"args\":[\"gen_random_uuid()\"]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"slug\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"images\",\"kind\":\"scalar\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"brand\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"stock\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"price\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"12\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"rating\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Decimal\",\"nativeType\":[\"Decimal\",[\"3\",\"2\"]],\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"numReviews\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":0,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"isFeatured\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"nativeType\":null,\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"banner\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":[\"Timestamp\",[\"6\"]],\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined


const { warnEnvConflicts } = require('./runtime/library.js')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(config.dirname, config.relativeEnvPaths.schemaEnvPath)
})

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

// file annotations for bundling tools to include these files
path.join(__dirname, "query_engine-windows.dll.node");
path.join(process.cwd(), "lib/generated/prisma/query_engine-windows.dll.node")
// file annotations for bundling tools to include these files
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "lib/generated/prisma/schema.prisma")
