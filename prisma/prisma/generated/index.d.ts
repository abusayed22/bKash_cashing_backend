
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
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Sendmoney
 * 
 */
export type Sendmoney = $Result.DefaultSelection<Prisma.$SendmoneyPayload>
/**
 * Model Receivedmoney
 * 
 */
export type Receivedmoney = $Result.DefaultSelection<Prisma.$ReceivedmoneyPayload>
/**
 * Model History
 * 
 */
export type History = $Result.DefaultSelection<Prisma.$HistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
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
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs, $Utils.Call<Prisma.TypeMapCb, {
    extArgs: ExtArgs
  }>, ClientOptions>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sendmoney`: Exposes CRUD operations for the **Sendmoney** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sendmonies
    * const sendmonies = await prisma.sendmoney.findMany()
    * ```
    */
  get sendmoney(): Prisma.SendmoneyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.receivedmoney`: Exposes CRUD operations for the **Receivedmoney** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Receivedmonies
    * const receivedmonies = await prisma.receivedmoney.findMany()
    * ```
    */
  get receivedmoney(): Prisma.ReceivedmoneyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.history`: Exposes CRUD operations for the **History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Histories
    * const histories = await prisma.history.findMany()
    * ```
    */
  get history(): Prisma.HistoryDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.2.1
   * Query Engine version: acc0b9dd43eb689cbd20c9470515d719db10d0b0
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Admin: 'Admin',
    Client: 'Client',
    Sendmoney: 'Sendmoney',
    Receivedmoney: 'Receivedmoney',
    History: 'History'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "client" | "sendmoney" | "receivedmoney" | "history"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Sendmoney: {
        payload: Prisma.$SendmoneyPayload<ExtArgs>
        fields: Prisma.SendmoneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SendmoneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SendmoneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>
          }
          findFirst: {
            args: Prisma.SendmoneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SendmoneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>
          }
          findMany: {
            args: Prisma.SendmoneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>[]
          }
          create: {
            args: Prisma.SendmoneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>
          }
          createMany: {
            args: Prisma.SendmoneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SendmoneyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>[]
          }
          delete: {
            args: Prisma.SendmoneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>
          }
          update: {
            args: Prisma.SendmoneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>
          }
          deleteMany: {
            args: Prisma.SendmoneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SendmoneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SendmoneyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>[]
          }
          upsert: {
            args: Prisma.SendmoneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SendmoneyPayload>
          }
          aggregate: {
            args: Prisma.SendmoneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSendmoney>
          }
          groupBy: {
            args: Prisma.SendmoneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<SendmoneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.SendmoneyCountArgs<ExtArgs>
            result: $Utils.Optional<SendmoneyCountAggregateOutputType> | number
          }
        }
      }
      Receivedmoney: {
        payload: Prisma.$ReceivedmoneyPayload<ExtArgs>
        fields: Prisma.ReceivedmoneyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReceivedmoneyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReceivedmoneyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>
          }
          findFirst: {
            args: Prisma.ReceivedmoneyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReceivedmoneyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>
          }
          findMany: {
            args: Prisma.ReceivedmoneyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>[]
          }
          create: {
            args: Prisma.ReceivedmoneyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>
          }
          createMany: {
            args: Prisma.ReceivedmoneyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReceivedmoneyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>[]
          }
          delete: {
            args: Prisma.ReceivedmoneyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>
          }
          update: {
            args: Prisma.ReceivedmoneyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>
          }
          deleteMany: {
            args: Prisma.ReceivedmoneyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReceivedmoneyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReceivedmoneyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>[]
          }
          upsert: {
            args: Prisma.ReceivedmoneyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReceivedmoneyPayload>
          }
          aggregate: {
            args: Prisma.ReceivedmoneyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReceivedmoney>
          }
          groupBy: {
            args: Prisma.ReceivedmoneyGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReceivedmoneyGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReceivedmoneyCountArgs<ExtArgs>
            result: $Utils.Optional<ReceivedmoneyCountAggregateOutputType> | number
          }
        }
      }
      History: {
        payload: Prisma.$HistoryPayload<ExtArgs>
        fields: Prisma.HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findFirst: {
            args: Prisma.HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          findMany: {
            args: Prisma.HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          create: {
            args: Prisma.HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          createMany: {
            args: Prisma.HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          delete: {
            args: Prisma.HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          update: {
            args: Prisma.HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          deleteMany: {
            args: Prisma.HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>[]
          }
          upsert: {
            args: Prisma.HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HistoryPayload>
          }
          aggregate: {
            args: Prisma.HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHistory>
          }
          groupBy: {
            args: Prisma.HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<HistoryCountAggregateOutputType> | number
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
    admin?: AdminOmit
    client?: ClientOmit
    sendmoney?: SendmoneyOmit
    receivedmoney?: ReceivedmoneyOmit
    history?: HistoryOmit
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
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    Sendmoney: number
    receivedmoney: number
    history: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sendmoney?: boolean | ClientCountOutputTypeCountSendmoneyArgs
    receivedmoney?: boolean | ClientCountOutputTypeCountReceivedmoneyArgs
    history?: boolean | ClientCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSendmoneyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SendmoneyWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountReceivedmoneyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivedmoneyWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminAvgAggregateOutputType = {
    id: number | null
  }

  export type AdminSumAggregateOutputType = {
    id: number | null
  }

  export type AdminMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    fullname: number
    email: number
    password: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type AdminAvgAggregateInputType = {
    id?: true
  }

  export type AdminSumAggregateInputType = {
    id?: true
  }

  export type AdminMinAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    fullname?: true
    email?: true
    password?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AdminAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AdminSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _avg?: AdminAvgAggregateInputType
    _sum?: AdminSumAggregateInputType
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: number
    fullname: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updateAt: Date | null
    _count: AdminCountAggregateOutputType | null
    _avg: AdminAvgAggregateOutputType | null
    _sum: AdminSumAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["admin"]>

  export type AdminSelectScalar = {
    id?: boolean
    fullname?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type AdminOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "email" | "password" | "createdAt" | "updateAt", ExtArgs["result"]["admin"]>

  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string | null
      email: string | null
      password: string | null
      createdAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminWithIdOnly = await prisma.admin.updateManyAndReturn({
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
    updateManyAndReturn<T extends AdminUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
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
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'Int'>
    readonly fullname: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updateAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data?: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin createManyAndReturn
   */
  export type AdminCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    limit?: number
  }

  /**
   * Admin updateManyAndReturn
   */
  export type AdminUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
    limit?: number
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
    limit?: number
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admin
     */
    omit?: AdminOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    fullname: string | null
    number: string | null
    address: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    fullname: string | null
    number: string | null
    address: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    fullname: number
    number: number
    address: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    fullname?: true
    number?: true
    address?: true
    createdAt?: true
    updateAt?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    fullname?: true
    number?: true
    address?: true
    createdAt?: true
    updateAt?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    fullname?: true
    number?: true
    address?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    fullname: string | null
    number: string | null
    address: string | null
    createdAt: Date | null
    updateAt: Date | null
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    number?: boolean
    address?: boolean
    createdAt?: boolean
    updateAt?: boolean
    Sendmoney?: boolean | Client$SendmoneyArgs<ExtArgs>
    receivedmoney?: boolean | Client$receivedmoneyArgs<ExtArgs>
    history?: boolean | Client$historyArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    number?: boolean
    address?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fullname?: boolean
    number?: boolean
    address?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    fullname?: boolean
    number?: boolean
    address?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fullname" | "number" | "address" | "createdAt" | "updateAt", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Sendmoney?: boolean | Client$SendmoneyArgs<ExtArgs>
    receivedmoney?: boolean | Client$receivedmoneyArgs<ExtArgs>
    history?: boolean | Client$historyArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      Sendmoney: Prisma.$SendmoneyPayload<ExtArgs>[]
      receivedmoney: Prisma.$ReceivedmoneyPayload<ExtArgs>[]
      history: Prisma.$HistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      fullname: string | null
      number: string | null
      address: string | null
      createdAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    Sendmoney<T extends Client$SendmoneyArgs<ExtArgs> = {}>(args?: Subset<T, Client$SendmoneyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    receivedmoney<T extends Client$receivedmoneyArgs<ExtArgs> = {}>(args?: Subset<T, Client$receivedmoneyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
    history<T extends Client$historyArgs<ExtArgs> = {}>(args?: Subset<T, Client$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions> | Null>
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
   * Fields of the Client model
   */ 
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly fullname: FieldRef<"Client", 'String'>
    readonly number: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly createdAt: FieldRef<"Client", 'DateTime'>
    readonly updateAt: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data?: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    limit?: number
  }

  /**
   * Client.Sendmoney
   */
  export type Client$SendmoneyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    where?: SendmoneyWhereInput
    orderBy?: SendmoneyOrderByWithRelationInput | SendmoneyOrderByWithRelationInput[]
    cursor?: SendmoneyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SendmoneyScalarFieldEnum | SendmoneyScalarFieldEnum[]
  }

  /**
   * Client.receivedmoney
   */
  export type Client$receivedmoneyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    where?: ReceivedmoneyWhereInput
    orderBy?: ReceivedmoneyOrderByWithRelationInput | ReceivedmoneyOrderByWithRelationInput[]
    cursor?: ReceivedmoneyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReceivedmoneyScalarFieldEnum | ReceivedmoneyScalarFieldEnum[]
  }

  /**
   * Client.history
   */
  export type Client$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    cursor?: HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Sendmoney
   */

  export type AggregateSendmoney = {
    _count: SendmoneyCountAggregateOutputType | null
    _avg: SendmoneyAvgAggregateOutputType | null
    _sum: SendmoneySumAggregateOutputType | null
    _min: SendmoneyMinAggregateOutputType | null
    _max: SendmoneyMaxAggregateOutputType | null
  }

  export type SendmoneyAvgAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
  }

  export type SendmoneySumAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
  }

  export type SendmoneyMinAggregateOutputType = {
    id: number | null
    clientid: number | null
    number: string | null
    amount: Decimal | null
    method: string | null
    note: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SendmoneyMaxAggregateOutputType = {
    id: number | null
    clientid: number | null
    number: string | null
    amount: Decimal | null
    method: string | null
    note: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type SendmoneyCountAggregateOutputType = {
    id: number
    clientid: number
    number: number
    amount: number
    method: number
    note: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type SendmoneyAvgAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
  }

  export type SendmoneySumAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
  }

  export type SendmoneyMinAggregateInputType = {
    id?: true
    clientid?: true
    number?: true
    amount?: true
    method?: true
    note?: true
    createdAt?: true
    updateAt?: true
  }

  export type SendmoneyMaxAggregateInputType = {
    id?: true
    clientid?: true
    number?: true
    amount?: true
    method?: true
    note?: true
    createdAt?: true
    updateAt?: true
  }

  export type SendmoneyCountAggregateInputType = {
    id?: true
    clientid?: true
    number?: true
    amount?: true
    method?: true
    note?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type SendmoneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sendmoney to aggregate.
     */
    where?: SendmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmonies to fetch.
     */
    orderBy?: SendmoneyOrderByWithRelationInput | SendmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SendmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmonies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sendmonies
    **/
    _count?: true | SendmoneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SendmoneyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SendmoneySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SendmoneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SendmoneyMaxAggregateInputType
  }

  export type GetSendmoneyAggregateType<T extends SendmoneyAggregateArgs> = {
        [P in keyof T & keyof AggregateSendmoney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSendmoney[P]>
      : GetScalarType<T[P], AggregateSendmoney[P]>
  }




  export type SendmoneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SendmoneyWhereInput
    orderBy?: SendmoneyOrderByWithAggregationInput | SendmoneyOrderByWithAggregationInput[]
    by: SendmoneyScalarFieldEnum[] | SendmoneyScalarFieldEnum
    having?: SendmoneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SendmoneyCountAggregateInputType | true
    _avg?: SendmoneyAvgAggregateInputType
    _sum?: SendmoneySumAggregateInputType
    _min?: SendmoneyMinAggregateInputType
    _max?: SendmoneyMaxAggregateInputType
  }

  export type SendmoneyGroupByOutputType = {
    id: number
    clientid: number
    number: string | null
    amount: Decimal | null
    method: string | null
    note: string | null
    createdAt: Date | null
    updateAt: Date | null
    _count: SendmoneyCountAggregateOutputType | null
    _avg: SendmoneyAvgAggregateOutputType | null
    _sum: SendmoneySumAggregateOutputType | null
    _min: SendmoneyMinAggregateOutputType | null
    _max: SendmoneyMaxAggregateOutputType | null
  }

  type GetSendmoneyGroupByPayload<T extends SendmoneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SendmoneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SendmoneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SendmoneyGroupByOutputType[P]>
            : GetScalarType<T[P], SendmoneyGroupByOutputType[P]>
        }
      >
    >


  export type SendmoneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sendmoney"]>

  export type SendmoneySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sendmoney"]>

  export type SendmoneySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sendmoney"]>

  export type SendmoneySelectScalar = {
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type SendmoneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientid" | "number" | "amount" | "method" | "note" | "createdAt" | "updateAt", ExtArgs["result"]["sendmoney"]>
  export type SendmoneyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SendmoneyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type SendmoneyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $SendmoneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sendmoney"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientid: number
      number: string | null
      amount: Prisma.Decimal | null
      method: string | null
      note: string | null
      createdAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["sendmoney"]>
    composites: {}
  }

  type SendmoneyGetPayload<S extends boolean | null | undefined | SendmoneyDefaultArgs> = $Result.GetResult<Prisma.$SendmoneyPayload, S>

  type SendmoneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SendmoneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SendmoneyCountAggregateInputType | true
    }

  export interface SendmoneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sendmoney'], meta: { name: 'Sendmoney' } }
    /**
     * Find zero or one Sendmoney that matches the filter.
     * @param {SendmoneyFindUniqueArgs} args - Arguments to find a Sendmoney
     * @example
     * // Get one Sendmoney
     * const sendmoney = await prisma.sendmoney.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SendmoneyFindUniqueArgs>(args: SelectSubset<T, SendmoneyFindUniqueArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Sendmoney that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SendmoneyFindUniqueOrThrowArgs} args - Arguments to find a Sendmoney
     * @example
     * // Get one Sendmoney
     * const sendmoney = await prisma.sendmoney.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SendmoneyFindUniqueOrThrowArgs>(args: SelectSubset<T, SendmoneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Sendmoney that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyFindFirstArgs} args - Arguments to find a Sendmoney
     * @example
     * // Get one Sendmoney
     * const sendmoney = await prisma.sendmoney.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SendmoneyFindFirstArgs>(args?: SelectSubset<T, SendmoneyFindFirstArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Sendmoney that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyFindFirstOrThrowArgs} args - Arguments to find a Sendmoney
     * @example
     * // Get one Sendmoney
     * const sendmoney = await prisma.sendmoney.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SendmoneyFindFirstOrThrowArgs>(args?: SelectSubset<T, SendmoneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Sendmonies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sendmonies
     * const sendmonies = await prisma.sendmoney.findMany()
     * 
     * // Get first 10 Sendmonies
     * const sendmonies = await prisma.sendmoney.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sendmoneyWithIdOnly = await prisma.sendmoney.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SendmoneyFindManyArgs>(args?: SelectSubset<T, SendmoneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Sendmoney.
     * @param {SendmoneyCreateArgs} args - Arguments to create a Sendmoney.
     * @example
     * // Create one Sendmoney
     * const Sendmoney = await prisma.sendmoney.create({
     *   data: {
     *     // ... data to create a Sendmoney
     *   }
     * })
     * 
     */
    create<T extends SendmoneyCreateArgs>(args: SelectSubset<T, SendmoneyCreateArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Sendmonies.
     * @param {SendmoneyCreateManyArgs} args - Arguments to create many Sendmonies.
     * @example
     * // Create many Sendmonies
     * const sendmoney = await prisma.sendmoney.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SendmoneyCreateManyArgs>(args?: SelectSubset<T, SendmoneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sendmonies and returns the data saved in the database.
     * @param {SendmoneyCreateManyAndReturnArgs} args - Arguments to create many Sendmonies.
     * @example
     * // Create many Sendmonies
     * const sendmoney = await prisma.sendmoney.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sendmonies and only return the `id`
     * const sendmoneyWithIdOnly = await prisma.sendmoney.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SendmoneyCreateManyAndReturnArgs>(args?: SelectSubset<T, SendmoneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Sendmoney.
     * @param {SendmoneyDeleteArgs} args - Arguments to delete one Sendmoney.
     * @example
     * // Delete one Sendmoney
     * const Sendmoney = await prisma.sendmoney.delete({
     *   where: {
     *     // ... filter to delete one Sendmoney
     *   }
     * })
     * 
     */
    delete<T extends SendmoneyDeleteArgs>(args: SelectSubset<T, SendmoneyDeleteArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Sendmoney.
     * @param {SendmoneyUpdateArgs} args - Arguments to update one Sendmoney.
     * @example
     * // Update one Sendmoney
     * const sendmoney = await prisma.sendmoney.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SendmoneyUpdateArgs>(args: SelectSubset<T, SendmoneyUpdateArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Sendmonies.
     * @param {SendmoneyDeleteManyArgs} args - Arguments to filter Sendmonies to delete.
     * @example
     * // Delete a few Sendmonies
     * const { count } = await prisma.sendmoney.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SendmoneyDeleteManyArgs>(args?: SelectSubset<T, SendmoneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sendmonies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sendmonies
     * const sendmoney = await prisma.sendmoney.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SendmoneyUpdateManyArgs>(args: SelectSubset<T, SendmoneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sendmonies and returns the data updated in the database.
     * @param {SendmoneyUpdateManyAndReturnArgs} args - Arguments to update many Sendmonies.
     * @example
     * // Update many Sendmonies
     * const sendmoney = await prisma.sendmoney.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sendmonies and only return the `id`
     * const sendmoneyWithIdOnly = await prisma.sendmoney.updateManyAndReturn({
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
    updateManyAndReturn<T extends SendmoneyUpdateManyAndReturnArgs>(args: SelectSubset<T, SendmoneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Sendmoney.
     * @param {SendmoneyUpsertArgs} args - Arguments to update or create a Sendmoney.
     * @example
     * // Update or create a Sendmoney
     * const sendmoney = await prisma.sendmoney.upsert({
     *   create: {
     *     // ... data to create a Sendmoney
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sendmoney we want to update
     *   }
     * })
     */
    upsert<T extends SendmoneyUpsertArgs>(args: SelectSubset<T, SendmoneyUpsertArgs<ExtArgs>>): Prisma__SendmoneyClient<$Result.GetResult<Prisma.$SendmoneyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Sendmonies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyCountArgs} args - Arguments to filter Sendmonies to count.
     * @example
     * // Count the number of Sendmonies
     * const count = await prisma.sendmoney.count({
     *   where: {
     *     // ... the filter for the Sendmonies we want to count
     *   }
     * })
    **/
    count<T extends SendmoneyCountArgs>(
      args?: Subset<T, SendmoneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SendmoneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sendmoney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SendmoneyAggregateArgs>(args: Subset<T, SendmoneyAggregateArgs>): Prisma.PrismaPromise<GetSendmoneyAggregateType<T>>

    /**
     * Group by Sendmoney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SendmoneyGroupByArgs} args - Group by arguments.
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
      T extends SendmoneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SendmoneyGroupByArgs['orderBy'] }
        : { orderBy?: SendmoneyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SendmoneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSendmoneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sendmoney model
   */
  readonly fields: SendmoneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sendmoney.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SendmoneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Sendmoney model
   */ 
  interface SendmoneyFieldRefs {
    readonly id: FieldRef<"Sendmoney", 'Int'>
    readonly clientid: FieldRef<"Sendmoney", 'Int'>
    readonly number: FieldRef<"Sendmoney", 'String'>
    readonly amount: FieldRef<"Sendmoney", 'Decimal'>
    readonly method: FieldRef<"Sendmoney", 'String'>
    readonly note: FieldRef<"Sendmoney", 'String'>
    readonly createdAt: FieldRef<"Sendmoney", 'DateTime'>
    readonly updateAt: FieldRef<"Sendmoney", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sendmoney findUnique
   */
  export type SendmoneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Sendmoney to fetch.
     */
    where: SendmoneyWhereUniqueInput
  }

  /**
   * Sendmoney findUniqueOrThrow
   */
  export type SendmoneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Sendmoney to fetch.
     */
    where: SendmoneyWhereUniqueInput
  }

  /**
   * Sendmoney findFirst
   */
  export type SendmoneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Sendmoney to fetch.
     */
    where?: SendmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmonies to fetch.
     */
    orderBy?: SendmoneyOrderByWithRelationInput | SendmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sendmonies.
     */
    cursor?: SendmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmonies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sendmonies.
     */
    distinct?: SendmoneyScalarFieldEnum | SendmoneyScalarFieldEnum[]
  }

  /**
   * Sendmoney findFirstOrThrow
   */
  export type SendmoneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Sendmoney to fetch.
     */
    where?: SendmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmonies to fetch.
     */
    orderBy?: SendmoneyOrderByWithRelationInput | SendmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sendmonies.
     */
    cursor?: SendmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmonies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sendmonies.
     */
    distinct?: SendmoneyScalarFieldEnum | SendmoneyScalarFieldEnum[]
  }

  /**
   * Sendmoney findMany
   */
  export type SendmoneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Sendmonies to fetch.
     */
    where?: SendmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sendmonies to fetch.
     */
    orderBy?: SendmoneyOrderByWithRelationInput | SendmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sendmonies.
     */
    cursor?: SendmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sendmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sendmonies.
     */
    skip?: number
    distinct?: SendmoneyScalarFieldEnum | SendmoneyScalarFieldEnum[]
  }

  /**
   * Sendmoney create
   */
  export type SendmoneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * The data needed to create a Sendmoney.
     */
    data: XOR<SendmoneyCreateInput, SendmoneyUncheckedCreateInput>
  }

  /**
   * Sendmoney createMany
   */
  export type SendmoneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sendmonies.
     */
    data: SendmoneyCreateManyInput | SendmoneyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sendmoney createManyAndReturn
   */
  export type SendmoneyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * The data used to create many Sendmonies.
     */
    data: SendmoneyCreateManyInput | SendmoneyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sendmoney update
   */
  export type SendmoneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * The data needed to update a Sendmoney.
     */
    data: XOR<SendmoneyUpdateInput, SendmoneyUncheckedUpdateInput>
    /**
     * Choose, which Sendmoney to update.
     */
    where: SendmoneyWhereUniqueInput
  }

  /**
   * Sendmoney updateMany
   */
  export type SendmoneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sendmonies.
     */
    data: XOR<SendmoneyUpdateManyMutationInput, SendmoneyUncheckedUpdateManyInput>
    /**
     * Filter which Sendmonies to update
     */
    where?: SendmoneyWhereInput
    limit?: number
  }

  /**
   * Sendmoney updateManyAndReturn
   */
  export type SendmoneyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * The data used to update Sendmonies.
     */
    data: XOR<SendmoneyUpdateManyMutationInput, SendmoneyUncheckedUpdateManyInput>
    /**
     * Filter which Sendmonies to update
     */
    where?: SendmoneyWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sendmoney upsert
   */
  export type SendmoneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * The filter to search for the Sendmoney to update in case it exists.
     */
    where: SendmoneyWhereUniqueInput
    /**
     * In case the Sendmoney found by the `where` argument doesn't exist, create a new Sendmoney with this data.
     */
    create: XOR<SendmoneyCreateInput, SendmoneyUncheckedCreateInput>
    /**
     * In case the Sendmoney was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SendmoneyUpdateInput, SendmoneyUncheckedUpdateInput>
  }

  /**
   * Sendmoney delete
   */
  export type SendmoneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
    /**
     * Filter which Sendmoney to delete.
     */
    where: SendmoneyWhereUniqueInput
  }

  /**
   * Sendmoney deleteMany
   */
  export type SendmoneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sendmonies to delete
     */
    where?: SendmoneyWhereInput
    limit?: number
  }

  /**
   * Sendmoney without action
   */
  export type SendmoneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sendmoney
     */
    select?: SendmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sendmoney
     */
    omit?: SendmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SendmoneyInclude<ExtArgs> | null
  }


  /**
   * Model Receivedmoney
   */

  export type AggregateReceivedmoney = {
    _count: ReceivedmoneyCountAggregateOutputType | null
    _avg: ReceivedmoneyAvgAggregateOutputType | null
    _sum: ReceivedmoneySumAggregateOutputType | null
    _min: ReceivedmoneyMinAggregateOutputType | null
    _max: ReceivedmoneyMaxAggregateOutputType | null
  }

  export type ReceivedmoneyAvgAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
  }

  export type ReceivedmoneySumAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
  }

  export type ReceivedmoneyMinAggregateOutputType = {
    id: number | null
    clientid: number | null
    number: string | null
    amount: Decimal | null
    method: string | null
    note: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ReceivedmoneyMaxAggregateOutputType = {
    id: number | null
    clientid: number | null
    number: string | null
    amount: Decimal | null
    method: string | null
    note: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type ReceivedmoneyCountAggregateOutputType = {
    id: number
    clientid: number
    number: number
    amount: number
    method: number
    note: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type ReceivedmoneyAvgAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
  }

  export type ReceivedmoneySumAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
  }

  export type ReceivedmoneyMinAggregateInputType = {
    id?: true
    clientid?: true
    number?: true
    amount?: true
    method?: true
    note?: true
    createdAt?: true
    updateAt?: true
  }

  export type ReceivedmoneyMaxAggregateInputType = {
    id?: true
    clientid?: true
    number?: true
    amount?: true
    method?: true
    note?: true
    createdAt?: true
    updateAt?: true
  }

  export type ReceivedmoneyCountAggregateInputType = {
    id?: true
    clientid?: true
    number?: true
    amount?: true
    method?: true
    note?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type ReceivedmoneyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receivedmoney to aggregate.
     */
    where?: ReceivedmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivedmonies to fetch.
     */
    orderBy?: ReceivedmoneyOrderByWithRelationInput | ReceivedmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReceivedmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivedmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivedmonies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Receivedmonies
    **/
    _count?: true | ReceivedmoneyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReceivedmoneyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReceivedmoneySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReceivedmoneyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReceivedmoneyMaxAggregateInputType
  }

  export type GetReceivedmoneyAggregateType<T extends ReceivedmoneyAggregateArgs> = {
        [P in keyof T & keyof AggregateReceivedmoney]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReceivedmoney[P]>
      : GetScalarType<T[P], AggregateReceivedmoney[P]>
  }




  export type ReceivedmoneyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReceivedmoneyWhereInput
    orderBy?: ReceivedmoneyOrderByWithAggregationInput | ReceivedmoneyOrderByWithAggregationInput[]
    by: ReceivedmoneyScalarFieldEnum[] | ReceivedmoneyScalarFieldEnum
    having?: ReceivedmoneyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReceivedmoneyCountAggregateInputType | true
    _avg?: ReceivedmoneyAvgAggregateInputType
    _sum?: ReceivedmoneySumAggregateInputType
    _min?: ReceivedmoneyMinAggregateInputType
    _max?: ReceivedmoneyMaxAggregateInputType
  }

  export type ReceivedmoneyGroupByOutputType = {
    id: number
    clientid: number
    number: string | null
    amount: Decimal | null
    method: string | null
    note: string | null
    createdAt: Date | null
    updateAt: Date | null
    _count: ReceivedmoneyCountAggregateOutputType | null
    _avg: ReceivedmoneyAvgAggregateOutputType | null
    _sum: ReceivedmoneySumAggregateOutputType | null
    _min: ReceivedmoneyMinAggregateOutputType | null
    _max: ReceivedmoneyMaxAggregateOutputType | null
  }

  type GetReceivedmoneyGroupByPayload<T extends ReceivedmoneyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReceivedmoneyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReceivedmoneyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReceivedmoneyGroupByOutputType[P]>
            : GetScalarType<T[P], ReceivedmoneyGroupByOutputType[P]>
        }
      >
    >


  export type ReceivedmoneySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivedmoney"]>

  export type ReceivedmoneySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivedmoney"]>

  export type ReceivedmoneySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["receivedmoney"]>

  export type ReceivedmoneySelectScalar = {
    id?: boolean
    clientid?: boolean
    number?: boolean
    amount?: boolean
    method?: boolean
    note?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type ReceivedmoneyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientid" | "number" | "amount" | "method" | "note" | "createdAt" | "updateAt", ExtArgs["result"]["receivedmoney"]>
  export type ReceivedmoneyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ReceivedmoneyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ReceivedmoneyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ReceivedmoneyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Receivedmoney"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientid: number
      number: string | null
      amount: Prisma.Decimal | null
      method: string | null
      note: string | null
      createdAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["receivedmoney"]>
    composites: {}
  }

  type ReceivedmoneyGetPayload<S extends boolean | null | undefined | ReceivedmoneyDefaultArgs> = $Result.GetResult<Prisma.$ReceivedmoneyPayload, S>

  type ReceivedmoneyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReceivedmoneyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReceivedmoneyCountAggregateInputType | true
    }

  export interface ReceivedmoneyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Receivedmoney'], meta: { name: 'Receivedmoney' } }
    /**
     * Find zero or one Receivedmoney that matches the filter.
     * @param {ReceivedmoneyFindUniqueArgs} args - Arguments to find a Receivedmoney
     * @example
     * // Get one Receivedmoney
     * const receivedmoney = await prisma.receivedmoney.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReceivedmoneyFindUniqueArgs>(args: SelectSubset<T, ReceivedmoneyFindUniqueArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one Receivedmoney that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReceivedmoneyFindUniqueOrThrowArgs} args - Arguments to find a Receivedmoney
     * @example
     * // Get one Receivedmoney
     * const receivedmoney = await prisma.receivedmoney.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReceivedmoneyFindUniqueOrThrowArgs>(args: SelectSubset<T, ReceivedmoneyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first Receivedmoney that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyFindFirstArgs} args - Arguments to find a Receivedmoney
     * @example
     * // Get one Receivedmoney
     * const receivedmoney = await prisma.receivedmoney.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReceivedmoneyFindFirstArgs>(args?: SelectSubset<T, ReceivedmoneyFindFirstArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first Receivedmoney that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyFindFirstOrThrowArgs} args - Arguments to find a Receivedmoney
     * @example
     * // Get one Receivedmoney
     * const receivedmoney = await prisma.receivedmoney.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReceivedmoneyFindFirstOrThrowArgs>(args?: SelectSubset<T, ReceivedmoneyFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Receivedmonies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Receivedmonies
     * const receivedmonies = await prisma.receivedmoney.findMany()
     * 
     * // Get first 10 Receivedmonies
     * const receivedmonies = await prisma.receivedmoney.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const receivedmoneyWithIdOnly = await prisma.receivedmoney.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReceivedmoneyFindManyArgs>(args?: SelectSubset<T, ReceivedmoneyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a Receivedmoney.
     * @param {ReceivedmoneyCreateArgs} args - Arguments to create a Receivedmoney.
     * @example
     * // Create one Receivedmoney
     * const Receivedmoney = await prisma.receivedmoney.create({
     *   data: {
     *     // ... data to create a Receivedmoney
     *   }
     * })
     * 
     */
    create<T extends ReceivedmoneyCreateArgs>(args: SelectSubset<T, ReceivedmoneyCreateArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Receivedmonies.
     * @param {ReceivedmoneyCreateManyArgs} args - Arguments to create many Receivedmonies.
     * @example
     * // Create many Receivedmonies
     * const receivedmoney = await prisma.receivedmoney.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReceivedmoneyCreateManyArgs>(args?: SelectSubset<T, ReceivedmoneyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Receivedmonies and returns the data saved in the database.
     * @param {ReceivedmoneyCreateManyAndReturnArgs} args - Arguments to create many Receivedmonies.
     * @example
     * // Create many Receivedmonies
     * const receivedmoney = await prisma.receivedmoney.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Receivedmonies and only return the `id`
     * const receivedmoneyWithIdOnly = await prisma.receivedmoney.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReceivedmoneyCreateManyAndReturnArgs>(args?: SelectSubset<T, ReceivedmoneyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a Receivedmoney.
     * @param {ReceivedmoneyDeleteArgs} args - Arguments to delete one Receivedmoney.
     * @example
     * // Delete one Receivedmoney
     * const Receivedmoney = await prisma.receivedmoney.delete({
     *   where: {
     *     // ... filter to delete one Receivedmoney
     *   }
     * })
     * 
     */
    delete<T extends ReceivedmoneyDeleteArgs>(args: SelectSubset<T, ReceivedmoneyDeleteArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one Receivedmoney.
     * @param {ReceivedmoneyUpdateArgs} args - Arguments to update one Receivedmoney.
     * @example
     * // Update one Receivedmoney
     * const receivedmoney = await prisma.receivedmoney.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReceivedmoneyUpdateArgs>(args: SelectSubset<T, ReceivedmoneyUpdateArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Receivedmonies.
     * @param {ReceivedmoneyDeleteManyArgs} args - Arguments to filter Receivedmonies to delete.
     * @example
     * // Delete a few Receivedmonies
     * const { count } = await prisma.receivedmoney.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReceivedmoneyDeleteManyArgs>(args?: SelectSubset<T, ReceivedmoneyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receivedmonies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Receivedmonies
     * const receivedmoney = await prisma.receivedmoney.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReceivedmoneyUpdateManyArgs>(args: SelectSubset<T, ReceivedmoneyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Receivedmonies and returns the data updated in the database.
     * @param {ReceivedmoneyUpdateManyAndReturnArgs} args - Arguments to update many Receivedmonies.
     * @example
     * // Update many Receivedmonies
     * const receivedmoney = await prisma.receivedmoney.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Receivedmonies and only return the `id`
     * const receivedmoneyWithIdOnly = await prisma.receivedmoney.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReceivedmoneyUpdateManyAndReturnArgs>(args: SelectSubset<T, ReceivedmoneyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one Receivedmoney.
     * @param {ReceivedmoneyUpsertArgs} args - Arguments to update or create a Receivedmoney.
     * @example
     * // Update or create a Receivedmoney
     * const receivedmoney = await prisma.receivedmoney.upsert({
     *   create: {
     *     // ... data to create a Receivedmoney
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Receivedmoney we want to update
     *   }
     * })
     */
    upsert<T extends ReceivedmoneyUpsertArgs>(args: SelectSubset<T, ReceivedmoneyUpsertArgs<ExtArgs>>): Prisma__ReceivedmoneyClient<$Result.GetResult<Prisma.$ReceivedmoneyPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Receivedmonies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyCountArgs} args - Arguments to filter Receivedmonies to count.
     * @example
     * // Count the number of Receivedmonies
     * const count = await prisma.receivedmoney.count({
     *   where: {
     *     // ... the filter for the Receivedmonies we want to count
     *   }
     * })
    **/
    count<T extends ReceivedmoneyCountArgs>(
      args?: Subset<T, ReceivedmoneyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReceivedmoneyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Receivedmoney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReceivedmoneyAggregateArgs>(args: Subset<T, ReceivedmoneyAggregateArgs>): Prisma.PrismaPromise<GetReceivedmoneyAggregateType<T>>

    /**
     * Group by Receivedmoney.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReceivedmoneyGroupByArgs} args - Group by arguments.
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
      T extends ReceivedmoneyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReceivedmoneyGroupByArgs['orderBy'] }
        : { orderBy?: ReceivedmoneyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReceivedmoneyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReceivedmoneyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Receivedmoney model
   */
  readonly fields: ReceivedmoneyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Receivedmoney.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReceivedmoneyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the Receivedmoney model
   */ 
  interface ReceivedmoneyFieldRefs {
    readonly id: FieldRef<"Receivedmoney", 'Int'>
    readonly clientid: FieldRef<"Receivedmoney", 'Int'>
    readonly number: FieldRef<"Receivedmoney", 'String'>
    readonly amount: FieldRef<"Receivedmoney", 'Decimal'>
    readonly method: FieldRef<"Receivedmoney", 'String'>
    readonly note: FieldRef<"Receivedmoney", 'String'>
    readonly createdAt: FieldRef<"Receivedmoney", 'DateTime'>
    readonly updateAt: FieldRef<"Receivedmoney", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Receivedmoney findUnique
   */
  export type ReceivedmoneyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Receivedmoney to fetch.
     */
    where: ReceivedmoneyWhereUniqueInput
  }

  /**
   * Receivedmoney findUniqueOrThrow
   */
  export type ReceivedmoneyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Receivedmoney to fetch.
     */
    where: ReceivedmoneyWhereUniqueInput
  }

  /**
   * Receivedmoney findFirst
   */
  export type ReceivedmoneyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Receivedmoney to fetch.
     */
    where?: ReceivedmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivedmonies to fetch.
     */
    orderBy?: ReceivedmoneyOrderByWithRelationInput | ReceivedmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receivedmonies.
     */
    cursor?: ReceivedmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivedmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivedmonies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivedmonies.
     */
    distinct?: ReceivedmoneyScalarFieldEnum | ReceivedmoneyScalarFieldEnum[]
  }

  /**
   * Receivedmoney findFirstOrThrow
   */
  export type ReceivedmoneyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Receivedmoney to fetch.
     */
    where?: ReceivedmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivedmonies to fetch.
     */
    orderBy?: ReceivedmoneyOrderByWithRelationInput | ReceivedmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Receivedmonies.
     */
    cursor?: ReceivedmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivedmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivedmonies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Receivedmonies.
     */
    distinct?: ReceivedmoneyScalarFieldEnum | ReceivedmoneyScalarFieldEnum[]
  }

  /**
   * Receivedmoney findMany
   */
  export type ReceivedmoneyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * Filter, which Receivedmonies to fetch.
     */
    where?: ReceivedmoneyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Receivedmonies to fetch.
     */
    orderBy?: ReceivedmoneyOrderByWithRelationInput | ReceivedmoneyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Receivedmonies.
     */
    cursor?: ReceivedmoneyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Receivedmonies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Receivedmonies.
     */
    skip?: number
    distinct?: ReceivedmoneyScalarFieldEnum | ReceivedmoneyScalarFieldEnum[]
  }

  /**
   * Receivedmoney create
   */
  export type ReceivedmoneyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * The data needed to create a Receivedmoney.
     */
    data: XOR<ReceivedmoneyCreateInput, ReceivedmoneyUncheckedCreateInput>
  }

  /**
   * Receivedmoney createMany
   */
  export type ReceivedmoneyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Receivedmonies.
     */
    data: ReceivedmoneyCreateManyInput | ReceivedmoneyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Receivedmoney createManyAndReturn
   */
  export type ReceivedmoneyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * The data used to create many Receivedmonies.
     */
    data: ReceivedmoneyCreateManyInput | ReceivedmoneyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receivedmoney update
   */
  export type ReceivedmoneyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * The data needed to update a Receivedmoney.
     */
    data: XOR<ReceivedmoneyUpdateInput, ReceivedmoneyUncheckedUpdateInput>
    /**
     * Choose, which Receivedmoney to update.
     */
    where: ReceivedmoneyWhereUniqueInput
  }

  /**
   * Receivedmoney updateMany
   */
  export type ReceivedmoneyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Receivedmonies.
     */
    data: XOR<ReceivedmoneyUpdateManyMutationInput, ReceivedmoneyUncheckedUpdateManyInput>
    /**
     * Filter which Receivedmonies to update
     */
    where?: ReceivedmoneyWhereInput
    limit?: number
  }

  /**
   * Receivedmoney updateManyAndReturn
   */
  export type ReceivedmoneyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * The data used to update Receivedmonies.
     */
    data: XOR<ReceivedmoneyUpdateManyMutationInput, ReceivedmoneyUncheckedUpdateManyInput>
    /**
     * Filter which Receivedmonies to update
     */
    where?: ReceivedmoneyWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Receivedmoney upsert
   */
  export type ReceivedmoneyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * The filter to search for the Receivedmoney to update in case it exists.
     */
    where: ReceivedmoneyWhereUniqueInput
    /**
     * In case the Receivedmoney found by the `where` argument doesn't exist, create a new Receivedmoney with this data.
     */
    create: XOR<ReceivedmoneyCreateInput, ReceivedmoneyUncheckedCreateInput>
    /**
     * In case the Receivedmoney was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReceivedmoneyUpdateInput, ReceivedmoneyUncheckedUpdateInput>
  }

  /**
   * Receivedmoney delete
   */
  export type ReceivedmoneyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
    /**
     * Filter which Receivedmoney to delete.
     */
    where: ReceivedmoneyWhereUniqueInput
  }

  /**
   * Receivedmoney deleteMany
   */
  export type ReceivedmoneyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Receivedmonies to delete
     */
    where?: ReceivedmoneyWhereInput
    limit?: number
  }

  /**
   * Receivedmoney without action
   */
  export type ReceivedmoneyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Receivedmoney
     */
    select?: ReceivedmoneySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Receivedmoney
     */
    omit?: ReceivedmoneyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReceivedmoneyInclude<ExtArgs> | null
  }


  /**
   * Model History
   */

  export type AggregateHistory = {
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  export type HistoryAvgAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
  }

  export type HistorySumAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
  }

  export type HistoryMinAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
    note: string | null
    status: string | null
    number: string | null
    method: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type HistoryMaxAggregateOutputType = {
    id: number | null
    clientid: number | null
    amount: Decimal | null
    note: string | null
    status: string | null
    number: string | null
    method: string | null
    createdAt: Date | null
    updateAt: Date | null
  }

  export type HistoryCountAggregateOutputType = {
    id: number
    clientid: number
    amount: number
    note: number
    status: number
    number: number
    method: number
    createdAt: number
    updateAt: number
    _all: number
  }


  export type HistoryAvgAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
  }

  export type HistorySumAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
  }

  export type HistoryMinAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
    note?: true
    status?: true
    number?: true
    method?: true
    createdAt?: true
    updateAt?: true
  }

  export type HistoryMaxAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
    note?: true
    status?: true
    number?: true
    method?: true
    createdAt?: true
    updateAt?: true
  }

  export type HistoryCountAggregateInputType = {
    id?: true
    clientid?: true
    amount?: true
    note?: true
    status?: true
    number?: true
    method?: true
    createdAt?: true
    updateAt?: true
    _all?: true
  }

  export type HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which History to aggregate.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Histories
    **/
    _count?: true | HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HistoryMaxAggregateInputType
  }

  export type GetHistoryAggregateType<T extends HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHistory[P]>
      : GetScalarType<T[P], AggregateHistory[P]>
  }




  export type HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HistoryWhereInput
    orderBy?: HistoryOrderByWithAggregationInput | HistoryOrderByWithAggregationInput[]
    by: HistoryScalarFieldEnum[] | HistoryScalarFieldEnum
    having?: HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HistoryCountAggregateInputType | true
    _avg?: HistoryAvgAggregateInputType
    _sum?: HistorySumAggregateInputType
    _min?: HistoryMinAggregateInputType
    _max?: HistoryMaxAggregateInputType
  }

  export type HistoryGroupByOutputType = {
    id: number
    clientid: number
    amount: Decimal
    note: string | null
    status: string | null
    number: string | null
    method: string | null
    createdAt: Date | null
    updateAt: Date | null
    _count: HistoryCountAggregateOutputType | null
    _avg: HistoryAvgAggregateOutputType | null
    _sum: HistorySumAggregateOutputType | null
    _min: HistoryMinAggregateOutputType | null
    _max: HistoryMaxAggregateOutputType | null
  }

  type GetHistoryGroupByPayload<T extends HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], HistoryGroupByOutputType[P]>
        }
      >
    >


  export type HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    number?: boolean
    method?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    number?: boolean
    method?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientid?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    number?: boolean
    method?: boolean
    createdAt?: boolean
    updateAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["history"]>

  export type HistorySelectScalar = {
    id?: boolean
    clientid?: boolean
    amount?: boolean
    note?: boolean
    status?: boolean
    number?: boolean
    method?: boolean
    createdAt?: boolean
    updateAt?: boolean
  }

  export type HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientid" | "amount" | "note" | "status" | "number" | "method" | "createdAt" | "updateAt", ExtArgs["result"]["history"]>
  export type HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type HistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "History"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      clientid: number
      amount: Prisma.Decimal
      note: string | null
      status: string | null
      number: string | null
      method: string | null
      createdAt: Date | null
      updateAt: Date | null
    }, ExtArgs["result"]["history"]>
    composites: {}
  }

  type HistoryGetPayload<S extends boolean | null | undefined | HistoryDefaultArgs> = $Result.GetResult<Prisma.$HistoryPayload, S>

  type HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HistoryCountAggregateInputType | true
    }

  export interface HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['History'], meta: { name: 'History' } }
    /**
     * Find zero or one History that matches the filter.
     * @param {HistoryFindUniqueArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HistoryFindUniqueArgs>(args: SelectSubset<T, HistoryFindUniqueArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUnique", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find one History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HistoryFindUniqueOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find the first History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HistoryFindFirstArgs>(args?: SelectSubset<T, HistoryFindFirstArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirst", ClientOptions> | null, null, ExtArgs, ClientOptions>

    /**
     * Find the first History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindFirstOrThrowArgs} args - Arguments to find a History
     * @example
     * // Get one History
     * const history = await prisma.history.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findFirstOrThrow", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Find zero or more Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Histories
     * const histories = await prisma.history.findMany()
     * 
     * // Get first 10 Histories
     * const histories = await prisma.history.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const historyWithIdOnly = await prisma.history.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HistoryFindManyArgs>(args?: SelectSubset<T, HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "findMany", ClientOptions>>

    /**
     * Create a History.
     * @param {HistoryCreateArgs} args - Arguments to create a History.
     * @example
     * // Create one History
     * const History = await prisma.history.create({
     *   data: {
     *     // ... data to create a History
     *   }
     * })
     * 
     */
    create<T extends HistoryCreateArgs>(args: SelectSubset<T, HistoryCreateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "create", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Create many Histories.
     * @param {HistoryCreateManyArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HistoryCreateManyArgs>(args?: SelectSubset<T, HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Histories and returns the data saved in the database.
     * @param {HistoryCreateManyAndReturnArgs} args - Arguments to create many Histories.
     * @example
     * // Create many Histories
     * const history = await prisma.history.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "createManyAndReturn", ClientOptions>>

    /**
     * Delete a History.
     * @param {HistoryDeleteArgs} args - Arguments to delete one History.
     * @example
     * // Delete one History
     * const History = await prisma.history.delete({
     *   where: {
     *     // ... filter to delete one History
     *   }
     * })
     * 
     */
    delete<T extends HistoryDeleteArgs>(args: SelectSubset<T, HistoryDeleteArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "delete", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Update one History.
     * @param {HistoryUpdateArgs} args - Arguments to update one History.
     * @example
     * // Update one History
     * const history = await prisma.history.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HistoryUpdateArgs>(args: SelectSubset<T, HistoryUpdateArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "update", ClientOptions>, never, ExtArgs, ClientOptions>

    /**
     * Delete zero or more Histories.
     * @param {HistoryDeleteManyArgs} args - Arguments to filter Histories to delete.
     * @example
     * // Delete a few Histories
     * const { count } = await prisma.history.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HistoryDeleteManyArgs>(args?: SelectSubset<T, HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HistoryUpdateManyArgs>(args: SelectSubset<T, HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Histories and returns the data updated in the database.
     * @param {HistoryUpdateManyAndReturnArgs} args - Arguments to update many Histories.
     * @example
     * // Update many Histories
     * const history = await prisma.history.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Histories and only return the `id`
     * const historyWithIdOnly = await prisma.history.updateManyAndReturn({
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
    updateManyAndReturn<T extends HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "updateManyAndReturn", ClientOptions>>

    /**
     * Create or update one History.
     * @param {HistoryUpsertArgs} args - Arguments to update or create a History.
     * @example
     * // Update or create a History
     * const history = await prisma.history.upsert({
     *   create: {
     *     // ... data to create a History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the History we want to update
     *   }
     * })
     */
    upsert<T extends HistoryUpsertArgs>(args: SelectSubset<T, HistoryUpsertArgs<ExtArgs>>): Prisma__HistoryClient<$Result.GetResult<Prisma.$HistoryPayload<ExtArgs>, T, "upsert", ClientOptions>, never, ExtArgs, ClientOptions>


    /**
     * Count the number of Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryCountArgs} args - Arguments to filter Histories to count.
     * @example
     * // Count the number of Histories
     * const count = await prisma.history.count({
     *   where: {
     *     // ... the filter for the Histories we want to count
     *   }
     * })
    **/
    count<T extends HistoryCountArgs>(
      args?: Subset<T, HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HistoryAggregateArgs>(args: Subset<T, HistoryAggregateArgs>): Prisma.PrismaPromise<GetHistoryAggregateType<T>>

    /**
     * Group by History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HistoryGroupByArgs} args - Group by arguments.
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
      T extends HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HistoryGroupByArgs['orderBy'] }
        : { orderBy?: HistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the History model
   */
  readonly fields: HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", ClientOptions> | Null, Null, ExtArgs, ClientOptions>
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
   * Fields of the History model
   */ 
  interface HistoryFieldRefs {
    readonly id: FieldRef<"History", 'Int'>
    readonly clientid: FieldRef<"History", 'Int'>
    readonly amount: FieldRef<"History", 'Decimal'>
    readonly note: FieldRef<"History", 'String'>
    readonly status: FieldRef<"History", 'String'>
    readonly number: FieldRef<"History", 'String'>
    readonly method: FieldRef<"History", 'String'>
    readonly createdAt: FieldRef<"History", 'DateTime'>
    readonly updateAt: FieldRef<"History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * History findUnique
   */
  export type HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findUniqueOrThrow
   */
  export type HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History findFirst
   */
  export type HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findFirstOrThrow
   */
  export type HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which History to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Histories.
     */
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History findMany
   */
  export type HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Histories to fetch.
     */
    where?: HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Histories to fetch.
     */
    orderBy?: HistoryOrderByWithRelationInput | HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Histories.
     */
    cursor?: HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Histories.
     */
    skip?: number
    distinct?: HistoryScalarFieldEnum | HistoryScalarFieldEnum[]
  }

  /**
   * History create
   */
  export type HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a History.
     */
    data: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
  }

  /**
   * History createMany
   */
  export type HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * History createManyAndReturn
   */
  export type HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Histories.
     */
    data: HistoryCreateManyInput | HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * History update
   */
  export type HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a History.
     */
    data: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
    /**
     * Choose, which History to update.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History updateMany
   */
  export type HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    limit?: number
  }

  /**
   * History updateManyAndReturn
   */
  export type HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Histories.
     */
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Histories to update
     */
    where?: HistoryWhereInput
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * History upsert
   */
  export type HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the History to update in case it exists.
     */
    where: HistoryWhereUniqueInput
    /**
     * In case the History found by the `where` argument doesn't exist, create a new History with this data.
     */
    create: XOR<HistoryCreateInput, HistoryUncheckedCreateInput>
    /**
     * In case the History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HistoryUpdateInput, HistoryUncheckedUpdateInput>
  }

  /**
   * History delete
   */
  export type HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
    /**
     * Filter which History to delete.
     */
    where: HistoryWhereUniqueInput
  }

  /**
   * History deleteMany
   */
  export type HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Histories to delete
     */
    where?: HistoryWhereInput
    limit?: number
  }

  /**
   * History without action
   */
  export type HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the History
     */
    select?: HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the History
     */
    omit?: HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HistoryInclude<ExtArgs> | null
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


  export const AdminScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    fullname: 'fullname',
    number: 'number',
    address: 'address',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SendmoneyScalarFieldEnum: {
    id: 'id',
    clientid: 'clientid',
    number: 'number',
    amount: 'amount',
    method: 'method',
    note: 'note',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type SendmoneyScalarFieldEnum = (typeof SendmoneyScalarFieldEnum)[keyof typeof SendmoneyScalarFieldEnum]


  export const ReceivedmoneyScalarFieldEnum: {
    id: 'id',
    clientid: 'clientid',
    number: 'number',
    amount: 'amount',
    method: 'method',
    note: 'note',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type ReceivedmoneyScalarFieldEnum = (typeof ReceivedmoneyScalarFieldEnum)[keyof typeof ReceivedmoneyScalarFieldEnum]


  export const HistoryScalarFieldEnum: {
    id: 'id',
    clientid: 'clientid',
    amount: 'amount',
    note: 'note',
    status: 'status',
    number: 'number',
    method: 'method',
    createdAt: 'createdAt',
    updateAt: 'updateAt'
  };

  export type HistoryScalarFieldEnum = (typeof HistoryScalarFieldEnum)[keyof typeof HistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: IntFilter<"Admin"> | number
    fullname?: StringNullableFilter<"Admin"> | string | null
    email?: StringNullableFilter<"Admin"> | string | null
    password?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    fullname?: StringNullableFilter<"Admin"> | string | null
    password?: StringNullableFilter<"Admin"> | string | null
    createdAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Admin"> | Date | string | null
  }, "id" | "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: AdminCountOrderByAggregateInput
    _avg?: AdminAvgOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
    _sum?: AdminSumOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Admin"> | number
    fullname?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    email?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    password?: StringNullableWithAggregatesFilter<"Admin"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Admin"> | Date | string | null
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    fullname?: StringNullableFilter<"Client"> | string | null
    number?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    Sendmoney?: SendmoneyListRelationFilter
    receivedmoney?: ReceivedmoneyListRelationFilter
    history?: HistoryListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    Sendmoney?: SendmoneyOrderByRelationAggregateInput
    receivedmoney?: ReceivedmoneyOrderByRelationAggregateInput
    history?: HistoryOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    fullname?: StringNullableFilter<"Client"> | string | null
    number?: StringNullableFilter<"Client"> | string | null
    address?: StringNullableFilter<"Client"> | string | null
    createdAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Client"> | Date | string | null
    Sendmoney?: SendmoneyListRelationFilter
    receivedmoney?: ReceivedmoneyListRelationFilter
    history?: HistoryListRelationFilter
  }, "id" | "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    fullname?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    fullname?: StringNullableWithAggregatesFilter<"Client"> | string | null
    number?: StringNullableWithAggregatesFilter<"Client"> | string | null
    address?: StringNullableWithAggregatesFilter<"Client"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Client"> | Date | string | null
  }

  export type SendmoneyWhereInput = {
    AND?: SendmoneyWhereInput | SendmoneyWhereInput[]
    OR?: SendmoneyWhereInput[]
    NOT?: SendmoneyWhereInput | SendmoneyWhereInput[]
    id?: IntFilter<"Sendmoney"> | number
    clientid?: IntFilter<"Sendmoney"> | number
    number?: StringNullableFilter<"Sendmoney"> | string | null
    amount?: DecimalNullableFilter<"Sendmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableFilter<"Sendmoney"> | string | null
    note?: StringNullableFilter<"Sendmoney"> | string | null
    createdAt?: DateTimeNullableFilter<"Sendmoney"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Sendmoney"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type SendmoneyOrderByWithRelationInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type SendmoneyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: SendmoneyWhereInput | SendmoneyWhereInput[]
    OR?: SendmoneyWhereInput[]
    NOT?: SendmoneyWhereInput | SendmoneyWhereInput[]
    clientid?: IntFilter<"Sendmoney"> | number
    number?: StringNullableFilter<"Sendmoney"> | string | null
    amount?: DecimalNullableFilter<"Sendmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableFilter<"Sendmoney"> | string | null
    note?: StringNullableFilter<"Sendmoney"> | string | null
    createdAt?: DateTimeNullableFilter<"Sendmoney"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Sendmoney"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "id">

  export type SendmoneyOrderByWithAggregationInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: SendmoneyCountOrderByAggregateInput
    _avg?: SendmoneyAvgOrderByAggregateInput
    _max?: SendmoneyMaxOrderByAggregateInput
    _min?: SendmoneyMinOrderByAggregateInput
    _sum?: SendmoneySumOrderByAggregateInput
  }

  export type SendmoneyScalarWhereWithAggregatesInput = {
    AND?: SendmoneyScalarWhereWithAggregatesInput | SendmoneyScalarWhereWithAggregatesInput[]
    OR?: SendmoneyScalarWhereWithAggregatesInput[]
    NOT?: SendmoneyScalarWhereWithAggregatesInput | SendmoneyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Sendmoney"> | number
    clientid?: IntWithAggregatesFilter<"Sendmoney"> | number
    number?: StringNullableWithAggregatesFilter<"Sendmoney"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"Sendmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableWithAggregatesFilter<"Sendmoney"> | string | null
    note?: StringNullableWithAggregatesFilter<"Sendmoney"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Sendmoney"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Sendmoney"> | Date | string | null
  }

  export type ReceivedmoneyWhereInput = {
    AND?: ReceivedmoneyWhereInput | ReceivedmoneyWhereInput[]
    OR?: ReceivedmoneyWhereInput[]
    NOT?: ReceivedmoneyWhereInput | ReceivedmoneyWhereInput[]
    id?: IntFilter<"Receivedmoney"> | number
    clientid?: IntFilter<"Receivedmoney"> | number
    number?: StringNullableFilter<"Receivedmoney"> | string | null
    amount?: DecimalNullableFilter<"Receivedmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableFilter<"Receivedmoney"> | string | null
    note?: StringNullableFilter<"Receivedmoney"> | string | null
    createdAt?: DateTimeNullableFilter<"Receivedmoney"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Receivedmoney"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type ReceivedmoneyOrderByWithRelationInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type ReceivedmoneyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReceivedmoneyWhereInput | ReceivedmoneyWhereInput[]
    OR?: ReceivedmoneyWhereInput[]
    NOT?: ReceivedmoneyWhereInput | ReceivedmoneyWhereInput[]
    clientid?: IntFilter<"Receivedmoney"> | number
    number?: StringNullableFilter<"Receivedmoney"> | string | null
    amount?: DecimalNullableFilter<"Receivedmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableFilter<"Receivedmoney"> | string | null
    note?: StringNullableFilter<"Receivedmoney"> | string | null
    createdAt?: DateTimeNullableFilter<"Receivedmoney"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Receivedmoney"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "id">

  export type ReceivedmoneyOrderByWithAggregationInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrderInput | SortOrder
    amount?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    note?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: ReceivedmoneyCountOrderByAggregateInput
    _avg?: ReceivedmoneyAvgOrderByAggregateInput
    _max?: ReceivedmoneyMaxOrderByAggregateInput
    _min?: ReceivedmoneyMinOrderByAggregateInput
    _sum?: ReceivedmoneySumOrderByAggregateInput
  }

  export type ReceivedmoneyScalarWhereWithAggregatesInput = {
    AND?: ReceivedmoneyScalarWhereWithAggregatesInput | ReceivedmoneyScalarWhereWithAggregatesInput[]
    OR?: ReceivedmoneyScalarWhereWithAggregatesInput[]
    NOT?: ReceivedmoneyScalarWhereWithAggregatesInput | ReceivedmoneyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Receivedmoney"> | number
    clientid?: IntWithAggregatesFilter<"Receivedmoney"> | number
    number?: StringNullableWithAggregatesFilter<"Receivedmoney"> | string | null
    amount?: DecimalNullableWithAggregatesFilter<"Receivedmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableWithAggregatesFilter<"Receivedmoney"> | string | null
    note?: StringNullableWithAggregatesFilter<"Receivedmoney"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Receivedmoney"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"Receivedmoney"> | Date | string | null
  }

  export type HistoryWhereInput = {
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    id?: IntFilter<"History"> | number
    clientid?: IntFilter<"History"> | number
    amount?: DecimalFilter<"History"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"History"> | string | null
    status?: StringNullableFilter<"History"> | string | null
    number?: StringNullableFilter<"History"> | string | null
    method?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeNullableFilter<"History"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"History"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }

  export type HistoryOrderByWithRelationInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    client?: ClientOrderByWithRelationInput
  }

  export type HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: HistoryWhereInput | HistoryWhereInput[]
    OR?: HistoryWhereInput[]
    NOT?: HistoryWhereInput | HistoryWhereInput[]
    clientid?: IntFilter<"History"> | number
    amount?: DecimalFilter<"History"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"History"> | string | null
    status?: StringNullableFilter<"History"> | string | null
    number?: StringNullableFilter<"History"> | string | null
    method?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeNullableFilter<"History"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"History"> | Date | string | null
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
  }, "id" | "id">

  export type HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    number?: SortOrderInput | SortOrder
    method?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updateAt?: SortOrderInput | SortOrder
    _count?: HistoryCountOrderByAggregateInput
    _avg?: HistoryAvgOrderByAggregateInput
    _max?: HistoryMaxOrderByAggregateInput
    _min?: HistoryMinOrderByAggregateInput
    _sum?: HistorySumOrderByAggregateInput
  }

  export type HistoryScalarWhereWithAggregatesInput = {
    AND?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    OR?: HistoryScalarWhereWithAggregatesInput[]
    NOT?: HistoryScalarWhereWithAggregatesInput | HistoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"History"> | number
    clientid?: IntWithAggregatesFilter<"History"> | number
    amount?: DecimalWithAggregatesFilter<"History"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableWithAggregatesFilter<"History"> | string | null
    status?: StringNullableWithAggregatesFilter<"History"> | string | null
    number?: StringNullableWithAggregatesFilter<"History"> | string | null
    method?: StringNullableWithAggregatesFilter<"History"> | string | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"History"> | Date | string | null
    updateAt?: DateTimeNullableWithAggregatesFilter<"History"> | Date | string | null
  }

  export type AdminCreateInput = {
    fullname?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type AdminUncheckedCreateInput = {
    id?: number
    fullname?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type AdminUpdateInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminCreateManyInput = {
    id?: number
    fullname?: string | null
    email?: string | null
    password?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type AdminUpdateManyMutationInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AdminUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientCreateInput = {
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    Sendmoney?: SendmoneyCreateNestedManyWithoutClientInput
    receivedmoney?: ReceivedmoneyCreateNestedManyWithoutClientInput
    history?: HistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    Sendmoney?: SendmoneyUncheckedCreateNestedManyWithoutClientInput
    receivedmoney?: ReceivedmoneyUncheckedCreateNestedManyWithoutClientInput
    history?: HistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sendmoney?: SendmoneyUpdateManyWithoutClientNestedInput
    receivedmoney?: ReceivedmoneyUpdateManyWithoutClientNestedInput
    history?: HistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sendmoney?: SendmoneyUncheckedUpdateManyWithoutClientNestedInput
    receivedmoney?: ReceivedmoneyUncheckedUpdateManyWithoutClientNestedInput
    history?: HistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ClientUpdateManyMutationInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SendmoneyCreateInput = {
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    client: ClientCreateNestedOneWithoutSendmoneyInput
  }

  export type SendmoneyUncheckedCreateInput = {
    id?: number
    clientid: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type SendmoneyUpdateInput = {
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutSendmoneyNestedInput
  }

  export type SendmoneyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SendmoneyCreateManyInput = {
    id?: number
    clientid: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type SendmoneyUpdateManyMutationInput = {
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SendmoneyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceivedmoneyCreateInput = {
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    client: ClientCreateNestedOneWithoutReceivedmoneyInput
  }

  export type ReceivedmoneyUncheckedCreateInput = {
    id?: number
    clientid: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ReceivedmoneyUpdateInput = {
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutReceivedmoneyNestedInput
  }

  export type ReceivedmoneyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceivedmoneyCreateManyInput = {
    id?: number
    clientid: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ReceivedmoneyUpdateManyMutationInput = {
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceivedmoneyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryCreateInput = {
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: string | null
    number?: string | null
    method?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    client: ClientCreateNestedOneWithoutHistoryInput
  }

  export type HistoryUncheckedCreateInput = {
    id?: number
    clientid: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: string | null
    number?: string | null
    method?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type HistoryUpdateInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    client?: ClientUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type HistoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryCreateManyInput = {
    id?: number
    clientid: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: string | null
    number?: string | null
    method?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type HistoryUpdateManyMutationInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    clientid?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AdminAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type AdminSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SendmoneyListRelationFilter = {
    every?: SendmoneyWhereInput
    some?: SendmoneyWhereInput
    none?: SendmoneyWhereInput
  }

  export type ReceivedmoneyListRelationFilter = {
    every?: ReceivedmoneyWhereInput
    some?: ReceivedmoneyWhereInput
    none?: ReceivedmoneyWhereInput
  }

  export type HistoryListRelationFilter = {
    every?: HistoryWhereInput
    some?: HistoryWhereInput
    none?: HistoryWhereInput
  }

  export type SendmoneyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReceivedmoneyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    number?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    number?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    fullname?: SortOrder
    number?: SortOrder
    address?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type SendmoneyCountOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SendmoneyAvgOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
  }

  export type SendmoneyMaxOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SendmoneyMinOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type SendmoneySumOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type ReceivedmoneyCountOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReceivedmoneyAvgOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
  }

  export type ReceivedmoneyMaxOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReceivedmoneyMinOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    number?: SortOrder
    amount?: SortOrder
    method?: SortOrder
    note?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type ReceivedmoneySumOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    status?: SortOrder
    number?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HistoryAvgOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
  }

  export type HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    status?: SortOrder
    number?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    status?: SortOrder
    number?: SortOrder
    method?: SortOrder
    createdAt?: SortOrder
    updateAt?: SortOrder
  }

  export type HistorySumOrderByAggregateInput = {
    id?: SortOrder
    clientid?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type SendmoneyCreateNestedManyWithoutClientInput = {
    create?: XOR<SendmoneyCreateWithoutClientInput, SendmoneyUncheckedCreateWithoutClientInput> | SendmoneyCreateWithoutClientInput[] | SendmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SendmoneyCreateOrConnectWithoutClientInput | SendmoneyCreateOrConnectWithoutClientInput[]
    createMany?: SendmoneyCreateManyClientInputEnvelope
    connect?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
  }

  export type ReceivedmoneyCreateNestedManyWithoutClientInput = {
    create?: XOR<ReceivedmoneyCreateWithoutClientInput, ReceivedmoneyUncheckedCreateWithoutClientInput> | ReceivedmoneyCreateWithoutClientInput[] | ReceivedmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReceivedmoneyCreateOrConnectWithoutClientInput | ReceivedmoneyCreateOrConnectWithoutClientInput[]
    createMany?: ReceivedmoneyCreateManyClientInputEnvelope
    connect?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
  }

  export type HistoryCreateNestedManyWithoutClientInput = {
    create?: XOR<HistoryCreateWithoutClientInput, HistoryUncheckedCreateWithoutClientInput> | HistoryCreateWithoutClientInput[] | HistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutClientInput | HistoryCreateOrConnectWithoutClientInput[]
    createMany?: HistoryCreateManyClientInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type SendmoneyUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SendmoneyCreateWithoutClientInput, SendmoneyUncheckedCreateWithoutClientInput> | SendmoneyCreateWithoutClientInput[] | SendmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SendmoneyCreateOrConnectWithoutClientInput | SendmoneyCreateOrConnectWithoutClientInput[]
    createMany?: SendmoneyCreateManyClientInputEnvelope
    connect?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
  }

  export type ReceivedmoneyUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ReceivedmoneyCreateWithoutClientInput, ReceivedmoneyUncheckedCreateWithoutClientInput> | ReceivedmoneyCreateWithoutClientInput[] | ReceivedmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReceivedmoneyCreateOrConnectWithoutClientInput | ReceivedmoneyCreateOrConnectWithoutClientInput[]
    createMany?: ReceivedmoneyCreateManyClientInputEnvelope
    connect?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
  }

  export type HistoryUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<HistoryCreateWithoutClientInput, HistoryUncheckedCreateWithoutClientInput> | HistoryCreateWithoutClientInput[] | HistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutClientInput | HistoryCreateOrConnectWithoutClientInput[]
    createMany?: HistoryCreateManyClientInputEnvelope
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
  }

  export type SendmoneyUpdateManyWithoutClientNestedInput = {
    create?: XOR<SendmoneyCreateWithoutClientInput, SendmoneyUncheckedCreateWithoutClientInput> | SendmoneyCreateWithoutClientInput[] | SendmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SendmoneyCreateOrConnectWithoutClientInput | SendmoneyCreateOrConnectWithoutClientInput[]
    upsert?: SendmoneyUpsertWithWhereUniqueWithoutClientInput | SendmoneyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SendmoneyCreateManyClientInputEnvelope
    set?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    disconnect?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    delete?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    connect?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    update?: SendmoneyUpdateWithWhereUniqueWithoutClientInput | SendmoneyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SendmoneyUpdateManyWithWhereWithoutClientInput | SendmoneyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SendmoneyScalarWhereInput | SendmoneyScalarWhereInput[]
  }

  export type ReceivedmoneyUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReceivedmoneyCreateWithoutClientInput, ReceivedmoneyUncheckedCreateWithoutClientInput> | ReceivedmoneyCreateWithoutClientInput[] | ReceivedmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReceivedmoneyCreateOrConnectWithoutClientInput | ReceivedmoneyCreateOrConnectWithoutClientInput[]
    upsert?: ReceivedmoneyUpsertWithWhereUniqueWithoutClientInput | ReceivedmoneyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReceivedmoneyCreateManyClientInputEnvelope
    set?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    disconnect?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    delete?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    connect?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    update?: ReceivedmoneyUpdateWithWhereUniqueWithoutClientInput | ReceivedmoneyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReceivedmoneyUpdateManyWithWhereWithoutClientInput | ReceivedmoneyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReceivedmoneyScalarWhereInput | ReceivedmoneyScalarWhereInput[]
  }

  export type HistoryUpdateManyWithoutClientNestedInput = {
    create?: XOR<HistoryCreateWithoutClientInput, HistoryUncheckedCreateWithoutClientInput> | HistoryCreateWithoutClientInput[] | HistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutClientInput | HistoryCreateOrConnectWithoutClientInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutClientInput | HistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: HistoryCreateManyClientInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutClientInput | HistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutClientInput | HistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type SendmoneyUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SendmoneyCreateWithoutClientInput, SendmoneyUncheckedCreateWithoutClientInput> | SendmoneyCreateWithoutClientInput[] | SendmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SendmoneyCreateOrConnectWithoutClientInput | SendmoneyCreateOrConnectWithoutClientInput[]
    upsert?: SendmoneyUpsertWithWhereUniqueWithoutClientInput | SendmoneyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SendmoneyCreateManyClientInputEnvelope
    set?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    disconnect?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    delete?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    connect?: SendmoneyWhereUniqueInput | SendmoneyWhereUniqueInput[]
    update?: SendmoneyUpdateWithWhereUniqueWithoutClientInput | SendmoneyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SendmoneyUpdateManyWithWhereWithoutClientInput | SendmoneyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SendmoneyScalarWhereInput | SendmoneyScalarWhereInput[]
  }

  export type ReceivedmoneyUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ReceivedmoneyCreateWithoutClientInput, ReceivedmoneyUncheckedCreateWithoutClientInput> | ReceivedmoneyCreateWithoutClientInput[] | ReceivedmoneyUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ReceivedmoneyCreateOrConnectWithoutClientInput | ReceivedmoneyCreateOrConnectWithoutClientInput[]
    upsert?: ReceivedmoneyUpsertWithWhereUniqueWithoutClientInput | ReceivedmoneyUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ReceivedmoneyCreateManyClientInputEnvelope
    set?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    disconnect?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    delete?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    connect?: ReceivedmoneyWhereUniqueInput | ReceivedmoneyWhereUniqueInput[]
    update?: ReceivedmoneyUpdateWithWhereUniqueWithoutClientInput | ReceivedmoneyUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ReceivedmoneyUpdateManyWithWhereWithoutClientInput | ReceivedmoneyUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ReceivedmoneyScalarWhereInput | ReceivedmoneyScalarWhereInput[]
  }

  export type HistoryUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<HistoryCreateWithoutClientInput, HistoryUncheckedCreateWithoutClientInput> | HistoryCreateWithoutClientInput[] | HistoryUncheckedCreateWithoutClientInput[]
    connectOrCreate?: HistoryCreateOrConnectWithoutClientInput | HistoryCreateOrConnectWithoutClientInput[]
    upsert?: HistoryUpsertWithWhereUniqueWithoutClientInput | HistoryUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: HistoryCreateManyClientInputEnvelope
    set?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    disconnect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    delete?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    connect?: HistoryWhereUniqueInput | HistoryWhereUniqueInput[]
    update?: HistoryUpdateWithWhereUniqueWithoutClientInput | HistoryUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: HistoryUpdateManyWithWhereWithoutClientInput | HistoryUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSendmoneyInput = {
    create?: XOR<ClientCreateWithoutSendmoneyInput, ClientUncheckedCreateWithoutSendmoneyInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSendmoneyInput
    connect?: ClientWhereUniqueInput
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClientUpdateOneRequiredWithoutSendmoneyNestedInput = {
    create?: XOR<ClientCreateWithoutSendmoneyInput, ClientUncheckedCreateWithoutSendmoneyInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSendmoneyInput
    upsert?: ClientUpsertWithoutSendmoneyInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSendmoneyInput, ClientUpdateWithoutSendmoneyInput>, ClientUncheckedUpdateWithoutSendmoneyInput>
  }

  export type ClientCreateNestedOneWithoutReceivedmoneyInput = {
    create?: XOR<ClientCreateWithoutReceivedmoneyInput, ClientUncheckedCreateWithoutReceivedmoneyInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReceivedmoneyInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutReceivedmoneyNestedInput = {
    create?: XOR<ClientCreateWithoutReceivedmoneyInput, ClientUncheckedCreateWithoutReceivedmoneyInput>
    connectOrCreate?: ClientCreateOrConnectWithoutReceivedmoneyInput
    upsert?: ClientUpsertWithoutReceivedmoneyInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutReceivedmoneyInput, ClientUpdateWithoutReceivedmoneyInput>, ClientUncheckedUpdateWithoutReceivedmoneyInput>
  }

  export type ClientCreateNestedOneWithoutHistoryInput = {
    create?: XOR<ClientCreateWithoutHistoryInput, ClientUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ClientCreateOrConnectWithoutHistoryInput
    connect?: ClientWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ClientUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<ClientCreateWithoutHistoryInput, ClientUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: ClientCreateOrConnectWithoutHistoryInput
    upsert?: ClientUpsertWithoutHistoryInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutHistoryInput, ClientUpdateWithoutHistoryInput>, ClientUncheckedUpdateWithoutHistoryInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type SendmoneyCreateWithoutClientInput = {
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type SendmoneyUncheckedCreateWithoutClientInput = {
    id?: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type SendmoneyCreateOrConnectWithoutClientInput = {
    where: SendmoneyWhereUniqueInput
    create: XOR<SendmoneyCreateWithoutClientInput, SendmoneyUncheckedCreateWithoutClientInput>
  }

  export type SendmoneyCreateManyClientInputEnvelope = {
    data: SendmoneyCreateManyClientInput | SendmoneyCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ReceivedmoneyCreateWithoutClientInput = {
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ReceivedmoneyUncheckedCreateWithoutClientInput = {
    id?: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ReceivedmoneyCreateOrConnectWithoutClientInput = {
    where: ReceivedmoneyWhereUniqueInput
    create: XOR<ReceivedmoneyCreateWithoutClientInput, ReceivedmoneyUncheckedCreateWithoutClientInput>
  }

  export type ReceivedmoneyCreateManyClientInputEnvelope = {
    data: ReceivedmoneyCreateManyClientInput | ReceivedmoneyCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type HistoryCreateWithoutClientInput = {
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: string | null
    number?: string | null
    method?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type HistoryUncheckedCreateWithoutClientInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: string | null
    number?: string | null
    method?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type HistoryCreateOrConnectWithoutClientInput = {
    where: HistoryWhereUniqueInput
    create: XOR<HistoryCreateWithoutClientInput, HistoryUncheckedCreateWithoutClientInput>
  }

  export type HistoryCreateManyClientInputEnvelope = {
    data: HistoryCreateManyClientInput | HistoryCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type SendmoneyUpsertWithWhereUniqueWithoutClientInput = {
    where: SendmoneyWhereUniqueInput
    update: XOR<SendmoneyUpdateWithoutClientInput, SendmoneyUncheckedUpdateWithoutClientInput>
    create: XOR<SendmoneyCreateWithoutClientInput, SendmoneyUncheckedCreateWithoutClientInput>
  }

  export type SendmoneyUpdateWithWhereUniqueWithoutClientInput = {
    where: SendmoneyWhereUniqueInput
    data: XOR<SendmoneyUpdateWithoutClientInput, SendmoneyUncheckedUpdateWithoutClientInput>
  }

  export type SendmoneyUpdateManyWithWhereWithoutClientInput = {
    where: SendmoneyScalarWhereInput
    data: XOR<SendmoneyUpdateManyMutationInput, SendmoneyUncheckedUpdateManyWithoutClientInput>
  }

  export type SendmoneyScalarWhereInput = {
    AND?: SendmoneyScalarWhereInput | SendmoneyScalarWhereInput[]
    OR?: SendmoneyScalarWhereInput[]
    NOT?: SendmoneyScalarWhereInput | SendmoneyScalarWhereInput[]
    id?: IntFilter<"Sendmoney"> | number
    clientid?: IntFilter<"Sendmoney"> | number
    number?: StringNullableFilter<"Sendmoney"> | string | null
    amount?: DecimalNullableFilter<"Sendmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableFilter<"Sendmoney"> | string | null
    note?: StringNullableFilter<"Sendmoney"> | string | null
    createdAt?: DateTimeNullableFilter<"Sendmoney"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Sendmoney"> | Date | string | null
  }

  export type ReceivedmoneyUpsertWithWhereUniqueWithoutClientInput = {
    where: ReceivedmoneyWhereUniqueInput
    update: XOR<ReceivedmoneyUpdateWithoutClientInput, ReceivedmoneyUncheckedUpdateWithoutClientInput>
    create: XOR<ReceivedmoneyCreateWithoutClientInput, ReceivedmoneyUncheckedCreateWithoutClientInput>
  }

  export type ReceivedmoneyUpdateWithWhereUniqueWithoutClientInput = {
    where: ReceivedmoneyWhereUniqueInput
    data: XOR<ReceivedmoneyUpdateWithoutClientInput, ReceivedmoneyUncheckedUpdateWithoutClientInput>
  }

  export type ReceivedmoneyUpdateManyWithWhereWithoutClientInput = {
    where: ReceivedmoneyScalarWhereInput
    data: XOR<ReceivedmoneyUpdateManyMutationInput, ReceivedmoneyUncheckedUpdateManyWithoutClientInput>
  }

  export type ReceivedmoneyScalarWhereInput = {
    AND?: ReceivedmoneyScalarWhereInput | ReceivedmoneyScalarWhereInput[]
    OR?: ReceivedmoneyScalarWhereInput[]
    NOT?: ReceivedmoneyScalarWhereInput | ReceivedmoneyScalarWhereInput[]
    id?: IntFilter<"Receivedmoney"> | number
    clientid?: IntFilter<"Receivedmoney"> | number
    number?: StringNullableFilter<"Receivedmoney"> | string | null
    amount?: DecimalNullableFilter<"Receivedmoney"> | Decimal | DecimalJsLike | number | string | null
    method?: StringNullableFilter<"Receivedmoney"> | string | null
    note?: StringNullableFilter<"Receivedmoney"> | string | null
    createdAt?: DateTimeNullableFilter<"Receivedmoney"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"Receivedmoney"> | Date | string | null
  }

  export type HistoryUpsertWithWhereUniqueWithoutClientInput = {
    where: HistoryWhereUniqueInput
    update: XOR<HistoryUpdateWithoutClientInput, HistoryUncheckedUpdateWithoutClientInput>
    create: XOR<HistoryCreateWithoutClientInput, HistoryUncheckedCreateWithoutClientInput>
  }

  export type HistoryUpdateWithWhereUniqueWithoutClientInput = {
    where: HistoryWhereUniqueInput
    data: XOR<HistoryUpdateWithoutClientInput, HistoryUncheckedUpdateWithoutClientInput>
  }

  export type HistoryUpdateManyWithWhereWithoutClientInput = {
    where: HistoryScalarWhereInput
    data: XOR<HistoryUpdateManyMutationInput, HistoryUncheckedUpdateManyWithoutClientInput>
  }

  export type HistoryScalarWhereInput = {
    AND?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    OR?: HistoryScalarWhereInput[]
    NOT?: HistoryScalarWhereInput | HistoryScalarWhereInput[]
    id?: IntFilter<"History"> | number
    clientid?: IntFilter<"History"> | number
    amount?: DecimalFilter<"History"> | Decimal | DecimalJsLike | number | string
    note?: StringNullableFilter<"History"> | string | null
    status?: StringNullableFilter<"History"> | string | null
    number?: StringNullableFilter<"History"> | string | null
    method?: StringNullableFilter<"History"> | string | null
    createdAt?: DateTimeNullableFilter<"History"> | Date | string | null
    updateAt?: DateTimeNullableFilter<"History"> | Date | string | null
  }

  export type ClientCreateWithoutSendmoneyInput = {
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    receivedmoney?: ReceivedmoneyCreateNestedManyWithoutClientInput
    history?: HistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSendmoneyInput = {
    id?: number
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    receivedmoney?: ReceivedmoneyUncheckedCreateNestedManyWithoutClientInput
    history?: HistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutSendmoneyInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSendmoneyInput, ClientUncheckedCreateWithoutSendmoneyInput>
  }

  export type ClientUpsertWithoutSendmoneyInput = {
    update: XOR<ClientUpdateWithoutSendmoneyInput, ClientUncheckedUpdateWithoutSendmoneyInput>
    create: XOR<ClientCreateWithoutSendmoneyInput, ClientUncheckedCreateWithoutSendmoneyInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSendmoneyInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSendmoneyInput, ClientUncheckedUpdateWithoutSendmoneyInput>
  }

  export type ClientUpdateWithoutSendmoneyInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedmoney?: ReceivedmoneyUpdateManyWithoutClientNestedInput
    history?: HistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSendmoneyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    receivedmoney?: ReceivedmoneyUncheckedUpdateManyWithoutClientNestedInput
    history?: HistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutReceivedmoneyInput = {
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    Sendmoney?: SendmoneyCreateNestedManyWithoutClientInput
    history?: HistoryCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutReceivedmoneyInput = {
    id?: number
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    Sendmoney?: SendmoneyUncheckedCreateNestedManyWithoutClientInput
    history?: HistoryUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutReceivedmoneyInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutReceivedmoneyInput, ClientUncheckedCreateWithoutReceivedmoneyInput>
  }

  export type ClientUpsertWithoutReceivedmoneyInput = {
    update: XOR<ClientUpdateWithoutReceivedmoneyInput, ClientUncheckedUpdateWithoutReceivedmoneyInput>
    create: XOR<ClientCreateWithoutReceivedmoneyInput, ClientUncheckedCreateWithoutReceivedmoneyInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutReceivedmoneyInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutReceivedmoneyInput, ClientUncheckedUpdateWithoutReceivedmoneyInput>
  }

  export type ClientUpdateWithoutReceivedmoneyInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sendmoney?: SendmoneyUpdateManyWithoutClientNestedInput
    history?: HistoryUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutReceivedmoneyInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sendmoney?: SendmoneyUncheckedUpdateManyWithoutClientNestedInput
    history?: HistoryUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateWithoutHistoryInput = {
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    Sendmoney?: SendmoneyCreateNestedManyWithoutClientInput
    receivedmoney?: ReceivedmoneyCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutHistoryInput = {
    id?: number
    fullname?: string | null
    number?: string | null
    address?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
    Sendmoney?: SendmoneyUncheckedCreateNestedManyWithoutClientInput
    receivedmoney?: ReceivedmoneyUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutHistoryInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutHistoryInput, ClientUncheckedCreateWithoutHistoryInput>
  }

  export type ClientUpsertWithoutHistoryInput = {
    update: XOR<ClientUpdateWithoutHistoryInput, ClientUncheckedUpdateWithoutHistoryInput>
    create: XOR<ClientCreateWithoutHistoryInput, ClientUncheckedCreateWithoutHistoryInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutHistoryInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutHistoryInput, ClientUncheckedUpdateWithoutHistoryInput>
  }

  export type ClientUpdateWithoutHistoryInput = {
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sendmoney?: SendmoneyUpdateManyWithoutClientNestedInput
    receivedmoney?: ReceivedmoneyUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutHistoryInput = {
    id?: IntFieldUpdateOperationsInput | number
    fullname?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    Sendmoney?: SendmoneyUncheckedUpdateManyWithoutClientNestedInput
    receivedmoney?: ReceivedmoneyUncheckedUpdateManyWithoutClientNestedInput
  }

  export type SendmoneyCreateManyClientInput = {
    id?: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type ReceivedmoneyCreateManyClientInput = {
    id?: number
    number?: string | null
    amount?: Decimal | DecimalJsLike | number | string | null
    method?: string | null
    note?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type HistoryCreateManyClientInput = {
    id?: number
    amount: Decimal | DecimalJsLike | number | string
    note?: string | null
    status?: string | null
    number?: string | null
    method?: string | null
    createdAt?: Date | string | null
    updateAt?: Date | string | null
  }

  export type SendmoneyUpdateWithoutClientInput = {
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SendmoneyUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type SendmoneyUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceivedmoneyUpdateWithoutClientInput = {
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceivedmoneyUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ReceivedmoneyUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: NullableStringFieldUpdateOperationsInput | string | null
    amount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    note?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUpdateWithoutClientInput = {
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type HistoryUncheckedUpdateManyWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    number?: NullableStringFieldUpdateOperationsInput | string | null
    method?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updateAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
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