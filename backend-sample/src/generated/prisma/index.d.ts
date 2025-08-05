
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Otp
 * 
 */
export type Otp = $Result.DefaultSelection<Prisma.$OtpPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Color
 * 
 */
export type Color = $Result.DefaultSelection<Prisma.$ColorPayload>
/**
 * Model Size
 * 
 */
export type Size = $Result.DefaultSelection<Prisma.$SizePayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ColorsOnProducts
 * 
 */
export type ColorsOnProducts = $Result.DefaultSelection<Prisma.$ColorsOnProductsPayload>
/**
 * Model ProductsOnSizes
 * 
 */
export type ProductsOnSizes = $Result.DefaultSelection<Prisma.$ProductsOnSizesPayload>
/**
 * Model Image
 * 
 */
export type Image = $Result.DefaultSelection<Prisma.$ImagePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.otp`: Exposes CRUD operations for the **Otp** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Otps
    * const otps = await prisma.otp.findMany()
    * ```
    */
  get otp(): Prisma.OtpDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.color`: Exposes CRUD operations for the **Color** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Colors
    * const colors = await prisma.color.findMany()
    * ```
    */
  get color(): Prisma.ColorDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.size`: Exposes CRUD operations for the **Size** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sizes
    * const sizes = await prisma.size.findMany()
    * ```
    */
  get size(): Prisma.SizeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.colorsOnProducts`: Exposes CRUD operations for the **ColorsOnProducts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ColorsOnProducts
    * const colorsOnProducts = await prisma.colorsOnProducts.findMany()
    * ```
    */
  get colorsOnProducts(): Prisma.ColorsOnProductsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productsOnSizes`: Exposes CRUD operations for the **ProductsOnSizes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductsOnSizes
    * const productsOnSizes = await prisma.productsOnSizes.findMany()
    * ```
    */
  get productsOnSizes(): Prisma.ProductsOnSizesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image`: Exposes CRUD operations for the **Image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.ImageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.11.0
   * Query Engine version: 9c30299f5a0ea26a96790e13f796dc6094db3173
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Otp: 'Otp',
    Category: 'Category',
    Color: 'Color',
    Size: 'Size',
    Product: 'Product',
    ColorsOnProducts: 'ColorsOnProducts',
    ProductsOnSizes: 'ProductsOnSizes',
    Image: 'Image'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "otp" | "category" | "color" | "size" | "product" | "colorsOnProducts" | "productsOnSizes" | "image"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Otp: {
        payload: Prisma.$OtpPayload<ExtArgs>
        fields: Prisma.OtpFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OtpFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OtpFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findFirst: {
            args: Prisma.OtpFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OtpFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          findMany: {
            args: Prisma.OtpFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          create: {
            args: Prisma.OtpCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          createMany: {
            args: Prisma.OtpCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OtpCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          delete: {
            args: Prisma.OtpDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          update: {
            args: Prisma.OtpUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          deleteMany: {
            args: Prisma.OtpDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OtpUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OtpUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>[]
          }
          upsert: {
            args: Prisma.OtpUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OtpPayload>
          }
          aggregate: {
            args: Prisma.OtpAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOtp>
          }
          groupBy: {
            args: Prisma.OtpGroupByArgs<ExtArgs>
            result: $Utils.Optional<OtpGroupByOutputType>[]
          }
          count: {
            args: Prisma.OtpCountArgs<ExtArgs>
            result: $Utils.Optional<OtpCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Color: {
        payload: Prisma.$ColorPayload<ExtArgs>
        fields: Prisma.ColorFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findFirst: {
            args: Prisma.ColorFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          findMany: {
            args: Prisma.ColorFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          create: {
            args: Prisma.ColorCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          createMany: {
            args: Prisma.ColorCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          delete: {
            args: Prisma.ColorDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          update: {
            args: Prisma.ColorUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          deleteMany: {
            args: Prisma.ColorDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>[]
          }
          upsert: {
            args: Prisma.ColorUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorPayload>
          }
          aggregate: {
            args: Prisma.ColorAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColor>
          }
          groupBy: {
            args: Prisma.ColorGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorCountArgs<ExtArgs>
            result: $Utils.Optional<ColorCountAggregateOutputType> | number
          }
        }
      }
      Size: {
        payload: Prisma.$SizePayload<ExtArgs>
        fields: Prisma.SizeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SizeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SizeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findFirst: {
            args: Prisma.SizeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SizeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          findMany: {
            args: Prisma.SizeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          create: {
            args: Prisma.SizeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          createMany: {
            args: Prisma.SizeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SizeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          delete: {
            args: Prisma.SizeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          update: {
            args: Prisma.SizeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          deleteMany: {
            args: Prisma.SizeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SizeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SizeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>[]
          }
          upsert: {
            args: Prisma.SizeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SizePayload>
          }
          aggregate: {
            args: Prisma.SizeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSize>
          }
          groupBy: {
            args: Prisma.SizeGroupByArgs<ExtArgs>
            result: $Utils.Optional<SizeGroupByOutputType>[]
          }
          count: {
            args: Prisma.SizeCountArgs<ExtArgs>
            result: $Utils.Optional<SizeCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ColorsOnProducts: {
        payload: Prisma.$ColorsOnProductsPayload<ExtArgs>
        fields: Prisma.ColorsOnProductsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ColorsOnProductsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ColorsOnProductsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>
          }
          findFirst: {
            args: Prisma.ColorsOnProductsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ColorsOnProductsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>
          }
          findMany: {
            args: Prisma.ColorsOnProductsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>[]
          }
          create: {
            args: Prisma.ColorsOnProductsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>
          }
          createMany: {
            args: Prisma.ColorsOnProductsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ColorsOnProductsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>[]
          }
          delete: {
            args: Prisma.ColorsOnProductsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>
          }
          update: {
            args: Prisma.ColorsOnProductsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>
          }
          deleteMany: {
            args: Prisma.ColorsOnProductsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ColorsOnProductsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ColorsOnProductsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>[]
          }
          upsert: {
            args: Prisma.ColorsOnProductsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ColorsOnProductsPayload>
          }
          aggregate: {
            args: Prisma.ColorsOnProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateColorsOnProducts>
          }
          groupBy: {
            args: Prisma.ColorsOnProductsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ColorsOnProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ColorsOnProductsCountArgs<ExtArgs>
            result: $Utils.Optional<ColorsOnProductsCountAggregateOutputType> | number
          }
        }
      }
      ProductsOnSizes: {
        payload: Prisma.$ProductsOnSizesPayload<ExtArgs>
        fields: Prisma.ProductsOnSizesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductsOnSizesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductsOnSizesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>
          }
          findFirst: {
            args: Prisma.ProductsOnSizesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductsOnSizesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>
          }
          findMany: {
            args: Prisma.ProductsOnSizesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>[]
          }
          create: {
            args: Prisma.ProductsOnSizesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>
          }
          createMany: {
            args: Prisma.ProductsOnSizesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductsOnSizesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>[]
          }
          delete: {
            args: Prisma.ProductsOnSizesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>
          }
          update: {
            args: Prisma.ProductsOnSizesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>
          }
          deleteMany: {
            args: Prisma.ProductsOnSizesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductsOnSizesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductsOnSizesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>[]
          }
          upsert: {
            args: Prisma.ProductsOnSizesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductsOnSizesPayload>
          }
          aggregate: {
            args: Prisma.ProductsOnSizesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductsOnSizes>
          }
          groupBy: {
            args: Prisma.ProductsOnSizesGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsOnSizesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductsOnSizesCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsOnSizesCountAggregateOutputType> | number
          }
        }
      }
      Image: {
        payload: Prisma.$ImagePayload<ExtArgs>
        fields: Prisma.ImageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ImageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ImageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findFirst: {
            args: Prisma.ImageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ImageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          findMany: {
            args: Prisma.ImageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          create: {
            args: Prisma.ImageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          createMany: {
            args: Prisma.ImageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ImageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          delete: {
            args: Prisma.ImageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          update: {
            args: Prisma.ImageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          deleteMany: {
            args: Prisma.ImageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ImageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ImageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>[]
          }
          upsert: {
            args: Prisma.ImageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ImagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.ImageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.ImageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    otp?: OtpOmit
    category?: CategoryOmit
    color?: ColorOmit
    size?: SizeOmit
    product?: ProductOmit
    colorsOnProducts?: ColorsOnProductsOmit
    productsOnSizes?: ProductsOnSizesOmit
    image?: ImageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    products: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | UserCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ColorCountOutputType
   */

  export type ColorCountOutputType = {
    products: number
  }

  export type ColorCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ColorCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorCountOutputType
     */
    select?: ColorCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ColorCountOutputType without action
   */
  export type ColorCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorsOnProductsWhereInput
  }


  /**
   * Count Type SizeCountOutputType
   */

  export type SizeCountOutputType = {
    products: number
  }

  export type SizeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | SizeCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SizeCountOutputType
     */
    select?: SizeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SizeCountOutputType without action
   */
  export type SizeCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnSizesWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    colors: number
    sizes: number
    users: number
    images: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    colors?: boolean | ProductCountOutputTypeCountColorsArgs
    sizes?: boolean | ProductCountOutputTypeCountSizesArgs
    users?: boolean | ProductCountOutputTypeCountUsersArgs
    images?: boolean | ProductCountOutputTypeCountImagesArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountColorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorsOnProductsWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnSizesWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountImagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
    error: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
    error: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    password: string | null
    role: string | null
    status: string | null
    lastLogin: Date | null
    error: number | null
    profile: string | null
    randToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    phone: string | null
    password: string | null
    role: string | null
    status: string | null
    lastLogin: Date | null
    error: number | null
    profile: string | null
    randToken: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    password: number
    role: number
    status: number
    lastLogin: number
    error: number
    profile: number
    randToken: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
    error?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
    error?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    password?: true
    role?: true
    status?: true
    lastLogin?: true
    error?: true
    profile?: true
    randToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    password?: true
    role?: true
    status?: true
    lastLogin?: true
    error?: true
    profile?: true
    randToken?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    password?: true
    role?: true
    status?: true
    lastLogin?: true
    error?: true
    profile?: true
    randToken?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string | null
    phone: string
    password: string
    role: string
    status: string
    lastLogin: Date
    error: number
    profile: string | null
    randToken: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLogin?: boolean
    error?: boolean
    profile?: boolean
    randToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | User$productsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLogin?: boolean
    error?: boolean
    profile?: boolean
    randToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLogin?: boolean
    error?: boolean
    profile?: boolean
    randToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    password?: boolean
    role?: boolean
    status?: boolean
    lastLogin?: boolean
    error?: boolean
    profile?: boolean
    randToken?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "password" | "role" | "status" | "lastLogin" | "error" | "profile" | "randToken" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | User$productsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string | null
      phone: string
      password: string
      role: string
      status: string
      lastLogin: Date
      error: number
      profile: string | null
      randToken: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends User$productsArgs<ExtArgs> = {}>(args?: Subset<T, User$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly status: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly error: FieldRef<"User", 'Int'>
    readonly profile: FieldRef<"User", 'String'>
    readonly randToken: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.products
   */
  export type User$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Otp
   */

  export type AggregateOtp = {
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  export type OtpAvgAggregateOutputType = {
    id: number | null
    count: number | null
    error: number | null
  }

  export type OtpSumAggregateOutputType = {
    id: number | null
    count: number | null
    error: number | null
  }

  export type OtpMinAggregateOutputType = {
    id: number | null
    phone: string | null
    otp: string | null
    rememberToken: string | null
    verifyToken: string | null
    count: number | null
    error: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpMaxAggregateOutputType = {
    id: number | null
    phone: string | null
    otp: string | null
    rememberToken: string | null
    verifyToken: string | null
    count: number | null
    error: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OtpCountAggregateOutputType = {
    id: number
    phone: number
    otp: number
    rememberToken: number
    verifyToken: number
    count: number
    error: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OtpAvgAggregateInputType = {
    id?: true
    count?: true
    error?: true
  }

  export type OtpSumAggregateInputType = {
    id?: true
    count?: true
    error?: true
  }

  export type OtpMinAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    rememberToken?: true
    verifyToken?: true
    count?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpMaxAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    rememberToken?: true
    verifyToken?: true
    count?: true
    error?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OtpCountAggregateInputType = {
    id?: true
    phone?: true
    otp?: true
    rememberToken?: true
    verifyToken?: true
    count?: true
    error?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OtpAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otp to aggregate.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Otps
    **/
    _count?: true | OtpCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OtpAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OtpSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OtpMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OtpMaxAggregateInputType
  }

  export type GetOtpAggregateType<T extends OtpAggregateArgs> = {
        [P in keyof T & keyof AggregateOtp]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOtp[P]>
      : GetScalarType<T[P], AggregateOtp[P]>
  }




  export type OtpGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OtpWhereInput
    orderBy?: OtpOrderByWithAggregationInput | OtpOrderByWithAggregationInput[]
    by: OtpScalarFieldEnum[] | OtpScalarFieldEnum
    having?: OtpScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OtpCountAggregateInputType | true
    _avg?: OtpAvgAggregateInputType
    _sum?: OtpSumAggregateInputType
    _min?: OtpMinAggregateInputType
    _max?: OtpMaxAggregateInputType
  }

  export type OtpGroupByOutputType = {
    id: number
    phone: string
    otp: string
    rememberToken: string
    verifyToken: string | null
    count: number
    error: number
    createdAt: Date
    updatedAt: Date
    _count: OtpCountAggregateOutputType | null
    _avg: OtpAvgAggregateOutputType | null
    _sum: OtpSumAggregateOutputType | null
    _min: OtpMinAggregateOutputType | null
    _max: OtpMaxAggregateOutputType | null
  }

  type GetOtpGroupByPayload<T extends OtpGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OtpGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OtpGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OtpGroupByOutputType[P]>
            : GetScalarType<T[P], OtpGroupByOutputType[P]>
        }
      >
    >


  export type OtpSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    rememberToken?: boolean
    verifyToken?: boolean
    count?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    rememberToken?: boolean
    verifyToken?: boolean
    count?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    phone?: boolean
    otp?: boolean
    rememberToken?: boolean
    verifyToken?: boolean
    count?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["otp"]>

  export type OtpSelectScalar = {
    id?: boolean
    phone?: boolean
    otp?: boolean
    rememberToken?: boolean
    verifyToken?: boolean
    count?: boolean
    error?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OtpOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "phone" | "otp" | "rememberToken" | "verifyToken" | "count" | "error" | "createdAt" | "updatedAt", ExtArgs["result"]["otp"]>

  export type $OtpPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Otp"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      phone: string
      otp: string
      rememberToken: string
      verifyToken: string | null
      count: number
      error: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["otp"]>
    composites: {}
  }

  type OtpGetPayload<S extends boolean | null | undefined | OtpDefaultArgs> = $Result.GetResult<Prisma.$OtpPayload, S>

  type OtpCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OtpFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OtpCountAggregateInputType | true
    }

  export interface OtpDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Otp'], meta: { name: 'Otp' } }
    /**
     * Find zero or one Otp that matches the filter.
     * @param {OtpFindUniqueArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OtpFindUniqueArgs>(args: SelectSubset<T, OtpFindUniqueArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Otp that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OtpFindUniqueOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OtpFindUniqueOrThrowArgs>(args: SelectSubset<T, OtpFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OtpFindFirstArgs>(args?: SelectSubset<T, OtpFindFirstArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Otp that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindFirstOrThrowArgs} args - Arguments to find a Otp
     * @example
     * // Get one Otp
     * const otp = await prisma.otp.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OtpFindFirstOrThrowArgs>(args?: SelectSubset<T, OtpFindFirstOrThrowArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Otps that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Otps
     * const otps = await prisma.otp.findMany()
     * 
     * // Get first 10 Otps
     * const otps = await prisma.otp.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const otpWithIdOnly = await prisma.otp.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OtpFindManyArgs>(args?: SelectSubset<T, OtpFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Otp.
     * @param {OtpCreateArgs} args - Arguments to create a Otp.
     * @example
     * // Create one Otp
     * const Otp = await prisma.otp.create({
     *   data: {
     *     // ... data to create a Otp
     *   }
     * })
     * 
     */
    create<T extends OtpCreateArgs>(args: SelectSubset<T, OtpCreateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Otps.
     * @param {OtpCreateManyArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OtpCreateManyArgs>(args?: SelectSubset<T, OtpCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Otps and returns the data saved in the database.
     * @param {OtpCreateManyAndReturnArgs} args - Arguments to create many Otps.
     * @example
     * // Create many Otps
     * const otp = await prisma.otp.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OtpCreateManyAndReturnArgs>(args?: SelectSubset<T, OtpCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Otp.
     * @param {OtpDeleteArgs} args - Arguments to delete one Otp.
     * @example
     * // Delete one Otp
     * const Otp = await prisma.otp.delete({
     *   where: {
     *     // ... filter to delete one Otp
     *   }
     * })
     * 
     */
    delete<T extends OtpDeleteArgs>(args: SelectSubset<T, OtpDeleteArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Otp.
     * @param {OtpUpdateArgs} args - Arguments to update one Otp.
     * @example
     * // Update one Otp
     * const otp = await prisma.otp.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OtpUpdateArgs>(args: SelectSubset<T, OtpUpdateArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Otps.
     * @param {OtpDeleteManyArgs} args - Arguments to filter Otps to delete.
     * @example
     * // Delete a few Otps
     * const { count } = await prisma.otp.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OtpDeleteManyArgs>(args?: SelectSubset<T, OtpDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OtpUpdateManyArgs>(args: SelectSubset<T, OtpUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Otps and returns the data updated in the database.
     * @param {OtpUpdateManyAndReturnArgs} args - Arguments to update many Otps.
     * @example
     * // Update many Otps
     * const otp = await prisma.otp.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Otps and only return the `id`
     * const otpWithIdOnly = await prisma.otp.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OtpUpdateManyAndReturnArgs>(args: SelectSubset<T, OtpUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Otp.
     * @param {OtpUpsertArgs} args - Arguments to update or create a Otp.
     * @example
     * // Update or create a Otp
     * const otp = await prisma.otp.upsert({
     *   create: {
     *     // ... data to create a Otp
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Otp we want to update
     *   }
     * })
     */
    upsert<T extends OtpUpsertArgs>(args: SelectSubset<T, OtpUpsertArgs<ExtArgs>>): Prisma__OtpClient<$Result.GetResult<Prisma.$OtpPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Otps.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpCountArgs} args - Arguments to filter Otps to count.
     * @example
     * // Count the number of Otps
     * const count = await prisma.otp.count({
     *   where: {
     *     // ... the filter for the Otps we want to count
     *   }
     * })
    **/
    count<T extends OtpCountArgs>(
      args?: Subset<T, OtpCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OtpCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OtpAggregateArgs>(args: Subset<T, OtpAggregateArgs>): Prisma.PrismaPromise<GetOtpAggregateType<T>>

    /**
     * Group by Otp.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OtpGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OtpGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OtpGroupByArgs['orderBy'] }
        : { orderBy?: OtpGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OtpGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOtpGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Otp model
   */
  readonly fields: OtpFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Otp.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OtpClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Otp model
   */
  interface OtpFieldRefs {
    readonly id: FieldRef<"Otp", 'Int'>
    readonly phone: FieldRef<"Otp", 'String'>
    readonly otp: FieldRef<"Otp", 'String'>
    readonly rememberToken: FieldRef<"Otp", 'String'>
    readonly verifyToken: FieldRef<"Otp", 'String'>
    readonly count: FieldRef<"Otp", 'Int'>
    readonly error: FieldRef<"Otp", 'Int'>
    readonly createdAt: FieldRef<"Otp", 'DateTime'>
    readonly updatedAt: FieldRef<"Otp", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Otp findUnique
   */
  export type OtpFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findUniqueOrThrow
   */
  export type OtpFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp findFirst
   */
  export type OtpFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findFirstOrThrow
   */
  export type OtpFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otp to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Otps.
     */
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp findMany
   */
  export type OtpFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter, which Otps to fetch.
     */
    where?: OtpWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Otps to fetch.
     */
    orderBy?: OtpOrderByWithRelationInput | OtpOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Otps.
     */
    cursor?: OtpWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Otps from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Otps.
     */
    skip?: number
    distinct?: OtpScalarFieldEnum | OtpScalarFieldEnum[]
  }

  /**
   * Otp create
   */
  export type OtpCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to create a Otp.
     */
    data: XOR<OtpCreateInput, OtpUncheckedCreateInput>
  }

  /**
   * Otp createMany
   */
  export type OtpCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
  }

  /**
   * Otp createManyAndReturn
   */
  export type OtpCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to create many Otps.
     */
    data: OtpCreateManyInput | OtpCreateManyInput[]
  }

  /**
   * Otp update
   */
  export type OtpUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data needed to update a Otp.
     */
    data: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
    /**
     * Choose, which Otp to update.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp updateMany
   */
  export type OtpUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp updateManyAndReturn
   */
  export type OtpUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The data used to update Otps.
     */
    data: XOR<OtpUpdateManyMutationInput, OtpUncheckedUpdateManyInput>
    /**
     * Filter which Otps to update
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to update.
     */
    limit?: number
  }

  /**
   * Otp upsert
   */
  export type OtpUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * The filter to search for the Otp to update in case it exists.
     */
    where: OtpWhereUniqueInput
    /**
     * In case the Otp found by the `where` argument doesn't exist, create a new Otp with this data.
     */
    create: XOR<OtpCreateInput, OtpUncheckedCreateInput>
    /**
     * In case the Otp was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OtpUpdateInput, OtpUncheckedUpdateInput>
  }

  /**
   * Otp delete
   */
  export type OtpDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
    /**
     * Filter which Otp to delete.
     */
    where: OtpWhereUniqueInput
  }

  /**
   * Otp deleteMany
   */
  export type OtpDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Otps to delete
     */
    where?: OtpWhereInput
    /**
     * Limit how many Otps to delete.
     */
    limit?: number
  }

  /**
   * Otp without action
   */
  export type OtpDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Otp
     */
    select?: OtpSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Otp
     */
    omit?: OtpOmit<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    image: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    image: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    image?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    image?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    image?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    image: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    image?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "image", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      image: string
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly image: FieldRef<"Category", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Color
   */

  export type AggregateColor = {
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  export type ColorAvgAggregateOutputType = {
    id: number | null
  }

  export type ColorSumAggregateOutputType = {
    id: number | null
  }

  export type ColorMinAggregateOutputType = {
    id: number | null
    name: string | null
    bgColor: string | null
  }

  export type ColorMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bgColor: string | null
  }

  export type ColorCountAggregateOutputType = {
    id: number
    name: number
    bgColor: number
    _all: number
  }


  export type ColorAvgAggregateInputType = {
    id?: true
  }

  export type ColorSumAggregateInputType = {
    id?: true
  }

  export type ColorMinAggregateInputType = {
    id?: true
    name?: true
    bgColor?: true
  }

  export type ColorMaxAggregateInputType = {
    id?: true
    name?: true
    bgColor?: true
  }

  export type ColorCountAggregateInputType = {
    id?: true
    name?: true
    bgColor?: true
    _all?: true
  }

  export type ColorAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Color to aggregate.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Colors
    **/
    _count?: true | ColorCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorMaxAggregateInputType
  }

  export type GetColorAggregateType<T extends ColorAggregateArgs> = {
        [P in keyof T & keyof AggregateColor]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColor[P]>
      : GetScalarType<T[P], AggregateColor[P]>
  }




  export type ColorGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorWhereInput
    orderBy?: ColorOrderByWithAggregationInput | ColorOrderByWithAggregationInput[]
    by: ColorScalarFieldEnum[] | ColorScalarFieldEnum
    having?: ColorScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorCountAggregateInputType | true
    _avg?: ColorAvgAggregateInputType
    _sum?: ColorSumAggregateInputType
    _min?: ColorMinAggregateInputType
    _max?: ColorMaxAggregateInputType
  }

  export type ColorGroupByOutputType = {
    id: number
    name: string
    bgColor: string
    _count: ColorCountAggregateOutputType | null
    _avg: ColorAvgAggregateOutputType | null
    _sum: ColorSumAggregateOutputType | null
    _min: ColorMinAggregateOutputType | null
    _max: ColorMaxAggregateOutputType | null
  }

  type GetColorGroupByPayload<T extends ColorGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorGroupByOutputType[P]>
            : GetScalarType<T[P], ColorGroupByOutputType[P]>
        }
      >
    >


  export type ColorSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bgColor?: boolean
    products?: boolean | Color$productsArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["color"]>

  export type ColorSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bgColor?: boolean
  }, ExtArgs["result"]["color"]>

  export type ColorSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bgColor?: boolean
  }, ExtArgs["result"]["color"]>

  export type ColorSelectScalar = {
    id?: boolean
    name?: boolean
    bgColor?: boolean
  }

  export type ColorOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "bgColor", ExtArgs["result"]["color"]>
  export type ColorInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Color$productsArgs<ExtArgs>
    _count?: boolean | ColorCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ColorIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ColorIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ColorPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Color"
    objects: {
      products: Prisma.$ColorsOnProductsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bgColor: string
    }, ExtArgs["result"]["color"]>
    composites: {}
  }

  type ColorGetPayload<S extends boolean | null | undefined | ColorDefaultArgs> = $Result.GetResult<Prisma.$ColorPayload, S>

  type ColorCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorCountAggregateInputType | true
    }

  export interface ColorDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Color'], meta: { name: 'Color' } }
    /**
     * Find zero or one Color that matches the filter.
     * @param {ColorFindUniqueArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorFindUniqueArgs>(args: SelectSubset<T, ColorFindUniqueArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Color that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorFindUniqueOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorFindFirstArgs>(args?: SelectSubset<T, ColorFindFirstArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Color that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindFirstOrThrowArgs} args - Arguments to find a Color
     * @example
     * // Get one Color
     * const color = await prisma.color.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Colors that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Colors
     * const colors = await prisma.color.findMany()
     * 
     * // Get first 10 Colors
     * const colors = await prisma.color.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorWithIdOnly = await prisma.color.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorFindManyArgs>(args?: SelectSubset<T, ColorFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Color.
     * @param {ColorCreateArgs} args - Arguments to create a Color.
     * @example
     * // Create one Color
     * const Color = await prisma.color.create({
     *   data: {
     *     // ... data to create a Color
     *   }
     * })
     * 
     */
    create<T extends ColorCreateArgs>(args: SelectSubset<T, ColorCreateArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Colors.
     * @param {ColorCreateManyArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorCreateManyArgs>(args?: SelectSubset<T, ColorCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Colors and returns the data saved in the database.
     * @param {ColorCreateManyAndReturnArgs} args - Arguments to create many Colors.
     * @example
     * // Create many Colors
     * const color = await prisma.color.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Color.
     * @param {ColorDeleteArgs} args - Arguments to delete one Color.
     * @example
     * // Delete one Color
     * const Color = await prisma.color.delete({
     *   where: {
     *     // ... filter to delete one Color
     *   }
     * })
     * 
     */
    delete<T extends ColorDeleteArgs>(args: SelectSubset<T, ColorDeleteArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Color.
     * @param {ColorUpdateArgs} args - Arguments to update one Color.
     * @example
     * // Update one Color
     * const color = await prisma.color.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorUpdateArgs>(args: SelectSubset<T, ColorUpdateArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Colors.
     * @param {ColorDeleteManyArgs} args - Arguments to filter Colors to delete.
     * @example
     * // Delete a few Colors
     * const { count } = await prisma.color.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorDeleteManyArgs>(args?: SelectSubset<T, ColorDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorUpdateManyArgs>(args: SelectSubset<T, ColorUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Colors and returns the data updated in the database.
     * @param {ColorUpdateManyAndReturnArgs} args - Arguments to update many Colors.
     * @example
     * // Update many Colors
     * const color = await prisma.color.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Colors and only return the `id`
     * const colorWithIdOnly = await prisma.color.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColorUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Color.
     * @param {ColorUpsertArgs} args - Arguments to update or create a Color.
     * @example
     * // Update or create a Color
     * const color = await prisma.color.upsert({
     *   create: {
     *     // ... data to create a Color
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Color we want to update
     *   }
     * })
     */
    upsert<T extends ColorUpsertArgs>(args: SelectSubset<T, ColorUpsertArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Colors.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorCountArgs} args - Arguments to filter Colors to count.
     * @example
     * // Count the number of Colors
     * const count = await prisma.color.count({
     *   where: {
     *     // ... the filter for the Colors we want to count
     *   }
     * })
    **/
    count<T extends ColorCountArgs>(
      args?: Subset<T, ColorCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorAggregateArgs>(args: Subset<T, ColorAggregateArgs>): Prisma.PrismaPromise<GetColorAggregateType<T>>

    /**
     * Group by Color.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorGroupByArgs['orderBy'] }
        : { orderBy?: ColorGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Color model
   */
  readonly fields: ColorFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Color.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Color$productsArgs<ExtArgs> = {}>(args?: Subset<T, Color$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Color model
   */
  interface ColorFieldRefs {
    readonly id: FieldRef<"Color", 'Int'>
    readonly name: FieldRef<"Color", 'String'>
    readonly bgColor: FieldRef<"Color", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Color findUnique
   */
  export type ColorFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findUniqueOrThrow
   */
  export type ColorFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color findFirst
   */
  export type ColorFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color findFirstOrThrow
   */
  export type ColorFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Color to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Colors.
     */
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color findMany
   */
  export type ColorFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter, which Colors to fetch.
     */
    where?: ColorWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Colors to fetch.
     */
    orderBy?: ColorOrderByWithRelationInput | ColorOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Colors.
     */
    cursor?: ColorWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Colors from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Colors.
     */
    skip?: number
    distinct?: ColorScalarFieldEnum | ColorScalarFieldEnum[]
  }

  /**
   * Color create
   */
  export type ColorCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to create a Color.
     */
    data: XOR<ColorCreateInput, ColorUncheckedCreateInput>
  }

  /**
   * Color createMany
   */
  export type ColorCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
  }

  /**
   * Color createManyAndReturn
   */
  export type ColorCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data used to create many Colors.
     */
    data: ColorCreateManyInput | ColorCreateManyInput[]
  }

  /**
   * Color update
   */
  export type ColorUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The data needed to update a Color.
     */
    data: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
    /**
     * Choose, which Color to update.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color updateMany
   */
  export type ColorUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to update.
     */
    limit?: number
  }

  /**
   * Color updateManyAndReturn
   */
  export type ColorUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * The data used to update Colors.
     */
    data: XOR<ColorUpdateManyMutationInput, ColorUncheckedUpdateManyInput>
    /**
     * Filter which Colors to update
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to update.
     */
    limit?: number
  }

  /**
   * Color upsert
   */
  export type ColorUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * The filter to search for the Color to update in case it exists.
     */
    where: ColorWhereUniqueInput
    /**
     * In case the Color found by the `where` argument doesn't exist, create a new Color with this data.
     */
    create: XOR<ColorCreateInput, ColorUncheckedCreateInput>
    /**
     * In case the Color was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorUpdateInput, ColorUncheckedUpdateInput>
  }

  /**
   * Color delete
   */
  export type ColorDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
    /**
     * Filter which Color to delete.
     */
    where: ColorWhereUniqueInput
  }

  /**
   * Color deleteMany
   */
  export type ColorDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Colors to delete
     */
    where?: ColorWhereInput
    /**
     * Limit how many Colors to delete.
     */
    limit?: number
  }

  /**
   * Color.products
   */
  export type Color$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    where?: ColorsOnProductsWhereInput
    orderBy?: ColorsOnProductsOrderByWithRelationInput | ColorsOnProductsOrderByWithRelationInput[]
    cursor?: ColorsOnProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColorsOnProductsScalarFieldEnum | ColorsOnProductsScalarFieldEnum[]
  }

  /**
   * Color without action
   */
  export type ColorDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Color
     */
    select?: ColorSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Color
     */
    omit?: ColorOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorInclude<ExtArgs> | null
  }


  /**
   * Model Size
   */

  export type AggregateSize = {
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  export type SizeAvgAggregateOutputType = {
    id: number | null
  }

  export type SizeSumAggregateOutputType = {
    id: number | null
  }

  export type SizeMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SizeMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type SizeCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type SizeAvgAggregateInputType = {
    id?: true
  }

  export type SizeSumAggregateInputType = {
    id?: true
  }

  export type SizeMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type SizeMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type SizeCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type SizeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Size to aggregate.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sizes
    **/
    _count?: true | SizeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SizeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SizeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SizeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SizeMaxAggregateInputType
  }

  export type GetSizeAggregateType<T extends SizeAggregateArgs> = {
        [P in keyof T & keyof AggregateSize]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSize[P]>
      : GetScalarType<T[P], AggregateSize[P]>
  }




  export type SizeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SizeWhereInput
    orderBy?: SizeOrderByWithAggregationInput | SizeOrderByWithAggregationInput[]
    by: SizeScalarFieldEnum[] | SizeScalarFieldEnum
    having?: SizeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SizeCountAggregateInputType | true
    _avg?: SizeAvgAggregateInputType
    _sum?: SizeSumAggregateInputType
    _min?: SizeMinAggregateInputType
    _max?: SizeMaxAggregateInputType
  }

  export type SizeGroupByOutputType = {
    id: number
    name: string
    _count: SizeCountAggregateOutputType | null
    _avg: SizeAvgAggregateOutputType | null
    _sum: SizeSumAggregateOutputType | null
    _min: SizeMinAggregateOutputType | null
    _max: SizeMaxAggregateOutputType | null
  }

  type GetSizeGroupByPayload<T extends SizeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SizeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SizeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SizeGroupByOutputType[P]>
            : GetScalarType<T[P], SizeGroupByOutputType[P]>
        }
      >
    >


  export type SizeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    products?: boolean | Size$productsArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["size"]>

  export type SizeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["size"]>

  export type SizeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["size"]>

  export type SizeSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type SizeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["size"]>
  export type SizeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Size$productsArgs<ExtArgs>
    _count?: boolean | SizeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SizeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SizeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SizePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Size"
    objects: {
      products: Prisma.$ProductsOnSizesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["size"]>
    composites: {}
  }

  type SizeGetPayload<S extends boolean | null | undefined | SizeDefaultArgs> = $Result.GetResult<Prisma.$SizePayload, S>

  type SizeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SizeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SizeCountAggregateInputType | true
    }

  export interface SizeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Size'], meta: { name: 'Size' } }
    /**
     * Find zero or one Size that matches the filter.
     * @param {SizeFindUniqueArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SizeFindUniqueArgs>(args: SelectSubset<T, SizeFindUniqueArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Size that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SizeFindUniqueOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SizeFindUniqueOrThrowArgs>(args: SelectSubset<T, SizeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SizeFindFirstArgs>(args?: SelectSubset<T, SizeFindFirstArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Size that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindFirstOrThrowArgs} args - Arguments to find a Size
     * @example
     * // Get one Size
     * const size = await prisma.size.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SizeFindFirstOrThrowArgs>(args?: SelectSubset<T, SizeFindFirstOrThrowArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sizes
     * const sizes = await prisma.size.findMany()
     * 
     * // Get first 10 Sizes
     * const sizes = await prisma.size.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sizeWithIdOnly = await prisma.size.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SizeFindManyArgs>(args?: SelectSubset<T, SizeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Size.
     * @param {SizeCreateArgs} args - Arguments to create a Size.
     * @example
     * // Create one Size
     * const Size = await prisma.size.create({
     *   data: {
     *     // ... data to create a Size
     *   }
     * })
     * 
     */
    create<T extends SizeCreateArgs>(args: SelectSubset<T, SizeCreateArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sizes.
     * @param {SizeCreateManyArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SizeCreateManyArgs>(args?: SelectSubset<T, SizeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sizes and returns the data saved in the database.
     * @param {SizeCreateManyAndReturnArgs} args - Arguments to create many Sizes.
     * @example
     * // Create many Sizes
     * const size = await prisma.size.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SizeCreateManyAndReturnArgs>(args?: SelectSubset<T, SizeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Size.
     * @param {SizeDeleteArgs} args - Arguments to delete one Size.
     * @example
     * // Delete one Size
     * const Size = await prisma.size.delete({
     *   where: {
     *     // ... filter to delete one Size
     *   }
     * })
     * 
     */
    delete<T extends SizeDeleteArgs>(args: SelectSubset<T, SizeDeleteArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Size.
     * @param {SizeUpdateArgs} args - Arguments to update one Size.
     * @example
     * // Update one Size
     * const size = await prisma.size.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SizeUpdateArgs>(args: SelectSubset<T, SizeUpdateArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sizes.
     * @param {SizeDeleteManyArgs} args - Arguments to filter Sizes to delete.
     * @example
     * // Delete a few Sizes
     * const { count } = await prisma.size.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SizeDeleteManyArgs>(args?: SelectSubset<T, SizeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SizeUpdateManyArgs>(args: SelectSubset<T, SizeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sizes and returns the data updated in the database.
     * @param {SizeUpdateManyAndReturnArgs} args - Arguments to update many Sizes.
     * @example
     * // Update many Sizes
     * const size = await prisma.size.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sizes and only return the `id`
     * const sizeWithIdOnly = await prisma.size.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SizeUpdateManyAndReturnArgs>(args: SelectSubset<T, SizeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Size.
     * @param {SizeUpsertArgs} args - Arguments to update or create a Size.
     * @example
     * // Update or create a Size
     * const size = await prisma.size.upsert({
     *   create: {
     *     // ... data to create a Size
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Size we want to update
     *   }
     * })
     */
    upsert<T extends SizeUpsertArgs>(args: SelectSubset<T, SizeUpsertArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeCountArgs} args - Arguments to filter Sizes to count.
     * @example
     * // Count the number of Sizes
     * const count = await prisma.size.count({
     *   where: {
     *     // ... the filter for the Sizes we want to count
     *   }
     * })
    **/
    count<T extends SizeCountArgs>(
      args?: Subset<T, SizeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SizeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SizeAggregateArgs>(args: Subset<T, SizeAggregateArgs>): Prisma.PrismaPromise<GetSizeAggregateType<T>>

    /**
     * Group by Size.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SizeGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SizeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SizeGroupByArgs['orderBy'] }
        : { orderBy?: SizeGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SizeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSizeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Size model
   */
  readonly fields: SizeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Size.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SizeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Size$productsArgs<ExtArgs> = {}>(args?: Subset<T, Size$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Size model
   */
  interface SizeFieldRefs {
    readonly id: FieldRef<"Size", 'Int'>
    readonly name: FieldRef<"Size", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Size findUnique
   */
  export type SizeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findUniqueOrThrow
   */
  export type SizeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size findFirst
   */
  export type SizeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size findFirstOrThrow
   */
  export type SizeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Size to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sizes.
     */
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size findMany
   */
  export type SizeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter, which Sizes to fetch.
     */
    where?: SizeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sizes to fetch.
     */
    orderBy?: SizeOrderByWithRelationInput | SizeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sizes.
     */
    cursor?: SizeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sizes.
     */
    skip?: number
    distinct?: SizeScalarFieldEnum | SizeScalarFieldEnum[]
  }

  /**
   * Size create
   */
  export type SizeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to create a Size.
     */
    data: XOR<SizeCreateInput, SizeUncheckedCreateInput>
  }

  /**
   * Size createMany
   */
  export type SizeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
  }

  /**
   * Size createManyAndReturn
   */
  export type SizeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * The data used to create many Sizes.
     */
    data: SizeCreateManyInput | SizeCreateManyInput[]
  }

  /**
   * Size update
   */
  export type SizeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The data needed to update a Size.
     */
    data: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
    /**
     * Choose, which Size to update.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size updateMany
   */
  export type SizeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Size updateManyAndReturn
   */
  export type SizeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * The data used to update Sizes.
     */
    data: XOR<SizeUpdateManyMutationInput, SizeUncheckedUpdateManyInput>
    /**
     * Filter which Sizes to update
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to update.
     */
    limit?: number
  }

  /**
   * Size upsert
   */
  export type SizeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * The filter to search for the Size to update in case it exists.
     */
    where: SizeWhereUniqueInput
    /**
     * In case the Size found by the `where` argument doesn't exist, create a new Size with this data.
     */
    create: XOR<SizeCreateInput, SizeUncheckedCreateInput>
    /**
     * In case the Size was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SizeUpdateInput, SizeUncheckedUpdateInput>
  }

  /**
   * Size delete
   */
  export type SizeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
    /**
     * Filter which Size to delete.
     */
    where: SizeWhereUniqueInput
  }

  /**
   * Size deleteMany
   */
  export type SizeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sizes to delete
     */
    where?: SizeWhereInput
    /**
     * Limit how many Sizes to delete.
     */
    limit?: number
  }

  /**
   * Size.products
   */
  export type Size$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    where?: ProductsOnSizesWhereInput
    orderBy?: ProductsOnSizesOrderByWithRelationInput | ProductsOnSizesOrderByWithRelationInput[]
    cursor?: ProductsOnSizesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOnSizesScalarFieldEnum | ProductsOnSizesScalarFieldEnum[]
  }

  /**
   * Size without action
   */
  export type SizeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Size
     */
    select?: SizeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Size
     */
    omit?: SizeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SizeInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    star: number | null
    quantity: number | null
    price: number | null
    discount: number | null
    categoryId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    star: number | null
    quantity: number | null
    price: number | null
    discount: number | null
    categoryId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    brand: string | null
    title: string | null
    star: number | null
    quantity: number | null
    price: number | null
    discount: number | null
    image: string | null
    description: string | null
    categoryId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    brand: string | null
    title: string | null
    star: number | null
    quantity: number | null
    price: number | null
    discount: number | null
    image: string | null
    description: string | null
    categoryId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    brand: number
    title: number
    star: number
    quantity: number
    price: number
    discount: number
    image: number
    description: number
    categoryId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    star?: true
    quantity?: true
    price?: true
    discount?: true
    categoryId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    star?: true
    quantity?: true
    price?: true
    discount?: true
    categoryId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    brand?: true
    title?: true
    star?: true
    quantity?: true
    price?: true
    discount?: true
    image?: true
    description?: true
    categoryId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    brand?: true
    title?: true
    star?: true
    quantity?: true
    price?: true
    discount?: true
    image?: true
    description?: true
    categoryId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    brand?: true
    title?: true
    star?: true
    quantity?: true
    price?: true
    discount?: true
    image?: true
    description?: true
    categoryId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount: number | null
    image: string
    description: string
    categoryId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    title?: boolean
    star?: boolean
    quantity?: boolean
    price?: boolean
    discount?: boolean
    image?: boolean
    description?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    colors?: boolean | Product$colorsArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    users?: boolean | Product$usersArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    title?: boolean
    star?: boolean
    quantity?: boolean
    price?: boolean
    discount?: boolean
    image?: boolean
    description?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    brand?: boolean
    title?: boolean
    star?: boolean
    quantity?: boolean
    price?: boolean
    discount?: boolean
    image?: boolean
    description?: boolean
    categoryId?: boolean
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    brand?: boolean
    title?: boolean
    star?: boolean
    quantity?: boolean
    price?: boolean
    discount?: boolean
    image?: boolean
    description?: boolean
    categoryId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "brand" | "title" | "star" | "quantity" | "price" | "discount" | "image" | "description" | "categoryId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    colors?: boolean | Product$colorsArgs<ExtArgs>
    sizes?: boolean | Product$sizesArgs<ExtArgs>
    users?: boolean | Product$usersArgs<ExtArgs>
    images?: boolean | Product$imagesArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      category: Prisma.$CategoryPayload<ExtArgs>
      colors: Prisma.$ColorsOnProductsPayload<ExtArgs>[]
      sizes: Prisma.$ProductsOnSizesPayload<ExtArgs>[]
      users: Prisma.$UserPayload<ExtArgs>[]
      images: Prisma.$ImagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      brand: string
      title: string
      star: number
      quantity: number
      price: number
      discount: number | null
      image: string
      description: string
      categoryId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    colors<T extends Product$colorsArgs<ExtArgs> = {}>(args?: Subset<T, Product$colorsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sizes<T extends Product$sizesArgs<ExtArgs> = {}>(args?: Subset<T, Product$sizesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends Product$usersArgs<ExtArgs> = {}>(args?: Subset<T, Product$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    images<T extends Product$imagesArgs<ExtArgs> = {}>(args?: Subset<T, Product$imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly brand: FieldRef<"Product", 'String'>
    readonly title: FieldRef<"Product", 'String'>
    readonly star: FieldRef<"Product", 'Float'>
    readonly quantity: FieldRef<"Product", 'Int'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly discount: FieldRef<"Product", 'Float'>
    readonly image: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly categoryId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.colors
   */
  export type Product$colorsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    where?: ColorsOnProductsWhereInput
    orderBy?: ColorsOnProductsOrderByWithRelationInput | ColorsOnProductsOrderByWithRelationInput[]
    cursor?: ColorsOnProductsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ColorsOnProductsScalarFieldEnum | ColorsOnProductsScalarFieldEnum[]
  }

  /**
   * Product.sizes
   */
  export type Product$sizesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    where?: ProductsOnSizesWhereInput
    orderBy?: ProductsOnSizesOrderByWithRelationInput | ProductsOnSizesOrderByWithRelationInput[]
    cursor?: ProductsOnSizesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsOnSizesScalarFieldEnum | ProductsOnSizesScalarFieldEnum[]
  }

  /**
   * Product.users
   */
  export type Product$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Product.images
   */
  export type Product$imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    cursor?: ImageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ColorsOnProducts
   */

  export type AggregateColorsOnProducts = {
    _count: ColorsOnProductsCountAggregateOutputType | null
    _avg: ColorsOnProductsAvgAggregateOutputType | null
    _sum: ColorsOnProductsSumAggregateOutputType | null
    _min: ColorsOnProductsMinAggregateOutputType | null
    _max: ColorsOnProductsMaxAggregateOutputType | null
  }

  export type ColorsOnProductsAvgAggregateOutputType = {
    id: number | null
    colorId: number | null
    productId: number | null
  }

  export type ColorsOnProductsSumAggregateOutputType = {
    id: number | null
    colorId: number | null
    productId: number | null
  }

  export type ColorsOnProductsMinAggregateOutputType = {
    id: number | null
    colorId: number | null
    productId: number | null
    stock: boolean | null
  }

  export type ColorsOnProductsMaxAggregateOutputType = {
    id: number | null
    colorId: number | null
    productId: number | null
    stock: boolean | null
  }

  export type ColorsOnProductsCountAggregateOutputType = {
    id: number
    colorId: number
    productId: number
    stock: number
    _all: number
  }


  export type ColorsOnProductsAvgAggregateInputType = {
    id?: true
    colorId?: true
    productId?: true
  }

  export type ColorsOnProductsSumAggregateInputType = {
    id?: true
    colorId?: true
    productId?: true
  }

  export type ColorsOnProductsMinAggregateInputType = {
    id?: true
    colorId?: true
    productId?: true
    stock?: true
  }

  export type ColorsOnProductsMaxAggregateInputType = {
    id?: true
    colorId?: true
    productId?: true
    stock?: true
  }

  export type ColorsOnProductsCountAggregateInputType = {
    id?: true
    colorId?: true
    productId?: true
    stock?: true
    _all?: true
  }

  export type ColorsOnProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorsOnProducts to aggregate.
     */
    where?: ColorsOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorsOnProducts to fetch.
     */
    orderBy?: ColorsOnProductsOrderByWithRelationInput | ColorsOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ColorsOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorsOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorsOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ColorsOnProducts
    **/
    _count?: true | ColorsOnProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ColorsOnProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ColorsOnProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ColorsOnProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ColorsOnProductsMaxAggregateInputType
  }

  export type GetColorsOnProductsAggregateType<T extends ColorsOnProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateColorsOnProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateColorsOnProducts[P]>
      : GetScalarType<T[P], AggregateColorsOnProducts[P]>
  }




  export type ColorsOnProductsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ColorsOnProductsWhereInput
    orderBy?: ColorsOnProductsOrderByWithAggregationInput | ColorsOnProductsOrderByWithAggregationInput[]
    by: ColorsOnProductsScalarFieldEnum[] | ColorsOnProductsScalarFieldEnum
    having?: ColorsOnProductsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ColorsOnProductsCountAggregateInputType | true
    _avg?: ColorsOnProductsAvgAggregateInputType
    _sum?: ColorsOnProductsSumAggregateInputType
    _min?: ColorsOnProductsMinAggregateInputType
    _max?: ColorsOnProductsMaxAggregateInputType
  }

  export type ColorsOnProductsGroupByOutputType = {
    id: number
    colorId: number
    productId: number
    stock: boolean
    _count: ColorsOnProductsCountAggregateOutputType | null
    _avg: ColorsOnProductsAvgAggregateOutputType | null
    _sum: ColorsOnProductsSumAggregateOutputType | null
    _min: ColorsOnProductsMinAggregateOutputType | null
    _max: ColorsOnProductsMaxAggregateOutputType | null
  }

  type GetColorsOnProductsGroupByPayload<T extends ColorsOnProductsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ColorsOnProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ColorsOnProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ColorsOnProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ColorsOnProductsGroupByOutputType[P]>
        }
      >
    >


  export type ColorsOnProductsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorId?: boolean
    productId?: boolean
    stock?: boolean
    color?: boolean | ColorDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorsOnProducts"]>

  export type ColorsOnProductsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorId?: boolean
    productId?: boolean
    stock?: boolean
    color?: boolean | ColorDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorsOnProducts"]>

  export type ColorsOnProductsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    colorId?: boolean
    productId?: boolean
    stock?: boolean
    color?: boolean | ColorDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["colorsOnProducts"]>

  export type ColorsOnProductsSelectScalar = {
    id?: boolean
    colorId?: boolean
    productId?: boolean
    stock?: boolean
  }

  export type ColorsOnProductsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "colorId" | "productId" | "stock", ExtArgs["result"]["colorsOnProducts"]>
  export type ColorsOnProductsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    color?: boolean | ColorDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ColorsOnProductsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    color?: boolean | ColorDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ColorsOnProductsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    color?: boolean | ColorDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ColorsOnProductsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ColorsOnProducts"
    objects: {
      color: Prisma.$ColorPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      colorId: number
      productId: number
      stock: boolean
    }, ExtArgs["result"]["colorsOnProducts"]>
    composites: {}
  }

  type ColorsOnProductsGetPayload<S extends boolean | null | undefined | ColorsOnProductsDefaultArgs> = $Result.GetResult<Prisma.$ColorsOnProductsPayload, S>

  type ColorsOnProductsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ColorsOnProductsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ColorsOnProductsCountAggregateInputType | true
    }

  export interface ColorsOnProductsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ColorsOnProducts'], meta: { name: 'ColorsOnProducts' } }
    /**
     * Find zero or one ColorsOnProducts that matches the filter.
     * @param {ColorsOnProductsFindUniqueArgs} args - Arguments to find a ColorsOnProducts
     * @example
     * // Get one ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ColorsOnProductsFindUniqueArgs>(args: SelectSubset<T, ColorsOnProductsFindUniqueArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ColorsOnProducts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ColorsOnProductsFindUniqueOrThrowArgs} args - Arguments to find a ColorsOnProducts
     * @example
     * // Get one ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ColorsOnProductsFindUniqueOrThrowArgs>(args: SelectSubset<T, ColorsOnProductsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorsOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsFindFirstArgs} args - Arguments to find a ColorsOnProducts
     * @example
     * // Get one ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ColorsOnProductsFindFirstArgs>(args?: SelectSubset<T, ColorsOnProductsFindFirstArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ColorsOnProducts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsFindFirstOrThrowArgs} args - Arguments to find a ColorsOnProducts
     * @example
     * // Get one ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ColorsOnProductsFindFirstOrThrowArgs>(args?: SelectSubset<T, ColorsOnProductsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ColorsOnProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.findMany()
     * 
     * // Get first 10 ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const colorsOnProductsWithIdOnly = await prisma.colorsOnProducts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ColorsOnProductsFindManyArgs>(args?: SelectSubset<T, ColorsOnProductsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ColorsOnProducts.
     * @param {ColorsOnProductsCreateArgs} args - Arguments to create a ColorsOnProducts.
     * @example
     * // Create one ColorsOnProducts
     * const ColorsOnProducts = await prisma.colorsOnProducts.create({
     *   data: {
     *     // ... data to create a ColorsOnProducts
     *   }
     * })
     * 
     */
    create<T extends ColorsOnProductsCreateArgs>(args: SelectSubset<T, ColorsOnProductsCreateArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ColorsOnProducts.
     * @param {ColorsOnProductsCreateManyArgs} args - Arguments to create many ColorsOnProducts.
     * @example
     * // Create many ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ColorsOnProductsCreateManyArgs>(args?: SelectSubset<T, ColorsOnProductsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ColorsOnProducts and returns the data saved in the database.
     * @param {ColorsOnProductsCreateManyAndReturnArgs} args - Arguments to create many ColorsOnProducts.
     * @example
     * // Create many ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ColorsOnProducts and only return the `id`
     * const colorsOnProductsWithIdOnly = await prisma.colorsOnProducts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ColorsOnProductsCreateManyAndReturnArgs>(args?: SelectSubset<T, ColorsOnProductsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ColorsOnProducts.
     * @param {ColorsOnProductsDeleteArgs} args - Arguments to delete one ColorsOnProducts.
     * @example
     * // Delete one ColorsOnProducts
     * const ColorsOnProducts = await prisma.colorsOnProducts.delete({
     *   where: {
     *     // ... filter to delete one ColorsOnProducts
     *   }
     * })
     * 
     */
    delete<T extends ColorsOnProductsDeleteArgs>(args: SelectSubset<T, ColorsOnProductsDeleteArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ColorsOnProducts.
     * @param {ColorsOnProductsUpdateArgs} args - Arguments to update one ColorsOnProducts.
     * @example
     * // Update one ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ColorsOnProductsUpdateArgs>(args: SelectSubset<T, ColorsOnProductsUpdateArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ColorsOnProducts.
     * @param {ColorsOnProductsDeleteManyArgs} args - Arguments to filter ColorsOnProducts to delete.
     * @example
     * // Delete a few ColorsOnProducts
     * const { count } = await prisma.colorsOnProducts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ColorsOnProductsDeleteManyArgs>(args?: SelectSubset<T, ColorsOnProductsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorsOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ColorsOnProductsUpdateManyArgs>(args: SelectSubset<T, ColorsOnProductsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ColorsOnProducts and returns the data updated in the database.
     * @param {ColorsOnProductsUpdateManyAndReturnArgs} args - Arguments to update many ColorsOnProducts.
     * @example
     * // Update many ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ColorsOnProducts and only return the `id`
     * const colorsOnProductsWithIdOnly = await prisma.colorsOnProducts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ColorsOnProductsUpdateManyAndReturnArgs>(args: SelectSubset<T, ColorsOnProductsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ColorsOnProducts.
     * @param {ColorsOnProductsUpsertArgs} args - Arguments to update or create a ColorsOnProducts.
     * @example
     * // Update or create a ColorsOnProducts
     * const colorsOnProducts = await prisma.colorsOnProducts.upsert({
     *   create: {
     *     // ... data to create a ColorsOnProducts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ColorsOnProducts we want to update
     *   }
     * })
     */
    upsert<T extends ColorsOnProductsUpsertArgs>(args: SelectSubset<T, ColorsOnProductsUpsertArgs<ExtArgs>>): Prisma__ColorsOnProductsClient<$Result.GetResult<Prisma.$ColorsOnProductsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ColorsOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsCountArgs} args - Arguments to filter ColorsOnProducts to count.
     * @example
     * // Count the number of ColorsOnProducts
     * const count = await prisma.colorsOnProducts.count({
     *   where: {
     *     // ... the filter for the ColorsOnProducts we want to count
     *   }
     * })
    **/
    count<T extends ColorsOnProductsCountArgs>(
      args?: Subset<T, ColorsOnProductsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ColorsOnProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ColorsOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ColorsOnProductsAggregateArgs>(args: Subset<T, ColorsOnProductsAggregateArgs>): Prisma.PrismaPromise<GetColorsOnProductsAggregateType<T>>

    /**
     * Group by ColorsOnProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ColorsOnProductsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ColorsOnProductsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ColorsOnProductsGroupByArgs['orderBy'] }
        : { orderBy?: ColorsOnProductsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ColorsOnProductsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetColorsOnProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ColorsOnProducts model
   */
  readonly fields: ColorsOnProductsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ColorsOnProducts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ColorsOnProductsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    color<T extends ColorDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ColorDefaultArgs<ExtArgs>>): Prisma__ColorClient<$Result.GetResult<Prisma.$ColorPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ColorsOnProducts model
   */
  interface ColorsOnProductsFieldRefs {
    readonly id: FieldRef<"ColorsOnProducts", 'Int'>
    readonly colorId: FieldRef<"ColorsOnProducts", 'Int'>
    readonly productId: FieldRef<"ColorsOnProducts", 'Int'>
    readonly stock: FieldRef<"ColorsOnProducts", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ColorsOnProducts findUnique
   */
  export type ColorsOnProductsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which ColorsOnProducts to fetch.
     */
    where: ColorsOnProductsWhereUniqueInput
  }

  /**
   * ColorsOnProducts findUniqueOrThrow
   */
  export type ColorsOnProductsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which ColorsOnProducts to fetch.
     */
    where: ColorsOnProductsWhereUniqueInput
  }

  /**
   * ColorsOnProducts findFirst
   */
  export type ColorsOnProductsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which ColorsOnProducts to fetch.
     */
    where?: ColorsOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorsOnProducts to fetch.
     */
    orderBy?: ColorsOnProductsOrderByWithRelationInput | ColorsOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorsOnProducts.
     */
    cursor?: ColorsOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorsOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorsOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorsOnProducts.
     */
    distinct?: ColorsOnProductsScalarFieldEnum | ColorsOnProductsScalarFieldEnum[]
  }

  /**
   * ColorsOnProducts findFirstOrThrow
   */
  export type ColorsOnProductsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which ColorsOnProducts to fetch.
     */
    where?: ColorsOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorsOnProducts to fetch.
     */
    orderBy?: ColorsOnProductsOrderByWithRelationInput | ColorsOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ColorsOnProducts.
     */
    cursor?: ColorsOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorsOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorsOnProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ColorsOnProducts.
     */
    distinct?: ColorsOnProductsScalarFieldEnum | ColorsOnProductsScalarFieldEnum[]
  }

  /**
   * ColorsOnProducts findMany
   */
  export type ColorsOnProductsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * Filter, which ColorsOnProducts to fetch.
     */
    where?: ColorsOnProductsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ColorsOnProducts to fetch.
     */
    orderBy?: ColorsOnProductsOrderByWithRelationInput | ColorsOnProductsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ColorsOnProducts.
     */
    cursor?: ColorsOnProductsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ColorsOnProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ColorsOnProducts.
     */
    skip?: number
    distinct?: ColorsOnProductsScalarFieldEnum | ColorsOnProductsScalarFieldEnum[]
  }

  /**
   * ColorsOnProducts create
   */
  export type ColorsOnProductsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * The data needed to create a ColorsOnProducts.
     */
    data: XOR<ColorsOnProductsCreateInput, ColorsOnProductsUncheckedCreateInput>
  }

  /**
   * ColorsOnProducts createMany
   */
  export type ColorsOnProductsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ColorsOnProducts.
     */
    data: ColorsOnProductsCreateManyInput | ColorsOnProductsCreateManyInput[]
  }

  /**
   * ColorsOnProducts createManyAndReturn
   */
  export type ColorsOnProductsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * The data used to create many ColorsOnProducts.
     */
    data: ColorsOnProductsCreateManyInput | ColorsOnProductsCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColorsOnProducts update
   */
  export type ColorsOnProductsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * The data needed to update a ColorsOnProducts.
     */
    data: XOR<ColorsOnProductsUpdateInput, ColorsOnProductsUncheckedUpdateInput>
    /**
     * Choose, which ColorsOnProducts to update.
     */
    where: ColorsOnProductsWhereUniqueInput
  }

  /**
   * ColorsOnProducts updateMany
   */
  export type ColorsOnProductsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ColorsOnProducts.
     */
    data: XOR<ColorsOnProductsUpdateManyMutationInput, ColorsOnProductsUncheckedUpdateManyInput>
    /**
     * Filter which ColorsOnProducts to update
     */
    where?: ColorsOnProductsWhereInput
    /**
     * Limit how many ColorsOnProducts to update.
     */
    limit?: number
  }

  /**
   * ColorsOnProducts updateManyAndReturn
   */
  export type ColorsOnProductsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * The data used to update ColorsOnProducts.
     */
    data: XOR<ColorsOnProductsUpdateManyMutationInput, ColorsOnProductsUncheckedUpdateManyInput>
    /**
     * Filter which ColorsOnProducts to update
     */
    where?: ColorsOnProductsWhereInput
    /**
     * Limit how many ColorsOnProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ColorsOnProducts upsert
   */
  export type ColorsOnProductsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * The filter to search for the ColorsOnProducts to update in case it exists.
     */
    where: ColorsOnProductsWhereUniqueInput
    /**
     * In case the ColorsOnProducts found by the `where` argument doesn't exist, create a new ColorsOnProducts with this data.
     */
    create: XOR<ColorsOnProductsCreateInput, ColorsOnProductsUncheckedCreateInput>
    /**
     * In case the ColorsOnProducts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ColorsOnProductsUpdateInput, ColorsOnProductsUncheckedUpdateInput>
  }

  /**
   * ColorsOnProducts delete
   */
  export type ColorsOnProductsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
    /**
     * Filter which ColorsOnProducts to delete.
     */
    where: ColorsOnProductsWhereUniqueInput
  }

  /**
   * ColorsOnProducts deleteMany
   */
  export type ColorsOnProductsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ColorsOnProducts to delete
     */
    where?: ColorsOnProductsWhereInput
    /**
     * Limit how many ColorsOnProducts to delete.
     */
    limit?: number
  }

  /**
   * ColorsOnProducts without action
   */
  export type ColorsOnProductsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ColorsOnProducts
     */
    select?: ColorsOnProductsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ColorsOnProducts
     */
    omit?: ColorsOnProductsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ColorsOnProductsInclude<ExtArgs> | null
  }


  /**
   * Model ProductsOnSizes
   */

  export type AggregateProductsOnSizes = {
    _count: ProductsOnSizesCountAggregateOutputType | null
    _avg: ProductsOnSizesAvgAggregateOutputType | null
    _sum: ProductsOnSizesSumAggregateOutputType | null
    _min: ProductsOnSizesMinAggregateOutputType | null
    _max: ProductsOnSizesMaxAggregateOutputType | null
  }

  export type ProductsOnSizesAvgAggregateOutputType = {
    id: number | null
    sizeId: number | null
    productId: number | null
  }

  export type ProductsOnSizesSumAggregateOutputType = {
    id: number | null
    sizeId: number | null
    productId: number | null
  }

  export type ProductsOnSizesMinAggregateOutputType = {
    id: number | null
    sizeId: number | null
    productId: number | null
    stock: boolean | null
  }

  export type ProductsOnSizesMaxAggregateOutputType = {
    id: number | null
    sizeId: number | null
    productId: number | null
    stock: boolean | null
  }

  export type ProductsOnSizesCountAggregateOutputType = {
    id: number
    sizeId: number
    productId: number
    stock: number
    _all: number
  }


  export type ProductsOnSizesAvgAggregateInputType = {
    id?: true
    sizeId?: true
    productId?: true
  }

  export type ProductsOnSizesSumAggregateInputType = {
    id?: true
    sizeId?: true
    productId?: true
  }

  export type ProductsOnSizesMinAggregateInputType = {
    id?: true
    sizeId?: true
    productId?: true
    stock?: true
  }

  export type ProductsOnSizesMaxAggregateInputType = {
    id?: true
    sizeId?: true
    productId?: true
    stock?: true
  }

  export type ProductsOnSizesCountAggregateInputType = {
    id?: true
    sizeId?: true
    productId?: true
    stock?: true
    _all?: true
  }

  export type ProductsOnSizesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOnSizes to aggregate.
     */
    where?: ProductsOnSizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnSizes to fetch.
     */
    orderBy?: ProductsOnSizesOrderByWithRelationInput | ProductsOnSizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductsOnSizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductsOnSizes
    **/
    _count?: true | ProductsOnSizesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsOnSizesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsOnSizesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsOnSizesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsOnSizesMaxAggregateInputType
  }

  export type GetProductsOnSizesAggregateType<T extends ProductsOnSizesAggregateArgs> = {
        [P in keyof T & keyof AggregateProductsOnSizes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductsOnSizes[P]>
      : GetScalarType<T[P], AggregateProductsOnSizes[P]>
  }




  export type ProductsOnSizesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductsOnSizesWhereInput
    orderBy?: ProductsOnSizesOrderByWithAggregationInput | ProductsOnSizesOrderByWithAggregationInput[]
    by: ProductsOnSizesScalarFieldEnum[] | ProductsOnSizesScalarFieldEnum
    having?: ProductsOnSizesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsOnSizesCountAggregateInputType | true
    _avg?: ProductsOnSizesAvgAggregateInputType
    _sum?: ProductsOnSizesSumAggregateInputType
    _min?: ProductsOnSizesMinAggregateInputType
    _max?: ProductsOnSizesMaxAggregateInputType
  }

  export type ProductsOnSizesGroupByOutputType = {
    id: number
    sizeId: number
    productId: number
    stock: boolean
    _count: ProductsOnSizesCountAggregateOutputType | null
    _avg: ProductsOnSizesAvgAggregateOutputType | null
    _sum: ProductsOnSizesSumAggregateOutputType | null
    _min: ProductsOnSizesMinAggregateOutputType | null
    _max: ProductsOnSizesMaxAggregateOutputType | null
  }

  type GetProductsOnSizesGroupByPayload<T extends ProductsOnSizesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsOnSizesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsOnSizesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsOnSizesGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsOnSizesGroupByOutputType[P]>
        }
      >
    >


  export type ProductsOnSizesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sizeId?: boolean
    productId?: boolean
    stock?: boolean
    size?: boolean | SizeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnSizes"]>

  export type ProductsOnSizesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sizeId?: boolean
    productId?: boolean
    stock?: boolean
    size?: boolean | SizeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnSizes"]>

  export type ProductsOnSizesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sizeId?: boolean
    productId?: boolean
    stock?: boolean
    size?: boolean | SizeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productsOnSizes"]>

  export type ProductsOnSizesSelectScalar = {
    id?: boolean
    sizeId?: boolean
    productId?: boolean
    stock?: boolean
  }

  export type ProductsOnSizesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sizeId" | "productId" | "stock", ExtArgs["result"]["productsOnSizes"]>
  export type ProductsOnSizesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    size?: boolean | SizeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductsOnSizesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    size?: boolean | SizeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductsOnSizesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    size?: boolean | SizeDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductsOnSizesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductsOnSizes"
    objects: {
      size: Prisma.$SizePayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      sizeId: number
      productId: number
      stock: boolean
    }, ExtArgs["result"]["productsOnSizes"]>
    composites: {}
  }

  type ProductsOnSizesGetPayload<S extends boolean | null | undefined | ProductsOnSizesDefaultArgs> = $Result.GetResult<Prisma.$ProductsOnSizesPayload, S>

  type ProductsOnSizesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductsOnSizesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsOnSizesCountAggregateInputType | true
    }

  export interface ProductsOnSizesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductsOnSizes'], meta: { name: 'ProductsOnSizes' } }
    /**
     * Find zero or one ProductsOnSizes that matches the filter.
     * @param {ProductsOnSizesFindUniqueArgs} args - Arguments to find a ProductsOnSizes
     * @example
     * // Get one ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductsOnSizesFindUniqueArgs>(args: SelectSubset<T, ProductsOnSizesFindUniqueArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductsOnSizes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductsOnSizesFindUniqueOrThrowArgs} args - Arguments to find a ProductsOnSizes
     * @example
     * // Get one ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductsOnSizesFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductsOnSizesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsOnSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesFindFirstArgs} args - Arguments to find a ProductsOnSizes
     * @example
     * // Get one ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductsOnSizesFindFirstArgs>(args?: SelectSubset<T, ProductsOnSizesFindFirstArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductsOnSizes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesFindFirstOrThrowArgs} args - Arguments to find a ProductsOnSizes
     * @example
     * // Get one ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductsOnSizesFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductsOnSizesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductsOnSizes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.findMany()
     * 
     * // Get first 10 ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsOnSizesWithIdOnly = await prisma.productsOnSizes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductsOnSizesFindManyArgs>(args?: SelectSubset<T, ProductsOnSizesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductsOnSizes.
     * @param {ProductsOnSizesCreateArgs} args - Arguments to create a ProductsOnSizes.
     * @example
     * // Create one ProductsOnSizes
     * const ProductsOnSizes = await prisma.productsOnSizes.create({
     *   data: {
     *     // ... data to create a ProductsOnSizes
     *   }
     * })
     * 
     */
    create<T extends ProductsOnSizesCreateArgs>(args: SelectSubset<T, ProductsOnSizesCreateArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductsOnSizes.
     * @param {ProductsOnSizesCreateManyArgs} args - Arguments to create many ProductsOnSizes.
     * @example
     * // Create many ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductsOnSizesCreateManyArgs>(args?: SelectSubset<T, ProductsOnSizesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductsOnSizes and returns the data saved in the database.
     * @param {ProductsOnSizesCreateManyAndReturnArgs} args - Arguments to create many ProductsOnSizes.
     * @example
     * // Create many ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductsOnSizes and only return the `id`
     * const productsOnSizesWithIdOnly = await prisma.productsOnSizes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductsOnSizesCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductsOnSizesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductsOnSizes.
     * @param {ProductsOnSizesDeleteArgs} args - Arguments to delete one ProductsOnSizes.
     * @example
     * // Delete one ProductsOnSizes
     * const ProductsOnSizes = await prisma.productsOnSizes.delete({
     *   where: {
     *     // ... filter to delete one ProductsOnSizes
     *   }
     * })
     * 
     */
    delete<T extends ProductsOnSizesDeleteArgs>(args: SelectSubset<T, ProductsOnSizesDeleteArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductsOnSizes.
     * @param {ProductsOnSizesUpdateArgs} args - Arguments to update one ProductsOnSizes.
     * @example
     * // Update one ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductsOnSizesUpdateArgs>(args: SelectSubset<T, ProductsOnSizesUpdateArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductsOnSizes.
     * @param {ProductsOnSizesDeleteManyArgs} args - Arguments to filter ProductsOnSizes to delete.
     * @example
     * // Delete a few ProductsOnSizes
     * const { count } = await prisma.productsOnSizes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductsOnSizesDeleteManyArgs>(args?: SelectSubset<T, ProductsOnSizesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOnSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductsOnSizesUpdateManyArgs>(args: SelectSubset<T, ProductsOnSizesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductsOnSizes and returns the data updated in the database.
     * @param {ProductsOnSizesUpdateManyAndReturnArgs} args - Arguments to update many ProductsOnSizes.
     * @example
     * // Update many ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductsOnSizes and only return the `id`
     * const productsOnSizesWithIdOnly = await prisma.productsOnSizes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProductsOnSizesUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductsOnSizesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductsOnSizes.
     * @param {ProductsOnSizesUpsertArgs} args - Arguments to update or create a ProductsOnSizes.
     * @example
     * // Update or create a ProductsOnSizes
     * const productsOnSizes = await prisma.productsOnSizes.upsert({
     *   create: {
     *     // ... data to create a ProductsOnSizes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductsOnSizes we want to update
     *   }
     * })
     */
    upsert<T extends ProductsOnSizesUpsertArgs>(args: SelectSubset<T, ProductsOnSizesUpsertArgs<ExtArgs>>): Prisma__ProductsOnSizesClient<$Result.GetResult<Prisma.$ProductsOnSizesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductsOnSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesCountArgs} args - Arguments to filter ProductsOnSizes to count.
     * @example
     * // Count the number of ProductsOnSizes
     * const count = await prisma.productsOnSizes.count({
     *   where: {
     *     // ... the filter for the ProductsOnSizes we want to count
     *   }
     * })
    **/
    count<T extends ProductsOnSizesCountArgs>(
      args?: Subset<T, ProductsOnSizesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsOnSizesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductsOnSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsOnSizesAggregateArgs>(args: Subset<T, ProductsOnSizesAggregateArgs>): Prisma.PrismaPromise<GetProductsOnSizesAggregateType<T>>

    /**
     * Group by ProductsOnSizes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsOnSizesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProductsOnSizesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductsOnSizesGroupByArgs['orderBy'] }
        : { orderBy?: ProductsOnSizesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProductsOnSizesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsOnSizesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductsOnSizes model
   */
  readonly fields: ProductsOnSizesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductsOnSizes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductsOnSizesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    size<T extends SizeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SizeDefaultArgs<ExtArgs>>): Prisma__SizeClient<$Result.GetResult<Prisma.$SizePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ProductsOnSizes model
   */
  interface ProductsOnSizesFieldRefs {
    readonly id: FieldRef<"ProductsOnSizes", 'Int'>
    readonly sizeId: FieldRef<"ProductsOnSizes", 'Int'>
    readonly productId: FieldRef<"ProductsOnSizes", 'Int'>
    readonly stock: FieldRef<"ProductsOnSizes", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * ProductsOnSizes findUnique
   */
  export type ProductsOnSizesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnSizes to fetch.
     */
    where: ProductsOnSizesWhereUniqueInput
  }

  /**
   * ProductsOnSizes findUniqueOrThrow
   */
  export type ProductsOnSizesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnSizes to fetch.
     */
    where: ProductsOnSizesWhereUniqueInput
  }

  /**
   * ProductsOnSizes findFirst
   */
  export type ProductsOnSizesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnSizes to fetch.
     */
    where?: ProductsOnSizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnSizes to fetch.
     */
    orderBy?: ProductsOnSizesOrderByWithRelationInput | ProductsOnSizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnSizes.
     */
    cursor?: ProductsOnSizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnSizes.
     */
    distinct?: ProductsOnSizesScalarFieldEnum | ProductsOnSizesScalarFieldEnum[]
  }

  /**
   * ProductsOnSizes findFirstOrThrow
   */
  export type ProductsOnSizesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnSizes to fetch.
     */
    where?: ProductsOnSizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnSizes to fetch.
     */
    orderBy?: ProductsOnSizesOrderByWithRelationInput | ProductsOnSizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductsOnSizes.
     */
    cursor?: ProductsOnSizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnSizes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductsOnSizes.
     */
    distinct?: ProductsOnSizesScalarFieldEnum | ProductsOnSizesScalarFieldEnum[]
  }

  /**
   * ProductsOnSizes findMany
   */
  export type ProductsOnSizesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * Filter, which ProductsOnSizes to fetch.
     */
    where?: ProductsOnSizesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductsOnSizes to fetch.
     */
    orderBy?: ProductsOnSizesOrderByWithRelationInput | ProductsOnSizesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductsOnSizes.
     */
    cursor?: ProductsOnSizesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductsOnSizes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductsOnSizes.
     */
    skip?: number
    distinct?: ProductsOnSizesScalarFieldEnum | ProductsOnSizesScalarFieldEnum[]
  }

  /**
   * ProductsOnSizes create
   */
  export type ProductsOnSizesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductsOnSizes.
     */
    data: XOR<ProductsOnSizesCreateInput, ProductsOnSizesUncheckedCreateInput>
  }

  /**
   * ProductsOnSizes createMany
   */
  export type ProductsOnSizesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductsOnSizes.
     */
    data: ProductsOnSizesCreateManyInput | ProductsOnSizesCreateManyInput[]
  }

  /**
   * ProductsOnSizes createManyAndReturn
   */
  export type ProductsOnSizesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * The data used to create many ProductsOnSizes.
     */
    data: ProductsOnSizesCreateManyInput | ProductsOnSizesCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsOnSizes update
   */
  export type ProductsOnSizesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductsOnSizes.
     */
    data: XOR<ProductsOnSizesUpdateInput, ProductsOnSizesUncheckedUpdateInput>
    /**
     * Choose, which ProductsOnSizes to update.
     */
    where: ProductsOnSizesWhereUniqueInput
  }

  /**
   * ProductsOnSizes updateMany
   */
  export type ProductsOnSizesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductsOnSizes.
     */
    data: XOR<ProductsOnSizesUpdateManyMutationInput, ProductsOnSizesUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOnSizes to update
     */
    where?: ProductsOnSizesWhereInput
    /**
     * Limit how many ProductsOnSizes to update.
     */
    limit?: number
  }

  /**
   * ProductsOnSizes updateManyAndReturn
   */
  export type ProductsOnSizesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * The data used to update ProductsOnSizes.
     */
    data: XOR<ProductsOnSizesUpdateManyMutationInput, ProductsOnSizesUncheckedUpdateManyInput>
    /**
     * Filter which ProductsOnSizes to update
     */
    where?: ProductsOnSizesWhereInput
    /**
     * Limit how many ProductsOnSizes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductsOnSizes upsert
   */
  export type ProductsOnSizesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductsOnSizes to update in case it exists.
     */
    where: ProductsOnSizesWhereUniqueInput
    /**
     * In case the ProductsOnSizes found by the `where` argument doesn't exist, create a new ProductsOnSizes with this data.
     */
    create: XOR<ProductsOnSizesCreateInput, ProductsOnSizesUncheckedCreateInput>
    /**
     * In case the ProductsOnSizes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductsOnSizesUpdateInput, ProductsOnSizesUncheckedUpdateInput>
  }

  /**
   * ProductsOnSizes delete
   */
  export type ProductsOnSizesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
    /**
     * Filter which ProductsOnSizes to delete.
     */
    where: ProductsOnSizesWhereUniqueInput
  }

  /**
   * ProductsOnSizes deleteMany
   */
  export type ProductsOnSizesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductsOnSizes to delete
     */
    where?: ProductsOnSizesWhereInput
    /**
     * Limit how many ProductsOnSizes to delete.
     */
    limit?: number
  }

  /**
   * ProductsOnSizes without action
   */
  export type ProductsOnSizesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsOnSizes
     */
    select?: ProductsOnSizesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductsOnSizes
     */
    omit?: ProductsOnSizesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductsOnSizesInclude<ExtArgs> | null
  }


  /**
   * Model Image
   */

  export type AggregateImage = {
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  export type ImageAvgAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
    productId: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    image: string | null
    productId: number | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    image: string | null
    productId: number | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    image: number
    productId: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
    productId?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    image?: true
    productId?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    image?: true
    productId?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    image?: true
    productId?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Image to aggregate.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Images
    **/
    _count?: true | ImageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ImageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ImageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ImageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ImageMaxAggregateInputType
  }

  export type GetImageAggregateType<T extends ImageAggregateArgs> = {
        [P in keyof T & keyof AggregateImage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage[P]>
      : GetScalarType<T[P], AggregateImage[P]>
  }




  export type ImageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ImageWhereInput
    orderBy?: ImageOrderByWithAggregationInput | ImageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: ImageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ImageCountAggregateInputType | true
    _avg?: ImageAvgAggregateInputType
    _sum?: ImageSumAggregateInputType
    _min?: ImageMinAggregateInputType
    _max?: ImageMaxAggregateInputType
  }

  export type ImageGroupByOutputType = {
    id: number
    image: string
    productId: number
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends ImageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ImageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ImageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ImageGroupByOutputType[P]>
            : GetScalarType<T[P], ImageGroupByOutputType[P]>
        }
      >
    >


  export type ImageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    image?: boolean
    productId?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>

  export type ImageSelectScalar = {
    id?: boolean
    image?: boolean
    productId?: boolean
  }

  export type ImageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "image" | "productId", ExtArgs["result"]["image"]>
  export type ImageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ImageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ImageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ImagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Image"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      image: string
      productId: number
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type ImageGetPayload<S extends boolean | null | undefined | ImageDefaultArgs> = $Result.GetResult<Prisma.$ImagePayload, S>

  type ImageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ImageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface ImageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Image'], meta: { name: 'Image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {ImageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ImageFindUniqueArgs>(args: SelectSubset<T, ImageFindUniqueArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ImageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ImageFindUniqueOrThrowArgs>(args: SelectSubset<T, ImageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ImageFindFirstArgs>(args?: SelectSubset<T, ImageFindFirstArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ImageFindFirstOrThrowArgs>(args?: SelectSubset<T, ImageFindFirstOrThrowArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Images
     * const images = await prisma.image.findMany()
     * 
     * // Get first 10 Images
     * const images = await prisma.image.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const imageWithIdOnly = await prisma.image.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ImageFindManyArgs>(args?: SelectSubset<T, ImageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {ImageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends ImageCreateArgs>(args: SelectSubset<T, ImageCreateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {ImageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ImageCreateManyArgs>(args?: SelectSubset<T, ImageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Images and returns the data saved in the database.
     * @param {ImageCreateManyAndReturnArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ImageCreateManyAndReturnArgs>(args?: SelectSubset<T, ImageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Image.
     * @param {ImageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends ImageDeleteArgs>(args: SelectSubset<T, ImageDeleteArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {ImageUpdateArgs} args - Arguments to update one Image.
     * @example
     * // Update one Image
     * const image = await prisma.image.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ImageUpdateArgs>(args: SelectSubset<T, ImageUpdateArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {ImageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ImageDeleteManyArgs>(args?: SelectSubset<T, ImageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ImageUpdateManyArgs>(args: SelectSubset<T, ImageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images and returns the data updated in the database.
     * @param {ImageUpdateManyAndReturnArgs} args - Arguments to update many Images.
     * @example
     * // Update many Images
     * const image = await prisma.image.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Images and only return the `id`
     * const imageWithIdOnly = await prisma.image.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ImageUpdateManyAndReturnArgs>(args: SelectSubset<T, ImageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Image.
     * @param {ImageUpsertArgs} args - Arguments to update or create a Image.
     * @example
     * // Update or create a Image
     * const image = await prisma.image.upsert({
     *   create: {
     *     // ... data to create a Image
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image we want to update
     *   }
     * })
     */
    upsert<T extends ImageUpsertArgs>(args: SelectSubset<T, ImageUpsertArgs<ExtArgs>>): Prisma__ImageClient<$Result.GetResult<Prisma.$ImagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends ImageCountArgs>(
      args?: Subset<T, ImageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ImageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ImageAggregateArgs>(args: Subset<T, ImageAggregateArgs>): Prisma.PrismaPromise<GetImageAggregateType<T>>

    /**
     * Group by Image.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ImageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ImageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ImageGroupByArgs['orderBy'] }
        : { orderBy?: ImageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ImageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Image model
   */
  readonly fields: ImageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ImageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Image model
   */
  interface ImageFieldRefs {
    readonly id: FieldRef<"Image", 'Int'>
    readonly image: FieldRef<"Image", 'String'>
    readonly productId: FieldRef<"Image", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Image findUnique
   */
  export type ImageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findUniqueOrThrow
   */
  export type ImageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image findFirst
   */
  export type ImageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findFirstOrThrow
   */
  export type ImageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Image to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image findMany
   */
  export type ImageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter, which Images to fetch.
     */
    where?: ImageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Images to fetch.
     */
    orderBy?: ImageOrderByWithRelationInput | ImageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Images.
     */
    cursor?: ImageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * Image create
   */
  export type ImageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to create a Image.
     */
    data: XOR<ImageCreateInput, ImageUncheckedCreateInput>
  }

  /**
   * Image createMany
   */
  export type ImageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
  }

  /**
   * Image createManyAndReturn
   */
  export type ImageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to create many Images.
     */
    data: ImageCreateManyInput | ImageCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image update
   */
  export type ImageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The data needed to update a Image.
     */
    data: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
    /**
     * Choose, which Image to update.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image updateMany
   */
  export type ImageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
  }

  /**
   * Image updateManyAndReturn
   */
  export type ImageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * The data used to update Images.
     */
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyInput>
    /**
     * Filter which Images to update
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Image upsert
   */
  export type ImageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * The filter to search for the Image to update in case it exists.
     */
    where: ImageWhereUniqueInput
    /**
     * In case the Image found by the `where` argument doesn't exist, create a new Image with this data.
     */
    create: XOR<ImageCreateInput, ImageUncheckedCreateInput>
    /**
     * In case the Image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ImageUpdateInput, ImageUncheckedUpdateInput>
  }

  /**
   * Image delete
   */
  export type ImageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
    /**
     * Filter which Image to delete.
     */
    where: ImageWhereUniqueInput
  }

  /**
   * Image deleteMany
   */
  export type ImageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Images to delete
     */
    where?: ImageWhereInput
    /**
     * Limit how many Images to delete.
     */
    limit?: number
  }

  /**
   * Image without action
   */
  export type ImageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Image
     */
    select?: ImageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Image
     */
    omit?: ImageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ImageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    password: 'password',
    role: 'role',
    status: 'status',
    lastLogin: 'lastLogin',
    error: 'error',
    profile: 'profile',
    randToken: 'randToken',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const OtpScalarFieldEnum: {
    id: 'id',
    phone: 'phone',
    otp: 'otp',
    rememberToken: 'rememberToken',
    verifyToken: 'verifyToken',
    count: 'count',
    error: 'error',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OtpScalarFieldEnum = (typeof OtpScalarFieldEnum)[keyof typeof OtpScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    image: 'image'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ColorScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bgColor: 'bgColor'
  };

  export type ColorScalarFieldEnum = (typeof ColorScalarFieldEnum)[keyof typeof ColorScalarFieldEnum]


  export const SizeScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type SizeScalarFieldEnum = (typeof SizeScalarFieldEnum)[keyof typeof SizeScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    brand: 'brand',
    title: 'title',
    star: 'star',
    quantity: 'quantity',
    price: 'price',
    discount: 'discount',
    image: 'image',
    description: 'description',
    categoryId: 'categoryId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ColorsOnProductsScalarFieldEnum: {
    id: 'id',
    colorId: 'colorId',
    productId: 'productId',
    stock: 'stock'
  };

  export type ColorsOnProductsScalarFieldEnum = (typeof ColorsOnProductsScalarFieldEnum)[keyof typeof ColorsOnProductsScalarFieldEnum]


  export const ProductsOnSizesScalarFieldEnum: {
    id: 'id',
    sizeId: 'sizeId',
    productId: 'productId',
    stock: 'stock'
  };

  export type ProductsOnSizesScalarFieldEnum = (typeof ProductsOnSizesScalarFieldEnum)[keyof typeof ProductsOnSizesScalarFieldEnum]


  export const ImageScalarFieldEnum: {
    id: 'id',
    image: 'image',
    productId: 'productId'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    error?: IntFilter<"User"> | number
    profile?: StringNullableFilter<"User"> | string | null
    randToken?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    products?: ProductListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    error?: SortOrder
    profile?: SortOrderInput | SortOrder
    randToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    error?: IntFilter<"User"> | number
    profile?: StringNullableFilter<"User"> | string | null
    randToken?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    error?: SortOrder
    profile?: SortOrderInput | SortOrder
    randToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    status?: StringWithAggregatesFilter<"User"> | string
    lastLogin?: DateTimeWithAggregatesFilter<"User"> | Date | string
    error?: IntWithAggregatesFilter<"User"> | number
    profile?: StringNullableWithAggregatesFilter<"User"> | string | null
    randToken?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type OtpWhereInput = {
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    id?: IntFilter<"Otp"> | number
    phone?: StringFilter<"Otp"> | string
    otp?: StringFilter<"Otp"> | string
    rememberToken?: StringFilter<"Otp"> | string
    verifyToken?: StringNullableFilter<"Otp"> | string | null
    count?: IntFilter<"Otp"> | number
    error?: IntFilter<"Otp"> | number
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
  }

  export type OtpOrderByWithRelationInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    rememberToken?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    count?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    phone?: string
    AND?: OtpWhereInput | OtpWhereInput[]
    OR?: OtpWhereInput[]
    NOT?: OtpWhereInput | OtpWhereInput[]
    otp?: StringFilter<"Otp"> | string
    rememberToken?: StringFilter<"Otp"> | string
    verifyToken?: StringNullableFilter<"Otp"> | string | null
    count?: IntFilter<"Otp"> | number
    error?: IntFilter<"Otp"> | number
    createdAt?: DateTimeFilter<"Otp"> | Date | string
    updatedAt?: DateTimeFilter<"Otp"> | Date | string
  }, "id" | "phone">

  export type OtpOrderByWithAggregationInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    rememberToken?: SortOrder
    verifyToken?: SortOrderInput | SortOrder
    count?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OtpCountOrderByAggregateInput
    _avg?: OtpAvgOrderByAggregateInput
    _max?: OtpMaxOrderByAggregateInput
    _min?: OtpMinOrderByAggregateInput
    _sum?: OtpSumOrderByAggregateInput
  }

  export type OtpScalarWhereWithAggregatesInput = {
    AND?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    OR?: OtpScalarWhereWithAggregatesInput[]
    NOT?: OtpScalarWhereWithAggregatesInput | OtpScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Otp"> | number
    phone?: StringWithAggregatesFilter<"Otp"> | string
    otp?: StringWithAggregatesFilter<"Otp"> | string
    rememberToken?: StringWithAggregatesFilter<"Otp"> | string
    verifyToken?: StringNullableWithAggregatesFilter<"Otp"> | string | null
    count?: IntWithAggregatesFilter<"Otp"> | number
    error?: IntWithAggregatesFilter<"Otp"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Otp"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    image?: StringFilter<"Category"> | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    image?: StringWithAggregatesFilter<"Category"> | string
  }

  export type ColorWhereInput = {
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    id?: IntFilter<"Color"> | number
    name?: StringFilter<"Color"> | string
    bgColor?: StringFilter<"Color"> | string
    products?: ColorsOnProductsListRelationFilter
  }

  export type ColorOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bgColor?: SortOrder
    products?: ColorsOnProductsOrderByRelationAggregateInput
  }

  export type ColorWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ColorWhereInput | ColorWhereInput[]
    OR?: ColorWhereInput[]
    NOT?: ColorWhereInput | ColorWhereInput[]
    name?: StringFilter<"Color"> | string
    bgColor?: StringFilter<"Color"> | string
    products?: ColorsOnProductsListRelationFilter
  }, "id">

  export type ColorOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bgColor?: SortOrder
    _count?: ColorCountOrderByAggregateInput
    _avg?: ColorAvgOrderByAggregateInput
    _max?: ColorMaxOrderByAggregateInput
    _min?: ColorMinOrderByAggregateInput
    _sum?: ColorSumOrderByAggregateInput
  }

  export type ColorScalarWhereWithAggregatesInput = {
    AND?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    OR?: ColorScalarWhereWithAggregatesInput[]
    NOT?: ColorScalarWhereWithAggregatesInput | ColorScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Color"> | number
    name?: StringWithAggregatesFilter<"Color"> | string
    bgColor?: StringWithAggregatesFilter<"Color"> | string
  }

  export type SizeWhereInput = {
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    id?: IntFilter<"Size"> | number
    name?: StringFilter<"Size"> | string
    products?: ProductsOnSizesListRelationFilter
  }

  export type SizeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    products?: ProductsOnSizesOrderByRelationAggregateInput
  }

  export type SizeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SizeWhereInput | SizeWhereInput[]
    OR?: SizeWhereInput[]
    NOT?: SizeWhereInput | SizeWhereInput[]
    name?: StringFilter<"Size"> | string
    products?: ProductsOnSizesListRelationFilter
  }, "id">

  export type SizeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: SizeCountOrderByAggregateInput
    _avg?: SizeAvgOrderByAggregateInput
    _max?: SizeMaxOrderByAggregateInput
    _min?: SizeMinOrderByAggregateInput
    _sum?: SizeSumOrderByAggregateInput
  }

  export type SizeScalarWhereWithAggregatesInput = {
    AND?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    OR?: SizeScalarWhereWithAggregatesInput[]
    NOT?: SizeScalarWhereWithAggregatesInput | SizeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Size"> | number
    name?: StringWithAggregatesFilter<"Size"> | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    brand?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    star?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    discount?: FloatNullableFilter<"Product"> | number | null
    image?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    colors?: ColorsOnProductsListRelationFilter
    sizes?: ProductsOnSizesListRelationFilter
    users?: UserListRelationFilter
    images?: ImageListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    image?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    category?: CategoryOrderByWithRelationInput
    colors?: ColorsOnProductsOrderByRelationAggregateInput
    sizes?: ProductsOnSizesOrderByRelationAggregateInput
    users?: UserOrderByRelationAggregateInput
    images?: ImageOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    brand?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    star?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    discount?: FloatNullableFilter<"Product"> | number | null
    image?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    colors?: ColorsOnProductsListRelationFilter
    sizes?: ProductsOnSizesListRelationFilter
    users?: UserListRelationFilter
    images?: ImageListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrderInput | SortOrder
    image?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    brand?: StringWithAggregatesFilter<"Product"> | string
    title?: StringWithAggregatesFilter<"Product"> | string
    star?: FloatWithAggregatesFilter<"Product"> | number
    quantity?: IntWithAggregatesFilter<"Product"> | number
    price?: FloatWithAggregatesFilter<"Product"> | number
    discount?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    image?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    categoryId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type ColorsOnProductsWhereInput = {
    AND?: ColorsOnProductsWhereInput | ColorsOnProductsWhereInput[]
    OR?: ColorsOnProductsWhereInput[]
    NOT?: ColorsOnProductsWhereInput | ColorsOnProductsWhereInput[]
    id?: IntFilter<"ColorsOnProducts"> | number
    colorId?: IntFilter<"ColorsOnProducts"> | number
    productId?: IntFilter<"ColorsOnProducts"> | number
    stock?: BoolFilter<"ColorsOnProducts"> | boolean
    color?: XOR<ColorScalarRelationFilter, ColorWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ColorsOnProductsOrderByWithRelationInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    color?: ColorOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ColorsOnProductsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    colorId_productId?: ColorsOnProductsColorIdProductIdCompoundUniqueInput
    AND?: ColorsOnProductsWhereInput | ColorsOnProductsWhereInput[]
    OR?: ColorsOnProductsWhereInput[]
    NOT?: ColorsOnProductsWhereInput | ColorsOnProductsWhereInput[]
    colorId?: IntFilter<"ColorsOnProducts"> | number
    productId?: IntFilter<"ColorsOnProducts"> | number
    stock?: BoolFilter<"ColorsOnProducts"> | boolean
    color?: XOR<ColorScalarRelationFilter, ColorWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "colorId_productId">

  export type ColorsOnProductsOrderByWithAggregationInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    _count?: ColorsOnProductsCountOrderByAggregateInput
    _avg?: ColorsOnProductsAvgOrderByAggregateInput
    _max?: ColorsOnProductsMaxOrderByAggregateInput
    _min?: ColorsOnProductsMinOrderByAggregateInput
    _sum?: ColorsOnProductsSumOrderByAggregateInput
  }

  export type ColorsOnProductsScalarWhereWithAggregatesInput = {
    AND?: ColorsOnProductsScalarWhereWithAggregatesInput | ColorsOnProductsScalarWhereWithAggregatesInput[]
    OR?: ColorsOnProductsScalarWhereWithAggregatesInput[]
    NOT?: ColorsOnProductsScalarWhereWithAggregatesInput | ColorsOnProductsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ColorsOnProducts"> | number
    colorId?: IntWithAggregatesFilter<"ColorsOnProducts"> | number
    productId?: IntWithAggregatesFilter<"ColorsOnProducts"> | number
    stock?: BoolWithAggregatesFilter<"ColorsOnProducts"> | boolean
  }

  export type ProductsOnSizesWhereInput = {
    AND?: ProductsOnSizesWhereInput | ProductsOnSizesWhereInput[]
    OR?: ProductsOnSizesWhereInput[]
    NOT?: ProductsOnSizesWhereInput | ProductsOnSizesWhereInput[]
    id?: IntFilter<"ProductsOnSizes"> | number
    sizeId?: IntFilter<"ProductsOnSizes"> | number
    productId?: IntFilter<"ProductsOnSizes"> | number
    stock?: BoolFilter<"ProductsOnSizes"> | boolean
    size?: XOR<SizeScalarRelationFilter, SizeWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ProductsOnSizesOrderByWithRelationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    size?: SizeOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type ProductsOnSizesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    sizeId_productId?: ProductsOnSizesSizeIdProductIdCompoundUniqueInput
    AND?: ProductsOnSizesWhereInput | ProductsOnSizesWhereInput[]
    OR?: ProductsOnSizesWhereInput[]
    NOT?: ProductsOnSizesWhereInput | ProductsOnSizesWhereInput[]
    sizeId?: IntFilter<"ProductsOnSizes"> | number
    productId?: IntFilter<"ProductsOnSizes"> | number
    stock?: BoolFilter<"ProductsOnSizes"> | boolean
    size?: XOR<SizeScalarRelationFilter, SizeWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id" | "sizeId_productId">

  export type ProductsOnSizesOrderByWithAggregationInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
    _count?: ProductsOnSizesCountOrderByAggregateInput
    _avg?: ProductsOnSizesAvgOrderByAggregateInput
    _max?: ProductsOnSizesMaxOrderByAggregateInput
    _min?: ProductsOnSizesMinOrderByAggregateInput
    _sum?: ProductsOnSizesSumOrderByAggregateInput
  }

  export type ProductsOnSizesScalarWhereWithAggregatesInput = {
    AND?: ProductsOnSizesScalarWhereWithAggregatesInput | ProductsOnSizesScalarWhereWithAggregatesInput[]
    OR?: ProductsOnSizesScalarWhereWithAggregatesInput[]
    NOT?: ProductsOnSizesScalarWhereWithAggregatesInput | ProductsOnSizesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductsOnSizes"> | number
    sizeId?: IntWithAggregatesFilter<"ProductsOnSizes"> | number
    productId?: IntWithAggregatesFilter<"ProductsOnSizes"> | number
    stock?: BoolWithAggregatesFilter<"ProductsOnSizes"> | boolean
  }

  export type ImageWhereInput = {
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    id?: IntFilter<"Image"> | number
    image?: StringFilter<"Image"> | string
    productId?: IntFilter<"Image"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type ImageOrderByWithRelationInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
    product?: ProductOrderByWithRelationInput
  }

  export type ImageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ImageWhereInput | ImageWhereInput[]
    OR?: ImageWhereInput[]
    NOT?: ImageWhereInput | ImageWhereInput[]
    image?: StringFilter<"Image"> | string
    productId?: IntFilter<"Image"> | number
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type ImageOrderByWithAggregationInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
    _count?: ImageCountOrderByAggregateInput
    _avg?: ImageAvgOrderByAggregateInput
    _max?: ImageMaxOrderByAggregateInput
    _min?: ImageMinOrderByAggregateInput
    _sum?: ImageSumOrderByAggregateInput
  }

  export type ImageScalarWhereWithAggregatesInput = {
    AND?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    OR?: ImageScalarWhereWithAggregatesInput[]
    NOT?: ImageScalarWhereWithAggregatesInput | ImageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Image"> | number
    image?: StringWithAggregatesFilter<"Image"> | string
    productId?: IntWithAggregatesFilter<"Image"> | number
  }

  export type UserCreateInput = {
    name?: string | null
    phone: string
    password: string
    role?: string
    status?: string
    lastLogin?: Date | string
    error?: number
    profile?: string | null
    randToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name?: string | null
    phone: string
    password: string
    role?: string
    status?: string
    lastLogin?: Date | string
    error?: number
    profile?: string | null
    randToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutUsersInput
  }

  export type UserUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name?: string | null
    phone: string
    password: string
    role?: string
    status?: string
    lastLogin?: Date | string
    error?: number
    profile?: string | null
    randToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateInput = {
    phone: string
    otp: string
    rememberToken: string
    verifyToken?: string | null
    count: number
    error?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUncheckedCreateInput = {
    id?: number
    phone: string
    otp: string
    rememberToken: string
    verifyToken?: string | null
    count: number
    error?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUpdateInput = {
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    rememberToken?: StringFieldUpdateOperationsInput | string
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    error?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    rememberToken?: StringFieldUpdateOperationsInput | string
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    error?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpCreateManyInput = {
    id?: number
    phone: string
    otp: string
    rememberToken: string
    verifyToken?: string | null
    count: number
    error?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OtpUpdateManyMutationInput = {
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    rememberToken?: StringFieldUpdateOperationsInput | string
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    error?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OtpUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    phone?: StringFieldUpdateOperationsInput | string
    otp?: StringFieldUpdateOperationsInput | string
    rememberToken?: StringFieldUpdateOperationsInput | string
    verifyToken?: NullableStringFieldUpdateOperationsInput | string | null
    count?: IntFieldUpdateOperationsInput | number
    error?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    name: string
    image: string
    products?: ProductCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    image: string
    products?: ProductUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products?: ProductUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    products?: ProductUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    image: string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ColorCreateInput = {
    name: string
    bgColor: string
    products?: ColorsOnProductsCreateNestedManyWithoutColorInput
  }

  export type ColorUncheckedCreateInput = {
    id?: number
    name: string
    bgColor: string
    products?: ColorsOnProductsUncheckedCreateNestedManyWithoutColorInput
  }

  export type ColorUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    products?: ColorsOnProductsUpdateManyWithoutColorNestedInput
  }

  export type ColorUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
    products?: ColorsOnProductsUncheckedUpdateManyWithoutColorNestedInput
  }

  export type ColorCreateManyInput = {
    id?: number
    name: string
    bgColor: string
  }

  export type ColorUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
  }

  export type SizeCreateInput = {
    name: string
    products?: ProductsOnSizesCreateNestedManyWithoutSizeInput
  }

  export type SizeUncheckedCreateInput = {
    id?: number
    name: string
    products?: ProductsOnSizesUncheckedCreateNestedManyWithoutSizeInput
  }

  export type SizeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductsOnSizesUpdateManyWithoutSizeNestedInput
  }

  export type SizeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    products?: ProductsOnSizesUncheckedUpdateManyWithoutSizeNestedInput
  }

  export type SizeCreateManyInput = {
    id?: number
    name: string
  }

  export type SizeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductCreateInput = {
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    category: CategoryCreateNestedOneWithoutProductsInput
    colors?: ColorsOnProductsCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesCreateNestedManyWithoutProductInput
    users?: UserCreateNestedManyWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    categoryId: number
    colors?: ColorsOnProductsUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesUncheckedCreateNestedManyWithoutProductInput
    users?: UserUncheckedCreateNestedManyWithoutProductsInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    colors?: ColorsOnProductsUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUpdateManyWithoutProductNestedInput
    users?: UserUpdateManyWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    colors?: ColorsOnProductsUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUncheckedUpdateManyWithoutProductNestedInput
    users?: UserUncheckedUpdateManyWithoutProductsNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    categoryId: number
  }

  export type ProductUpdateManyMutationInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ColorsOnProductsCreateInput = {
    stock?: boolean
    color: ColorCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutColorsInput
  }

  export type ColorsOnProductsUncheckedCreateInput = {
    id?: number
    colorId: number
    productId: number
    stock?: boolean
  }

  export type ColorsOnProductsUpdateInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ColorsOnProductsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorsOnProductsCreateManyInput = {
    id?: number
    colorId: number
    productId: number
    stock?: boolean
  }

  export type ColorsOnProductsUpdateManyMutationInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorsOnProductsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesCreateInput = {
    stock?: boolean
    size: SizeCreateNestedOneWithoutProductsInput
    product: ProductCreateNestedOneWithoutSizesInput
  }

  export type ProductsOnSizesUncheckedCreateInput = {
    id?: number
    sizeId: number
    productId: number
    stock?: boolean
  }

  export type ProductsOnSizesUpdateInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
  }

  export type ProductsOnSizesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesCreateManyInput = {
    id?: number
    sizeId: number
    productId: number
    stock?: boolean
  }

  export type ProductsOnSizesUpdateManyMutationInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ImageCreateInput = {
    image: string
    product: ProductCreateNestedOneWithoutImagesInput
  }

  export type ImageUncheckedCreateInput = {
    id?: number
    image: string
    productId: number
  }

  export type ImageUpdateInput = {
    image?: StringFieldUpdateOperationsInput | string
    product?: ProductUpdateOneRequiredWithoutImagesNestedInput
  }

  export type ImageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type ImageCreateManyInput = {
    id?: number
    image: string
    productId: number
  }

  export type ImageUpdateManyMutationInput = {
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    error?: SortOrder
    profile?: SortOrder
    randToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
    error?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    error?: SortOrder
    profile?: SortOrder
    randToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    role?: SortOrder
    status?: SortOrder
    lastLogin?: SortOrder
    error?: SortOrder
    profile?: SortOrder
    randToken?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
    error?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type OtpCountOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    rememberToken?: SortOrder
    verifyToken?: SortOrder
    count?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpAvgOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    error?: SortOrder
  }

  export type OtpMaxOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    rememberToken?: SortOrder
    verifyToken?: SortOrder
    count?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpMinOrderByAggregateInput = {
    id?: SortOrder
    phone?: SortOrder
    otp?: SortOrder
    rememberToken?: SortOrder
    verifyToken?: SortOrder
    count?: SortOrder
    error?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OtpSumOrderByAggregateInput = {
    id?: SortOrder
    count?: SortOrder
    error?: SortOrder
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    image?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColorsOnProductsListRelationFilter = {
    every?: ColorsOnProductsWhereInput
    some?: ColorsOnProductsWhereInput
    none?: ColorsOnProductsWhereInput
  }

  export type ColorsOnProductsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ColorCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bgColor?: SortOrder
  }

  export type ColorAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ColorMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bgColor?: SortOrder
  }

  export type ColorMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bgColor?: SortOrder
  }

  export type ColorSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ProductsOnSizesListRelationFilter = {
    every?: ProductsOnSizesWhereInput
    some?: ProductsOnSizesWhereInput
    none?: ProductsOnSizesWhereInput
  }

  export type ProductsOnSizesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SizeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SizeAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type SizeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SizeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type SizeSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type ImageListRelationFilter = {
    every?: ImageWhereInput
    some?: ImageWhereInput
    none?: ImageWhereInput
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ImageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    brand?: SortOrder
    title?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    image?: SortOrder
    description?: SortOrder
    categoryId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    star?: SortOrder
    quantity?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    categoryId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ColorScalarRelationFilter = {
    is?: ColorWhereInput
    isNot?: ColorWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ColorsOnProductsColorIdProductIdCompoundUniqueInput = {
    colorId: number
    productId: number
  }

  export type ColorsOnProductsCountOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
  }

  export type ColorsOnProductsAvgOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
  }

  export type ColorsOnProductsMaxOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
  }

  export type ColorsOnProductsMinOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
  }

  export type ColorsOnProductsSumOrderByAggregateInput = {
    id?: SortOrder
    colorId?: SortOrder
    productId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type SizeScalarRelationFilter = {
    is?: SizeWhereInput
    isNot?: SizeWhereInput
  }

  export type ProductsOnSizesSizeIdProductIdCompoundUniqueInput = {
    sizeId: number
    productId: number
  }

  export type ProductsOnSizesCountOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
  }

  export type ProductsOnSizesAvgOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
  }

  export type ProductsOnSizesMaxOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
  }

  export type ProductsOnSizesMinOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
    stock?: SortOrder
  }

  export type ProductsOnSizesSumOrderByAggregateInput = {
    id?: SortOrder
    sizeId?: SortOrder
    productId?: SortOrder
  }

  export type ImageCountOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
  }

  export type ImageAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ImageMaxOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
  }

  export type ImageMinOrderByAggregateInput = {
    id?: SortOrder
    image?: SortOrder
    productId?: SortOrder
  }

  export type ImageSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
  }

  export type ProductCreateNestedManyWithoutUsersInput = {
    create?: XOR<ProductCreateWithoutUsersInput, ProductUncheckedCreateWithoutUsersInput> | ProductCreateWithoutUsersInput[] | ProductUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUsersInput | ProductCreateOrConnectWithoutUsersInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ProductCreateWithoutUsersInput, ProductUncheckedCreateWithoutUsersInput> | ProductCreateWithoutUsersInput[] | ProductUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUsersInput | ProductCreateOrConnectWithoutUsersInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ProductCreateWithoutUsersInput, ProductUncheckedCreateWithoutUsersInput> | ProductCreateWithoutUsersInput[] | ProductUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUsersInput | ProductCreateOrConnectWithoutUsersInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUsersInput | ProductUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUsersInput | ProductUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUsersInput | ProductUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ProductCreateWithoutUsersInput, ProductUncheckedCreateWithoutUsersInput> | ProductCreateWithoutUsersInput[] | ProductUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutUsersInput | ProductCreateOrConnectWithoutUsersInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutUsersInput | ProductUpsertWithWhereUniqueWithoutUsersInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutUsersInput | ProductUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutUsersInput | ProductUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput> | ProductCreateWithoutCategoryInput[] | ProductUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoryInput | ProductCreateOrConnectWithoutCategoryInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoryInput | ProductUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ProductCreateManyCategoryInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoryInput | ProductUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoryInput | ProductUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ColorsOnProductsCreateNestedManyWithoutColorInput = {
    create?: XOR<ColorsOnProductsCreateWithoutColorInput, ColorsOnProductsUncheckedCreateWithoutColorInput> | ColorsOnProductsCreateWithoutColorInput[] | ColorsOnProductsUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutColorInput | ColorsOnProductsCreateOrConnectWithoutColorInput[]
    createMany?: ColorsOnProductsCreateManyColorInputEnvelope
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
  }

  export type ColorsOnProductsUncheckedCreateNestedManyWithoutColorInput = {
    create?: XOR<ColorsOnProductsCreateWithoutColorInput, ColorsOnProductsUncheckedCreateWithoutColorInput> | ColorsOnProductsCreateWithoutColorInput[] | ColorsOnProductsUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutColorInput | ColorsOnProductsCreateOrConnectWithoutColorInput[]
    createMany?: ColorsOnProductsCreateManyColorInputEnvelope
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
  }

  export type ColorsOnProductsUpdateManyWithoutColorNestedInput = {
    create?: XOR<ColorsOnProductsCreateWithoutColorInput, ColorsOnProductsUncheckedCreateWithoutColorInput> | ColorsOnProductsCreateWithoutColorInput[] | ColorsOnProductsUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutColorInput | ColorsOnProductsCreateOrConnectWithoutColorInput[]
    upsert?: ColorsOnProductsUpsertWithWhereUniqueWithoutColorInput | ColorsOnProductsUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ColorsOnProductsCreateManyColorInputEnvelope
    set?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    disconnect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    delete?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    update?: ColorsOnProductsUpdateWithWhereUniqueWithoutColorInput | ColorsOnProductsUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ColorsOnProductsUpdateManyWithWhereWithoutColorInput | ColorsOnProductsUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ColorsOnProductsScalarWhereInput | ColorsOnProductsScalarWhereInput[]
  }

  export type ColorsOnProductsUncheckedUpdateManyWithoutColorNestedInput = {
    create?: XOR<ColorsOnProductsCreateWithoutColorInput, ColorsOnProductsUncheckedCreateWithoutColorInput> | ColorsOnProductsCreateWithoutColorInput[] | ColorsOnProductsUncheckedCreateWithoutColorInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutColorInput | ColorsOnProductsCreateOrConnectWithoutColorInput[]
    upsert?: ColorsOnProductsUpsertWithWhereUniqueWithoutColorInput | ColorsOnProductsUpsertWithWhereUniqueWithoutColorInput[]
    createMany?: ColorsOnProductsCreateManyColorInputEnvelope
    set?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    disconnect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    delete?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    update?: ColorsOnProductsUpdateWithWhereUniqueWithoutColorInput | ColorsOnProductsUpdateWithWhereUniqueWithoutColorInput[]
    updateMany?: ColorsOnProductsUpdateManyWithWhereWithoutColorInput | ColorsOnProductsUpdateManyWithWhereWithoutColorInput[]
    deleteMany?: ColorsOnProductsScalarWhereInput | ColorsOnProductsScalarWhereInput[]
  }

  export type ProductsOnSizesCreateNestedManyWithoutSizeInput = {
    create?: XOR<ProductsOnSizesCreateWithoutSizeInput, ProductsOnSizesUncheckedCreateWithoutSizeInput> | ProductsOnSizesCreateWithoutSizeInput[] | ProductsOnSizesUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutSizeInput | ProductsOnSizesCreateOrConnectWithoutSizeInput[]
    createMany?: ProductsOnSizesCreateManySizeInputEnvelope
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
  }

  export type ProductsOnSizesUncheckedCreateNestedManyWithoutSizeInput = {
    create?: XOR<ProductsOnSizesCreateWithoutSizeInput, ProductsOnSizesUncheckedCreateWithoutSizeInput> | ProductsOnSizesCreateWithoutSizeInput[] | ProductsOnSizesUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutSizeInput | ProductsOnSizesCreateOrConnectWithoutSizeInput[]
    createMany?: ProductsOnSizesCreateManySizeInputEnvelope
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
  }

  export type ProductsOnSizesUpdateManyWithoutSizeNestedInput = {
    create?: XOR<ProductsOnSizesCreateWithoutSizeInput, ProductsOnSizesUncheckedCreateWithoutSizeInput> | ProductsOnSizesCreateWithoutSizeInput[] | ProductsOnSizesUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutSizeInput | ProductsOnSizesCreateOrConnectWithoutSizeInput[]
    upsert?: ProductsOnSizesUpsertWithWhereUniqueWithoutSizeInput | ProductsOnSizesUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: ProductsOnSizesCreateManySizeInputEnvelope
    set?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    disconnect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    delete?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    update?: ProductsOnSizesUpdateWithWhereUniqueWithoutSizeInput | ProductsOnSizesUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: ProductsOnSizesUpdateManyWithWhereWithoutSizeInput | ProductsOnSizesUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: ProductsOnSizesScalarWhereInput | ProductsOnSizesScalarWhereInput[]
  }

  export type ProductsOnSizesUncheckedUpdateManyWithoutSizeNestedInput = {
    create?: XOR<ProductsOnSizesCreateWithoutSizeInput, ProductsOnSizesUncheckedCreateWithoutSizeInput> | ProductsOnSizesCreateWithoutSizeInput[] | ProductsOnSizesUncheckedCreateWithoutSizeInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutSizeInput | ProductsOnSizesCreateOrConnectWithoutSizeInput[]
    upsert?: ProductsOnSizesUpsertWithWhereUniqueWithoutSizeInput | ProductsOnSizesUpsertWithWhereUniqueWithoutSizeInput[]
    createMany?: ProductsOnSizesCreateManySizeInputEnvelope
    set?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    disconnect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    delete?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    update?: ProductsOnSizesUpdateWithWhereUniqueWithoutSizeInput | ProductsOnSizesUpdateWithWhereUniqueWithoutSizeInput[]
    updateMany?: ProductsOnSizesUpdateManyWithWhereWithoutSizeInput | ProductsOnSizesUpdateManyWithWhereWithoutSizeInput[]
    deleteMany?: ProductsOnSizesScalarWhereInput | ProductsOnSizesScalarWhereInput[]
  }

  export type CategoryCreateNestedOneWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    connect?: CategoryWhereUniqueInput
  }

  export type ColorsOnProductsCreateNestedManyWithoutProductInput = {
    create?: XOR<ColorsOnProductsCreateWithoutProductInput, ColorsOnProductsUncheckedCreateWithoutProductInput> | ColorsOnProductsCreateWithoutProductInput[] | ColorsOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutProductInput | ColorsOnProductsCreateOrConnectWithoutProductInput[]
    createMany?: ColorsOnProductsCreateManyProductInputEnvelope
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
  }

  export type ProductsOnSizesCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsOnSizesCreateWithoutProductInput, ProductsOnSizesUncheckedCreateWithoutProductInput> | ProductsOnSizesCreateWithoutProductInput[] | ProductsOnSizesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutProductInput | ProductsOnSizesCreateOrConnectWithoutProductInput[]
    createMany?: ProductsOnSizesCreateManyProductInputEnvelope
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput> | UserCreateWithoutProductsInput[] | UserUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput | UserCreateOrConnectWithoutProductsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ImageCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type ColorsOnProductsUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ColorsOnProductsCreateWithoutProductInput, ColorsOnProductsUncheckedCreateWithoutProductInput> | ColorsOnProductsCreateWithoutProductInput[] | ColorsOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutProductInput | ColorsOnProductsCreateOrConnectWithoutProductInput[]
    createMany?: ColorsOnProductsCreateManyProductInputEnvelope
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
  }

  export type ProductsOnSizesUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductsOnSizesCreateWithoutProductInput, ProductsOnSizesUncheckedCreateWithoutProductInput> | ProductsOnSizesCreateWithoutProductInput[] | ProductsOnSizesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutProductInput | ProductsOnSizesCreateOrConnectWithoutProductInput[]
    createMany?: ProductsOnSizesCreateManyProductInputEnvelope
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput> | UserCreateWithoutProductsInput[] | UserUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput | UserCreateOrConnectWithoutProductsInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ImageUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type CategoryUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput
    upsert?: CategoryUpsertWithoutProductsInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutProductsInput, CategoryUpdateWithoutProductsInput>, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type ColorsOnProductsUpdateManyWithoutProductNestedInput = {
    create?: XOR<ColorsOnProductsCreateWithoutProductInput, ColorsOnProductsUncheckedCreateWithoutProductInput> | ColorsOnProductsCreateWithoutProductInput[] | ColorsOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutProductInput | ColorsOnProductsCreateOrConnectWithoutProductInput[]
    upsert?: ColorsOnProductsUpsertWithWhereUniqueWithoutProductInput | ColorsOnProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ColorsOnProductsCreateManyProductInputEnvelope
    set?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    disconnect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    delete?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    update?: ColorsOnProductsUpdateWithWhereUniqueWithoutProductInput | ColorsOnProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ColorsOnProductsUpdateManyWithWhereWithoutProductInput | ColorsOnProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ColorsOnProductsScalarWhereInput | ColorsOnProductsScalarWhereInput[]
  }

  export type ProductsOnSizesUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsOnSizesCreateWithoutProductInput, ProductsOnSizesUncheckedCreateWithoutProductInput> | ProductsOnSizesCreateWithoutProductInput[] | ProductsOnSizesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutProductInput | ProductsOnSizesCreateOrConnectWithoutProductInput[]
    upsert?: ProductsOnSizesUpsertWithWhereUniqueWithoutProductInput | ProductsOnSizesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsOnSizesCreateManyProductInputEnvelope
    set?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    disconnect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    delete?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    update?: ProductsOnSizesUpdateWithWhereUniqueWithoutProductInput | ProductsOnSizesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsOnSizesUpdateManyWithWhereWithoutProductInput | ProductsOnSizesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsOnSizesScalarWhereInput | ProductsOnSizesScalarWhereInput[]
  }

  export type UserUpdateManyWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput> | UserCreateWithoutProductsInput[] | UserUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput | UserCreateOrConnectWithoutProductsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProductsInput | UserUpsertWithWhereUniqueWithoutProductsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProductsInput | UserUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProductsInput | UserUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ImageUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ColorsOnProductsUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ColorsOnProductsCreateWithoutProductInput, ColorsOnProductsUncheckedCreateWithoutProductInput> | ColorsOnProductsCreateWithoutProductInput[] | ColorsOnProductsUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ColorsOnProductsCreateOrConnectWithoutProductInput | ColorsOnProductsCreateOrConnectWithoutProductInput[]
    upsert?: ColorsOnProductsUpsertWithWhereUniqueWithoutProductInput | ColorsOnProductsUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ColorsOnProductsCreateManyProductInputEnvelope
    set?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    disconnect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    delete?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    connect?: ColorsOnProductsWhereUniqueInput | ColorsOnProductsWhereUniqueInput[]
    update?: ColorsOnProductsUpdateWithWhereUniqueWithoutProductInput | ColorsOnProductsUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ColorsOnProductsUpdateManyWithWhereWithoutProductInput | ColorsOnProductsUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ColorsOnProductsScalarWhereInput | ColorsOnProductsScalarWhereInput[]
  }

  export type ProductsOnSizesUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductsOnSizesCreateWithoutProductInput, ProductsOnSizesUncheckedCreateWithoutProductInput> | ProductsOnSizesCreateWithoutProductInput[] | ProductsOnSizesUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductsOnSizesCreateOrConnectWithoutProductInput | ProductsOnSizesCreateOrConnectWithoutProductInput[]
    upsert?: ProductsOnSizesUpsertWithWhereUniqueWithoutProductInput | ProductsOnSizesUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductsOnSizesCreateManyProductInputEnvelope
    set?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    disconnect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    delete?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    connect?: ProductsOnSizesWhereUniqueInput | ProductsOnSizesWhereUniqueInput[]
    update?: ProductsOnSizesUpdateWithWhereUniqueWithoutProductInput | ProductsOnSizesUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductsOnSizesUpdateManyWithWhereWithoutProductInput | ProductsOnSizesUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductsOnSizesScalarWhereInput | ProductsOnSizesScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput> | UserCreateWithoutProductsInput[] | UserUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: UserCreateOrConnectWithoutProductsInput | UserCreateOrConnectWithoutProductsInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutProductsInput | UserUpsertWithWhereUniqueWithoutProductsInput[]
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutProductsInput | UserUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: UserUpdateManyWithWhereWithoutProductsInput | UserUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ImageUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput> | ImageCreateWithoutProductInput[] | ImageUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ImageCreateOrConnectWithoutProductInput | ImageCreateOrConnectWithoutProductInput[]
    upsert?: ImageUpsertWithWhereUniqueWithoutProductInput | ImageUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ImageCreateManyProductInputEnvelope
    set?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    disconnect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    delete?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    connect?: ImageWhereUniqueInput | ImageWhereUniqueInput[]
    update?: ImageUpdateWithWhereUniqueWithoutProductInput | ImageUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ImageUpdateManyWithWhereWithoutProductInput | ImageUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ImageScalarWhereInput | ImageScalarWhereInput[]
  }

  export type ColorCreateNestedOneWithoutProductsInput = {
    create?: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput
    connect?: ColorWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutColorsInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    connect?: ProductWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ColorUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ColorCreateOrConnectWithoutProductsInput
    upsert?: ColorUpsertWithoutProductsInput
    connect?: ColorWhereUniqueInput
    update?: XOR<XOR<ColorUpdateToOneWithWhereWithoutProductsInput, ColorUpdateWithoutProductsInput>, ColorUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutColorsNestedInput = {
    create?: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutColorsInput
    upsert?: ProductUpsertWithoutColorsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutColorsInput, ProductUpdateWithoutColorsInput>, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type SizeCreateNestedOneWithoutProductsInput = {
    create?: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput
    connect?: SizeWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutSizesInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    connect?: ProductWhereUniqueInput
  }

  export type SizeUpdateOneRequiredWithoutProductsNestedInput = {
    create?: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    connectOrCreate?: SizeCreateOrConnectWithoutProductsInput
    upsert?: SizeUpsertWithoutProductsInput
    connect?: SizeWhereUniqueInput
    update?: XOR<XOR<SizeUpdateToOneWithWhereWithoutProductsInput, SizeUpdateWithoutProductsInput>, SizeUncheckedUpdateWithoutProductsInput>
  }

  export type ProductUpdateOneRequiredWithoutSizesNestedInput = {
    create?: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSizesInput
    upsert?: ProductUpsertWithoutSizesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSizesInput, ProductUpdateWithoutSizesInput>, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductCreateNestedOneWithoutImagesInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutImagesNestedInput = {
    create?: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutImagesInput
    upsert?: ProductUpsertWithoutImagesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutImagesInput, ProductUpdateWithoutImagesInput>, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ProductCreateWithoutUsersInput = {
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    category: CategoryCreateNestedOneWithoutProductsInput
    colors?: ColorsOnProductsCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesCreateNestedManyWithoutProductInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUsersInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    categoryId: number
    colors?: ColorsOnProductsUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesUncheckedCreateNestedManyWithoutProductInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUsersInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUsersInput, ProductUncheckedCreateWithoutUsersInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutUsersInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutUsersInput, ProductUncheckedUpdateWithoutUsersInput>
    create: XOR<ProductCreateWithoutUsersInput, ProductUncheckedCreateWithoutUsersInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutUsersInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutUsersInput, ProductUncheckedUpdateWithoutUsersInput>
  }

  export type ProductUpdateManyWithWhereWithoutUsersInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutUsersInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    brand?: StringFilter<"Product"> | string
    title?: StringFilter<"Product"> | string
    star?: FloatFilter<"Product"> | number
    quantity?: IntFilter<"Product"> | number
    price?: FloatFilter<"Product"> | number
    discount?: FloatNullableFilter<"Product"> | number | null
    image?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    categoryId?: IntFilter<"Product"> | number
  }

  export type ProductCreateWithoutCategoryInput = {
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    colors?: ColorsOnProductsCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesCreateNestedManyWithoutProductInput
    users?: UserCreateNestedManyWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoryInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    colors?: ColorsOnProductsUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesUncheckedCreateNestedManyWithoutProductInput
    users?: UserUncheckedCreateNestedManyWithoutProductsInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductCreateManyCategoryInputEnvelope = {
    data: ProductCreateManyCategoryInput | ProductCreateManyCategoryInput[]
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
    create: XOR<ProductCreateWithoutCategoryInput, ProductUncheckedCreateWithoutCategoryInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoryInput, ProductUncheckedUpdateWithoutCategoryInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoryInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ColorsOnProductsCreateWithoutColorInput = {
    stock?: boolean
    product: ProductCreateNestedOneWithoutColorsInput
  }

  export type ColorsOnProductsUncheckedCreateWithoutColorInput = {
    id?: number
    productId: number
    stock?: boolean
  }

  export type ColorsOnProductsCreateOrConnectWithoutColorInput = {
    where: ColorsOnProductsWhereUniqueInput
    create: XOR<ColorsOnProductsCreateWithoutColorInput, ColorsOnProductsUncheckedCreateWithoutColorInput>
  }

  export type ColorsOnProductsCreateManyColorInputEnvelope = {
    data: ColorsOnProductsCreateManyColorInput | ColorsOnProductsCreateManyColorInput[]
  }

  export type ColorsOnProductsUpsertWithWhereUniqueWithoutColorInput = {
    where: ColorsOnProductsWhereUniqueInput
    update: XOR<ColorsOnProductsUpdateWithoutColorInput, ColorsOnProductsUncheckedUpdateWithoutColorInput>
    create: XOR<ColorsOnProductsCreateWithoutColorInput, ColorsOnProductsUncheckedCreateWithoutColorInput>
  }

  export type ColorsOnProductsUpdateWithWhereUniqueWithoutColorInput = {
    where: ColorsOnProductsWhereUniqueInput
    data: XOR<ColorsOnProductsUpdateWithoutColorInput, ColorsOnProductsUncheckedUpdateWithoutColorInput>
  }

  export type ColorsOnProductsUpdateManyWithWhereWithoutColorInput = {
    where: ColorsOnProductsScalarWhereInput
    data: XOR<ColorsOnProductsUpdateManyMutationInput, ColorsOnProductsUncheckedUpdateManyWithoutColorInput>
  }

  export type ColorsOnProductsScalarWhereInput = {
    AND?: ColorsOnProductsScalarWhereInput | ColorsOnProductsScalarWhereInput[]
    OR?: ColorsOnProductsScalarWhereInput[]
    NOT?: ColorsOnProductsScalarWhereInput | ColorsOnProductsScalarWhereInput[]
    id?: IntFilter<"ColorsOnProducts"> | number
    colorId?: IntFilter<"ColorsOnProducts"> | number
    productId?: IntFilter<"ColorsOnProducts"> | number
    stock?: BoolFilter<"ColorsOnProducts"> | boolean
  }

  export type ProductsOnSizesCreateWithoutSizeInput = {
    stock?: boolean
    product: ProductCreateNestedOneWithoutSizesInput
  }

  export type ProductsOnSizesUncheckedCreateWithoutSizeInput = {
    id?: number
    productId: number
    stock?: boolean
  }

  export type ProductsOnSizesCreateOrConnectWithoutSizeInput = {
    where: ProductsOnSizesWhereUniqueInput
    create: XOR<ProductsOnSizesCreateWithoutSizeInput, ProductsOnSizesUncheckedCreateWithoutSizeInput>
  }

  export type ProductsOnSizesCreateManySizeInputEnvelope = {
    data: ProductsOnSizesCreateManySizeInput | ProductsOnSizesCreateManySizeInput[]
  }

  export type ProductsOnSizesUpsertWithWhereUniqueWithoutSizeInput = {
    where: ProductsOnSizesWhereUniqueInput
    update: XOR<ProductsOnSizesUpdateWithoutSizeInput, ProductsOnSizesUncheckedUpdateWithoutSizeInput>
    create: XOR<ProductsOnSizesCreateWithoutSizeInput, ProductsOnSizesUncheckedCreateWithoutSizeInput>
  }

  export type ProductsOnSizesUpdateWithWhereUniqueWithoutSizeInput = {
    where: ProductsOnSizesWhereUniqueInput
    data: XOR<ProductsOnSizesUpdateWithoutSizeInput, ProductsOnSizesUncheckedUpdateWithoutSizeInput>
  }

  export type ProductsOnSizesUpdateManyWithWhereWithoutSizeInput = {
    where: ProductsOnSizesScalarWhereInput
    data: XOR<ProductsOnSizesUpdateManyMutationInput, ProductsOnSizesUncheckedUpdateManyWithoutSizeInput>
  }

  export type ProductsOnSizesScalarWhereInput = {
    AND?: ProductsOnSizesScalarWhereInput | ProductsOnSizesScalarWhereInput[]
    OR?: ProductsOnSizesScalarWhereInput[]
    NOT?: ProductsOnSizesScalarWhereInput | ProductsOnSizesScalarWhereInput[]
    id?: IntFilter<"ProductsOnSizes"> | number
    sizeId?: IntFilter<"ProductsOnSizes"> | number
    productId?: IntFilter<"ProductsOnSizes"> | number
    stock?: BoolFilter<"ProductsOnSizes"> | boolean
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    image: string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    image: string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type ColorsOnProductsCreateWithoutProductInput = {
    stock?: boolean
    color: ColorCreateNestedOneWithoutProductsInput
  }

  export type ColorsOnProductsUncheckedCreateWithoutProductInput = {
    id?: number
    colorId: number
    stock?: boolean
  }

  export type ColorsOnProductsCreateOrConnectWithoutProductInput = {
    where: ColorsOnProductsWhereUniqueInput
    create: XOR<ColorsOnProductsCreateWithoutProductInput, ColorsOnProductsUncheckedCreateWithoutProductInput>
  }

  export type ColorsOnProductsCreateManyProductInputEnvelope = {
    data: ColorsOnProductsCreateManyProductInput | ColorsOnProductsCreateManyProductInput[]
  }

  export type ProductsOnSizesCreateWithoutProductInput = {
    stock?: boolean
    size: SizeCreateNestedOneWithoutProductsInput
  }

  export type ProductsOnSizesUncheckedCreateWithoutProductInput = {
    id?: number
    sizeId: number
    stock?: boolean
  }

  export type ProductsOnSizesCreateOrConnectWithoutProductInput = {
    where: ProductsOnSizesWhereUniqueInput
    create: XOR<ProductsOnSizesCreateWithoutProductInput, ProductsOnSizesUncheckedCreateWithoutProductInput>
  }

  export type ProductsOnSizesCreateManyProductInputEnvelope = {
    data: ProductsOnSizesCreateManyProductInput | ProductsOnSizesCreateManyProductInput[]
  }

  export type UserCreateWithoutProductsInput = {
    name?: string | null
    phone: string
    password: string
    role?: string
    status?: string
    lastLogin?: Date | string
    error?: number
    profile?: string | null
    randToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutProductsInput = {
    id?: number
    name?: string | null
    phone: string
    password: string
    role?: string
    status?: string
    lastLogin?: Date | string
    error?: number
    profile?: string | null
    randToken: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutProductsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type ImageCreateWithoutProductInput = {
    image: string
  }

  export type ImageUncheckedCreateWithoutProductInput = {
    id?: number
    image: string
  }

  export type ImageCreateOrConnectWithoutProductInput = {
    where: ImageWhereUniqueInput
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageCreateManyProductInputEnvelope = {
    data: ImageCreateManyProductInput | ImageCreateManyProductInput[]
  }

  export type CategoryUpsertWithoutProductsInput = {
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutProductsInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ColorsOnProductsUpsertWithWhereUniqueWithoutProductInput = {
    where: ColorsOnProductsWhereUniqueInput
    update: XOR<ColorsOnProductsUpdateWithoutProductInput, ColorsOnProductsUncheckedUpdateWithoutProductInput>
    create: XOR<ColorsOnProductsCreateWithoutProductInput, ColorsOnProductsUncheckedCreateWithoutProductInput>
  }

  export type ColorsOnProductsUpdateWithWhereUniqueWithoutProductInput = {
    where: ColorsOnProductsWhereUniqueInput
    data: XOR<ColorsOnProductsUpdateWithoutProductInput, ColorsOnProductsUncheckedUpdateWithoutProductInput>
  }

  export type ColorsOnProductsUpdateManyWithWhereWithoutProductInput = {
    where: ColorsOnProductsScalarWhereInput
    data: XOR<ColorsOnProductsUpdateManyMutationInput, ColorsOnProductsUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductsOnSizesUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductsOnSizesWhereUniqueInput
    update: XOR<ProductsOnSizesUpdateWithoutProductInput, ProductsOnSizesUncheckedUpdateWithoutProductInput>
    create: XOR<ProductsOnSizesCreateWithoutProductInput, ProductsOnSizesUncheckedCreateWithoutProductInput>
  }

  export type ProductsOnSizesUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductsOnSizesWhereUniqueInput
    data: XOR<ProductsOnSizesUpdateWithoutProductInput, ProductsOnSizesUncheckedUpdateWithoutProductInput>
  }

  export type ProductsOnSizesUpdateManyWithWhereWithoutProductInput = {
    where: ProductsOnSizesScalarWhereInput
    data: XOR<ProductsOnSizesUpdateManyMutationInput, ProductsOnSizesUncheckedUpdateManyWithoutProductInput>
  }

  export type UserUpsertWithWhereUniqueWithoutProductsInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
    create: XOR<UserCreateWithoutProductsInput, UserUncheckedCreateWithoutProductsInput>
  }

  export type UserUpdateWithWhereUniqueWithoutProductsInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutProductsInput, UserUncheckedUpdateWithoutProductsInput>
  }

  export type UserUpdateManyWithWhereWithoutProductsInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutProductsInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringNullableFilter<"User"> | string | null
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    status?: StringFilter<"User"> | string
    lastLogin?: DateTimeFilter<"User"> | Date | string
    error?: IntFilter<"User"> | number
    profile?: StringNullableFilter<"User"> | string | null
    randToken?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type ImageUpsertWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    update: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
    create: XOR<ImageCreateWithoutProductInput, ImageUncheckedCreateWithoutProductInput>
  }

  export type ImageUpdateWithWhereUniqueWithoutProductInput = {
    where: ImageWhereUniqueInput
    data: XOR<ImageUpdateWithoutProductInput, ImageUncheckedUpdateWithoutProductInput>
  }

  export type ImageUpdateManyWithWhereWithoutProductInput = {
    where: ImageScalarWhereInput
    data: XOR<ImageUpdateManyMutationInput, ImageUncheckedUpdateManyWithoutProductInput>
  }

  export type ImageScalarWhereInput = {
    AND?: ImageScalarWhereInput | ImageScalarWhereInput[]
    OR?: ImageScalarWhereInput[]
    NOT?: ImageScalarWhereInput | ImageScalarWhereInput[]
    id?: IntFilter<"Image"> | number
    image?: StringFilter<"Image"> | string
    productId?: IntFilter<"Image"> | number
  }

  export type ColorCreateWithoutProductsInput = {
    name: string
    bgColor: string
  }

  export type ColorUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    bgColor: string
  }

  export type ColorCreateOrConnectWithoutProductsInput = {
    where: ColorWhereUniqueInput
    create: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutColorsInput = {
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    category: CategoryCreateNestedOneWithoutProductsInput
    sizes?: ProductsOnSizesCreateNestedManyWithoutProductInput
    users?: UserCreateNestedManyWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutColorsInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    categoryId: number
    sizes?: ProductsOnSizesUncheckedCreateNestedManyWithoutProductInput
    users?: UserUncheckedCreateNestedManyWithoutProductsInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutColorsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
  }

  export type ColorUpsertWithoutProductsInput = {
    update: XOR<ColorUpdateWithoutProductsInput, ColorUncheckedUpdateWithoutProductsInput>
    create: XOR<ColorCreateWithoutProductsInput, ColorUncheckedCreateWithoutProductsInput>
    where?: ColorWhereInput
  }

  export type ColorUpdateToOneWithWhereWithoutProductsInput = {
    where?: ColorWhereInput
    data: XOR<ColorUpdateWithoutProductsInput, ColorUncheckedUpdateWithoutProductsInput>
  }

  export type ColorUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
  }

  export type ColorUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bgColor?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutColorsInput = {
    update: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
    create: XOR<ProductCreateWithoutColorsInput, ProductUncheckedCreateWithoutColorsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutColorsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutColorsInput, ProductUncheckedUpdateWithoutColorsInput>
  }

  export type ProductUpdateWithoutColorsInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    sizes?: ProductsOnSizesUpdateManyWithoutProductNestedInput
    users?: UserUpdateManyWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutColorsInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    sizes?: ProductsOnSizesUncheckedUpdateManyWithoutProductNestedInput
    users?: UserUncheckedUpdateManyWithoutProductsNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type SizeCreateWithoutProductsInput = {
    name: string
  }

  export type SizeUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
  }

  export type SizeCreateOrConnectWithoutProductsInput = {
    where: SizeWhereUniqueInput
    create: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
  }

  export type ProductCreateWithoutSizesInput = {
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    category: CategoryCreateNestedOneWithoutProductsInput
    colors?: ColorsOnProductsCreateNestedManyWithoutProductInput
    users?: UserCreateNestedManyWithoutProductsInput
    images?: ImageCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSizesInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    categoryId: number
    colors?: ColorsOnProductsUncheckedCreateNestedManyWithoutProductInput
    users?: UserUncheckedCreateNestedManyWithoutProductsInput
    images?: ImageUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSizesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
  }

  export type SizeUpsertWithoutProductsInput = {
    update: XOR<SizeUpdateWithoutProductsInput, SizeUncheckedUpdateWithoutProductsInput>
    create: XOR<SizeCreateWithoutProductsInput, SizeUncheckedCreateWithoutProductsInput>
    where?: SizeWhereInput
  }

  export type SizeUpdateToOneWithWhereWithoutProductsInput = {
    where?: SizeWhereInput
    data: XOR<SizeUpdateWithoutProductsInput, SizeUncheckedUpdateWithoutProductsInput>
  }

  export type SizeUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SizeUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ProductUpsertWithoutSizesInput = {
    update: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
    create: XOR<ProductCreateWithoutSizesInput, ProductUncheckedCreateWithoutSizesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSizesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSizesInput, ProductUncheckedUpdateWithoutSizesInput>
  }

  export type ProductUpdateWithoutSizesInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    colors?: ColorsOnProductsUpdateManyWithoutProductNestedInput
    users?: UserUpdateManyWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSizesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    colors?: ColorsOnProductsUncheckedUpdateManyWithoutProductNestedInput
    users?: UserUncheckedUpdateManyWithoutProductsNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateWithoutImagesInput = {
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    category: CategoryCreateNestedOneWithoutProductsInput
    colors?: ColorsOnProductsCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesCreateNestedManyWithoutProductInput
    users?: UserCreateNestedManyWithoutProductsInput
  }

  export type ProductUncheckedCreateWithoutImagesInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
    categoryId: number
    colors?: ColorsOnProductsUncheckedCreateNestedManyWithoutProductInput
    sizes?: ProductsOnSizesUncheckedCreateNestedManyWithoutProductInput
    users?: UserUncheckedCreateNestedManyWithoutProductsInput
  }

  export type ProductCreateOrConnectWithoutImagesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
  }

  export type ProductUpsertWithoutImagesInput = {
    update: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
    create: XOR<ProductCreateWithoutImagesInput, ProductUncheckedCreateWithoutImagesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutImagesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutImagesInput, ProductUncheckedUpdateWithoutImagesInput>
  }

  export type ProductUpdateWithoutImagesInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    colors?: ColorsOnProductsUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUpdateManyWithoutProductNestedInput
    users?: UserUpdateManyWithoutProductsNestedInput
  }

  export type ProductUncheckedUpdateWithoutImagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    colors?: ColorsOnProductsUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUncheckedUpdateManyWithoutProductNestedInput
    users?: UserUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type ProductUpdateWithoutUsersInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: CategoryUpdateOneRequiredWithoutProductsNestedInput
    colors?: ColorsOnProductsUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUpdateManyWithoutProductNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
    colors?: ColorsOnProductsUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUncheckedUpdateManyWithoutProductNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    categoryId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductCreateManyCategoryInput = {
    id?: number
    brand: string
    title: string
    star: number
    quantity: number
    price: number
    discount?: number | null
    image: string
    description: string
  }

  export type ProductUpdateWithoutCategoryInput = {
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    colors?: ColorsOnProductsUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUpdateManyWithoutProductNestedInput
    users?: UserUpdateManyWithoutProductsNestedInput
    images?: ImageUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    colors?: ColorsOnProductsUncheckedUpdateManyWithoutProductNestedInput
    sizes?: ProductsOnSizesUncheckedUpdateManyWithoutProductNestedInput
    users?: UserUncheckedUpdateManyWithoutProductsNestedInput
    images?: ImageUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    brand?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    star?: FloatFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    price?: FloatFieldUpdateOperationsInput | number
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    image?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type ColorsOnProductsCreateManyColorInput = {
    id?: number
    productId: number
    stock?: boolean
  }

  export type ColorsOnProductsUpdateWithoutColorInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutColorsNestedInput
  }

  export type ColorsOnProductsUncheckedUpdateWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorsOnProductsUncheckedUpdateManyWithoutColorInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesCreateManySizeInput = {
    id?: number
    productId: number
    stock?: boolean
  }

  export type ProductsOnSizesUpdateWithoutSizeInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
    product?: ProductUpdateOneRequiredWithoutSizesNestedInput
  }

  export type ProductsOnSizesUncheckedUpdateWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesUncheckedUpdateManyWithoutSizeInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorsOnProductsCreateManyProductInput = {
    id?: number
    colorId: number
    stock?: boolean
  }

  export type ProductsOnSizesCreateManyProductInput = {
    id?: number
    sizeId: number
    stock?: boolean
  }

  export type ImageCreateManyProductInput = {
    id?: number
    image: string
  }

  export type ColorsOnProductsUpdateWithoutProductInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
    color?: ColorUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ColorsOnProductsUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ColorsOnProductsUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    colorId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesUpdateWithoutProductInput = {
    stock?: BoolFieldUpdateOperationsInput | boolean
    size?: SizeUpdateOneRequiredWithoutProductsNestedInput
  }

  export type ProductsOnSizesUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type ProductsOnSizesUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    sizeId?: IntFieldUpdateOperationsInput | number
    stock?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutProductsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    lastLogin?: DateTimeFieldUpdateOperationsInput | Date | string
    error?: IntFieldUpdateOperationsInput | number
    profile?: NullableStringFieldUpdateOperationsInput | string | null
    randToken?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ImageUpdateWithoutProductInput = {
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }

  export type ImageUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    image?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}