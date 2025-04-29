
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
 * Model image
 * 
 */
export type image = $Result.DefaultSelection<Prisma.$imagePayload>
/**
 * Model image_tag
 * 
 */
export type image_tag = $Result.DefaultSelection<Prisma.$image_tagPayload>
/**
 * Model tag
 * 
 */
export type tag = $Result.DefaultSelection<Prisma.$tagPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Images
 * const images = await prisma.image.findMany()
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
   * // Fetch zero or more Images
   * const images = await prisma.image.findMany()
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
   * `prisma.image`: Exposes CRUD operations for the **image** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Images
    * const images = await prisma.image.findMany()
    * ```
    */
  get image(): Prisma.imageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.image_tag`: Exposes CRUD operations for the **image_tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Image_tags
    * const image_tags = await prisma.image_tag.findMany()
    * ```
    */
  get image_tag(): Prisma.image_tagDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.tag`: Exposes CRUD operations for the **tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.tagDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
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
    image: 'image',
    image_tag: 'image_tag',
    tag: 'tag'
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
      modelProps: "image" | "image_tag" | "tag"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      image: {
        payload: Prisma.$imagePayload<ExtArgs>
        fields: Prisma.imageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.imageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.imageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findFirst: {
            args: Prisma.imageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.imageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          findMany: {
            args: Prisma.imageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>[]
          }
          create: {
            args: Prisma.imageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          createMany: {
            args: Prisma.imageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.imageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          update: {
            args: Prisma.imageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          deleteMany: {
            args: Prisma.imageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.imageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.imageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$imagePayload>
          }
          aggregate: {
            args: Prisma.ImageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage>
          }
          groupBy: {
            args: Prisma.imageGroupByArgs<ExtArgs>
            result: $Utils.Optional<ImageGroupByOutputType>[]
          }
          count: {
            args: Prisma.imageCountArgs<ExtArgs>
            result: $Utils.Optional<ImageCountAggregateOutputType> | number
          }
        }
      }
      image_tag: {
        payload: Prisma.$image_tagPayload<ExtArgs>
        fields: Prisma.image_tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.image_tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.image_tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>
          }
          findFirst: {
            args: Prisma.image_tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.image_tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>
          }
          findMany: {
            args: Prisma.image_tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>[]
          }
          create: {
            args: Prisma.image_tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>
          }
          createMany: {
            args: Prisma.image_tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.image_tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>
          }
          update: {
            args: Prisma.image_tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>
          }
          deleteMany: {
            args: Prisma.image_tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.image_tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.image_tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$image_tagPayload>
          }
          aggregate: {
            args: Prisma.Image_tagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImage_tag>
          }
          groupBy: {
            args: Prisma.image_tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<Image_tagGroupByOutputType>[]
          }
          count: {
            args: Prisma.image_tagCountArgs<ExtArgs>
            result: $Utils.Optional<Image_tagCountAggregateOutputType> | number
          }
        }
      }
      tag: {
        payload: Prisma.$tagPayload<ExtArgs>
        fields: Prisma.tagFieldRefs
        operations: {
          findUnique: {
            args: Prisma.tagFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.tagFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findFirst: {
            args: Prisma.tagFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.tagFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          findMany: {
            args: Prisma.tagFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>[]
          }
          create: {
            args: Prisma.tagCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          createMany: {
            args: Prisma.tagCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.tagDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          update: {
            args: Prisma.tagUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          deleteMany: {
            args: Prisma.tagDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.tagUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.tagUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$tagPayload>
          }
          aggregate: {
            args: Prisma.TagAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTag>
          }
          groupBy: {
            args: Prisma.tagGroupByArgs<ExtArgs>
            result: $Utils.Optional<TagGroupByOutputType>[]
          }
          count: {
            args: Prisma.tagCountArgs<ExtArgs>
            result: $Utils.Optional<TagCountAggregateOutputType> | number
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
    image?: imageOmit
    image_tag?: image_tagOmit
    tag?: tagOmit
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
   * Count Type ImageCountOutputType
   */

  export type ImageCountOutputType = {
    image_tag: number
  }

  export type ImageCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image_tag?: boolean | ImageCountOutputTypeCountImage_tagArgs
  }

  // Custom InputTypes
  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ImageCountOutputType
     */
    select?: ImageCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ImageCountOutputType without action
   */
  export type ImageCountOutputTypeCountImage_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: image_tagWhereInput
  }


  /**
   * Count Type TagCountOutputType
   */

  export type TagCountOutputType = {
    image_tag: number
  }

  export type TagCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image_tag?: boolean | TagCountOutputTypeCountImage_tagArgs
  }

  // Custom InputTypes
  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeCountImage_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: image_tagWhereInput
  }


  /**
   * Models
   */

  /**
   * Model image
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
  }

  export type ImageSumAggregateOutputType = {
    id: number | null
  }

  export type ImageMinAggregateOutputType = {
    id: number | null
    name: string | null
    event: string | null
  }

  export type ImageMaxAggregateOutputType = {
    id: number | null
    name: string | null
    event: string | null
  }

  export type ImageCountAggregateOutputType = {
    id: number
    name: number
    event: number
    _all: number
  }


  export type ImageAvgAggregateInputType = {
    id?: true
  }

  export type ImageSumAggregateInputType = {
    id?: true
  }

  export type ImageMinAggregateInputType = {
    id?: true
    name?: true
    event?: true
  }

  export type ImageMaxAggregateInputType = {
    id?: true
    name?: true
    event?: true
  }

  export type ImageCountAggregateInputType = {
    id?: true
    name?: true
    event?: true
    _all?: true
  }

  export type ImageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image to aggregate.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned images
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




  export type imageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: imageWhereInput
    orderBy?: imageOrderByWithAggregationInput | imageOrderByWithAggregationInput[]
    by: ImageScalarFieldEnum[] | ImageScalarFieldEnum
    having?: imageScalarWhereWithAggregatesInput
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
    name: string
    event: string
    _count: ImageCountAggregateOutputType | null
    _avg: ImageAvgAggregateOutputType | null
    _sum: ImageSumAggregateOutputType | null
    _min: ImageMinAggregateOutputType | null
    _max: ImageMaxAggregateOutputType | null
  }

  type GetImageGroupByPayload<T extends imageGroupByArgs> = Prisma.PrismaPromise<
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


  export type imageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    event?: boolean
    image_tag?: boolean | image$image_tagArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image"]>



  export type imageSelectScalar = {
    id?: boolean
    name?: boolean
    event?: boolean
  }

  export type imageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "event", ExtArgs["result"]["image"]>
  export type imageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image_tag?: boolean | image$image_tagArgs<ExtArgs>
    _count?: boolean | ImageCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $imagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "image"
    objects: {
      image_tag: Prisma.$image_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      event: string
    }, ExtArgs["result"]["image"]>
    composites: {}
  }

  type imageGetPayload<S extends boolean | null | undefined | imageDefaultArgs> = $Result.GetResult<Prisma.$imagePayload, S>

  type imageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<imageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ImageCountAggregateInputType | true
    }

  export interface imageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['image'], meta: { name: 'image' } }
    /**
     * Find zero or one Image that matches the filter.
     * @param {imageFindUniqueArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends imageFindUniqueArgs>(args: SelectSubset<T, imageFindUniqueArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {imageFindUniqueOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends imageFindUniqueOrThrowArgs>(args: SelectSubset<T, imageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends imageFindFirstArgs>(args?: SelectSubset<T, imageFindFirstArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindFirstOrThrowArgs} args - Arguments to find a Image
     * @example
     * // Get one Image
     * const image = await prisma.image.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends imageFindFirstOrThrowArgs>(args?: SelectSubset<T, imageFindFirstOrThrowArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageFindManyArgs} args - Arguments to filter and select certain fields only.
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
    findMany<T extends imageFindManyArgs>(args?: SelectSubset<T, imageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image.
     * @param {imageCreateArgs} args - Arguments to create a Image.
     * @example
     * // Create one Image
     * const Image = await prisma.image.create({
     *   data: {
     *     // ... data to create a Image
     *   }
     * })
     * 
     */
    create<T extends imageCreateArgs>(args: SelectSubset<T, imageCreateArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Images.
     * @param {imageCreateManyArgs} args - Arguments to create many Images.
     * @example
     * // Create many Images
     * const image = await prisma.image.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends imageCreateManyArgs>(args?: SelectSubset<T, imageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image.
     * @param {imageDeleteArgs} args - Arguments to delete one Image.
     * @example
     * // Delete one Image
     * const Image = await prisma.image.delete({
     *   where: {
     *     // ... filter to delete one Image
     *   }
     * })
     * 
     */
    delete<T extends imageDeleteArgs>(args: SelectSubset<T, imageDeleteArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image.
     * @param {imageUpdateArgs} args - Arguments to update one Image.
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
    update<T extends imageUpdateArgs>(args: SelectSubset<T, imageUpdateArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Images.
     * @param {imageDeleteManyArgs} args - Arguments to filter Images to delete.
     * @example
     * // Delete a few Images
     * const { count } = await prisma.image.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends imageDeleteManyArgs>(args?: SelectSubset<T, imageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageUpdateManyArgs} args - Arguments to update one or more rows.
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
    updateMany<T extends imageUpdateManyArgs>(args: SelectSubset<T, imageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image.
     * @param {imageUpsertArgs} args - Arguments to update or create a Image.
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
    upsert<T extends imageUpsertArgs>(args: SelectSubset<T, imageUpsertArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {imageCountArgs} args - Arguments to filter Images to count.
     * @example
     * // Count the number of Images
     * const count = await prisma.image.count({
     *   where: {
     *     // ... the filter for the Images we want to count
     *   }
     * })
    **/
    count<T extends imageCountArgs>(
      args?: Subset<T, imageCountArgs>,
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
     * @param {imageGroupByArgs} args - Group by arguments.
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
      T extends imageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: imageGroupByArgs['orderBy'] }
        : { orderBy?: imageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, imageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the image model
   */
  readonly fields: imageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for image.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__imageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image_tag<T extends image$image_tagArgs<ExtArgs> = {}>(args?: Subset<T, image$image_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the image model
   */
  interface imageFieldRefs {
    readonly id: FieldRef<"image", 'Int'>
    readonly name: FieldRef<"image", 'String'>
    readonly event: FieldRef<"image", 'String'>
  }
    

  // Custom InputTypes
  /**
   * image findUnique
   */
  export type imageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findUniqueOrThrow
   */
  export type imageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image findFirst
   */
  export type imageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image findFirstOrThrow
   */
  export type imageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which image to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of images.
     */
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image findMany
   */
  export type imageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter, which images to fetch.
     */
    where?: imageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of images to fetch.
     */
    orderBy?: imageOrderByWithRelationInput | imageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing images.
     */
    cursor?: imageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` images.
     */
    skip?: number
    distinct?: ImageScalarFieldEnum | ImageScalarFieldEnum[]
  }

  /**
   * image create
   */
  export type imageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The data needed to create a image.
     */
    data: XOR<imageCreateInput, imageUncheckedCreateInput>
  }

  /**
   * image createMany
   */
  export type imageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many images.
     */
    data: imageCreateManyInput | imageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * image update
   */
  export type imageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The data needed to update a image.
     */
    data: XOR<imageUpdateInput, imageUncheckedUpdateInput>
    /**
     * Choose, which image to update.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image updateMany
   */
  export type imageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update images.
     */
    data: XOR<imageUpdateManyMutationInput, imageUncheckedUpdateManyInput>
    /**
     * Filter which images to update
     */
    where?: imageWhereInput
    /**
     * Limit how many images to update.
     */
    limit?: number
  }

  /**
   * image upsert
   */
  export type imageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * The filter to search for the image to update in case it exists.
     */
    where: imageWhereUniqueInput
    /**
     * In case the image found by the `where` argument doesn't exist, create a new image with this data.
     */
    create: XOR<imageCreateInput, imageUncheckedCreateInput>
    /**
     * In case the image was found with the provided `where` argument, update it with this data.
     */
    update: XOR<imageUpdateInput, imageUncheckedUpdateInput>
  }

  /**
   * image delete
   */
  export type imageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
    /**
     * Filter which image to delete.
     */
    where: imageWhereUniqueInput
  }

  /**
   * image deleteMany
   */
  export type imageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which images to delete
     */
    where?: imageWhereInput
    /**
     * Limit how many images to delete.
     */
    limit?: number
  }

  /**
   * image.image_tag
   */
  export type image$image_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    where?: image_tagWhereInput
    orderBy?: image_tagOrderByWithRelationInput | image_tagOrderByWithRelationInput[]
    cursor?: image_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Image_tagScalarFieldEnum | Image_tagScalarFieldEnum[]
  }

  /**
   * image without action
   */
  export type imageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image
     */
    select?: imageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image
     */
    omit?: imageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: imageInclude<ExtArgs> | null
  }


  /**
   * Model image_tag
   */

  export type AggregateImage_tag = {
    _count: Image_tagCountAggregateOutputType | null
    _avg: Image_tagAvgAggregateOutputType | null
    _sum: Image_tagSumAggregateOutputType | null
    _min: Image_tagMinAggregateOutputType | null
    _max: Image_tagMaxAggregateOutputType | null
  }

  export type Image_tagAvgAggregateOutputType = {
    image_id: number | null
    tag_id: number | null
  }

  export type Image_tagSumAggregateOutputType = {
    image_id: number | null
    tag_id: number | null
  }

  export type Image_tagMinAggregateOutputType = {
    image_id: number | null
    tag_id: number | null
  }

  export type Image_tagMaxAggregateOutputType = {
    image_id: number | null
    tag_id: number | null
  }

  export type Image_tagCountAggregateOutputType = {
    image_id: number
    tag_id: number
    _all: number
  }


  export type Image_tagAvgAggregateInputType = {
    image_id?: true
    tag_id?: true
  }

  export type Image_tagSumAggregateInputType = {
    image_id?: true
    tag_id?: true
  }

  export type Image_tagMinAggregateInputType = {
    image_id?: true
    tag_id?: true
  }

  export type Image_tagMaxAggregateInputType = {
    image_id?: true
    tag_id?: true
  }

  export type Image_tagCountAggregateInputType = {
    image_id?: true
    tag_id?: true
    _all?: true
  }

  export type Image_tagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image_tag to aggregate.
     */
    where?: image_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_tags to fetch.
     */
    orderBy?: image_tagOrderByWithRelationInput | image_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: image_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned image_tags
    **/
    _count?: true | Image_tagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Image_tagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Image_tagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Image_tagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Image_tagMaxAggregateInputType
  }

  export type GetImage_tagAggregateType<T extends Image_tagAggregateArgs> = {
        [P in keyof T & keyof AggregateImage_tag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImage_tag[P]>
      : GetScalarType<T[P], AggregateImage_tag[P]>
  }




  export type image_tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: image_tagWhereInput
    orderBy?: image_tagOrderByWithAggregationInput | image_tagOrderByWithAggregationInput[]
    by: Image_tagScalarFieldEnum[] | Image_tagScalarFieldEnum
    having?: image_tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Image_tagCountAggregateInputType | true
    _avg?: Image_tagAvgAggregateInputType
    _sum?: Image_tagSumAggregateInputType
    _min?: Image_tagMinAggregateInputType
    _max?: Image_tagMaxAggregateInputType
  }

  export type Image_tagGroupByOutputType = {
    image_id: number
    tag_id: number
    _count: Image_tagCountAggregateOutputType | null
    _avg: Image_tagAvgAggregateOutputType | null
    _sum: Image_tagSumAggregateOutputType | null
    _min: Image_tagMinAggregateOutputType | null
    _max: Image_tagMaxAggregateOutputType | null
  }

  type GetImage_tagGroupByPayload<T extends image_tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Image_tagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Image_tagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Image_tagGroupByOutputType[P]>
            : GetScalarType<T[P], Image_tagGroupByOutputType[P]>
        }
      >
    >


  export type image_tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    image_id?: boolean
    tag_id?: boolean
    image?: boolean | imageDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["image_tag"]>



  export type image_tagSelectScalar = {
    image_id?: boolean
    tag_id?: boolean
  }

  export type image_tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"image_id" | "tag_id", ExtArgs["result"]["image_tag"]>
  export type image_tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image?: boolean | imageDefaultArgs<ExtArgs>
    tag?: boolean | tagDefaultArgs<ExtArgs>
  }

  export type $image_tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "image_tag"
    objects: {
      image: Prisma.$imagePayload<ExtArgs>
      tag: Prisma.$tagPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      image_id: number
      tag_id: number
    }, ExtArgs["result"]["image_tag"]>
    composites: {}
  }

  type image_tagGetPayload<S extends boolean | null | undefined | image_tagDefaultArgs> = $Result.GetResult<Prisma.$image_tagPayload, S>

  type image_tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<image_tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Image_tagCountAggregateInputType | true
    }

  export interface image_tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['image_tag'], meta: { name: 'image_tag' } }
    /**
     * Find zero or one Image_tag that matches the filter.
     * @param {image_tagFindUniqueArgs} args - Arguments to find a Image_tag
     * @example
     * // Get one Image_tag
     * const image_tag = await prisma.image_tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends image_tagFindUniqueArgs>(args: SelectSubset<T, image_tagFindUniqueArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Image_tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {image_tagFindUniqueOrThrowArgs} args - Arguments to find a Image_tag
     * @example
     * // Get one Image_tag
     * const image_tag = await prisma.image_tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends image_tagFindUniqueOrThrowArgs>(args: SelectSubset<T, image_tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image_tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_tagFindFirstArgs} args - Arguments to find a Image_tag
     * @example
     * // Get one Image_tag
     * const image_tag = await prisma.image_tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends image_tagFindFirstArgs>(args?: SelectSubset<T, image_tagFindFirstArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Image_tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_tagFindFirstOrThrowArgs} args - Arguments to find a Image_tag
     * @example
     * // Get one Image_tag
     * const image_tag = await prisma.image_tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends image_tagFindFirstOrThrowArgs>(args?: SelectSubset<T, image_tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Image_tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Image_tags
     * const image_tags = await prisma.image_tag.findMany()
     * 
     * // Get first 10 Image_tags
     * const image_tags = await prisma.image_tag.findMany({ take: 10 })
     * 
     * // Only select the `image_id`
     * const image_tagWithImage_idOnly = await prisma.image_tag.findMany({ select: { image_id: true } })
     * 
     */
    findMany<T extends image_tagFindManyArgs>(args?: SelectSubset<T, image_tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Image_tag.
     * @param {image_tagCreateArgs} args - Arguments to create a Image_tag.
     * @example
     * // Create one Image_tag
     * const Image_tag = await prisma.image_tag.create({
     *   data: {
     *     // ... data to create a Image_tag
     *   }
     * })
     * 
     */
    create<T extends image_tagCreateArgs>(args: SelectSubset<T, image_tagCreateArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Image_tags.
     * @param {image_tagCreateManyArgs} args - Arguments to create many Image_tags.
     * @example
     * // Create many Image_tags
     * const image_tag = await prisma.image_tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends image_tagCreateManyArgs>(args?: SelectSubset<T, image_tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Image_tag.
     * @param {image_tagDeleteArgs} args - Arguments to delete one Image_tag.
     * @example
     * // Delete one Image_tag
     * const Image_tag = await prisma.image_tag.delete({
     *   where: {
     *     // ... filter to delete one Image_tag
     *   }
     * })
     * 
     */
    delete<T extends image_tagDeleteArgs>(args: SelectSubset<T, image_tagDeleteArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Image_tag.
     * @param {image_tagUpdateArgs} args - Arguments to update one Image_tag.
     * @example
     * // Update one Image_tag
     * const image_tag = await prisma.image_tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends image_tagUpdateArgs>(args: SelectSubset<T, image_tagUpdateArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Image_tags.
     * @param {image_tagDeleteManyArgs} args - Arguments to filter Image_tags to delete.
     * @example
     * // Delete a few Image_tags
     * const { count } = await prisma.image_tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends image_tagDeleteManyArgs>(args?: SelectSubset<T, image_tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Image_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Image_tags
     * const image_tag = await prisma.image_tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends image_tagUpdateManyArgs>(args: SelectSubset<T, image_tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Image_tag.
     * @param {image_tagUpsertArgs} args - Arguments to update or create a Image_tag.
     * @example
     * // Update or create a Image_tag
     * const image_tag = await prisma.image_tag.upsert({
     *   create: {
     *     // ... data to create a Image_tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Image_tag we want to update
     *   }
     * })
     */
    upsert<T extends image_tagUpsertArgs>(args: SelectSubset<T, image_tagUpsertArgs<ExtArgs>>): Prisma__image_tagClient<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Image_tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_tagCountArgs} args - Arguments to filter Image_tags to count.
     * @example
     * // Count the number of Image_tags
     * const count = await prisma.image_tag.count({
     *   where: {
     *     // ... the filter for the Image_tags we want to count
     *   }
     * })
    **/
    count<T extends image_tagCountArgs>(
      args?: Subset<T, image_tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Image_tagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Image_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Image_tagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Image_tagAggregateArgs>(args: Subset<T, Image_tagAggregateArgs>): Prisma.PrismaPromise<GetImage_tagAggregateType<T>>

    /**
     * Group by Image_tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {image_tagGroupByArgs} args - Group by arguments.
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
      T extends image_tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: image_tagGroupByArgs['orderBy'] }
        : { orderBy?: image_tagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, image_tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImage_tagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the image_tag model
   */
  readonly fields: image_tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for image_tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__image_tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image<T extends imageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, imageDefaultArgs<ExtArgs>>): Prisma__imageClient<$Result.GetResult<Prisma.$imagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    tag<T extends tagDefaultArgs<ExtArgs> = {}>(args?: Subset<T, tagDefaultArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the image_tag model
   */
  interface image_tagFieldRefs {
    readonly image_id: FieldRef<"image_tag", 'Int'>
    readonly tag_id: FieldRef<"image_tag", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * image_tag findUnique
   */
  export type image_tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * Filter, which image_tag to fetch.
     */
    where: image_tagWhereUniqueInput
  }

  /**
   * image_tag findUniqueOrThrow
   */
  export type image_tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * Filter, which image_tag to fetch.
     */
    where: image_tagWhereUniqueInput
  }

  /**
   * image_tag findFirst
   */
  export type image_tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * Filter, which image_tag to fetch.
     */
    where?: image_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_tags to fetch.
     */
    orderBy?: image_tagOrderByWithRelationInput | image_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for image_tags.
     */
    cursor?: image_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of image_tags.
     */
    distinct?: Image_tagScalarFieldEnum | Image_tagScalarFieldEnum[]
  }

  /**
   * image_tag findFirstOrThrow
   */
  export type image_tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * Filter, which image_tag to fetch.
     */
    where?: image_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_tags to fetch.
     */
    orderBy?: image_tagOrderByWithRelationInput | image_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for image_tags.
     */
    cursor?: image_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of image_tags.
     */
    distinct?: Image_tagScalarFieldEnum | Image_tagScalarFieldEnum[]
  }

  /**
   * image_tag findMany
   */
  export type image_tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * Filter, which image_tags to fetch.
     */
    where?: image_tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of image_tags to fetch.
     */
    orderBy?: image_tagOrderByWithRelationInput | image_tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing image_tags.
     */
    cursor?: image_tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` image_tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` image_tags.
     */
    skip?: number
    distinct?: Image_tagScalarFieldEnum | Image_tagScalarFieldEnum[]
  }

  /**
   * image_tag create
   */
  export type image_tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * The data needed to create a image_tag.
     */
    data: XOR<image_tagCreateInput, image_tagUncheckedCreateInput>
  }

  /**
   * image_tag createMany
   */
  export type image_tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many image_tags.
     */
    data: image_tagCreateManyInput | image_tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * image_tag update
   */
  export type image_tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * The data needed to update a image_tag.
     */
    data: XOR<image_tagUpdateInput, image_tagUncheckedUpdateInput>
    /**
     * Choose, which image_tag to update.
     */
    where: image_tagWhereUniqueInput
  }

  /**
   * image_tag updateMany
   */
  export type image_tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update image_tags.
     */
    data: XOR<image_tagUpdateManyMutationInput, image_tagUncheckedUpdateManyInput>
    /**
     * Filter which image_tags to update
     */
    where?: image_tagWhereInput
    /**
     * Limit how many image_tags to update.
     */
    limit?: number
  }

  /**
   * image_tag upsert
   */
  export type image_tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * The filter to search for the image_tag to update in case it exists.
     */
    where: image_tagWhereUniqueInput
    /**
     * In case the image_tag found by the `where` argument doesn't exist, create a new image_tag with this data.
     */
    create: XOR<image_tagCreateInput, image_tagUncheckedCreateInput>
    /**
     * In case the image_tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<image_tagUpdateInput, image_tagUncheckedUpdateInput>
  }

  /**
   * image_tag delete
   */
  export type image_tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    /**
     * Filter which image_tag to delete.
     */
    where: image_tagWhereUniqueInput
  }

  /**
   * image_tag deleteMany
   */
  export type image_tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which image_tags to delete
     */
    where?: image_tagWhereInput
    /**
     * Limit how many image_tags to delete.
     */
    limit?: number
  }

  /**
   * image_tag without action
   */
  export type image_tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
  }


  /**
   * Model tag
   */

  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tag to aggregate.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type tagGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: tagWhereInput
    orderBy?: tagOrderByWithAggregationInput | tagOrderByWithAggregationInput[]
    by: TagScalarFieldEnum[] | TagScalarFieldEnum
    having?: tagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }

  export type TagGroupByOutputType = {
    id: number
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends tagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type tagSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    image_tag?: boolean | tag$image_tagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tag"]>



  export type tagSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type tagOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["tag"]>
  export type tagInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    image_tag?: boolean | tag$image_tagArgs<ExtArgs>
    _count?: boolean | TagCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $tagPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "tag"
    objects: {
      image_tag: Prisma.$image_tagPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
    }, ExtArgs["result"]["tag"]>
    composites: {}
  }

  type tagGetPayload<S extends boolean | null | undefined | tagDefaultArgs> = $Result.GetResult<Prisma.$tagPayload, S>

  type tagCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<tagFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface tagDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['tag'], meta: { name: 'tag' } }
    /**
     * Find zero or one Tag that matches the filter.
     * @param {tagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends tagFindUniqueArgs>(args: SelectSubset<T, tagFindUniqueArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Tag that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {tagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends tagFindUniqueOrThrowArgs>(args: SelectSubset<T, tagFindUniqueOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends tagFindFirstArgs>(args?: SelectSubset<T, tagFindFirstArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Tag that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends tagFindFirstOrThrowArgs>(args?: SelectSubset<T, tagFindFirstOrThrowArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends tagFindManyArgs>(args?: SelectSubset<T, tagFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Tag.
     * @param {tagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
     */
    create<T extends tagCreateArgs>(args: SelectSubset<T, tagCreateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Tags.
     * @param {tagCreateManyArgs} args - Arguments to create many Tags.
     * @example
     * // Create many Tags
     * const tag = await prisma.tag.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends tagCreateManyArgs>(args?: SelectSubset<T, tagCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {tagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
     */
    delete<T extends tagDeleteArgs>(args: SelectSubset<T, tagDeleteArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Tag.
     * @param {tagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends tagUpdateArgs>(args: SelectSubset<T, tagUpdateArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Tags.
     * @param {tagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends tagDeleteManyArgs>(args?: SelectSubset<T, tagDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends tagUpdateManyArgs>(args: SelectSubset<T, tagUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {tagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
     */
    upsert<T extends tagUpsertArgs>(args: SelectSubset<T, tagUpsertArgs<ExtArgs>>): Prisma__tagClient<$Result.GetResult<Prisma.$tagPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends tagCountArgs>(
      args?: Subset<T, tagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {tagGroupByArgs} args - Group by arguments.
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
      T extends tagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: tagGroupByArgs['orderBy'] }
        : { orderBy?: tagGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, tagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the tag model
   */
  readonly fields: tagFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__tagClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    image_tag<T extends tag$image_tagArgs<ExtArgs> = {}>(args?: Subset<T, tag$image_tagArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$image_tagPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the tag model
   */
  interface tagFieldRefs {
    readonly id: FieldRef<"tag", 'Int'>
    readonly name: FieldRef<"tag", 'String'>
  }
    

  // Custom InputTypes
  /**
   * tag findUnique
   */
  export type tagFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findUniqueOrThrow
   */
  export type tagFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag findFirst
   */
  export type tagFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findFirstOrThrow
   */
  export type tagFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tag to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of tags.
     */
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag findMany
   */
  export type tagFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter, which tags to fetch.
     */
    where?: tagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of tags to fetch.
     */
    orderBy?: tagOrderByWithRelationInput | tagOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing tags.
     */
    cursor?: tagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` tags.
     */
    skip?: number
    distinct?: TagScalarFieldEnum | TagScalarFieldEnum[]
  }

  /**
   * tag create
   */
  export type tagCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to create a tag.
     */
    data: XOR<tagCreateInput, tagUncheckedCreateInput>
  }

  /**
   * tag createMany
   */
  export type tagCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many tags.
     */
    data: tagCreateManyInput | tagCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * tag update
   */
  export type tagUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The data needed to update a tag.
     */
    data: XOR<tagUpdateInput, tagUncheckedUpdateInput>
    /**
     * Choose, which tag to update.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag updateMany
   */
  export type tagUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update tags.
     */
    data: XOR<tagUpdateManyMutationInput, tagUncheckedUpdateManyInput>
    /**
     * Filter which tags to update
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to update.
     */
    limit?: number
  }

  /**
   * tag upsert
   */
  export type tagUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * The filter to search for the tag to update in case it exists.
     */
    where: tagWhereUniqueInput
    /**
     * In case the tag found by the `where` argument doesn't exist, create a new tag with this data.
     */
    create: XOR<tagCreateInput, tagUncheckedCreateInput>
    /**
     * In case the tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<tagUpdateInput, tagUncheckedUpdateInput>
  }

  /**
   * tag delete
   */
  export type tagDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
    /**
     * Filter which tag to delete.
     */
    where: tagWhereUniqueInput
  }

  /**
   * tag deleteMany
   */
  export type tagDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which tags to delete
     */
    where?: tagWhereInput
    /**
     * Limit how many tags to delete.
     */
    limit?: number
  }

  /**
   * tag.image_tag
   */
  export type tag$image_tagArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the image_tag
     */
    select?: image_tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the image_tag
     */
    omit?: image_tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: image_tagInclude<ExtArgs> | null
    where?: image_tagWhereInput
    orderBy?: image_tagOrderByWithRelationInput | image_tagOrderByWithRelationInput[]
    cursor?: image_tagWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Image_tagScalarFieldEnum | Image_tagScalarFieldEnum[]
  }

  /**
   * tag without action
   */
  export type tagDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the tag
     */
    select?: tagSelect<ExtArgs> | null
    /**
     * Omit specific fields from the tag
     */
    omit?: tagOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: tagInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ImageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    event: 'event'
  };

  export type ImageScalarFieldEnum = (typeof ImageScalarFieldEnum)[keyof typeof ImageScalarFieldEnum]


  export const Image_tagScalarFieldEnum: {
    image_id: 'image_id',
    tag_id: 'tag_id'
  };

  export type Image_tagScalarFieldEnum = (typeof Image_tagScalarFieldEnum)[keyof typeof Image_tagScalarFieldEnum]


  export const TagScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const imageOrderByRelevanceFieldEnum: {
    name: 'name',
    event: 'event'
  };

  export type imageOrderByRelevanceFieldEnum = (typeof imageOrderByRelevanceFieldEnum)[keyof typeof imageOrderByRelevanceFieldEnum]


  export const tagOrderByRelevanceFieldEnum: {
    name: 'name'
  };

  export type tagOrderByRelevanceFieldEnum = (typeof tagOrderByRelevanceFieldEnum)[keyof typeof tagOrderByRelevanceFieldEnum]


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
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type imageWhereInput = {
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    id?: IntFilter<"image"> | number
    name?: StringFilter<"image"> | string
    event?: StringFilter<"image"> | string
    image_tag?: Image_tagListRelationFilter
  }

  export type imageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    event?: SortOrder
    image_tag?: image_tagOrderByRelationAggregateInput
    _relevance?: imageOrderByRelevanceInput
  }

  export type imageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: imageWhereInput | imageWhereInput[]
    OR?: imageWhereInput[]
    NOT?: imageWhereInput | imageWhereInput[]
    name?: StringFilter<"image"> | string
    event?: StringFilter<"image"> | string
    image_tag?: Image_tagListRelationFilter
  }, "id">

  export type imageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    event?: SortOrder
    _count?: imageCountOrderByAggregateInput
    _avg?: imageAvgOrderByAggregateInput
    _max?: imageMaxOrderByAggregateInput
    _min?: imageMinOrderByAggregateInput
    _sum?: imageSumOrderByAggregateInput
  }

  export type imageScalarWhereWithAggregatesInput = {
    AND?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    OR?: imageScalarWhereWithAggregatesInput[]
    NOT?: imageScalarWhereWithAggregatesInput | imageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"image"> | number
    name?: StringWithAggregatesFilter<"image"> | string
    event?: StringWithAggregatesFilter<"image"> | string
  }

  export type image_tagWhereInput = {
    AND?: image_tagWhereInput | image_tagWhereInput[]
    OR?: image_tagWhereInput[]
    NOT?: image_tagWhereInput | image_tagWhereInput[]
    image_id?: IntFilter<"image_tag"> | number
    tag_id?: IntFilter<"image_tag"> | number
    image?: XOR<ImageScalarRelationFilter, imageWhereInput>
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
  }

  export type image_tagOrderByWithRelationInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
    image?: imageOrderByWithRelationInput
    tag?: tagOrderByWithRelationInput
  }

  export type image_tagWhereUniqueInput = Prisma.AtLeast<{
    image_id_tag_id?: image_tagImage_idTag_idCompoundUniqueInput
    AND?: image_tagWhereInput | image_tagWhereInput[]
    OR?: image_tagWhereInput[]
    NOT?: image_tagWhereInput | image_tagWhereInput[]
    image_id?: IntFilter<"image_tag"> | number
    tag_id?: IntFilter<"image_tag"> | number
    image?: XOR<ImageScalarRelationFilter, imageWhereInput>
    tag?: XOR<TagScalarRelationFilter, tagWhereInput>
  }, "image_id_tag_id">

  export type image_tagOrderByWithAggregationInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
    _count?: image_tagCountOrderByAggregateInput
    _avg?: image_tagAvgOrderByAggregateInput
    _max?: image_tagMaxOrderByAggregateInput
    _min?: image_tagMinOrderByAggregateInput
    _sum?: image_tagSumOrderByAggregateInput
  }

  export type image_tagScalarWhereWithAggregatesInput = {
    AND?: image_tagScalarWhereWithAggregatesInput | image_tagScalarWhereWithAggregatesInput[]
    OR?: image_tagScalarWhereWithAggregatesInput[]
    NOT?: image_tagScalarWhereWithAggregatesInput | image_tagScalarWhereWithAggregatesInput[]
    image_id?: IntWithAggregatesFilter<"image_tag"> | number
    tag_id?: IntWithAggregatesFilter<"image_tag"> | number
  }

  export type tagWhereInput = {
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    id?: IntFilter<"tag"> | number
    name?: StringFilter<"tag"> | string
    image_tag?: Image_tagListRelationFilter
  }

  export type tagOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    image_tag?: image_tagOrderByRelationAggregateInput
    _relevance?: tagOrderByRelevanceInput
  }

  export type tagWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: tagWhereInput | tagWhereInput[]
    OR?: tagWhereInput[]
    NOT?: tagWhereInput | tagWhereInput[]
    image_tag?: Image_tagListRelationFilter
  }, "id" | "name">

  export type tagOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: tagCountOrderByAggregateInput
    _avg?: tagAvgOrderByAggregateInput
    _max?: tagMaxOrderByAggregateInput
    _min?: tagMinOrderByAggregateInput
    _sum?: tagSumOrderByAggregateInput
  }

  export type tagScalarWhereWithAggregatesInput = {
    AND?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    OR?: tagScalarWhereWithAggregatesInput[]
    NOT?: tagScalarWhereWithAggregatesInput | tagScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"tag"> | number
    name?: StringWithAggregatesFilter<"tag"> | string
  }

  export type imageCreateInput = {
    name: string
    event: string
    image_tag?: image_tagCreateNestedManyWithoutImageInput
  }

  export type imageUncheckedCreateInput = {
    id?: number
    name: string
    event: string
    image_tag?: image_tagUncheckedCreateNestedManyWithoutImageInput
  }

  export type imageUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    image_tag?: image_tagUpdateManyWithoutImageNestedInput
  }

  export type imageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
    image_tag?: image_tagUncheckedUpdateManyWithoutImageNestedInput
  }

  export type imageCreateManyInput = {
    id?: number
    name: string
    event: string
  }

  export type imageUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
  }

  export type imageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
  }

  export type image_tagCreateInput = {
    image: imageCreateNestedOneWithoutImage_tagInput
    tag: tagCreateNestedOneWithoutImage_tagInput
  }

  export type image_tagUncheckedCreateInput = {
    image_id: number
    tag_id: number
  }

  export type image_tagUpdateInput = {
    image?: imageUpdateOneRequiredWithoutImage_tagNestedInput
    tag?: tagUpdateOneRequiredWithoutImage_tagNestedInput
  }

  export type image_tagUncheckedUpdateInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type image_tagCreateManyInput = {
    image_id: number
    tag_id: number
  }

  export type image_tagUpdateManyMutationInput = {

  }

  export type image_tagUncheckedUpdateManyInput = {
    image_id?: IntFieldUpdateOperationsInput | number
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type tagCreateInput = {
    name: string
    image_tag?: image_tagCreateNestedManyWithoutTagInput
  }

  export type tagUncheckedCreateInput = {
    id?: number
    name: string
    image_tag?: image_tagUncheckedCreateNestedManyWithoutTagInput
  }

  export type tagUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    image_tag?: image_tagUpdateManyWithoutTagNestedInput
  }

  export type tagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    image_tag?: image_tagUncheckedUpdateManyWithoutTagNestedInput
  }

  export type tagCreateManyInput = {
    id?: number
    name: string
  }

  export type tagUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type Image_tagListRelationFilter = {
    every?: image_tagWhereInput
    some?: image_tagWhereInput
    none?: image_tagWhereInput
  }

  export type image_tagOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type imageOrderByRelevanceInput = {
    fields: imageOrderByRelevanceFieldEnum | imageOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type imageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    event?: SortOrder
  }

  export type imageAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type imageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    event?: SortOrder
  }

  export type imageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    event?: SortOrder
  }

  export type imageSumOrderByAggregateInput = {
    id?: SortOrder
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type ImageScalarRelationFilter = {
    is?: imageWhereInput
    isNot?: imageWhereInput
  }

  export type TagScalarRelationFilter = {
    is?: tagWhereInput
    isNot?: tagWhereInput
  }

  export type image_tagImage_idTag_idCompoundUniqueInput = {
    image_id: number
    tag_id: number
  }

  export type image_tagCountOrderByAggregateInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
  }

  export type image_tagAvgOrderByAggregateInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
  }

  export type image_tagMaxOrderByAggregateInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
  }

  export type image_tagMinOrderByAggregateInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
  }

  export type image_tagSumOrderByAggregateInput = {
    image_id?: SortOrder
    tag_id?: SortOrder
  }

  export type tagOrderByRelevanceInput = {
    fields: tagOrderByRelevanceFieldEnum | tagOrderByRelevanceFieldEnum[]
    sort: SortOrder
    search: string
  }

  export type tagCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type tagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type tagMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type tagMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type tagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type image_tagCreateNestedManyWithoutImageInput = {
    create?: XOR<image_tagCreateWithoutImageInput, image_tagUncheckedCreateWithoutImageInput> | image_tagCreateWithoutImageInput[] | image_tagUncheckedCreateWithoutImageInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutImageInput | image_tagCreateOrConnectWithoutImageInput[]
    createMany?: image_tagCreateManyImageInputEnvelope
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
  }

  export type image_tagUncheckedCreateNestedManyWithoutImageInput = {
    create?: XOR<image_tagCreateWithoutImageInput, image_tagUncheckedCreateWithoutImageInput> | image_tagCreateWithoutImageInput[] | image_tagUncheckedCreateWithoutImageInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutImageInput | image_tagCreateOrConnectWithoutImageInput[]
    createMany?: image_tagCreateManyImageInputEnvelope
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type image_tagUpdateManyWithoutImageNestedInput = {
    create?: XOR<image_tagCreateWithoutImageInput, image_tagUncheckedCreateWithoutImageInput> | image_tagCreateWithoutImageInput[] | image_tagUncheckedCreateWithoutImageInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutImageInput | image_tagCreateOrConnectWithoutImageInput[]
    upsert?: image_tagUpsertWithWhereUniqueWithoutImageInput | image_tagUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: image_tagCreateManyImageInputEnvelope
    set?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    disconnect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    delete?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    update?: image_tagUpdateWithWhereUniqueWithoutImageInput | image_tagUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: image_tagUpdateManyWithWhereWithoutImageInput | image_tagUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: image_tagScalarWhereInput | image_tagScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type image_tagUncheckedUpdateManyWithoutImageNestedInput = {
    create?: XOR<image_tagCreateWithoutImageInput, image_tagUncheckedCreateWithoutImageInput> | image_tagCreateWithoutImageInput[] | image_tagUncheckedCreateWithoutImageInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutImageInput | image_tagCreateOrConnectWithoutImageInput[]
    upsert?: image_tagUpsertWithWhereUniqueWithoutImageInput | image_tagUpsertWithWhereUniqueWithoutImageInput[]
    createMany?: image_tagCreateManyImageInputEnvelope
    set?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    disconnect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    delete?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    update?: image_tagUpdateWithWhereUniqueWithoutImageInput | image_tagUpdateWithWhereUniqueWithoutImageInput[]
    updateMany?: image_tagUpdateManyWithWhereWithoutImageInput | image_tagUpdateManyWithWhereWithoutImageInput[]
    deleteMany?: image_tagScalarWhereInput | image_tagScalarWhereInput[]
  }

  export type imageCreateNestedOneWithoutImage_tagInput = {
    create?: XOR<imageCreateWithoutImage_tagInput, imageUncheckedCreateWithoutImage_tagInput>
    connectOrCreate?: imageCreateOrConnectWithoutImage_tagInput
    connect?: imageWhereUniqueInput
  }

  export type tagCreateNestedOneWithoutImage_tagInput = {
    create?: XOR<tagCreateWithoutImage_tagInput, tagUncheckedCreateWithoutImage_tagInput>
    connectOrCreate?: tagCreateOrConnectWithoutImage_tagInput
    connect?: tagWhereUniqueInput
  }

  export type imageUpdateOneRequiredWithoutImage_tagNestedInput = {
    create?: XOR<imageCreateWithoutImage_tagInput, imageUncheckedCreateWithoutImage_tagInput>
    connectOrCreate?: imageCreateOrConnectWithoutImage_tagInput
    upsert?: imageUpsertWithoutImage_tagInput
    connect?: imageWhereUniqueInput
    update?: XOR<XOR<imageUpdateToOneWithWhereWithoutImage_tagInput, imageUpdateWithoutImage_tagInput>, imageUncheckedUpdateWithoutImage_tagInput>
  }

  export type tagUpdateOneRequiredWithoutImage_tagNestedInput = {
    create?: XOR<tagCreateWithoutImage_tagInput, tagUncheckedCreateWithoutImage_tagInput>
    connectOrCreate?: tagCreateOrConnectWithoutImage_tagInput
    upsert?: tagUpsertWithoutImage_tagInput
    connect?: tagWhereUniqueInput
    update?: XOR<XOR<tagUpdateToOneWithWhereWithoutImage_tagInput, tagUpdateWithoutImage_tagInput>, tagUncheckedUpdateWithoutImage_tagInput>
  }

  export type image_tagCreateNestedManyWithoutTagInput = {
    create?: XOR<image_tagCreateWithoutTagInput, image_tagUncheckedCreateWithoutTagInput> | image_tagCreateWithoutTagInput[] | image_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutTagInput | image_tagCreateOrConnectWithoutTagInput[]
    createMany?: image_tagCreateManyTagInputEnvelope
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
  }

  export type image_tagUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<image_tagCreateWithoutTagInput, image_tagUncheckedCreateWithoutTagInput> | image_tagCreateWithoutTagInput[] | image_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutTagInput | image_tagCreateOrConnectWithoutTagInput[]
    createMany?: image_tagCreateManyTagInputEnvelope
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
  }

  export type image_tagUpdateManyWithoutTagNestedInput = {
    create?: XOR<image_tagCreateWithoutTagInput, image_tagUncheckedCreateWithoutTagInput> | image_tagCreateWithoutTagInput[] | image_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutTagInput | image_tagCreateOrConnectWithoutTagInput[]
    upsert?: image_tagUpsertWithWhereUniqueWithoutTagInput | image_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: image_tagCreateManyTagInputEnvelope
    set?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    disconnect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    delete?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    update?: image_tagUpdateWithWhereUniqueWithoutTagInput | image_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: image_tagUpdateManyWithWhereWithoutTagInput | image_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: image_tagScalarWhereInput | image_tagScalarWhereInput[]
  }

  export type image_tagUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<image_tagCreateWithoutTagInput, image_tagUncheckedCreateWithoutTagInput> | image_tagCreateWithoutTagInput[] | image_tagUncheckedCreateWithoutTagInput[]
    connectOrCreate?: image_tagCreateOrConnectWithoutTagInput | image_tagCreateOrConnectWithoutTagInput[]
    upsert?: image_tagUpsertWithWhereUniqueWithoutTagInput | image_tagUpsertWithWhereUniqueWithoutTagInput[]
    createMany?: image_tagCreateManyTagInputEnvelope
    set?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    disconnect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    delete?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    connect?: image_tagWhereUniqueInput | image_tagWhereUniqueInput[]
    update?: image_tagUpdateWithWhereUniqueWithoutTagInput | image_tagUpdateWithWhereUniqueWithoutTagInput[]
    updateMany?: image_tagUpdateManyWithWhereWithoutTagInput | image_tagUpdateManyWithWhereWithoutTagInput[]
    deleteMany?: image_tagScalarWhereInput | image_tagScalarWhereInput[]
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
    search?: string
    not?: NestedStringFilter<$PrismaModel> | string
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
    search?: string
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type image_tagCreateWithoutImageInput = {
    tag: tagCreateNestedOneWithoutImage_tagInput
  }

  export type image_tagUncheckedCreateWithoutImageInput = {
    tag_id: number
  }

  export type image_tagCreateOrConnectWithoutImageInput = {
    where: image_tagWhereUniqueInput
    create: XOR<image_tagCreateWithoutImageInput, image_tagUncheckedCreateWithoutImageInput>
  }

  export type image_tagCreateManyImageInputEnvelope = {
    data: image_tagCreateManyImageInput | image_tagCreateManyImageInput[]
    skipDuplicates?: boolean
  }

  export type image_tagUpsertWithWhereUniqueWithoutImageInput = {
    where: image_tagWhereUniqueInput
    update: XOR<image_tagUpdateWithoutImageInput, image_tagUncheckedUpdateWithoutImageInput>
    create: XOR<image_tagCreateWithoutImageInput, image_tagUncheckedCreateWithoutImageInput>
  }

  export type image_tagUpdateWithWhereUniqueWithoutImageInput = {
    where: image_tagWhereUniqueInput
    data: XOR<image_tagUpdateWithoutImageInput, image_tagUncheckedUpdateWithoutImageInput>
  }

  export type image_tagUpdateManyWithWhereWithoutImageInput = {
    where: image_tagScalarWhereInput
    data: XOR<image_tagUpdateManyMutationInput, image_tagUncheckedUpdateManyWithoutImageInput>
  }

  export type image_tagScalarWhereInput = {
    AND?: image_tagScalarWhereInput | image_tagScalarWhereInput[]
    OR?: image_tagScalarWhereInput[]
    NOT?: image_tagScalarWhereInput | image_tagScalarWhereInput[]
    image_id?: IntFilter<"image_tag"> | number
    tag_id?: IntFilter<"image_tag"> | number
  }

  export type imageCreateWithoutImage_tagInput = {
    name: string
    event: string
  }

  export type imageUncheckedCreateWithoutImage_tagInput = {
    id?: number
    name: string
    event: string
  }

  export type imageCreateOrConnectWithoutImage_tagInput = {
    where: imageWhereUniqueInput
    create: XOR<imageCreateWithoutImage_tagInput, imageUncheckedCreateWithoutImage_tagInput>
  }

  export type tagCreateWithoutImage_tagInput = {
    name: string
  }

  export type tagUncheckedCreateWithoutImage_tagInput = {
    id?: number
    name: string
  }

  export type tagCreateOrConnectWithoutImage_tagInput = {
    where: tagWhereUniqueInput
    create: XOR<tagCreateWithoutImage_tagInput, tagUncheckedCreateWithoutImage_tagInput>
  }

  export type imageUpsertWithoutImage_tagInput = {
    update: XOR<imageUpdateWithoutImage_tagInput, imageUncheckedUpdateWithoutImage_tagInput>
    create: XOR<imageCreateWithoutImage_tagInput, imageUncheckedCreateWithoutImage_tagInput>
    where?: imageWhereInput
  }

  export type imageUpdateToOneWithWhereWithoutImage_tagInput = {
    where?: imageWhereInput
    data: XOR<imageUpdateWithoutImage_tagInput, imageUncheckedUpdateWithoutImage_tagInput>
  }

  export type imageUpdateWithoutImage_tagInput = {
    name?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
  }

  export type imageUncheckedUpdateWithoutImage_tagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    event?: StringFieldUpdateOperationsInput | string
  }

  export type tagUpsertWithoutImage_tagInput = {
    update: XOR<tagUpdateWithoutImage_tagInput, tagUncheckedUpdateWithoutImage_tagInput>
    create: XOR<tagCreateWithoutImage_tagInput, tagUncheckedCreateWithoutImage_tagInput>
    where?: tagWhereInput
  }

  export type tagUpdateToOneWithWhereWithoutImage_tagInput = {
    where?: tagWhereInput
    data: XOR<tagUpdateWithoutImage_tagInput, tagUncheckedUpdateWithoutImage_tagInput>
  }

  export type tagUpdateWithoutImage_tagInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type tagUncheckedUpdateWithoutImage_tagInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type image_tagCreateWithoutTagInput = {
    image: imageCreateNestedOneWithoutImage_tagInput
  }

  export type image_tagUncheckedCreateWithoutTagInput = {
    image_id: number
  }

  export type image_tagCreateOrConnectWithoutTagInput = {
    where: image_tagWhereUniqueInput
    create: XOR<image_tagCreateWithoutTagInput, image_tagUncheckedCreateWithoutTagInput>
  }

  export type image_tagCreateManyTagInputEnvelope = {
    data: image_tagCreateManyTagInput | image_tagCreateManyTagInput[]
    skipDuplicates?: boolean
  }

  export type image_tagUpsertWithWhereUniqueWithoutTagInput = {
    where: image_tagWhereUniqueInput
    update: XOR<image_tagUpdateWithoutTagInput, image_tagUncheckedUpdateWithoutTagInput>
    create: XOR<image_tagCreateWithoutTagInput, image_tagUncheckedCreateWithoutTagInput>
  }

  export type image_tagUpdateWithWhereUniqueWithoutTagInput = {
    where: image_tagWhereUniqueInput
    data: XOR<image_tagUpdateWithoutTagInput, image_tagUncheckedUpdateWithoutTagInput>
  }

  export type image_tagUpdateManyWithWhereWithoutTagInput = {
    where: image_tagScalarWhereInput
    data: XOR<image_tagUpdateManyMutationInput, image_tagUncheckedUpdateManyWithoutTagInput>
  }

  export type image_tagCreateManyImageInput = {
    tag_id: number
  }

  export type image_tagUpdateWithoutImageInput = {
    tag?: tagUpdateOneRequiredWithoutImage_tagNestedInput
  }

  export type image_tagUncheckedUpdateWithoutImageInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type image_tagUncheckedUpdateManyWithoutImageInput = {
    tag_id?: IntFieldUpdateOperationsInput | number
  }

  export type image_tagCreateManyTagInput = {
    image_id: number
  }

  export type image_tagUpdateWithoutTagInput = {
    image?: imageUpdateOneRequiredWithoutImage_tagNestedInput
  }

  export type image_tagUncheckedUpdateWithoutTagInput = {
    image_id?: IntFieldUpdateOperationsInput | number
  }

  export type image_tagUncheckedUpdateManyWithoutTagInput = {
    image_id?: IntFieldUpdateOperationsInput | number
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