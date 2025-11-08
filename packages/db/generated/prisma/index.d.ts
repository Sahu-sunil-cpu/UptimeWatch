
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
 * Model Website
 * 
 */
export type Website = $Result.DefaultSelection<Prisma.$WebsitePayload>
/**
 * Model Dns
 * 
 */
export type Dns = $Result.DefaultSelection<Prisma.$DnsPayload>
/**
 * Model WebsiteTick
 * 
 */
export type WebsiteTick = $Result.DefaultSelection<Prisma.$WebsiteTickPayload>
/**
 * Model DnsTick
 * 
 */
export type DnsTick = $Result.DefaultSelection<Prisma.$DnsTickPayload>
/**
 * Model DnsRecord
 * 
 */
export type DnsRecord = $Result.DefaultSelection<Prisma.$DnsRecordPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Alerts
 * 
 */
export type Alerts = $Result.DefaultSelection<Prisma.$AlertsPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Alert: {
  Dns: 'Dns',
  Ping: 'Ping'
};

export type Alert = (typeof Alert)[keyof typeof Alert]


export const AlertStatus: {
  Ongoing: 'Ongoing',
  Resolved: 'Resolved'
};

export type AlertStatus = (typeof AlertStatus)[keyof typeof AlertStatus]


export const MsgType: {
  Email: 'Email',
  Sms: 'Sms',
  Slack: 'Slack',
  Discord: 'Discord',
  Call: 'Call'
};

export type MsgType = (typeof MsgType)[keyof typeof MsgType]


export const WebsiteStatus: {
  Up: 'Up',
  Down: 'Down',
  Unknown: 'Unknown'
};

export type WebsiteStatus = (typeof WebsiteStatus)[keyof typeof WebsiteStatus]


export const DnsStatus: {
  Ok: 'Ok',
  Warning: 'Warning',
  Fail: 'Fail'
};

export type DnsStatus = (typeof DnsStatus)[keyof typeof DnsStatus]


export const Record: {
  A: 'A',
  AAAA: 'AAAA',
  MX: 'MX',
  CNAME: 'CNAME'
};

export type Record = (typeof Record)[keyof typeof Record]

}

export type Alert = $Enums.Alert

export const Alert: typeof $Enums.Alert

export type AlertStatus = $Enums.AlertStatus

export const AlertStatus: typeof $Enums.AlertStatus

export type MsgType = $Enums.MsgType

export const MsgType: typeof $Enums.MsgType

export type WebsiteStatus = $Enums.WebsiteStatus

export const WebsiteStatus: typeof $Enums.WebsiteStatus

export type DnsStatus = $Enums.DnsStatus

export const DnsStatus: typeof $Enums.DnsStatus

export type Record = $Enums.Record

export const Record: typeof $Enums.Record

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Websites
 * const websites = await prisma.website.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Websites
   * const websites = await prisma.website.findMany()
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
   * `prisma.website`: Exposes CRUD operations for the **Website** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Websites
    * const websites = await prisma.website.findMany()
    * ```
    */
  get website(): Prisma.WebsiteDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dns`: Exposes CRUD operations for the **Dns** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Dns
    * const dns = await prisma.dns.findMany()
    * ```
    */
  get dns(): Prisma.DnsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.websiteTick`: Exposes CRUD operations for the **WebsiteTick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WebsiteTicks
    * const websiteTicks = await prisma.websiteTick.findMany()
    * ```
    */
  get websiteTick(): Prisma.WebsiteTickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dnsTick`: Exposes CRUD operations for the **DnsTick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DnsTicks
    * const dnsTicks = await prisma.dnsTick.findMany()
    * ```
    */
  get dnsTick(): Prisma.DnsTickDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.dnsRecord`: Exposes CRUD operations for the **DnsRecord** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DnsRecords
    * const dnsRecords = await prisma.dnsRecord.findMany()
    * ```
    */
  get dnsRecord(): Prisma.DnsRecordDelegate<ExtArgs, ClientOptions>;

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
   * `prisma.alerts`: Exposes CRUD operations for the **Alerts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Alerts
    * const alerts = await prisma.alerts.findMany()
    * ```
    */
  get alerts(): Prisma.AlertsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.18.0
   * Query Engine version: 34b5a692b7bd79939a9a2c3ef97d816e749cda2f
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
    Website: 'Website',
    Dns: 'Dns',
    WebsiteTick: 'WebsiteTick',
    DnsTick: 'DnsTick',
    DnsRecord: 'DnsRecord',
    User: 'User',
    Alerts: 'Alerts',
    Region: 'Region'
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
      modelProps: "website" | "dns" | "websiteTick" | "dnsTick" | "dnsRecord" | "user" | "alerts" | "region"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Website: {
        payload: Prisma.$WebsitePayload<ExtArgs>
        fields: Prisma.WebsiteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findFirst: {
            args: Prisma.WebsiteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          findMany: {
            args: Prisma.WebsiteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          create: {
            args: Prisma.WebsiteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          createMany: {
            args: Prisma.WebsiteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          delete: {
            args: Prisma.WebsiteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          update: {
            args: Prisma.WebsiteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          deleteMany: {
            args: Prisma.WebsiteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>[]
          }
          upsert: {
            args: Prisma.WebsiteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsitePayload>
          }
          aggregate: {
            args: Prisma.WebsiteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsite>
          }
          groupBy: {
            args: Prisma.WebsiteGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteCountAggregateOutputType> | number
          }
        }
      }
      Dns: {
        payload: Prisma.$DnsPayload<ExtArgs>
        fields: Prisma.DnsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DnsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DnsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>
          }
          findFirst: {
            args: Prisma.DnsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DnsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>
          }
          findMany: {
            args: Prisma.DnsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>[]
          }
          create: {
            args: Prisma.DnsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>
          }
          createMany: {
            args: Prisma.DnsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DnsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>[]
          }
          delete: {
            args: Prisma.DnsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>
          }
          update: {
            args: Prisma.DnsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>
          }
          deleteMany: {
            args: Prisma.DnsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DnsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DnsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>[]
          }
          upsert: {
            args: Prisma.DnsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsPayload>
          }
          aggregate: {
            args: Prisma.DnsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDns>
          }
          groupBy: {
            args: Prisma.DnsGroupByArgs<ExtArgs>
            result: $Utils.Optional<DnsGroupByOutputType>[]
          }
          count: {
            args: Prisma.DnsCountArgs<ExtArgs>
            result: $Utils.Optional<DnsCountAggregateOutputType> | number
          }
        }
      }
      WebsiteTick: {
        payload: Prisma.$WebsiteTickPayload<ExtArgs>
        fields: Prisma.WebsiteTickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WebsiteTickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WebsiteTickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          findFirst: {
            args: Prisma.WebsiteTickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WebsiteTickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          findMany: {
            args: Prisma.WebsiteTickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>[]
          }
          create: {
            args: Prisma.WebsiteTickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          createMany: {
            args: Prisma.WebsiteTickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WebsiteTickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>[]
          }
          delete: {
            args: Prisma.WebsiteTickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          update: {
            args: Prisma.WebsiteTickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          deleteMany: {
            args: Prisma.WebsiteTickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WebsiteTickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WebsiteTickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>[]
          }
          upsert: {
            args: Prisma.WebsiteTickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WebsiteTickPayload>
          }
          aggregate: {
            args: Prisma.WebsiteTickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWebsiteTick>
          }
          groupBy: {
            args: Prisma.WebsiteTickGroupByArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTickGroupByOutputType>[]
          }
          count: {
            args: Prisma.WebsiteTickCountArgs<ExtArgs>
            result: $Utils.Optional<WebsiteTickCountAggregateOutputType> | number
          }
        }
      }
      DnsTick: {
        payload: Prisma.$DnsTickPayload<ExtArgs>
        fields: Prisma.DnsTickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DnsTickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DnsTickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>
          }
          findFirst: {
            args: Prisma.DnsTickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DnsTickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>
          }
          findMany: {
            args: Prisma.DnsTickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>[]
          }
          create: {
            args: Prisma.DnsTickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>
          }
          createMany: {
            args: Prisma.DnsTickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DnsTickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>[]
          }
          delete: {
            args: Prisma.DnsTickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>
          }
          update: {
            args: Prisma.DnsTickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>
          }
          deleteMany: {
            args: Prisma.DnsTickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DnsTickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DnsTickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>[]
          }
          upsert: {
            args: Prisma.DnsTickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsTickPayload>
          }
          aggregate: {
            args: Prisma.DnsTickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDnsTick>
          }
          groupBy: {
            args: Prisma.DnsTickGroupByArgs<ExtArgs>
            result: $Utils.Optional<DnsTickGroupByOutputType>[]
          }
          count: {
            args: Prisma.DnsTickCountArgs<ExtArgs>
            result: $Utils.Optional<DnsTickCountAggregateOutputType> | number
          }
        }
      }
      DnsRecord: {
        payload: Prisma.$DnsRecordPayload<ExtArgs>
        fields: Prisma.DnsRecordFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DnsRecordFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DnsRecordFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>
          }
          findFirst: {
            args: Prisma.DnsRecordFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DnsRecordFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>
          }
          findMany: {
            args: Prisma.DnsRecordFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>[]
          }
          create: {
            args: Prisma.DnsRecordCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>
          }
          createMany: {
            args: Prisma.DnsRecordCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DnsRecordCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>[]
          }
          delete: {
            args: Prisma.DnsRecordDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>
          }
          update: {
            args: Prisma.DnsRecordUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>
          }
          deleteMany: {
            args: Prisma.DnsRecordDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DnsRecordUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DnsRecordUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>[]
          }
          upsert: {
            args: Prisma.DnsRecordUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DnsRecordPayload>
          }
          aggregate: {
            args: Prisma.DnsRecordAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDnsRecord>
          }
          groupBy: {
            args: Prisma.DnsRecordGroupByArgs<ExtArgs>
            result: $Utils.Optional<DnsRecordGroupByOutputType>[]
          }
          count: {
            args: Prisma.DnsRecordCountArgs<ExtArgs>
            result: $Utils.Optional<DnsRecordCountAggregateOutputType> | number
          }
        }
      }
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
      Alerts: {
        payload: Prisma.$AlertsPayload<ExtArgs>
        fields: Prisma.AlertsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlertsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlertsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>
          }
          findFirst: {
            args: Prisma.AlertsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlertsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>
          }
          findMany: {
            args: Prisma.AlertsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>[]
          }
          create: {
            args: Prisma.AlertsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>
          }
          createMany: {
            args: Prisma.AlertsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AlertsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>[]
          }
          delete: {
            args: Prisma.AlertsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>
          }
          update: {
            args: Prisma.AlertsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>
          }
          deleteMany: {
            args: Prisma.AlertsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AlertsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AlertsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>[]
          }
          upsert: {
            args: Prisma.AlertsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AlertsPayload>
          }
          aggregate: {
            args: Prisma.AlertsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAlerts>
          }
          groupBy: {
            args: Prisma.AlertsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AlertsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AlertsCountArgs<ExtArgs>
            result: $Utils.Optional<AlertsCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    website?: WebsiteOmit
    dns?: DnsOmit
    websiteTick?: WebsiteTickOmit
    dnsTick?: DnsTickOmit
    dnsRecord?: DnsRecordOmit
    user?: UserOmit
    alerts?: AlertsOmit
    region?: RegionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type WebsiteCountOutputType
   */

  export type WebsiteCountOutputType = {
    ticks: number
  }

  export type WebsiteCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | WebsiteCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteCountOutputType
     */
    select?: WebsiteCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WebsiteCountOutputType without action
   */
  export type WebsiteCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTickWhereInput
  }


  /**
   * Count Type DnsCountOutputType
   */

  export type DnsCountOutputType = {
    ticks: number
  }

  export type DnsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | DnsCountOutputTypeCountTicksArgs
  }

  // Custom InputTypes
  /**
   * DnsCountOutputType without action
   */
  export type DnsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsCountOutputType
     */
    select?: DnsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DnsCountOutputType without action
   */
  export type DnsCountOutputTypeCountTicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DnsTickWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    Websites: number
    alert: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Websites?: boolean | UserCountOutputTypeCountWebsitesArgs
    alert?: boolean | UserCountOutputTypeCountAlertArgs
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
  export type UserCountOutputTypeCountWebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAlertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Website
   */

  export type AggregateWebsite = {
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  export type WebsiteMinAggregateOutputType = {
    id: string | null
    url: string | null
    userId: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteMaxAggregateOutputType = {
    id: string | null
    url: string | null
    userId: string | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WebsiteCountAggregateOutputType = {
    id: number
    url: number
    userId: number
    active: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WebsiteMinAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteMaxAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    active?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WebsiteCountAggregateInputType = {
    id?: true
    url?: true
    userId?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WebsiteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Website to aggregate.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Websites
    **/
    _count?: true | WebsiteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteMaxAggregateInputType
  }

  export type GetWebsiteAggregateType<T extends WebsiteAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsite[P]>
      : GetScalarType<T[P], AggregateWebsite[P]>
  }




  export type WebsiteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithAggregationInput | WebsiteOrderByWithAggregationInput[]
    by: WebsiteScalarFieldEnum[] | WebsiteScalarFieldEnum
    having?: WebsiteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteCountAggregateInputType | true
    _min?: WebsiteMinAggregateInputType
    _max?: WebsiteMaxAggregateInputType
  }

  export type WebsiteGroupByOutputType = {
    id: string
    url: string
    userId: string
    active: boolean
    createdAt: Date
    updatedAt: Date
    _count: WebsiteCountAggregateOutputType | null
    _min: WebsiteMinAggregateOutputType | null
    _max: WebsiteMaxAggregateOutputType | null
  }

  type GetWebsiteGroupByPayload<T extends WebsiteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
    ticks?: boolean | Website$ticksArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    url?: boolean
    userId?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    User?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["website"]>

  export type WebsiteSelectScalar = {
    id?: boolean
    url?: boolean
    userId?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WebsiteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "url" | "userId" | "active" | "createdAt" | "updatedAt", ExtArgs["result"]["website"]>
  export type WebsiteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
    ticks?: boolean | Website$ticksArgs<ExtArgs>
    _count?: boolean | WebsiteCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WebsiteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    User?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WebsitePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Website"
    objects: {
      User: Prisma.$UserPayload<ExtArgs>
      ticks: Prisma.$WebsiteTickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      url: string
      userId: string
      active: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["website"]>
    composites: {}
  }

  type WebsiteGetPayload<S extends boolean | null | undefined | WebsiteDefaultArgs> = $Result.GetResult<Prisma.$WebsitePayload, S>

  type WebsiteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteCountAggregateInputType | true
    }

  export interface WebsiteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Website'], meta: { name: 'Website' } }
    /**
     * Find zero or one Website that matches the filter.
     * @param {WebsiteFindUniqueArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteFindUniqueArgs>(args: SelectSubset<T, WebsiteFindUniqueArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Website that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteFindUniqueOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteFindFirstArgs>(args?: SelectSubset<T, WebsiteFindFirstArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Website that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindFirstOrThrowArgs} args - Arguments to find a Website
     * @example
     * // Get one Website
     * const website = await prisma.website.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Websites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Websites
     * const websites = await prisma.website.findMany()
     * 
     * // Get first 10 Websites
     * const websites = await prisma.website.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteWithIdOnly = await prisma.website.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteFindManyArgs>(args?: SelectSubset<T, WebsiteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Website.
     * @param {WebsiteCreateArgs} args - Arguments to create a Website.
     * @example
     * // Create one Website
     * const Website = await prisma.website.create({
     *   data: {
     *     // ... data to create a Website
     *   }
     * })
     * 
     */
    create<T extends WebsiteCreateArgs>(args: SelectSubset<T, WebsiteCreateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Websites.
     * @param {WebsiteCreateManyArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteCreateManyArgs>(args?: SelectSubset<T, WebsiteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Websites and returns the data saved in the database.
     * @param {WebsiteCreateManyAndReturnArgs} args - Arguments to create many Websites.
     * @example
     * // Create many Websites
     * const website = await prisma.website.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Website.
     * @param {WebsiteDeleteArgs} args - Arguments to delete one Website.
     * @example
     * // Delete one Website
     * const Website = await prisma.website.delete({
     *   where: {
     *     // ... filter to delete one Website
     *   }
     * })
     * 
     */
    delete<T extends WebsiteDeleteArgs>(args: SelectSubset<T, WebsiteDeleteArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Website.
     * @param {WebsiteUpdateArgs} args - Arguments to update one Website.
     * @example
     * // Update one Website
     * const website = await prisma.website.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteUpdateArgs>(args: SelectSubset<T, WebsiteUpdateArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Websites.
     * @param {WebsiteDeleteManyArgs} args - Arguments to filter Websites to delete.
     * @example
     * // Delete a few Websites
     * const { count } = await prisma.website.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteDeleteManyArgs>(args?: SelectSubset<T, WebsiteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteUpdateManyArgs>(args: SelectSubset<T, WebsiteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Websites and returns the data updated in the database.
     * @param {WebsiteUpdateManyAndReturnArgs} args - Arguments to update many Websites.
     * @example
     * // Update many Websites
     * const website = await prisma.website.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Websites and only return the `id`
     * const websiteWithIdOnly = await prisma.website.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebsiteUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Website.
     * @param {WebsiteUpsertArgs} args - Arguments to update or create a Website.
     * @example
     * // Update or create a Website
     * const website = await prisma.website.upsert({
     *   create: {
     *     // ... data to create a Website
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Website we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteUpsertArgs>(args: SelectSubset<T, WebsiteUpsertArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Websites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteCountArgs} args - Arguments to filter Websites to count.
     * @example
     * // Count the number of Websites
     * const count = await prisma.website.count({
     *   where: {
     *     // ... the filter for the Websites we want to count
     *   }
     * })
    **/
    count<T extends WebsiteCountArgs>(
      args?: Subset<T, WebsiteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteAggregateArgs>(args: Subset<T, WebsiteAggregateArgs>): Prisma.PrismaPromise<GetWebsiteAggregateType<T>>

    /**
     * Group by Website.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteGroupByArgs} args - Group by arguments.
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
      T extends WebsiteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Website model
   */
  readonly fields: WebsiteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Website.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    User<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    ticks<T extends Website$ticksArgs<ExtArgs> = {}>(args?: Subset<T, Website$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Website model
   */
  interface WebsiteFieldRefs {
    readonly id: FieldRef<"Website", 'String'>
    readonly url: FieldRef<"Website", 'String'>
    readonly userId: FieldRef<"Website", 'String'>
    readonly active: FieldRef<"Website", 'Boolean'>
    readonly createdAt: FieldRef<"Website", 'DateTime'>
    readonly updatedAt: FieldRef<"Website", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Website findUnique
   */
  export type WebsiteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findUniqueOrThrow
   */
  export type WebsiteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website findFirst
   */
  export type WebsiteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findFirstOrThrow
   */
  export type WebsiteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Website to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Websites.
     */
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website findMany
   */
  export type WebsiteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter, which Websites to fetch.
     */
    where?: WebsiteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Websites to fetch.
     */
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Websites.
     */
    cursor?: WebsiteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Websites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Websites.
     */
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * Website create
   */
  export type WebsiteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to create a Website.
     */
    data: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
  }

  /**
   * Website createMany
   */
  export type WebsiteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Website createManyAndReturn
   */
  export type WebsiteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to create many Websites.
     */
    data: WebsiteCreateManyInput | WebsiteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Website update
   */
  export type WebsiteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The data needed to update a Website.
     */
    data: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
    /**
     * Choose, which Website to update.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website updateMany
   */
  export type WebsiteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
  }

  /**
   * Website updateManyAndReturn
   */
  export type WebsiteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * The data used to update Websites.
     */
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyInput>
    /**
     * Filter which Websites to update
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Website upsert
   */
  export type WebsiteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * The filter to search for the Website to update in case it exists.
     */
    where: WebsiteWhereUniqueInput
    /**
     * In case the Website found by the `where` argument doesn't exist, create a new Website with this data.
     */
    create: XOR<WebsiteCreateInput, WebsiteUncheckedCreateInput>
    /**
     * In case the Website was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteUpdateInput, WebsiteUncheckedUpdateInput>
  }

  /**
   * Website delete
   */
  export type WebsiteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    /**
     * Filter which Website to delete.
     */
    where: WebsiteWhereUniqueInput
  }

  /**
   * Website deleteMany
   */
  export type WebsiteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Websites to delete
     */
    where?: WebsiteWhereInput
    /**
     * Limit how many Websites to delete.
     */
    limit?: number
  }

  /**
   * Website.ticks
   */
  export type Website$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    where?: WebsiteTickWhereInput
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    cursor?: WebsiteTickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * Website without action
   */
  export type WebsiteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
  }


  /**
   * Model Dns
   */

  export type AggregateDns = {
    _count: DnsCountAggregateOutputType | null
    _avg: DnsAvgAggregateOutputType | null
    _sum: DnsSumAggregateOutputType | null
    _min: DnsMinAggregateOutputType | null
    _max: DnsMaxAggregateOutputType | null
  }

  export type DnsAvgAggregateOutputType = {
    interval: number | null
  }

  export type DnsSumAggregateOutputType = {
    interval: number | null
  }

  export type DnsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    domain: string | null
    ip_addr: string | null
    resolver: string | null
    interval: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    authoritative: boolean | null
  }

  export type DnsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    domain: string | null
    ip_addr: string | null
    resolver: string | null
    interval: number | null
    active: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    authoritative: boolean | null
  }

  export type DnsCountAggregateOutputType = {
    id: number
    userId: number
    domain: number
    ip_addr: number
    resolver: number
    interval: number
    active: number
    createdAt: number
    updatedAt: number
    authoritative: number
    _all: number
  }


  export type DnsAvgAggregateInputType = {
    interval?: true
  }

  export type DnsSumAggregateInputType = {
    interval?: true
  }

  export type DnsMinAggregateInputType = {
    id?: true
    userId?: true
    domain?: true
    ip_addr?: true
    resolver?: true
    interval?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    authoritative?: true
  }

  export type DnsMaxAggregateInputType = {
    id?: true
    userId?: true
    domain?: true
    ip_addr?: true
    resolver?: true
    interval?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    authoritative?: true
  }

  export type DnsCountAggregateInputType = {
    id?: true
    userId?: true
    domain?: true
    ip_addr?: true
    resolver?: true
    interval?: true
    active?: true
    createdAt?: true
    updatedAt?: true
    authoritative?: true
    _all?: true
  }

  export type DnsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dns to aggregate.
     */
    where?: DnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dns to fetch.
     */
    orderBy?: DnsOrderByWithRelationInput | DnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Dns
    **/
    _count?: true | DnsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DnsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DnsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DnsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DnsMaxAggregateInputType
  }

  export type GetDnsAggregateType<T extends DnsAggregateArgs> = {
        [P in keyof T & keyof AggregateDns]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDns[P]>
      : GetScalarType<T[P], AggregateDns[P]>
  }




  export type DnsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DnsWhereInput
    orderBy?: DnsOrderByWithAggregationInput | DnsOrderByWithAggregationInput[]
    by: DnsScalarFieldEnum[] | DnsScalarFieldEnum
    having?: DnsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DnsCountAggregateInputType | true
    _avg?: DnsAvgAggregateInputType
    _sum?: DnsSumAggregateInputType
    _min?: DnsMinAggregateInputType
    _max?: DnsMaxAggregateInputType
  }

  export type DnsGroupByOutputType = {
    id: string
    userId: string
    domain: string
    ip_addr: string
    resolver: string | null
    interval: number
    active: boolean
    createdAt: Date
    updatedAt: Date
    authoritative: boolean
    _count: DnsCountAggregateOutputType | null
    _avg: DnsAvgAggregateOutputType | null
    _sum: DnsSumAggregateOutputType | null
    _min: DnsMinAggregateOutputType | null
    _max: DnsMaxAggregateOutputType | null
  }

  type GetDnsGroupByPayload<T extends DnsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DnsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DnsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DnsGroupByOutputType[P]>
            : GetScalarType<T[P], DnsGroupByOutputType[P]>
        }
      >
    >


  export type DnsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    domain?: boolean
    ip_addr?: boolean
    resolver?: boolean
    interval?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authoritative?: boolean
    ticks?: boolean | Dns$ticksArgs<ExtArgs>
    _count?: boolean | DnsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dns"]>

  export type DnsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    domain?: boolean
    ip_addr?: boolean
    resolver?: boolean
    interval?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authoritative?: boolean
  }, ExtArgs["result"]["dns"]>

  export type DnsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    domain?: boolean
    ip_addr?: boolean
    resolver?: boolean
    interval?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authoritative?: boolean
  }, ExtArgs["result"]["dns"]>

  export type DnsSelectScalar = {
    id?: boolean
    userId?: boolean
    domain?: boolean
    ip_addr?: boolean
    resolver?: boolean
    interval?: boolean
    active?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    authoritative?: boolean
  }

  export type DnsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "domain" | "ip_addr" | "resolver" | "interval" | "active" | "createdAt" | "updatedAt" | "authoritative", ExtArgs["result"]["dns"]>
  export type DnsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    ticks?: boolean | Dns$ticksArgs<ExtArgs>
    _count?: boolean | DnsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DnsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type DnsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $DnsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Dns"
    objects: {
      ticks: Prisma.$DnsTickPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      domain: string
      ip_addr: string
      resolver: string | null
      interval: number
      active: boolean
      createdAt: Date
      updatedAt: Date
      authoritative: boolean
    }, ExtArgs["result"]["dns"]>
    composites: {}
  }

  type DnsGetPayload<S extends boolean | null | undefined | DnsDefaultArgs> = $Result.GetResult<Prisma.$DnsPayload, S>

  type DnsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DnsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DnsCountAggregateInputType | true
    }

  export interface DnsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Dns'], meta: { name: 'Dns' } }
    /**
     * Find zero or one Dns that matches the filter.
     * @param {DnsFindUniqueArgs} args - Arguments to find a Dns
     * @example
     * // Get one Dns
     * const dns = await prisma.dns.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DnsFindUniqueArgs>(args: SelectSubset<T, DnsFindUniqueArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Dns that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DnsFindUniqueOrThrowArgs} args - Arguments to find a Dns
     * @example
     * // Get one Dns
     * const dns = await prisma.dns.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DnsFindUniqueOrThrowArgs>(args: SelectSubset<T, DnsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsFindFirstArgs} args - Arguments to find a Dns
     * @example
     * // Get one Dns
     * const dns = await prisma.dns.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DnsFindFirstArgs>(args?: SelectSubset<T, DnsFindFirstArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Dns that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsFindFirstOrThrowArgs} args - Arguments to find a Dns
     * @example
     * // Get one Dns
     * const dns = await prisma.dns.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DnsFindFirstOrThrowArgs>(args?: SelectSubset<T, DnsFindFirstOrThrowArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Dns that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Dns
     * const dns = await prisma.dns.findMany()
     * 
     * // Get first 10 Dns
     * const dns = await prisma.dns.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dnsWithIdOnly = await prisma.dns.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DnsFindManyArgs>(args?: SelectSubset<T, DnsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Dns.
     * @param {DnsCreateArgs} args - Arguments to create a Dns.
     * @example
     * // Create one Dns
     * const Dns = await prisma.dns.create({
     *   data: {
     *     // ... data to create a Dns
     *   }
     * })
     * 
     */
    create<T extends DnsCreateArgs>(args: SelectSubset<T, DnsCreateArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Dns.
     * @param {DnsCreateManyArgs} args - Arguments to create many Dns.
     * @example
     * // Create many Dns
     * const dns = await prisma.dns.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DnsCreateManyArgs>(args?: SelectSubset<T, DnsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Dns and returns the data saved in the database.
     * @param {DnsCreateManyAndReturnArgs} args - Arguments to create many Dns.
     * @example
     * // Create many Dns
     * const dns = await prisma.dns.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Dns and only return the `id`
     * const dnsWithIdOnly = await prisma.dns.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DnsCreateManyAndReturnArgs>(args?: SelectSubset<T, DnsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Dns.
     * @param {DnsDeleteArgs} args - Arguments to delete one Dns.
     * @example
     * // Delete one Dns
     * const Dns = await prisma.dns.delete({
     *   where: {
     *     // ... filter to delete one Dns
     *   }
     * })
     * 
     */
    delete<T extends DnsDeleteArgs>(args: SelectSubset<T, DnsDeleteArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Dns.
     * @param {DnsUpdateArgs} args - Arguments to update one Dns.
     * @example
     * // Update one Dns
     * const dns = await prisma.dns.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DnsUpdateArgs>(args: SelectSubset<T, DnsUpdateArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Dns.
     * @param {DnsDeleteManyArgs} args - Arguments to filter Dns to delete.
     * @example
     * // Delete a few Dns
     * const { count } = await prisma.dns.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DnsDeleteManyArgs>(args?: SelectSubset<T, DnsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Dns
     * const dns = await prisma.dns.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DnsUpdateManyArgs>(args: SelectSubset<T, DnsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Dns and returns the data updated in the database.
     * @param {DnsUpdateManyAndReturnArgs} args - Arguments to update many Dns.
     * @example
     * // Update many Dns
     * const dns = await prisma.dns.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Dns and only return the `id`
     * const dnsWithIdOnly = await prisma.dns.updateManyAndReturn({
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
    updateManyAndReturn<T extends DnsUpdateManyAndReturnArgs>(args: SelectSubset<T, DnsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Dns.
     * @param {DnsUpsertArgs} args - Arguments to update or create a Dns.
     * @example
     * // Update or create a Dns
     * const dns = await prisma.dns.upsert({
     *   create: {
     *     // ... data to create a Dns
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Dns we want to update
     *   }
     * })
     */
    upsert<T extends DnsUpsertArgs>(args: SelectSubset<T, DnsUpsertArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Dns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsCountArgs} args - Arguments to filter Dns to count.
     * @example
     * // Count the number of Dns
     * const count = await prisma.dns.count({
     *   where: {
     *     // ... the filter for the Dns we want to count
     *   }
     * })
    **/
    count<T extends DnsCountArgs>(
      args?: Subset<T, DnsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DnsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Dns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DnsAggregateArgs>(args: Subset<T, DnsAggregateArgs>): Prisma.PrismaPromise<GetDnsAggregateType<T>>

    /**
     * Group by Dns.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsGroupByArgs} args - Group by arguments.
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
      T extends DnsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DnsGroupByArgs['orderBy'] }
        : { orderBy?: DnsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DnsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDnsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Dns model
   */
  readonly fields: DnsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Dns.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DnsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    ticks<T extends Dns$ticksArgs<ExtArgs> = {}>(args?: Subset<T, Dns$ticksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Dns model
   */
  interface DnsFieldRefs {
    readonly id: FieldRef<"Dns", 'String'>
    readonly userId: FieldRef<"Dns", 'String'>
    readonly domain: FieldRef<"Dns", 'String'>
    readonly ip_addr: FieldRef<"Dns", 'String'>
    readonly resolver: FieldRef<"Dns", 'String'>
    readonly interval: FieldRef<"Dns", 'Int'>
    readonly active: FieldRef<"Dns", 'Boolean'>
    readonly createdAt: FieldRef<"Dns", 'DateTime'>
    readonly updatedAt: FieldRef<"Dns", 'DateTime'>
    readonly authoritative: FieldRef<"Dns", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Dns findUnique
   */
  export type DnsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * Filter, which Dns to fetch.
     */
    where: DnsWhereUniqueInput
  }

  /**
   * Dns findUniqueOrThrow
   */
  export type DnsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * Filter, which Dns to fetch.
     */
    where: DnsWhereUniqueInput
  }

  /**
   * Dns findFirst
   */
  export type DnsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * Filter, which Dns to fetch.
     */
    where?: DnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dns to fetch.
     */
    orderBy?: DnsOrderByWithRelationInput | DnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dns.
     */
    cursor?: DnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dns.
     */
    distinct?: DnsScalarFieldEnum | DnsScalarFieldEnum[]
  }

  /**
   * Dns findFirstOrThrow
   */
  export type DnsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * Filter, which Dns to fetch.
     */
    where?: DnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dns to fetch.
     */
    orderBy?: DnsOrderByWithRelationInput | DnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Dns.
     */
    cursor?: DnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dns.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Dns.
     */
    distinct?: DnsScalarFieldEnum | DnsScalarFieldEnum[]
  }

  /**
   * Dns findMany
   */
  export type DnsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * Filter, which Dns to fetch.
     */
    where?: DnsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Dns to fetch.
     */
    orderBy?: DnsOrderByWithRelationInput | DnsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Dns.
     */
    cursor?: DnsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Dns from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Dns.
     */
    skip?: number
    distinct?: DnsScalarFieldEnum | DnsScalarFieldEnum[]
  }

  /**
   * Dns create
   */
  export type DnsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * The data needed to create a Dns.
     */
    data: XOR<DnsCreateInput, DnsUncheckedCreateInput>
  }

  /**
   * Dns createMany
   */
  export type DnsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Dns.
     */
    data: DnsCreateManyInput | DnsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dns createManyAndReturn
   */
  export type DnsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * The data used to create many Dns.
     */
    data: DnsCreateManyInput | DnsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Dns update
   */
  export type DnsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * The data needed to update a Dns.
     */
    data: XOR<DnsUpdateInput, DnsUncheckedUpdateInput>
    /**
     * Choose, which Dns to update.
     */
    where: DnsWhereUniqueInput
  }

  /**
   * Dns updateMany
   */
  export type DnsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Dns.
     */
    data: XOR<DnsUpdateManyMutationInput, DnsUncheckedUpdateManyInput>
    /**
     * Filter which Dns to update
     */
    where?: DnsWhereInput
    /**
     * Limit how many Dns to update.
     */
    limit?: number
  }

  /**
   * Dns updateManyAndReturn
   */
  export type DnsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * The data used to update Dns.
     */
    data: XOR<DnsUpdateManyMutationInput, DnsUncheckedUpdateManyInput>
    /**
     * Filter which Dns to update
     */
    where?: DnsWhereInput
    /**
     * Limit how many Dns to update.
     */
    limit?: number
  }

  /**
   * Dns upsert
   */
  export type DnsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * The filter to search for the Dns to update in case it exists.
     */
    where: DnsWhereUniqueInput
    /**
     * In case the Dns found by the `where` argument doesn't exist, create a new Dns with this data.
     */
    create: XOR<DnsCreateInput, DnsUncheckedCreateInput>
    /**
     * In case the Dns was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DnsUpdateInput, DnsUncheckedUpdateInput>
  }

  /**
   * Dns delete
   */
  export type DnsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
    /**
     * Filter which Dns to delete.
     */
    where: DnsWhereUniqueInput
  }

  /**
   * Dns deleteMany
   */
  export type DnsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Dns to delete
     */
    where?: DnsWhereInput
    /**
     * Limit how many Dns to delete.
     */
    limit?: number
  }

  /**
   * Dns.ticks
   */
  export type Dns$ticksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    where?: DnsTickWhereInput
    orderBy?: DnsTickOrderByWithRelationInput | DnsTickOrderByWithRelationInput[]
    cursor?: DnsTickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DnsTickScalarFieldEnum | DnsTickScalarFieldEnum[]
  }

  /**
   * Dns without action
   */
  export type DnsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Dns
     */
    select?: DnsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Dns
     */
    omit?: DnsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsInclude<ExtArgs> | null
  }


  /**
   * Model WebsiteTick
   */

  export type AggregateWebsiteTick = {
    _count: WebsiteTickCountAggregateOutputType | null
    _avg: WebsiteTickAvgAggregateOutputType | null
    _sum: WebsiteTickSumAggregateOutputType | null
    _min: WebsiteTickMinAggregateOutputType | null
    _max: WebsiteTickMaxAggregateOutputType | null
  }

  export type WebsiteTickAvgAggregateOutputType = {
    response_time_ms: number | null
  }

  export type WebsiteTickSumAggregateOutputType = {
    response_time_ms: number | null
  }

  export type WebsiteTickMinAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.WebsiteStatus | null
    region: string | null
    userId: string | null
    website_id: string | null
    CreatedAt: Date | null
  }

  export type WebsiteTickMaxAggregateOutputType = {
    id: string | null
    response_time_ms: number | null
    status: $Enums.WebsiteStatus | null
    region: string | null
    userId: string | null
    website_id: string | null
    CreatedAt: Date | null
  }

  export type WebsiteTickCountAggregateOutputType = {
    id: number
    response_time_ms: number
    status: number
    region: number
    userId: number
    website_id: number
    CreatedAt: number
    _all: number
  }


  export type WebsiteTickAvgAggregateInputType = {
    response_time_ms?: true
  }

  export type WebsiteTickSumAggregateInputType = {
    response_time_ms?: true
  }

  export type WebsiteTickMinAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region?: true
    userId?: true
    website_id?: true
    CreatedAt?: true
  }

  export type WebsiteTickMaxAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region?: true
    userId?: true
    website_id?: true
    CreatedAt?: true
  }

  export type WebsiteTickCountAggregateInputType = {
    id?: true
    response_time_ms?: true
    status?: true
    region?: true
    userId?: true
    website_id?: true
    CreatedAt?: true
    _all?: true
  }

  export type WebsiteTickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteTick to aggregate.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WebsiteTicks
    **/
    _count?: true | WebsiteTickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WebsiteTickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WebsiteTickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WebsiteTickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WebsiteTickMaxAggregateInputType
  }

  export type GetWebsiteTickAggregateType<T extends WebsiteTickAggregateArgs> = {
        [P in keyof T & keyof AggregateWebsiteTick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWebsiteTick[P]>
      : GetScalarType<T[P], AggregateWebsiteTick[P]>
  }




  export type WebsiteTickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WebsiteTickWhereInput
    orderBy?: WebsiteTickOrderByWithAggregationInput | WebsiteTickOrderByWithAggregationInput[]
    by: WebsiteTickScalarFieldEnum[] | WebsiteTickScalarFieldEnum
    having?: WebsiteTickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WebsiteTickCountAggregateInputType | true
    _avg?: WebsiteTickAvgAggregateInputType
    _sum?: WebsiteTickSumAggregateInputType
    _min?: WebsiteTickMinAggregateInputType
    _max?: WebsiteTickMaxAggregateInputType
  }

  export type WebsiteTickGroupByOutputType = {
    id: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    website_id: string
    CreatedAt: Date
    _count: WebsiteTickCountAggregateOutputType | null
    _avg: WebsiteTickAvgAggregateOutputType | null
    _sum: WebsiteTickSumAggregateOutputType | null
    _min: WebsiteTickMinAggregateOutputType | null
    _max: WebsiteTickMaxAggregateOutputType | null
  }

  type GetWebsiteTickGroupByPayload<T extends WebsiteTickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WebsiteTickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WebsiteTickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WebsiteTickGroupByOutputType[P]>
            : GetScalarType<T[P], WebsiteTickGroupByOutputType[P]>
        }
      >
    >


  export type WebsiteTickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    website_id?: boolean
    CreatedAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type WebsiteTickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    website_id?: boolean
    CreatedAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type WebsiteTickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    website_id?: boolean
    CreatedAt?: boolean
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["websiteTick"]>

  export type WebsiteTickSelectScalar = {
    id?: boolean
    response_time_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    website_id?: boolean
    CreatedAt?: boolean
  }

  export type WebsiteTickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "response_time_ms" | "status" | "region" | "userId" | "website_id" | "CreatedAt", ExtArgs["result"]["websiteTick"]>
  export type WebsiteTickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type WebsiteTickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }
  export type WebsiteTickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    website?: boolean | WebsiteDefaultArgs<ExtArgs>
  }

  export type $WebsiteTickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WebsiteTick"
    objects: {
      website: Prisma.$WebsitePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      response_time_ms: number
      status: $Enums.WebsiteStatus
      region: string
      userId: string
      website_id: string
      CreatedAt: Date
    }, ExtArgs["result"]["websiteTick"]>
    composites: {}
  }

  type WebsiteTickGetPayload<S extends boolean | null | undefined | WebsiteTickDefaultArgs> = $Result.GetResult<Prisma.$WebsiteTickPayload, S>

  type WebsiteTickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WebsiteTickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WebsiteTickCountAggregateInputType | true
    }

  export interface WebsiteTickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WebsiteTick'], meta: { name: 'WebsiteTick' } }
    /**
     * Find zero or one WebsiteTick that matches the filter.
     * @param {WebsiteTickFindUniqueArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WebsiteTickFindUniqueArgs>(args: SelectSubset<T, WebsiteTickFindUniqueArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one WebsiteTick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WebsiteTickFindUniqueOrThrowArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WebsiteTickFindUniqueOrThrowArgs>(args: SelectSubset<T, WebsiteTickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickFindFirstArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WebsiteTickFindFirstArgs>(args?: SelectSubset<T, WebsiteTickFindFirstArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first WebsiteTick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickFindFirstOrThrowArgs} args - Arguments to find a WebsiteTick
     * @example
     * // Get one WebsiteTick
     * const websiteTick = await prisma.websiteTick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WebsiteTickFindFirstOrThrowArgs>(args?: SelectSubset<T, WebsiteTickFindFirstOrThrowArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more WebsiteTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WebsiteTicks
     * const websiteTicks = await prisma.websiteTick.findMany()
     * 
     * // Get first 10 WebsiteTicks
     * const websiteTicks = await prisma.websiteTick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WebsiteTickFindManyArgs>(args?: SelectSubset<T, WebsiteTickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a WebsiteTick.
     * @param {WebsiteTickCreateArgs} args - Arguments to create a WebsiteTick.
     * @example
     * // Create one WebsiteTick
     * const WebsiteTick = await prisma.websiteTick.create({
     *   data: {
     *     // ... data to create a WebsiteTick
     *   }
     * })
     * 
     */
    create<T extends WebsiteTickCreateArgs>(args: SelectSubset<T, WebsiteTickCreateArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many WebsiteTicks.
     * @param {WebsiteTickCreateManyArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WebsiteTickCreateManyArgs>(args?: SelectSubset<T, WebsiteTickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WebsiteTicks and returns the data saved in the database.
     * @param {WebsiteTickCreateManyAndReturnArgs} args - Arguments to create many WebsiteTicks.
     * @example
     * // Create many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WebsiteTicks and only return the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WebsiteTickCreateManyAndReturnArgs>(args?: SelectSubset<T, WebsiteTickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a WebsiteTick.
     * @param {WebsiteTickDeleteArgs} args - Arguments to delete one WebsiteTick.
     * @example
     * // Delete one WebsiteTick
     * const WebsiteTick = await prisma.websiteTick.delete({
     *   where: {
     *     // ... filter to delete one WebsiteTick
     *   }
     * })
     * 
     */
    delete<T extends WebsiteTickDeleteArgs>(args: SelectSubset<T, WebsiteTickDeleteArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one WebsiteTick.
     * @param {WebsiteTickUpdateArgs} args - Arguments to update one WebsiteTick.
     * @example
     * // Update one WebsiteTick
     * const websiteTick = await prisma.websiteTick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WebsiteTickUpdateArgs>(args: SelectSubset<T, WebsiteTickUpdateArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more WebsiteTicks.
     * @param {WebsiteTickDeleteManyArgs} args - Arguments to filter WebsiteTicks to delete.
     * @example
     * // Delete a few WebsiteTicks
     * const { count } = await prisma.websiteTick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WebsiteTickDeleteManyArgs>(args?: SelectSubset<T, WebsiteTickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WebsiteTickUpdateManyArgs>(args: SelectSubset<T, WebsiteTickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WebsiteTicks and returns the data updated in the database.
     * @param {WebsiteTickUpdateManyAndReturnArgs} args - Arguments to update many WebsiteTicks.
     * @example
     * // Update many WebsiteTicks
     * const websiteTick = await prisma.websiteTick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more WebsiteTicks and only return the `id`
     * const websiteTickWithIdOnly = await prisma.websiteTick.updateManyAndReturn({
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
    updateManyAndReturn<T extends WebsiteTickUpdateManyAndReturnArgs>(args: SelectSubset<T, WebsiteTickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one WebsiteTick.
     * @param {WebsiteTickUpsertArgs} args - Arguments to update or create a WebsiteTick.
     * @example
     * // Update or create a WebsiteTick
     * const websiteTick = await prisma.websiteTick.upsert({
     *   create: {
     *     // ... data to create a WebsiteTick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WebsiteTick we want to update
     *   }
     * })
     */
    upsert<T extends WebsiteTickUpsertArgs>(args: SelectSubset<T, WebsiteTickUpsertArgs<ExtArgs>>): Prisma__WebsiteTickClient<$Result.GetResult<Prisma.$WebsiteTickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of WebsiteTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickCountArgs} args - Arguments to filter WebsiteTicks to count.
     * @example
     * // Count the number of WebsiteTicks
     * const count = await prisma.websiteTick.count({
     *   where: {
     *     // ... the filter for the WebsiteTicks we want to count
     *   }
     * })
    **/
    count<T extends WebsiteTickCountArgs>(
      args?: Subset<T, WebsiteTickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WebsiteTickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WebsiteTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WebsiteTickAggregateArgs>(args: Subset<T, WebsiteTickAggregateArgs>): Prisma.PrismaPromise<GetWebsiteTickAggregateType<T>>

    /**
     * Group by WebsiteTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WebsiteTickGroupByArgs} args - Group by arguments.
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
      T extends WebsiteTickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WebsiteTickGroupByArgs['orderBy'] }
        : { orderBy?: WebsiteTickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WebsiteTickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWebsiteTickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WebsiteTick model
   */
  readonly fields: WebsiteTickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WebsiteTick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WebsiteTickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    website<T extends WebsiteDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WebsiteDefaultArgs<ExtArgs>>): Prisma__WebsiteClient<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the WebsiteTick model
   */
  interface WebsiteTickFieldRefs {
    readonly id: FieldRef<"WebsiteTick", 'String'>
    readonly response_time_ms: FieldRef<"WebsiteTick", 'Int'>
    readonly status: FieldRef<"WebsiteTick", 'WebsiteStatus'>
    readonly region: FieldRef<"WebsiteTick", 'String'>
    readonly userId: FieldRef<"WebsiteTick", 'String'>
    readonly website_id: FieldRef<"WebsiteTick", 'String'>
    readonly CreatedAt: FieldRef<"WebsiteTick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WebsiteTick findUnique
   */
  export type WebsiteTickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick findUniqueOrThrow
   */
  export type WebsiteTickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick findFirst
   */
  export type WebsiteTickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteTicks.
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteTicks.
     */
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * WebsiteTick findFirstOrThrow
   */
  export type WebsiteTickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTick to fetch.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WebsiteTicks.
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WebsiteTicks.
     */
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * WebsiteTick findMany
   */
  export type WebsiteTickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter, which WebsiteTicks to fetch.
     */
    where?: WebsiteTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WebsiteTicks to fetch.
     */
    orderBy?: WebsiteTickOrderByWithRelationInput | WebsiteTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WebsiteTicks.
     */
    cursor?: WebsiteTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WebsiteTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WebsiteTicks.
     */
    skip?: number
    distinct?: WebsiteTickScalarFieldEnum | WebsiteTickScalarFieldEnum[]
  }

  /**
   * WebsiteTick create
   */
  export type WebsiteTickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * The data needed to create a WebsiteTick.
     */
    data: XOR<WebsiteTickCreateInput, WebsiteTickUncheckedCreateInput>
  }

  /**
   * WebsiteTick createMany
   */
  export type WebsiteTickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WebsiteTicks.
     */
    data: WebsiteTickCreateManyInput | WebsiteTickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WebsiteTick createManyAndReturn
   */
  export type WebsiteTickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * The data used to create many WebsiteTicks.
     */
    data: WebsiteTickCreateManyInput | WebsiteTickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteTick update
   */
  export type WebsiteTickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * The data needed to update a WebsiteTick.
     */
    data: XOR<WebsiteTickUpdateInput, WebsiteTickUncheckedUpdateInput>
    /**
     * Choose, which WebsiteTick to update.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick updateMany
   */
  export type WebsiteTickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WebsiteTicks.
     */
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteTicks to update
     */
    where?: WebsiteTickWhereInput
    /**
     * Limit how many WebsiteTicks to update.
     */
    limit?: number
  }

  /**
   * WebsiteTick updateManyAndReturn
   */
  export type WebsiteTickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * The data used to update WebsiteTicks.
     */
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyInput>
    /**
     * Filter which WebsiteTicks to update
     */
    where?: WebsiteTickWhereInput
    /**
     * Limit how many WebsiteTicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * WebsiteTick upsert
   */
  export type WebsiteTickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * The filter to search for the WebsiteTick to update in case it exists.
     */
    where: WebsiteTickWhereUniqueInput
    /**
     * In case the WebsiteTick found by the `where` argument doesn't exist, create a new WebsiteTick with this data.
     */
    create: XOR<WebsiteTickCreateInput, WebsiteTickUncheckedCreateInput>
    /**
     * In case the WebsiteTick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WebsiteTickUpdateInput, WebsiteTickUncheckedUpdateInput>
  }

  /**
   * WebsiteTick delete
   */
  export type WebsiteTickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
    /**
     * Filter which WebsiteTick to delete.
     */
    where: WebsiteTickWhereUniqueInput
  }

  /**
   * WebsiteTick deleteMany
   */
  export type WebsiteTickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WebsiteTicks to delete
     */
    where?: WebsiteTickWhereInput
    /**
     * Limit how many WebsiteTicks to delete.
     */
    limit?: number
  }

  /**
   * WebsiteTick without action
   */
  export type WebsiteTickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WebsiteTick
     */
    select?: WebsiteTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the WebsiteTick
     */
    omit?: WebsiteTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteTickInclude<ExtArgs> | null
  }


  /**
   * Model DnsTick
   */

  export type AggregateDnsTick = {
    _count: DnsTickCountAggregateOutputType | null
    _avg: DnsTickAvgAggregateOutputType | null
    _sum: DnsTickSumAggregateOutputType | null
    _min: DnsTickMinAggregateOutputType | null
    _max: DnsTickMaxAggregateOutputType | null
  }

  export type DnsTickAvgAggregateOutputType = {
    latency_ms: number | null
  }

  export type DnsTickSumAggregateOutputType = {
    latency_ms: number | null
  }

  export type DnsTickMinAggregateOutputType = {
    id: string | null
    latency_ms: number | null
    status: $Enums.DnsStatus | null
    region: string | null
    userId: string | null
    dns_id: string | null
    check_id: string | null
    resolver_ip: string | null
    CreatedAt: Date | null
  }

  export type DnsTickMaxAggregateOutputType = {
    id: string | null
    latency_ms: number | null
    status: $Enums.DnsStatus | null
    region: string | null
    userId: string | null
    dns_id: string | null
    check_id: string | null
    resolver_ip: string | null
    CreatedAt: Date | null
  }

  export type DnsTickCountAggregateOutputType = {
    id: number
    latency_ms: number
    status: number
    region: number
    userId: number
    dns_id: number
    check_id: number
    resolver_ip: number
    CreatedAt: number
    _all: number
  }


  export type DnsTickAvgAggregateInputType = {
    latency_ms?: true
  }

  export type DnsTickSumAggregateInputType = {
    latency_ms?: true
  }

  export type DnsTickMinAggregateInputType = {
    id?: true
    latency_ms?: true
    status?: true
    region?: true
    userId?: true
    dns_id?: true
    check_id?: true
    resolver_ip?: true
    CreatedAt?: true
  }

  export type DnsTickMaxAggregateInputType = {
    id?: true
    latency_ms?: true
    status?: true
    region?: true
    userId?: true
    dns_id?: true
    check_id?: true
    resolver_ip?: true
    CreatedAt?: true
  }

  export type DnsTickCountAggregateInputType = {
    id?: true
    latency_ms?: true
    status?: true
    region?: true
    userId?: true
    dns_id?: true
    check_id?: true
    resolver_ip?: true
    CreatedAt?: true
    _all?: true
  }

  export type DnsTickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DnsTick to aggregate.
     */
    where?: DnsTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsTicks to fetch.
     */
    orderBy?: DnsTickOrderByWithRelationInput | DnsTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DnsTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DnsTicks
    **/
    _count?: true | DnsTickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DnsTickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DnsTickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DnsTickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DnsTickMaxAggregateInputType
  }

  export type GetDnsTickAggregateType<T extends DnsTickAggregateArgs> = {
        [P in keyof T & keyof AggregateDnsTick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDnsTick[P]>
      : GetScalarType<T[P], AggregateDnsTick[P]>
  }




  export type DnsTickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DnsTickWhereInput
    orderBy?: DnsTickOrderByWithAggregationInput | DnsTickOrderByWithAggregationInput[]
    by: DnsTickScalarFieldEnum[] | DnsTickScalarFieldEnum
    having?: DnsTickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DnsTickCountAggregateInputType | true
    _avg?: DnsTickAvgAggregateInputType
    _sum?: DnsTickSumAggregateInputType
    _min?: DnsTickMinAggregateInputType
    _max?: DnsTickMaxAggregateInputType
  }

  export type DnsTickGroupByOutputType = {
    id: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    dns_id: string
    check_id: string | null
    resolver_ip: string
    CreatedAt: Date
    _count: DnsTickCountAggregateOutputType | null
    _avg: DnsTickAvgAggregateOutputType | null
    _sum: DnsTickSumAggregateOutputType | null
    _min: DnsTickMinAggregateOutputType | null
    _max: DnsTickMaxAggregateOutputType | null
  }

  type GetDnsTickGroupByPayload<T extends DnsTickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DnsTickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DnsTickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DnsTickGroupByOutputType[P]>
            : GetScalarType<T[P], DnsTickGroupByOutputType[P]>
        }
      >
    >


  export type DnsTickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latency_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    dns_id?: boolean
    check_id?: boolean
    resolver_ip?: boolean
    CreatedAt?: boolean
    dns?: boolean | DnsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dnsTick"]>

  export type DnsTickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latency_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    dns_id?: boolean
    check_id?: boolean
    resolver_ip?: boolean
    CreatedAt?: boolean
    dns?: boolean | DnsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dnsTick"]>

  export type DnsTickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    latency_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    dns_id?: boolean
    check_id?: boolean
    resolver_ip?: boolean
    CreatedAt?: boolean
    dns?: boolean | DnsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dnsTick"]>

  export type DnsTickSelectScalar = {
    id?: boolean
    latency_ms?: boolean
    status?: boolean
    region?: boolean
    userId?: boolean
    dns_id?: boolean
    check_id?: boolean
    resolver_ip?: boolean
    CreatedAt?: boolean
  }

  export type DnsTickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "latency_ms" | "status" | "region" | "userId" | "dns_id" | "check_id" | "resolver_ip" | "CreatedAt", ExtArgs["result"]["dnsTick"]>
  export type DnsTickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dns?: boolean | DnsDefaultArgs<ExtArgs>
  }
  export type DnsTickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dns?: boolean | DnsDefaultArgs<ExtArgs>
  }
  export type DnsTickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dns?: boolean | DnsDefaultArgs<ExtArgs>
  }

  export type $DnsTickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DnsTick"
    objects: {
      dns: Prisma.$DnsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      latency_ms: number
      status: $Enums.DnsStatus
      region: string
      userId: string
      dns_id: string
      check_id: string | null
      resolver_ip: string
      CreatedAt: Date
    }, ExtArgs["result"]["dnsTick"]>
    composites: {}
  }

  type DnsTickGetPayload<S extends boolean | null | undefined | DnsTickDefaultArgs> = $Result.GetResult<Prisma.$DnsTickPayload, S>

  type DnsTickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DnsTickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DnsTickCountAggregateInputType | true
    }

  export interface DnsTickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DnsTick'], meta: { name: 'DnsTick' } }
    /**
     * Find zero or one DnsTick that matches the filter.
     * @param {DnsTickFindUniqueArgs} args - Arguments to find a DnsTick
     * @example
     * // Get one DnsTick
     * const dnsTick = await prisma.dnsTick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DnsTickFindUniqueArgs>(args: SelectSubset<T, DnsTickFindUniqueArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DnsTick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DnsTickFindUniqueOrThrowArgs} args - Arguments to find a DnsTick
     * @example
     * // Get one DnsTick
     * const dnsTick = await prisma.dnsTick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DnsTickFindUniqueOrThrowArgs>(args: SelectSubset<T, DnsTickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DnsTick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickFindFirstArgs} args - Arguments to find a DnsTick
     * @example
     * // Get one DnsTick
     * const dnsTick = await prisma.dnsTick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DnsTickFindFirstArgs>(args?: SelectSubset<T, DnsTickFindFirstArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DnsTick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickFindFirstOrThrowArgs} args - Arguments to find a DnsTick
     * @example
     * // Get one DnsTick
     * const dnsTick = await prisma.dnsTick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DnsTickFindFirstOrThrowArgs>(args?: SelectSubset<T, DnsTickFindFirstOrThrowArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DnsTicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DnsTicks
     * const dnsTicks = await prisma.dnsTick.findMany()
     * 
     * // Get first 10 DnsTicks
     * const dnsTicks = await prisma.dnsTick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dnsTickWithIdOnly = await prisma.dnsTick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DnsTickFindManyArgs>(args?: SelectSubset<T, DnsTickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DnsTick.
     * @param {DnsTickCreateArgs} args - Arguments to create a DnsTick.
     * @example
     * // Create one DnsTick
     * const DnsTick = await prisma.dnsTick.create({
     *   data: {
     *     // ... data to create a DnsTick
     *   }
     * })
     * 
     */
    create<T extends DnsTickCreateArgs>(args: SelectSubset<T, DnsTickCreateArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DnsTicks.
     * @param {DnsTickCreateManyArgs} args - Arguments to create many DnsTicks.
     * @example
     * // Create many DnsTicks
     * const dnsTick = await prisma.dnsTick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DnsTickCreateManyArgs>(args?: SelectSubset<T, DnsTickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DnsTicks and returns the data saved in the database.
     * @param {DnsTickCreateManyAndReturnArgs} args - Arguments to create many DnsTicks.
     * @example
     * // Create many DnsTicks
     * const dnsTick = await prisma.dnsTick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DnsTicks and only return the `id`
     * const dnsTickWithIdOnly = await prisma.dnsTick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DnsTickCreateManyAndReturnArgs>(args?: SelectSubset<T, DnsTickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DnsTick.
     * @param {DnsTickDeleteArgs} args - Arguments to delete one DnsTick.
     * @example
     * // Delete one DnsTick
     * const DnsTick = await prisma.dnsTick.delete({
     *   where: {
     *     // ... filter to delete one DnsTick
     *   }
     * })
     * 
     */
    delete<T extends DnsTickDeleteArgs>(args: SelectSubset<T, DnsTickDeleteArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DnsTick.
     * @param {DnsTickUpdateArgs} args - Arguments to update one DnsTick.
     * @example
     * // Update one DnsTick
     * const dnsTick = await prisma.dnsTick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DnsTickUpdateArgs>(args: SelectSubset<T, DnsTickUpdateArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DnsTicks.
     * @param {DnsTickDeleteManyArgs} args - Arguments to filter DnsTicks to delete.
     * @example
     * // Delete a few DnsTicks
     * const { count } = await prisma.dnsTick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DnsTickDeleteManyArgs>(args?: SelectSubset<T, DnsTickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DnsTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DnsTicks
     * const dnsTick = await prisma.dnsTick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DnsTickUpdateManyArgs>(args: SelectSubset<T, DnsTickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DnsTicks and returns the data updated in the database.
     * @param {DnsTickUpdateManyAndReturnArgs} args - Arguments to update many DnsTicks.
     * @example
     * // Update many DnsTicks
     * const dnsTick = await prisma.dnsTick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DnsTicks and only return the `id`
     * const dnsTickWithIdOnly = await prisma.dnsTick.updateManyAndReturn({
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
    updateManyAndReturn<T extends DnsTickUpdateManyAndReturnArgs>(args: SelectSubset<T, DnsTickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DnsTick.
     * @param {DnsTickUpsertArgs} args - Arguments to update or create a DnsTick.
     * @example
     * // Update or create a DnsTick
     * const dnsTick = await prisma.dnsTick.upsert({
     *   create: {
     *     // ... data to create a DnsTick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DnsTick we want to update
     *   }
     * })
     */
    upsert<T extends DnsTickUpsertArgs>(args: SelectSubset<T, DnsTickUpsertArgs<ExtArgs>>): Prisma__DnsTickClient<$Result.GetResult<Prisma.$DnsTickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DnsTicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickCountArgs} args - Arguments to filter DnsTicks to count.
     * @example
     * // Count the number of DnsTicks
     * const count = await prisma.dnsTick.count({
     *   where: {
     *     // ... the filter for the DnsTicks we want to count
     *   }
     * })
    **/
    count<T extends DnsTickCountArgs>(
      args?: Subset<T, DnsTickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DnsTickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DnsTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DnsTickAggregateArgs>(args: Subset<T, DnsTickAggregateArgs>): Prisma.PrismaPromise<GetDnsTickAggregateType<T>>

    /**
     * Group by DnsTick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsTickGroupByArgs} args - Group by arguments.
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
      T extends DnsTickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DnsTickGroupByArgs['orderBy'] }
        : { orderBy?: DnsTickGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DnsTickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDnsTickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DnsTick model
   */
  readonly fields: DnsTickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DnsTick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DnsTickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dns<T extends DnsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, DnsDefaultArgs<ExtArgs>>): Prisma__DnsClient<$Result.GetResult<Prisma.$DnsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the DnsTick model
   */
  interface DnsTickFieldRefs {
    readonly id: FieldRef<"DnsTick", 'String'>
    readonly latency_ms: FieldRef<"DnsTick", 'Int'>
    readonly status: FieldRef<"DnsTick", 'DnsStatus'>
    readonly region: FieldRef<"DnsTick", 'String'>
    readonly userId: FieldRef<"DnsTick", 'String'>
    readonly dns_id: FieldRef<"DnsTick", 'String'>
    readonly check_id: FieldRef<"DnsTick", 'String'>
    readonly resolver_ip: FieldRef<"DnsTick", 'String'>
    readonly CreatedAt: FieldRef<"DnsTick", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DnsTick findUnique
   */
  export type DnsTickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * Filter, which DnsTick to fetch.
     */
    where: DnsTickWhereUniqueInput
  }

  /**
   * DnsTick findUniqueOrThrow
   */
  export type DnsTickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * Filter, which DnsTick to fetch.
     */
    where: DnsTickWhereUniqueInput
  }

  /**
   * DnsTick findFirst
   */
  export type DnsTickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * Filter, which DnsTick to fetch.
     */
    where?: DnsTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsTicks to fetch.
     */
    orderBy?: DnsTickOrderByWithRelationInput | DnsTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DnsTicks.
     */
    cursor?: DnsTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DnsTicks.
     */
    distinct?: DnsTickScalarFieldEnum | DnsTickScalarFieldEnum[]
  }

  /**
   * DnsTick findFirstOrThrow
   */
  export type DnsTickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * Filter, which DnsTick to fetch.
     */
    where?: DnsTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsTicks to fetch.
     */
    orderBy?: DnsTickOrderByWithRelationInput | DnsTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DnsTicks.
     */
    cursor?: DnsTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsTicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DnsTicks.
     */
    distinct?: DnsTickScalarFieldEnum | DnsTickScalarFieldEnum[]
  }

  /**
   * DnsTick findMany
   */
  export type DnsTickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * Filter, which DnsTicks to fetch.
     */
    where?: DnsTickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsTicks to fetch.
     */
    orderBy?: DnsTickOrderByWithRelationInput | DnsTickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DnsTicks.
     */
    cursor?: DnsTickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsTicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsTicks.
     */
    skip?: number
    distinct?: DnsTickScalarFieldEnum | DnsTickScalarFieldEnum[]
  }

  /**
   * DnsTick create
   */
  export type DnsTickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * The data needed to create a DnsTick.
     */
    data: XOR<DnsTickCreateInput, DnsTickUncheckedCreateInput>
  }

  /**
   * DnsTick createMany
   */
  export type DnsTickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DnsTicks.
     */
    data: DnsTickCreateManyInput | DnsTickCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DnsTick createManyAndReturn
   */
  export type DnsTickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * The data used to create many DnsTicks.
     */
    data: DnsTickCreateManyInput | DnsTickCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DnsTick update
   */
  export type DnsTickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * The data needed to update a DnsTick.
     */
    data: XOR<DnsTickUpdateInput, DnsTickUncheckedUpdateInput>
    /**
     * Choose, which DnsTick to update.
     */
    where: DnsTickWhereUniqueInput
  }

  /**
   * DnsTick updateMany
   */
  export type DnsTickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DnsTicks.
     */
    data: XOR<DnsTickUpdateManyMutationInput, DnsTickUncheckedUpdateManyInput>
    /**
     * Filter which DnsTicks to update
     */
    where?: DnsTickWhereInput
    /**
     * Limit how many DnsTicks to update.
     */
    limit?: number
  }

  /**
   * DnsTick updateManyAndReturn
   */
  export type DnsTickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * The data used to update DnsTicks.
     */
    data: XOR<DnsTickUpdateManyMutationInput, DnsTickUncheckedUpdateManyInput>
    /**
     * Filter which DnsTicks to update
     */
    where?: DnsTickWhereInput
    /**
     * Limit how many DnsTicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DnsTick upsert
   */
  export type DnsTickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * The filter to search for the DnsTick to update in case it exists.
     */
    where: DnsTickWhereUniqueInput
    /**
     * In case the DnsTick found by the `where` argument doesn't exist, create a new DnsTick with this data.
     */
    create: XOR<DnsTickCreateInput, DnsTickUncheckedCreateInput>
    /**
     * In case the DnsTick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DnsTickUpdateInput, DnsTickUncheckedUpdateInput>
  }

  /**
   * DnsTick delete
   */
  export type DnsTickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
    /**
     * Filter which DnsTick to delete.
     */
    where: DnsTickWhereUniqueInput
  }

  /**
   * DnsTick deleteMany
   */
  export type DnsTickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DnsTicks to delete
     */
    where?: DnsTickWhereInput
    /**
     * Limit how many DnsTicks to delete.
     */
    limit?: number
  }

  /**
   * DnsTick without action
   */
  export type DnsTickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsTick
     */
    select?: DnsTickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsTick
     */
    omit?: DnsTickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DnsTickInclude<ExtArgs> | null
  }


  /**
   * Model DnsRecord
   */

  export type AggregateDnsRecord = {
    _count: DnsRecordCountAggregateOutputType | null
    _min: DnsRecordMinAggregateOutputType | null
    _max: DnsRecordMaxAggregateOutputType | null
  }

  export type DnsRecordMinAggregateOutputType = {
    id: string | null
    type: $Enums.Record | null
    response: string | null
    region: string | null
    user_id: string | null
    dns_id: string | null
  }

  export type DnsRecordMaxAggregateOutputType = {
    id: string | null
    type: $Enums.Record | null
    response: string | null
    region: string | null
    user_id: string | null
    dns_id: string | null
  }

  export type DnsRecordCountAggregateOutputType = {
    id: number
    type: number
    response: number
    region: number
    user_id: number
    dns_id: number
    _all: number
  }


  export type DnsRecordMinAggregateInputType = {
    id?: true
    type?: true
    response?: true
    region?: true
    user_id?: true
    dns_id?: true
  }

  export type DnsRecordMaxAggregateInputType = {
    id?: true
    type?: true
    response?: true
    region?: true
    user_id?: true
    dns_id?: true
  }

  export type DnsRecordCountAggregateInputType = {
    id?: true
    type?: true
    response?: true
    region?: true
    user_id?: true
    dns_id?: true
    _all?: true
  }

  export type DnsRecordAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DnsRecord to aggregate.
     */
    where?: DnsRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsRecords to fetch.
     */
    orderBy?: DnsRecordOrderByWithRelationInput | DnsRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DnsRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DnsRecords
    **/
    _count?: true | DnsRecordCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DnsRecordMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DnsRecordMaxAggregateInputType
  }

  export type GetDnsRecordAggregateType<T extends DnsRecordAggregateArgs> = {
        [P in keyof T & keyof AggregateDnsRecord]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDnsRecord[P]>
      : GetScalarType<T[P], AggregateDnsRecord[P]>
  }




  export type DnsRecordGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DnsRecordWhereInput
    orderBy?: DnsRecordOrderByWithAggregationInput | DnsRecordOrderByWithAggregationInput[]
    by: DnsRecordScalarFieldEnum[] | DnsRecordScalarFieldEnum
    having?: DnsRecordScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DnsRecordCountAggregateInputType | true
    _min?: DnsRecordMinAggregateInputType
    _max?: DnsRecordMaxAggregateInputType
  }

  export type DnsRecordGroupByOutputType = {
    id: string
    type: $Enums.Record
    response: string | null
    region: string
    user_id: string
    dns_id: string
    _count: DnsRecordCountAggregateOutputType | null
    _min: DnsRecordMinAggregateOutputType | null
    _max: DnsRecordMaxAggregateOutputType | null
  }

  type GetDnsRecordGroupByPayload<T extends DnsRecordGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DnsRecordGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DnsRecordGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DnsRecordGroupByOutputType[P]>
            : GetScalarType<T[P], DnsRecordGroupByOutputType[P]>
        }
      >
    >


  export type DnsRecordSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    response?: boolean
    region?: boolean
    user_id?: boolean
    dns_id?: boolean
  }, ExtArgs["result"]["dnsRecord"]>

  export type DnsRecordSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    response?: boolean
    region?: boolean
    user_id?: boolean
    dns_id?: boolean
  }, ExtArgs["result"]["dnsRecord"]>

  export type DnsRecordSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    response?: boolean
    region?: boolean
    user_id?: boolean
    dns_id?: boolean
  }, ExtArgs["result"]["dnsRecord"]>

  export type DnsRecordSelectScalar = {
    id?: boolean
    type?: boolean
    response?: boolean
    region?: boolean
    user_id?: boolean
    dns_id?: boolean
  }

  export type DnsRecordOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "response" | "region" | "user_id" | "dns_id", ExtArgs["result"]["dnsRecord"]>

  export type $DnsRecordPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DnsRecord"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.Record
      response: string | null
      region: string
      user_id: string
      dns_id: string
    }, ExtArgs["result"]["dnsRecord"]>
    composites: {}
  }

  type DnsRecordGetPayload<S extends boolean | null | undefined | DnsRecordDefaultArgs> = $Result.GetResult<Prisma.$DnsRecordPayload, S>

  type DnsRecordCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DnsRecordFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DnsRecordCountAggregateInputType | true
    }

  export interface DnsRecordDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DnsRecord'], meta: { name: 'DnsRecord' } }
    /**
     * Find zero or one DnsRecord that matches the filter.
     * @param {DnsRecordFindUniqueArgs} args - Arguments to find a DnsRecord
     * @example
     * // Get one DnsRecord
     * const dnsRecord = await prisma.dnsRecord.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DnsRecordFindUniqueArgs>(args: SelectSubset<T, DnsRecordFindUniqueArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DnsRecord that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DnsRecordFindUniqueOrThrowArgs} args - Arguments to find a DnsRecord
     * @example
     * // Get one DnsRecord
     * const dnsRecord = await prisma.dnsRecord.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DnsRecordFindUniqueOrThrowArgs>(args: SelectSubset<T, DnsRecordFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DnsRecord that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordFindFirstArgs} args - Arguments to find a DnsRecord
     * @example
     * // Get one DnsRecord
     * const dnsRecord = await prisma.dnsRecord.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DnsRecordFindFirstArgs>(args?: SelectSubset<T, DnsRecordFindFirstArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DnsRecord that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordFindFirstOrThrowArgs} args - Arguments to find a DnsRecord
     * @example
     * // Get one DnsRecord
     * const dnsRecord = await prisma.dnsRecord.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DnsRecordFindFirstOrThrowArgs>(args?: SelectSubset<T, DnsRecordFindFirstOrThrowArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DnsRecords that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DnsRecords
     * const dnsRecords = await prisma.dnsRecord.findMany()
     * 
     * // Get first 10 DnsRecords
     * const dnsRecords = await prisma.dnsRecord.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dnsRecordWithIdOnly = await prisma.dnsRecord.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DnsRecordFindManyArgs>(args?: SelectSubset<T, DnsRecordFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DnsRecord.
     * @param {DnsRecordCreateArgs} args - Arguments to create a DnsRecord.
     * @example
     * // Create one DnsRecord
     * const DnsRecord = await prisma.dnsRecord.create({
     *   data: {
     *     // ... data to create a DnsRecord
     *   }
     * })
     * 
     */
    create<T extends DnsRecordCreateArgs>(args: SelectSubset<T, DnsRecordCreateArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DnsRecords.
     * @param {DnsRecordCreateManyArgs} args - Arguments to create many DnsRecords.
     * @example
     * // Create many DnsRecords
     * const dnsRecord = await prisma.dnsRecord.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DnsRecordCreateManyArgs>(args?: SelectSubset<T, DnsRecordCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DnsRecords and returns the data saved in the database.
     * @param {DnsRecordCreateManyAndReturnArgs} args - Arguments to create many DnsRecords.
     * @example
     * // Create many DnsRecords
     * const dnsRecord = await prisma.dnsRecord.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DnsRecords and only return the `id`
     * const dnsRecordWithIdOnly = await prisma.dnsRecord.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DnsRecordCreateManyAndReturnArgs>(args?: SelectSubset<T, DnsRecordCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DnsRecord.
     * @param {DnsRecordDeleteArgs} args - Arguments to delete one DnsRecord.
     * @example
     * // Delete one DnsRecord
     * const DnsRecord = await prisma.dnsRecord.delete({
     *   where: {
     *     // ... filter to delete one DnsRecord
     *   }
     * })
     * 
     */
    delete<T extends DnsRecordDeleteArgs>(args: SelectSubset<T, DnsRecordDeleteArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DnsRecord.
     * @param {DnsRecordUpdateArgs} args - Arguments to update one DnsRecord.
     * @example
     * // Update one DnsRecord
     * const dnsRecord = await prisma.dnsRecord.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DnsRecordUpdateArgs>(args: SelectSubset<T, DnsRecordUpdateArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DnsRecords.
     * @param {DnsRecordDeleteManyArgs} args - Arguments to filter DnsRecords to delete.
     * @example
     * // Delete a few DnsRecords
     * const { count } = await prisma.dnsRecord.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DnsRecordDeleteManyArgs>(args?: SelectSubset<T, DnsRecordDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DnsRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DnsRecords
     * const dnsRecord = await prisma.dnsRecord.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DnsRecordUpdateManyArgs>(args: SelectSubset<T, DnsRecordUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DnsRecords and returns the data updated in the database.
     * @param {DnsRecordUpdateManyAndReturnArgs} args - Arguments to update many DnsRecords.
     * @example
     * // Update many DnsRecords
     * const dnsRecord = await prisma.dnsRecord.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DnsRecords and only return the `id`
     * const dnsRecordWithIdOnly = await prisma.dnsRecord.updateManyAndReturn({
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
    updateManyAndReturn<T extends DnsRecordUpdateManyAndReturnArgs>(args: SelectSubset<T, DnsRecordUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DnsRecord.
     * @param {DnsRecordUpsertArgs} args - Arguments to update or create a DnsRecord.
     * @example
     * // Update or create a DnsRecord
     * const dnsRecord = await prisma.dnsRecord.upsert({
     *   create: {
     *     // ... data to create a DnsRecord
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DnsRecord we want to update
     *   }
     * })
     */
    upsert<T extends DnsRecordUpsertArgs>(args: SelectSubset<T, DnsRecordUpsertArgs<ExtArgs>>): Prisma__DnsRecordClient<$Result.GetResult<Prisma.$DnsRecordPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DnsRecords.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordCountArgs} args - Arguments to filter DnsRecords to count.
     * @example
     * // Count the number of DnsRecords
     * const count = await prisma.dnsRecord.count({
     *   where: {
     *     // ... the filter for the DnsRecords we want to count
     *   }
     * })
    **/
    count<T extends DnsRecordCountArgs>(
      args?: Subset<T, DnsRecordCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DnsRecordCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DnsRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DnsRecordAggregateArgs>(args: Subset<T, DnsRecordAggregateArgs>): Prisma.PrismaPromise<GetDnsRecordAggregateType<T>>

    /**
     * Group by DnsRecord.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DnsRecordGroupByArgs} args - Group by arguments.
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
      T extends DnsRecordGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DnsRecordGroupByArgs['orderBy'] }
        : { orderBy?: DnsRecordGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DnsRecordGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDnsRecordGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DnsRecord model
   */
  readonly fields: DnsRecordFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DnsRecord.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DnsRecordClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the DnsRecord model
   */
  interface DnsRecordFieldRefs {
    readonly id: FieldRef<"DnsRecord", 'String'>
    readonly type: FieldRef<"DnsRecord", 'Record'>
    readonly response: FieldRef<"DnsRecord", 'String'>
    readonly region: FieldRef<"DnsRecord", 'String'>
    readonly user_id: FieldRef<"DnsRecord", 'String'>
    readonly dns_id: FieldRef<"DnsRecord", 'String'>
  }
    

  // Custom InputTypes
  /**
   * DnsRecord findUnique
   */
  export type DnsRecordFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * Filter, which DnsRecord to fetch.
     */
    where: DnsRecordWhereUniqueInput
  }

  /**
   * DnsRecord findUniqueOrThrow
   */
  export type DnsRecordFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * Filter, which DnsRecord to fetch.
     */
    where: DnsRecordWhereUniqueInput
  }

  /**
   * DnsRecord findFirst
   */
  export type DnsRecordFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * Filter, which DnsRecord to fetch.
     */
    where?: DnsRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsRecords to fetch.
     */
    orderBy?: DnsRecordOrderByWithRelationInput | DnsRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DnsRecords.
     */
    cursor?: DnsRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DnsRecords.
     */
    distinct?: DnsRecordScalarFieldEnum | DnsRecordScalarFieldEnum[]
  }

  /**
   * DnsRecord findFirstOrThrow
   */
  export type DnsRecordFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * Filter, which DnsRecord to fetch.
     */
    where?: DnsRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsRecords to fetch.
     */
    orderBy?: DnsRecordOrderByWithRelationInput | DnsRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DnsRecords.
     */
    cursor?: DnsRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsRecords.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DnsRecords.
     */
    distinct?: DnsRecordScalarFieldEnum | DnsRecordScalarFieldEnum[]
  }

  /**
   * DnsRecord findMany
   */
  export type DnsRecordFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * Filter, which DnsRecords to fetch.
     */
    where?: DnsRecordWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DnsRecords to fetch.
     */
    orderBy?: DnsRecordOrderByWithRelationInput | DnsRecordOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DnsRecords.
     */
    cursor?: DnsRecordWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DnsRecords from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DnsRecords.
     */
    skip?: number
    distinct?: DnsRecordScalarFieldEnum | DnsRecordScalarFieldEnum[]
  }

  /**
   * DnsRecord create
   */
  export type DnsRecordCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * The data needed to create a DnsRecord.
     */
    data: XOR<DnsRecordCreateInput, DnsRecordUncheckedCreateInput>
  }

  /**
   * DnsRecord createMany
   */
  export type DnsRecordCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DnsRecords.
     */
    data: DnsRecordCreateManyInput | DnsRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DnsRecord createManyAndReturn
   */
  export type DnsRecordCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * The data used to create many DnsRecords.
     */
    data: DnsRecordCreateManyInput | DnsRecordCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DnsRecord update
   */
  export type DnsRecordUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * The data needed to update a DnsRecord.
     */
    data: XOR<DnsRecordUpdateInput, DnsRecordUncheckedUpdateInput>
    /**
     * Choose, which DnsRecord to update.
     */
    where: DnsRecordWhereUniqueInput
  }

  /**
   * DnsRecord updateMany
   */
  export type DnsRecordUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DnsRecords.
     */
    data: XOR<DnsRecordUpdateManyMutationInput, DnsRecordUncheckedUpdateManyInput>
    /**
     * Filter which DnsRecords to update
     */
    where?: DnsRecordWhereInput
    /**
     * Limit how many DnsRecords to update.
     */
    limit?: number
  }

  /**
   * DnsRecord updateManyAndReturn
   */
  export type DnsRecordUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * The data used to update DnsRecords.
     */
    data: XOR<DnsRecordUpdateManyMutationInput, DnsRecordUncheckedUpdateManyInput>
    /**
     * Filter which DnsRecords to update
     */
    where?: DnsRecordWhereInput
    /**
     * Limit how many DnsRecords to update.
     */
    limit?: number
  }

  /**
   * DnsRecord upsert
   */
  export type DnsRecordUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * The filter to search for the DnsRecord to update in case it exists.
     */
    where: DnsRecordWhereUniqueInput
    /**
     * In case the DnsRecord found by the `where` argument doesn't exist, create a new DnsRecord with this data.
     */
    create: XOR<DnsRecordCreateInput, DnsRecordUncheckedCreateInput>
    /**
     * In case the DnsRecord was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DnsRecordUpdateInput, DnsRecordUncheckedUpdateInput>
  }

  /**
   * DnsRecord delete
   */
  export type DnsRecordDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
    /**
     * Filter which DnsRecord to delete.
     */
    where: DnsRecordWhereUniqueInput
  }

  /**
   * DnsRecord deleteMany
   */
  export type DnsRecordDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DnsRecords to delete
     */
    where?: DnsRecordWhereInput
    /**
     * Limit how many DnsRecords to delete.
     */
    limit?: number
  }

  /**
   * DnsRecord without action
   */
  export type DnsRecordDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DnsRecord
     */
    select?: DnsRecordSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DnsRecord
     */
    omit?: DnsRecordOmit<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    password: string | null
    email: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    password: number
    email: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    password?: true
    email?: true
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
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    password: string
    email: string
    _count: UserCountAggregateOutputType | null
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
    username?: boolean
    password?: boolean
    email?: boolean
    Websites?: boolean | User$WebsitesArgs<ExtArgs>
    alert?: boolean | User$alertArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    password?: boolean
    email?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "password" | "email", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Websites?: boolean | User$WebsitesArgs<ExtArgs>
    alert?: boolean | User$alertArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      Websites: Prisma.$WebsitePayload<ExtArgs>[]
      alert: Prisma.$AlertsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      password: string
      email: string
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
    Websites<T extends User$WebsitesArgs<ExtArgs> = {}>(args?: Subset<T, User$WebsitesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WebsitePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    alert<T extends User$alertArgs<ExtArgs> = {}>(args?: Subset<T, User$alertArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
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
    skipDuplicates?: boolean
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
    skipDuplicates?: boolean
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
   * User.Websites
   */
  export type User$WebsitesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Website
     */
    select?: WebsiteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Website
     */
    omit?: WebsiteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WebsiteInclude<ExtArgs> | null
    where?: WebsiteWhereInput
    orderBy?: WebsiteOrderByWithRelationInput | WebsiteOrderByWithRelationInput[]
    cursor?: WebsiteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WebsiteScalarFieldEnum | WebsiteScalarFieldEnum[]
  }

  /**
   * User.alert
   */
  export type User$alertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    where?: AlertsWhereInput
    orderBy?: AlertsOrderByWithRelationInput | AlertsOrderByWithRelationInput[]
    cursor?: AlertsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlertsScalarFieldEnum | AlertsScalarFieldEnum[]
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
   * Model Alerts
   */

  export type AggregateAlerts = {
    _count: AlertsCountAggregateOutputType | null
    _min: AlertsMinAggregateOutputType | null
    _max: AlertsMaxAggregateOutputType | null
  }

  export type AlertsMinAggregateOutputType = {
    id: string | null
    website_id: string | null
    userId: string | null
    alert_type: $Enums.Alert | null
    type: $Enums.MsgType | null
    verified: boolean | null
    status: $Enums.AlertStatus | null
    msg: string | null
    created_at: Date | null
  }

  export type AlertsMaxAggregateOutputType = {
    id: string | null
    website_id: string | null
    userId: string | null
    alert_type: $Enums.Alert | null
    type: $Enums.MsgType | null
    verified: boolean | null
    status: $Enums.AlertStatus | null
    msg: string | null
    created_at: Date | null
  }

  export type AlertsCountAggregateOutputType = {
    id: number
    website_id: number
    userId: number
    alert_type: number
    type: number
    verified: number
    status: number
    msg: number
    created_at: number
    _all: number
  }


  export type AlertsMinAggregateInputType = {
    id?: true
    website_id?: true
    userId?: true
    alert_type?: true
    type?: true
    verified?: true
    status?: true
    msg?: true
    created_at?: true
  }

  export type AlertsMaxAggregateInputType = {
    id?: true
    website_id?: true
    userId?: true
    alert_type?: true
    type?: true
    verified?: true
    status?: true
    msg?: true
    created_at?: true
  }

  export type AlertsCountAggregateInputType = {
    id?: true
    website_id?: true
    userId?: true
    alert_type?: true
    type?: true
    verified?: true
    status?: true
    msg?: true
    created_at?: true
    _all?: true
  }

  export type AlertsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to aggregate.
     */
    where?: AlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertsOrderByWithRelationInput | AlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Alerts
    **/
    _count?: true | AlertsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlertsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlertsMaxAggregateInputType
  }

  export type GetAlertsAggregateType<T extends AlertsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlerts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlerts[P]>
      : GetScalarType<T[P], AggregateAlerts[P]>
  }




  export type AlertsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlertsWhereInput
    orderBy?: AlertsOrderByWithAggregationInput | AlertsOrderByWithAggregationInput[]
    by: AlertsScalarFieldEnum[] | AlertsScalarFieldEnum
    having?: AlertsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlertsCountAggregateInputType | true
    _min?: AlertsMinAggregateInputType
    _max?: AlertsMaxAggregateInputType
  }

  export type AlertsGroupByOutputType = {
    id: string
    website_id: string
    userId: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified: boolean | null
    status: $Enums.AlertStatus
    msg: string
    created_at: Date
    _count: AlertsCountAggregateOutputType | null
    _min: AlertsMinAggregateOutputType | null
    _max: AlertsMaxAggregateOutputType | null
  }

  type GetAlertsGroupByPayload<T extends AlertsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlertsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlertsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlertsGroupByOutputType[P]>
            : GetScalarType<T[P], AlertsGroupByOutputType[P]>
        }
      >
    >


  export type AlertsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website_id?: boolean
    userId?: boolean
    alert_type?: boolean
    type?: boolean
    verified?: boolean
    status?: boolean
    msg?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerts"]>

  export type AlertsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website_id?: boolean
    userId?: boolean
    alert_type?: boolean
    type?: boolean
    verified?: boolean
    status?: boolean
    msg?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerts"]>

  export type AlertsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    website_id?: boolean
    userId?: boolean
    alert_type?: boolean
    type?: boolean
    verified?: boolean
    status?: boolean
    msg?: boolean
    created_at?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["alerts"]>

  export type AlertsSelectScalar = {
    id?: boolean
    website_id?: boolean
    userId?: boolean
    alert_type?: boolean
    type?: boolean
    verified?: boolean
    status?: boolean
    msg?: boolean
    created_at?: boolean
  }

  export type AlertsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "website_id" | "userId" | "alert_type" | "type" | "verified" | "status" | "msg" | "created_at", ExtArgs["result"]["alerts"]>
  export type AlertsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AlertsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AlertsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Alerts"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      website_id: string
      userId: string
      alert_type: $Enums.Alert
      type: $Enums.MsgType
      verified: boolean | null
      status: $Enums.AlertStatus
      msg: string
      created_at: Date
    }, ExtArgs["result"]["alerts"]>
    composites: {}
  }

  type AlertsGetPayload<S extends boolean | null | undefined | AlertsDefaultArgs> = $Result.GetResult<Prisma.$AlertsPayload, S>

  type AlertsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AlertsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AlertsCountAggregateInputType | true
    }

  export interface AlertsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Alerts'], meta: { name: 'Alerts' } }
    /**
     * Find zero or one Alerts that matches the filter.
     * @param {AlertsFindUniqueArgs} args - Arguments to find a Alerts
     * @example
     * // Get one Alerts
     * const alerts = await prisma.alerts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AlertsFindUniqueArgs>(args: SelectSubset<T, AlertsFindUniqueArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Alerts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AlertsFindUniqueOrThrowArgs} args - Arguments to find a Alerts
     * @example
     * // Get one Alerts
     * const alerts = await prisma.alerts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AlertsFindUniqueOrThrowArgs>(args: SelectSubset<T, AlertsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsFindFirstArgs} args - Arguments to find a Alerts
     * @example
     * // Get one Alerts
     * const alerts = await prisma.alerts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AlertsFindFirstArgs>(args?: SelectSubset<T, AlertsFindFirstArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Alerts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsFindFirstOrThrowArgs} args - Arguments to find a Alerts
     * @example
     * // Get one Alerts
     * const alerts = await prisma.alerts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AlertsFindFirstOrThrowArgs>(args?: SelectSubset<T, AlertsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Alerts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Alerts
     * const alerts = await prisma.alerts.findMany()
     * 
     * // Get first 10 Alerts
     * const alerts = await prisma.alerts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const alertsWithIdOnly = await prisma.alerts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AlertsFindManyArgs>(args?: SelectSubset<T, AlertsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Alerts.
     * @param {AlertsCreateArgs} args - Arguments to create a Alerts.
     * @example
     * // Create one Alerts
     * const Alerts = await prisma.alerts.create({
     *   data: {
     *     // ... data to create a Alerts
     *   }
     * })
     * 
     */
    create<T extends AlertsCreateArgs>(args: SelectSubset<T, AlertsCreateArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Alerts.
     * @param {AlertsCreateManyArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alerts = await prisma.alerts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AlertsCreateManyArgs>(args?: SelectSubset<T, AlertsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Alerts and returns the data saved in the database.
     * @param {AlertsCreateManyAndReturnArgs} args - Arguments to create many Alerts.
     * @example
     * // Create many Alerts
     * const alerts = await prisma.alerts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Alerts and only return the `id`
     * const alertsWithIdOnly = await prisma.alerts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AlertsCreateManyAndReturnArgs>(args?: SelectSubset<T, AlertsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Alerts.
     * @param {AlertsDeleteArgs} args - Arguments to delete one Alerts.
     * @example
     * // Delete one Alerts
     * const Alerts = await prisma.alerts.delete({
     *   where: {
     *     // ... filter to delete one Alerts
     *   }
     * })
     * 
     */
    delete<T extends AlertsDeleteArgs>(args: SelectSubset<T, AlertsDeleteArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Alerts.
     * @param {AlertsUpdateArgs} args - Arguments to update one Alerts.
     * @example
     * // Update one Alerts
     * const alerts = await prisma.alerts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AlertsUpdateArgs>(args: SelectSubset<T, AlertsUpdateArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Alerts.
     * @param {AlertsDeleteManyArgs} args - Arguments to filter Alerts to delete.
     * @example
     * // Delete a few Alerts
     * const { count } = await prisma.alerts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AlertsDeleteManyArgs>(args?: SelectSubset<T, AlertsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Alerts
     * const alerts = await prisma.alerts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AlertsUpdateManyArgs>(args: SelectSubset<T, AlertsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Alerts and returns the data updated in the database.
     * @param {AlertsUpdateManyAndReturnArgs} args - Arguments to update many Alerts.
     * @example
     * // Update many Alerts
     * const alerts = await prisma.alerts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Alerts and only return the `id`
     * const alertsWithIdOnly = await prisma.alerts.updateManyAndReturn({
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
    updateManyAndReturn<T extends AlertsUpdateManyAndReturnArgs>(args: SelectSubset<T, AlertsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Alerts.
     * @param {AlertsUpsertArgs} args - Arguments to update or create a Alerts.
     * @example
     * // Update or create a Alerts
     * const alerts = await prisma.alerts.upsert({
     *   create: {
     *     // ... data to create a Alerts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Alerts we want to update
     *   }
     * })
     */
    upsert<T extends AlertsUpsertArgs>(args: SelectSubset<T, AlertsUpsertArgs<ExtArgs>>): Prisma__AlertsClient<$Result.GetResult<Prisma.$AlertsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsCountArgs} args - Arguments to filter Alerts to count.
     * @example
     * // Count the number of Alerts
     * const count = await prisma.alerts.count({
     *   where: {
     *     // ... the filter for the Alerts we want to count
     *   }
     * })
    **/
    count<T extends AlertsCountArgs>(
      args?: Subset<T, AlertsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlertsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlertsAggregateArgs>(args: Subset<T, AlertsAggregateArgs>): Prisma.PrismaPromise<GetAlertsAggregateType<T>>

    /**
     * Group by Alerts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlertsGroupByArgs} args - Group by arguments.
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
      T extends AlertsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlertsGroupByArgs['orderBy'] }
        : { orderBy?: AlertsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlertsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlertsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Alerts model
   */
  readonly fields: AlertsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Alerts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlertsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Alerts model
   */
  interface AlertsFieldRefs {
    readonly id: FieldRef<"Alerts", 'String'>
    readonly website_id: FieldRef<"Alerts", 'String'>
    readonly userId: FieldRef<"Alerts", 'String'>
    readonly alert_type: FieldRef<"Alerts", 'Alert'>
    readonly type: FieldRef<"Alerts", 'MsgType'>
    readonly verified: FieldRef<"Alerts", 'Boolean'>
    readonly status: FieldRef<"Alerts", 'AlertStatus'>
    readonly msg: FieldRef<"Alerts", 'String'>
    readonly created_at: FieldRef<"Alerts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Alerts findUnique
   */
  export type AlertsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where: AlertsWhereUniqueInput
  }

  /**
   * Alerts findUniqueOrThrow
   */
  export type AlertsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where: AlertsWhereUniqueInput
  }

  /**
   * Alerts findFirst
   */
  export type AlertsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertsOrderByWithRelationInput | AlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertsScalarFieldEnum | AlertsScalarFieldEnum[]
  }

  /**
   * Alerts findFirstOrThrow
   */
  export type AlertsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertsOrderByWithRelationInput | AlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Alerts.
     */
    cursor?: AlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Alerts.
     */
    distinct?: AlertsScalarFieldEnum | AlertsScalarFieldEnum[]
  }

  /**
   * Alerts findMany
   */
  export type AlertsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * Filter, which Alerts to fetch.
     */
    where?: AlertsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Alerts to fetch.
     */
    orderBy?: AlertsOrderByWithRelationInput | AlertsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Alerts.
     */
    cursor?: AlertsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Alerts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Alerts.
     */
    skip?: number
    distinct?: AlertsScalarFieldEnum | AlertsScalarFieldEnum[]
  }

  /**
   * Alerts create
   */
  export type AlertsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * The data needed to create a Alerts.
     */
    data: XOR<AlertsCreateInput, AlertsUncheckedCreateInput>
  }

  /**
   * Alerts createMany
   */
  export type AlertsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Alerts.
     */
    data: AlertsCreateManyInput | AlertsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Alerts createManyAndReturn
   */
  export type AlertsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * The data used to create many Alerts.
     */
    data: AlertsCreateManyInput | AlertsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerts update
   */
  export type AlertsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * The data needed to update a Alerts.
     */
    data: XOR<AlertsUpdateInput, AlertsUncheckedUpdateInput>
    /**
     * Choose, which Alerts to update.
     */
    where: AlertsWhereUniqueInput
  }

  /**
   * Alerts updateMany
   */
  export type AlertsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertsUpdateManyMutationInput, AlertsUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertsWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
  }

  /**
   * Alerts updateManyAndReturn
   */
  export type AlertsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * The data used to update Alerts.
     */
    data: XOR<AlertsUpdateManyMutationInput, AlertsUncheckedUpdateManyInput>
    /**
     * Filter which Alerts to update
     */
    where?: AlertsWhereInput
    /**
     * Limit how many Alerts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Alerts upsert
   */
  export type AlertsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * The filter to search for the Alerts to update in case it exists.
     */
    where: AlertsWhereUniqueInput
    /**
     * In case the Alerts found by the `where` argument doesn't exist, create a new Alerts with this data.
     */
    create: XOR<AlertsCreateInput, AlertsUncheckedCreateInput>
    /**
     * In case the Alerts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlertsUpdateInput, AlertsUncheckedUpdateInput>
  }

  /**
   * Alerts delete
   */
  export type AlertsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
    /**
     * Filter which Alerts to delete.
     */
    where: AlertsWhereUniqueInput
  }

  /**
   * Alerts deleteMany
   */
  export type AlertsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Alerts to delete
     */
    where?: AlertsWhereInput
    /**
     * Limit how many Alerts to delete.
     */
    limit?: number
  }

  /**
   * Alerts without action
   */
  export type AlertsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Alerts
     */
    select?: AlertsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Alerts
     */
    omit?: AlertsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AlertsInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    name: string
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name", ExtArgs["result"]["region"]>

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
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
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
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
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
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


  export const WebsiteScalarFieldEnum: {
    id: 'id',
    url: 'url',
    userId: 'userId',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WebsiteScalarFieldEnum = (typeof WebsiteScalarFieldEnum)[keyof typeof WebsiteScalarFieldEnum]


  export const DnsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    domain: 'domain',
    ip_addr: 'ip_addr',
    resolver: 'resolver',
    interval: 'interval',
    active: 'active',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    authoritative: 'authoritative'
  };

  export type DnsScalarFieldEnum = (typeof DnsScalarFieldEnum)[keyof typeof DnsScalarFieldEnum]


  export const WebsiteTickScalarFieldEnum: {
    id: 'id',
    response_time_ms: 'response_time_ms',
    status: 'status',
    region: 'region',
    userId: 'userId',
    website_id: 'website_id',
    CreatedAt: 'CreatedAt'
  };

  export type WebsiteTickScalarFieldEnum = (typeof WebsiteTickScalarFieldEnum)[keyof typeof WebsiteTickScalarFieldEnum]


  export const DnsTickScalarFieldEnum: {
    id: 'id',
    latency_ms: 'latency_ms',
    status: 'status',
    region: 'region',
    userId: 'userId',
    dns_id: 'dns_id',
    check_id: 'check_id',
    resolver_ip: 'resolver_ip',
    CreatedAt: 'CreatedAt'
  };

  export type DnsTickScalarFieldEnum = (typeof DnsTickScalarFieldEnum)[keyof typeof DnsTickScalarFieldEnum]


  export const DnsRecordScalarFieldEnum: {
    id: 'id',
    type: 'type',
    response: 'response',
    region: 'region',
    user_id: 'user_id',
    dns_id: 'dns_id'
  };

  export type DnsRecordScalarFieldEnum = (typeof DnsRecordScalarFieldEnum)[keyof typeof DnsRecordScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    password: 'password',
    email: 'email'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AlertsScalarFieldEnum: {
    id: 'id',
    website_id: 'website_id',
    userId: 'userId',
    alert_type: 'alert_type',
    type: 'type',
    verified: 'verified',
    status: 'status',
    msg: 'msg',
    created_at: 'created_at'
  };

  export type AlertsScalarFieldEnum = (typeof AlertsScalarFieldEnum)[keyof typeof AlertsScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'WebsiteStatus'
   */
  export type EnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus'>
    


  /**
   * Reference to a field of type 'WebsiteStatus[]'
   */
  export type ListEnumWebsiteStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'WebsiteStatus[]'>
    


  /**
   * Reference to a field of type 'DnsStatus'
   */
  export type EnumDnsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DnsStatus'>
    


  /**
   * Reference to a field of type 'DnsStatus[]'
   */
  export type ListEnumDnsStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DnsStatus[]'>
    


  /**
   * Reference to a field of type 'Record'
   */
  export type EnumRecordFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Record'>
    


  /**
   * Reference to a field of type 'Record[]'
   */
  export type ListEnumRecordFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Record[]'>
    


  /**
   * Reference to a field of type 'Alert'
   */
  export type EnumAlertFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Alert'>
    


  /**
   * Reference to a field of type 'Alert[]'
   */
  export type ListEnumAlertFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Alert[]'>
    


  /**
   * Reference to a field of type 'MsgType'
   */
  export type EnumMsgTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MsgType'>
    


  /**
   * Reference to a field of type 'MsgType[]'
   */
  export type ListEnumMsgTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MsgType[]'>
    


  /**
   * Reference to a field of type 'AlertStatus'
   */
  export type EnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus'>
    


  /**
   * Reference to a field of type 'AlertStatus[]'
   */
  export type ListEnumAlertStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AlertStatus[]'>
    


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


  export type WebsiteWhereInput = {
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    id?: StringFilter<"Website"> | string
    url?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    active?: BoolFilter<"Website"> | boolean
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticks?: WebsiteTickListRelationFilter
  }

  export type WebsiteOrderByWithRelationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    User?: UserOrderByWithRelationInput
    ticks?: WebsiteTickOrderByRelationAggregateInput
  }

  export type WebsiteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteWhereInput | WebsiteWhereInput[]
    OR?: WebsiteWhereInput[]
    NOT?: WebsiteWhereInput | WebsiteWhereInput[]
    url?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    active?: BoolFilter<"Website"> | boolean
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
    User?: XOR<UserScalarRelationFilter, UserWhereInput>
    ticks?: WebsiteTickListRelationFilter
  }, "id">

  export type WebsiteOrderByWithAggregationInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WebsiteCountOrderByAggregateInput
    _max?: WebsiteMaxOrderByAggregateInput
    _min?: WebsiteMinOrderByAggregateInput
  }

  export type WebsiteScalarWhereWithAggregatesInput = {
    AND?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    OR?: WebsiteScalarWhereWithAggregatesInput[]
    NOT?: WebsiteScalarWhereWithAggregatesInput | WebsiteScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Website"> | string
    url?: StringWithAggregatesFilter<"Website"> | string
    userId?: StringWithAggregatesFilter<"Website"> | string
    active?: BoolWithAggregatesFilter<"Website"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Website"> | Date | string
  }

  export type DnsWhereInput = {
    AND?: DnsWhereInput | DnsWhereInput[]
    OR?: DnsWhereInput[]
    NOT?: DnsWhereInput | DnsWhereInput[]
    id?: StringFilter<"Dns"> | string
    userId?: StringFilter<"Dns"> | string
    domain?: StringFilter<"Dns"> | string
    ip_addr?: StringFilter<"Dns"> | string
    resolver?: StringNullableFilter<"Dns"> | string | null
    interval?: IntFilter<"Dns"> | number
    active?: BoolFilter<"Dns"> | boolean
    createdAt?: DateTimeFilter<"Dns"> | Date | string
    updatedAt?: DateTimeFilter<"Dns"> | Date | string
    authoritative?: BoolFilter<"Dns"> | boolean
    ticks?: DnsTickListRelationFilter
  }

  export type DnsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    ip_addr?: SortOrder
    resolver?: SortOrderInput | SortOrder
    interval?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authoritative?: SortOrder
    ticks?: DnsTickOrderByRelationAggregateInput
  }

  export type DnsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DnsWhereInput | DnsWhereInput[]
    OR?: DnsWhereInput[]
    NOT?: DnsWhereInput | DnsWhereInput[]
    userId?: StringFilter<"Dns"> | string
    domain?: StringFilter<"Dns"> | string
    ip_addr?: StringFilter<"Dns"> | string
    resolver?: StringNullableFilter<"Dns"> | string | null
    interval?: IntFilter<"Dns"> | number
    active?: BoolFilter<"Dns"> | boolean
    createdAt?: DateTimeFilter<"Dns"> | Date | string
    updatedAt?: DateTimeFilter<"Dns"> | Date | string
    authoritative?: BoolFilter<"Dns"> | boolean
    ticks?: DnsTickListRelationFilter
  }, "id">

  export type DnsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    ip_addr?: SortOrder
    resolver?: SortOrderInput | SortOrder
    interval?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authoritative?: SortOrder
    _count?: DnsCountOrderByAggregateInput
    _avg?: DnsAvgOrderByAggregateInput
    _max?: DnsMaxOrderByAggregateInput
    _min?: DnsMinOrderByAggregateInput
    _sum?: DnsSumOrderByAggregateInput
  }

  export type DnsScalarWhereWithAggregatesInput = {
    AND?: DnsScalarWhereWithAggregatesInput | DnsScalarWhereWithAggregatesInput[]
    OR?: DnsScalarWhereWithAggregatesInput[]
    NOT?: DnsScalarWhereWithAggregatesInput | DnsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Dns"> | string
    userId?: StringWithAggregatesFilter<"Dns"> | string
    domain?: StringWithAggregatesFilter<"Dns"> | string
    ip_addr?: StringWithAggregatesFilter<"Dns"> | string
    resolver?: StringNullableWithAggregatesFilter<"Dns"> | string | null
    interval?: IntWithAggregatesFilter<"Dns"> | number
    active?: BoolWithAggregatesFilter<"Dns"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Dns"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Dns"> | Date | string
    authoritative?: BoolWithAggregatesFilter<"Dns"> | boolean
  }

  export type WebsiteTickWhereInput = {
    AND?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    OR?: WebsiteTickWhereInput[]
    NOT?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    id?: StringFilter<"WebsiteTick"> | string
    response_time_ms?: IntFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region?: StringFilter<"WebsiteTick"> | string
    userId?: StringFilter<"WebsiteTick"> | string
    website_id?: StringFilter<"WebsiteTick"> | string
    CreatedAt?: DateTimeFilter<"WebsiteTick"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }

  export type WebsiteTickOrderByWithRelationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    website_id?: SortOrder
    CreatedAt?: SortOrder
    website?: WebsiteOrderByWithRelationInput
  }

  export type WebsiteTickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    OR?: WebsiteTickWhereInput[]
    NOT?: WebsiteTickWhereInput | WebsiteTickWhereInput[]
    response_time_ms?: IntFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region?: StringFilter<"WebsiteTick"> | string
    userId?: StringFilter<"WebsiteTick"> | string
    website_id?: StringFilter<"WebsiteTick"> | string
    CreatedAt?: DateTimeFilter<"WebsiteTick"> | Date | string
    website?: XOR<WebsiteScalarRelationFilter, WebsiteWhereInput>
  }, "id">

  export type WebsiteTickOrderByWithAggregationInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    website_id?: SortOrder
    CreatedAt?: SortOrder
    _count?: WebsiteTickCountOrderByAggregateInput
    _avg?: WebsiteTickAvgOrderByAggregateInput
    _max?: WebsiteTickMaxOrderByAggregateInput
    _min?: WebsiteTickMinOrderByAggregateInput
    _sum?: WebsiteTickSumOrderByAggregateInput
  }

  export type WebsiteTickScalarWhereWithAggregatesInput = {
    AND?: WebsiteTickScalarWhereWithAggregatesInput | WebsiteTickScalarWhereWithAggregatesInput[]
    OR?: WebsiteTickScalarWhereWithAggregatesInput[]
    NOT?: WebsiteTickScalarWhereWithAggregatesInput | WebsiteTickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"WebsiteTick"> | string
    response_time_ms?: IntWithAggregatesFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusWithAggregatesFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region?: StringWithAggregatesFilter<"WebsiteTick"> | string
    userId?: StringWithAggregatesFilter<"WebsiteTick"> | string
    website_id?: StringWithAggregatesFilter<"WebsiteTick"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"WebsiteTick"> | Date | string
  }

  export type DnsTickWhereInput = {
    AND?: DnsTickWhereInput | DnsTickWhereInput[]
    OR?: DnsTickWhereInput[]
    NOT?: DnsTickWhereInput | DnsTickWhereInput[]
    id?: StringFilter<"DnsTick"> | string
    latency_ms?: IntFilter<"DnsTick"> | number
    status?: EnumDnsStatusFilter<"DnsTick"> | $Enums.DnsStatus
    region?: StringFilter<"DnsTick"> | string
    userId?: StringFilter<"DnsTick"> | string
    dns_id?: StringFilter<"DnsTick"> | string
    check_id?: StringNullableFilter<"DnsTick"> | string | null
    resolver_ip?: StringFilter<"DnsTick"> | string
    CreatedAt?: DateTimeFilter<"DnsTick"> | Date | string
    dns?: XOR<DnsScalarRelationFilter, DnsWhereInput>
  }

  export type DnsTickOrderByWithRelationInput = {
    id?: SortOrder
    latency_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    dns_id?: SortOrder
    check_id?: SortOrderInput | SortOrder
    resolver_ip?: SortOrder
    CreatedAt?: SortOrder
    dns?: DnsOrderByWithRelationInput
  }

  export type DnsTickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DnsTickWhereInput | DnsTickWhereInput[]
    OR?: DnsTickWhereInput[]
    NOT?: DnsTickWhereInput | DnsTickWhereInput[]
    latency_ms?: IntFilter<"DnsTick"> | number
    status?: EnumDnsStatusFilter<"DnsTick"> | $Enums.DnsStatus
    region?: StringFilter<"DnsTick"> | string
    userId?: StringFilter<"DnsTick"> | string
    dns_id?: StringFilter<"DnsTick"> | string
    check_id?: StringNullableFilter<"DnsTick"> | string | null
    resolver_ip?: StringFilter<"DnsTick"> | string
    CreatedAt?: DateTimeFilter<"DnsTick"> | Date | string
    dns?: XOR<DnsScalarRelationFilter, DnsWhereInput>
  }, "id">

  export type DnsTickOrderByWithAggregationInput = {
    id?: SortOrder
    latency_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    dns_id?: SortOrder
    check_id?: SortOrderInput | SortOrder
    resolver_ip?: SortOrder
    CreatedAt?: SortOrder
    _count?: DnsTickCountOrderByAggregateInput
    _avg?: DnsTickAvgOrderByAggregateInput
    _max?: DnsTickMaxOrderByAggregateInput
    _min?: DnsTickMinOrderByAggregateInput
    _sum?: DnsTickSumOrderByAggregateInput
  }

  export type DnsTickScalarWhereWithAggregatesInput = {
    AND?: DnsTickScalarWhereWithAggregatesInput | DnsTickScalarWhereWithAggregatesInput[]
    OR?: DnsTickScalarWhereWithAggregatesInput[]
    NOT?: DnsTickScalarWhereWithAggregatesInput | DnsTickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DnsTick"> | string
    latency_ms?: IntWithAggregatesFilter<"DnsTick"> | number
    status?: EnumDnsStatusWithAggregatesFilter<"DnsTick"> | $Enums.DnsStatus
    region?: StringWithAggregatesFilter<"DnsTick"> | string
    userId?: StringWithAggregatesFilter<"DnsTick"> | string
    dns_id?: StringWithAggregatesFilter<"DnsTick"> | string
    check_id?: StringNullableWithAggregatesFilter<"DnsTick"> | string | null
    resolver_ip?: StringWithAggregatesFilter<"DnsTick"> | string
    CreatedAt?: DateTimeWithAggregatesFilter<"DnsTick"> | Date | string
  }

  export type DnsRecordWhereInput = {
    AND?: DnsRecordWhereInput | DnsRecordWhereInput[]
    OR?: DnsRecordWhereInput[]
    NOT?: DnsRecordWhereInput | DnsRecordWhereInput[]
    id?: StringFilter<"DnsRecord"> | string
    type?: EnumRecordFilter<"DnsRecord"> | $Enums.Record
    response?: StringNullableFilter<"DnsRecord"> | string | null
    region?: StringFilter<"DnsRecord"> | string
    user_id?: StringFilter<"DnsRecord"> | string
    dns_id?: StringFilter<"DnsRecord"> | string
  }

  export type DnsRecordOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    response?: SortOrderInput | SortOrder
    region?: SortOrder
    user_id?: SortOrder
    dns_id?: SortOrder
  }

  export type DnsRecordWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DnsRecordWhereInput | DnsRecordWhereInput[]
    OR?: DnsRecordWhereInput[]
    NOT?: DnsRecordWhereInput | DnsRecordWhereInput[]
    type?: EnumRecordFilter<"DnsRecord"> | $Enums.Record
    response?: StringNullableFilter<"DnsRecord"> | string | null
    region?: StringFilter<"DnsRecord"> | string
    user_id?: StringFilter<"DnsRecord"> | string
    dns_id?: StringFilter<"DnsRecord"> | string
  }, "id">

  export type DnsRecordOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    response?: SortOrderInput | SortOrder
    region?: SortOrder
    user_id?: SortOrder
    dns_id?: SortOrder
    _count?: DnsRecordCountOrderByAggregateInput
    _max?: DnsRecordMaxOrderByAggregateInput
    _min?: DnsRecordMinOrderByAggregateInput
  }

  export type DnsRecordScalarWhereWithAggregatesInput = {
    AND?: DnsRecordScalarWhereWithAggregatesInput | DnsRecordScalarWhereWithAggregatesInput[]
    OR?: DnsRecordScalarWhereWithAggregatesInput[]
    NOT?: DnsRecordScalarWhereWithAggregatesInput | DnsRecordScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DnsRecord"> | string
    type?: EnumRecordWithAggregatesFilter<"DnsRecord"> | $Enums.Record
    response?: StringNullableWithAggregatesFilter<"DnsRecord"> | string | null
    region?: StringWithAggregatesFilter<"DnsRecord"> | string
    user_id?: StringWithAggregatesFilter<"DnsRecord"> | string
    dns_id?: StringWithAggregatesFilter<"DnsRecord"> | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    Websites?: WebsiteListRelationFilter
    alert?: AlertsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    Websites?: WebsiteOrderByRelationAggregateInput
    alert?: AlertsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    Websites?: WebsiteListRelationFilter
    alert?: AlertsListRelationFilter
  }, "id">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
  }

  export type AlertsWhereInput = {
    AND?: AlertsWhereInput | AlertsWhereInput[]
    OR?: AlertsWhereInput[]
    NOT?: AlertsWhereInput | AlertsWhereInput[]
    id?: StringFilter<"Alerts"> | string
    website_id?: StringFilter<"Alerts"> | string
    userId?: StringFilter<"Alerts"> | string
    alert_type?: EnumAlertFilter<"Alerts"> | $Enums.Alert
    type?: EnumMsgTypeFilter<"Alerts"> | $Enums.MsgType
    verified?: BoolNullableFilter<"Alerts"> | boolean | null
    status?: EnumAlertStatusFilter<"Alerts"> | $Enums.AlertStatus
    msg?: StringFilter<"Alerts"> | string
    created_at?: DateTimeFilter<"Alerts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AlertsOrderByWithRelationInput = {
    id?: SortOrder
    website_id?: SortOrder
    userId?: SortOrder
    alert_type?: SortOrder
    type?: SortOrder
    verified?: SortOrderInput | SortOrder
    status?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AlertsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlertsWhereInput | AlertsWhereInput[]
    OR?: AlertsWhereInput[]
    NOT?: AlertsWhereInput | AlertsWhereInput[]
    website_id?: StringFilter<"Alerts"> | string
    userId?: StringFilter<"Alerts"> | string
    alert_type?: EnumAlertFilter<"Alerts"> | $Enums.Alert
    type?: EnumMsgTypeFilter<"Alerts"> | $Enums.MsgType
    verified?: BoolNullableFilter<"Alerts"> | boolean | null
    status?: EnumAlertStatusFilter<"Alerts"> | $Enums.AlertStatus
    msg?: StringFilter<"Alerts"> | string
    created_at?: DateTimeFilter<"Alerts"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type AlertsOrderByWithAggregationInput = {
    id?: SortOrder
    website_id?: SortOrder
    userId?: SortOrder
    alert_type?: SortOrder
    type?: SortOrder
    verified?: SortOrderInput | SortOrder
    status?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
    _count?: AlertsCountOrderByAggregateInput
    _max?: AlertsMaxOrderByAggregateInput
    _min?: AlertsMinOrderByAggregateInput
  }

  export type AlertsScalarWhereWithAggregatesInput = {
    AND?: AlertsScalarWhereWithAggregatesInput | AlertsScalarWhereWithAggregatesInput[]
    OR?: AlertsScalarWhereWithAggregatesInput[]
    NOT?: AlertsScalarWhereWithAggregatesInput | AlertsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Alerts"> | string
    website_id?: StringWithAggregatesFilter<"Alerts"> | string
    userId?: StringWithAggregatesFilter<"Alerts"> | string
    alert_type?: EnumAlertWithAggregatesFilter<"Alerts"> | $Enums.Alert
    type?: EnumMsgTypeWithAggregatesFilter<"Alerts"> | $Enums.MsgType
    verified?: BoolNullableWithAggregatesFilter<"Alerts"> | boolean | null
    status?: EnumAlertStatusWithAggregatesFilter<"Alerts"> | $Enums.AlertStatus
    msg?: StringWithAggregatesFilter<"Alerts"> | string
    created_at?: DateTimeWithAggregatesFilter<"Alerts"> | Date | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    name?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
  }, "name">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    name?: StringWithAggregatesFilter<"Region"> | string
  }

  export type WebsiteCreateInput = {
    id?: string
    url: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutWebsitesInput
    ticks?: WebsiteTickCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateInput = {
    id?: string
    url: string
    userId: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticks?: WebsiteTickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutWebsitesNestedInput
    ticks?: WebsiteTickUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: WebsiteTickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteCreateManyInput = {
    id?: string
    url: string
    userId: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsCreateInput = {
    id?: string
    userId: string
    domain: string
    ip_addr: string
    resolver?: string | null
    interval: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authoritative?: boolean
    ticks?: DnsTickCreateNestedManyWithoutDnsInput
  }

  export type DnsUncheckedCreateInput = {
    id?: string
    userId: string
    domain: string
    ip_addr: string
    resolver?: string | null
    interval: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authoritative?: boolean
    ticks?: DnsTickUncheckedCreateNestedManyWithoutDnsInput
  }

  export type DnsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    ip_addr?: StringFieldUpdateOperationsInput | string
    resolver?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoritative?: BoolFieldUpdateOperationsInput | boolean
    ticks?: DnsTickUpdateManyWithoutDnsNestedInput
  }

  export type DnsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    ip_addr?: StringFieldUpdateOperationsInput | string
    resolver?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoritative?: BoolFieldUpdateOperationsInput | boolean
    ticks?: DnsTickUncheckedUpdateManyWithoutDnsNestedInput
  }

  export type DnsCreateManyInput = {
    id?: string
    userId: string
    domain: string
    ip_addr: string
    resolver?: string | null
    interval: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authoritative?: boolean
  }

  export type DnsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    ip_addr?: StringFieldUpdateOperationsInput | string
    resolver?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoritative?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DnsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    ip_addr?: StringFieldUpdateOperationsInput | string
    resolver?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoritative?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebsiteTickCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    CreatedAt?: Date | string
    website: WebsiteCreateNestedOneWithoutTicksInput
  }

  export type WebsiteTickUncheckedCreateInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    website_id: string
    CreatedAt?: Date | string
  }

  export type WebsiteTickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    website?: WebsiteUpdateOneRequiredWithoutTicksNestedInput
  }

  export type WebsiteTickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTickCreateManyInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    website_id: string
    CreatedAt?: Date | string
  }

  export type WebsiteTickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsTickCreateInput = {
    id?: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    check_id?: string | null
    resolver_ip: string
    CreatedAt?: Date | string
    dns: DnsCreateNestedOneWithoutTicksInput
  }

  export type DnsTickUncheckedCreateInput = {
    id?: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    dns_id: string
    check_id?: string | null
    resolver_ip: string
    CreatedAt?: Date | string
  }

  export type DnsTickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dns?: DnsUpdateOneRequiredWithoutTicksNestedInput
  }

  export type DnsTickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dns_id?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsTickCreateManyInput = {
    id?: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    dns_id: string
    check_id?: string | null
    resolver_ip: string
    CreatedAt?: Date | string
  }

  export type DnsTickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsTickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    dns_id?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsRecordCreateInput = {
    id?: string
    type: $Enums.Record
    response?: string | null
    region: string
    user_id: string
    dns_id: string
  }

  export type DnsRecordUncheckedCreateInput = {
    id?: string
    type: $Enums.Record
    response?: string | null
    region: string
    user_id: string
    dns_id: string
  }

  export type DnsRecordUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    response?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    dns_id?: StringFieldUpdateOperationsInput | string
  }

  export type DnsRecordUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    response?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    dns_id?: StringFieldUpdateOperationsInput | string
  }

  export type DnsRecordCreateManyInput = {
    id?: string
    type: $Enums.Record
    response?: string | null
    region: string
    user_id: string
    dns_id: string
  }

  export type DnsRecordUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    response?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    dns_id?: StringFieldUpdateOperationsInput | string
  }

  export type DnsRecordUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumRecordFieldUpdateOperationsInput | $Enums.Record
    response?: NullableStringFieldUpdateOperationsInput | string | null
    region?: StringFieldUpdateOperationsInput | string
    user_id?: StringFieldUpdateOperationsInput | string
    dns_id?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    Websites?: WebsiteCreateNestedManyWithoutUserInput
    alert?: AlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    password: string
    email: string
    Websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
    alert?: AlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Websites?: WebsiteUpdateManyWithoutUserNestedInput
    alert?: AlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
    alert?: AlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    password: string
    email: string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type AlertsCreateInput = {
    id?: string
    website_id: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified?: boolean | null
    status?: $Enums.AlertStatus
    msg: string
    created_at?: Date | string
    user: UserCreateNestedOneWithoutAlertInput
  }

  export type AlertsUncheckedCreateInput = {
    id?: string
    website_id: string
    userId: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified?: boolean | null
    status?: $Enums.AlertStatus
    msg: string
    created_at?: Date | string
  }

  export type AlertsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAlertNestedInput
  }

  export type AlertsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertsCreateManyInput = {
    id?: string
    website_id: string
    userId: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified?: boolean | null
    status?: $Enums.AlertStatus
    msg: string
    created_at?: Date | string
  }

  export type AlertsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateInput = {
    id?: string
    name: string
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    name: string
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionCreateManyInput = {
    id?: string
    name: string
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type WebsiteTickListRelationFilter = {
    every?: WebsiteTickWhereInput
    some?: WebsiteTickWhereInput
    none?: WebsiteTickWhereInput
  }

  export type WebsiteTickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WebsiteCountOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteMaxOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WebsiteMinOrderByAggregateInput = {
    id?: SortOrder
    url?: SortOrder
    userId?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type DnsTickListRelationFilter = {
    every?: DnsTickWhereInput
    some?: DnsTickWhereInput
    none?: DnsTickWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DnsTickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DnsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    ip_addr?: SortOrder
    resolver?: SortOrder
    interval?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authoritative?: SortOrder
  }

  export type DnsAvgOrderByAggregateInput = {
    interval?: SortOrder
  }

  export type DnsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    ip_addr?: SortOrder
    resolver?: SortOrder
    interval?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authoritative?: SortOrder
  }

  export type DnsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    domain?: SortOrder
    ip_addr?: SortOrder
    resolver?: SortOrder
    interval?: SortOrder
    active?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    authoritative?: SortOrder
  }

  export type DnsSumOrderByAggregateInput = {
    interval?: SortOrder
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

  export type EnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type WebsiteScalarRelationFilter = {
    is?: WebsiteWhereInput
    isNot?: WebsiteWhereInput
  }

  export type WebsiteTickCountOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    website_id?: SortOrder
    CreatedAt?: SortOrder
  }

  export type WebsiteTickAvgOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type WebsiteTickMaxOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    website_id?: SortOrder
    CreatedAt?: SortOrder
  }

  export type WebsiteTickMinOrderByAggregateInput = {
    id?: SortOrder
    response_time_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    website_id?: SortOrder
    CreatedAt?: SortOrder
  }

  export type WebsiteTickSumOrderByAggregateInput = {
    response_time_ms?: SortOrder
  }

  export type EnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type EnumDnsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DnsStatus | EnumDnsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDnsStatusFilter<$PrismaModel> | $Enums.DnsStatus
  }

  export type DnsScalarRelationFilter = {
    is?: DnsWhereInput
    isNot?: DnsWhereInput
  }

  export type DnsTickCountOrderByAggregateInput = {
    id?: SortOrder
    latency_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    dns_id?: SortOrder
    check_id?: SortOrder
    resolver_ip?: SortOrder
    CreatedAt?: SortOrder
  }

  export type DnsTickAvgOrderByAggregateInput = {
    latency_ms?: SortOrder
  }

  export type DnsTickMaxOrderByAggregateInput = {
    id?: SortOrder
    latency_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    dns_id?: SortOrder
    check_id?: SortOrder
    resolver_ip?: SortOrder
    CreatedAt?: SortOrder
  }

  export type DnsTickMinOrderByAggregateInput = {
    id?: SortOrder
    latency_ms?: SortOrder
    status?: SortOrder
    region?: SortOrder
    userId?: SortOrder
    dns_id?: SortOrder
    check_id?: SortOrder
    resolver_ip?: SortOrder
    CreatedAt?: SortOrder
  }

  export type DnsTickSumOrderByAggregateInput = {
    latency_ms?: SortOrder
  }

  export type EnumDnsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DnsStatus | EnumDnsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDnsStatusWithAggregatesFilter<$PrismaModel> | $Enums.DnsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDnsStatusFilter<$PrismaModel>
    _max?: NestedEnumDnsStatusFilter<$PrismaModel>
  }

  export type EnumRecordFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    notIn?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordFilter<$PrismaModel> | $Enums.Record
  }

  export type DnsRecordCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    response?: SortOrder
    region?: SortOrder
    user_id?: SortOrder
    dns_id?: SortOrder
  }

  export type DnsRecordMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    response?: SortOrder
    region?: SortOrder
    user_id?: SortOrder
    dns_id?: SortOrder
  }

  export type DnsRecordMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    response?: SortOrder
    region?: SortOrder
    user_id?: SortOrder
    dns_id?: SortOrder
  }

  export type EnumRecordWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    notIn?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordWithAggregatesFilter<$PrismaModel> | $Enums.Record
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordFilter<$PrismaModel>
    _max?: NestedEnumRecordFilter<$PrismaModel>
  }

  export type WebsiteListRelationFilter = {
    every?: WebsiteWhereInput
    some?: WebsiteWhereInput
    none?: WebsiteWhereInput
  }

  export type AlertsListRelationFilter = {
    every?: AlertsWhereInput
    some?: AlertsWhereInput
    none?: AlertsWhereInput
  }

  export type WebsiteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlertsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    password?: SortOrder
    email?: SortOrder
  }

  export type EnumAlertFilter<$PrismaModel = never> = {
    equals?: $Enums.Alert | EnumAlertFieldRefInput<$PrismaModel>
    in?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    notIn?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertFilter<$PrismaModel> | $Enums.Alert
  }

  export type EnumMsgTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MsgType | EnumMsgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMsgTypeFilter<$PrismaModel> | $Enums.MsgType
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type EnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type AlertsCountOrderByAggregateInput = {
    id?: SortOrder
    website_id?: SortOrder
    userId?: SortOrder
    alert_type?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    status?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
  }

  export type AlertsMaxOrderByAggregateInput = {
    id?: SortOrder
    website_id?: SortOrder
    userId?: SortOrder
    alert_type?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    status?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
  }

  export type AlertsMinOrderByAggregateInput = {
    id?: SortOrder
    website_id?: SortOrder
    userId?: SortOrder
    alert_type?: SortOrder
    type?: SortOrder
    verified?: SortOrder
    status?: SortOrder
    msg?: SortOrder
    created_at?: SortOrder
  }

  export type EnumAlertWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Alert | EnumAlertFieldRefInput<$PrismaModel>
    in?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    notIn?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertWithAggregatesFilter<$PrismaModel> | $Enums.Alert
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertFilter<$PrismaModel>
    _max?: NestedEnumAlertFilter<$PrismaModel>
  }

  export type EnumMsgTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MsgType | EnumMsgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMsgTypeWithAggregatesFilter<$PrismaModel> | $Enums.MsgType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMsgTypeFilter<$PrismaModel>
    _max?: NestedEnumMsgTypeFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type EnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type UserCreateNestedOneWithoutWebsitesInput = {
    create?: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsitesInput
    connect?: UserWhereUniqueInput
  }

  export type WebsiteTickCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
  }

  export type WebsiteTickUncheckedCreateNestedManyWithoutWebsiteInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutWebsitesNestedInput = {
    create?: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    connectOrCreate?: UserCreateOrConnectWithoutWebsitesInput
    upsert?: UserUpsertWithoutWebsitesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWebsitesInput, UserUpdateWithoutWebsitesInput>, UserUncheckedUpdateWithoutWebsitesInput>
  }

  export type WebsiteTickUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    upsert?: WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    set?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    disconnect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    delete?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    update?: WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: WebsiteTickUpdateManyWithWhereWithoutWebsiteInput | WebsiteTickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
  }

  export type WebsiteTickUncheckedUpdateManyWithoutWebsiteNestedInput = {
    create?: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput> | WebsiteTickCreateWithoutWebsiteInput[] | WebsiteTickUncheckedCreateWithoutWebsiteInput[]
    connectOrCreate?: WebsiteTickCreateOrConnectWithoutWebsiteInput | WebsiteTickCreateOrConnectWithoutWebsiteInput[]
    upsert?: WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput[]
    createMany?: WebsiteTickCreateManyWebsiteInputEnvelope
    set?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    disconnect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    delete?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    connect?: WebsiteTickWhereUniqueInput | WebsiteTickWhereUniqueInput[]
    update?: WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput | WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput[]
    updateMany?: WebsiteTickUpdateManyWithWhereWithoutWebsiteInput | WebsiteTickUpdateManyWithWhereWithoutWebsiteInput[]
    deleteMany?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
  }

  export type DnsTickCreateNestedManyWithoutDnsInput = {
    create?: XOR<DnsTickCreateWithoutDnsInput, DnsTickUncheckedCreateWithoutDnsInput> | DnsTickCreateWithoutDnsInput[] | DnsTickUncheckedCreateWithoutDnsInput[]
    connectOrCreate?: DnsTickCreateOrConnectWithoutDnsInput | DnsTickCreateOrConnectWithoutDnsInput[]
    createMany?: DnsTickCreateManyDnsInputEnvelope
    connect?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
  }

  export type DnsTickUncheckedCreateNestedManyWithoutDnsInput = {
    create?: XOR<DnsTickCreateWithoutDnsInput, DnsTickUncheckedCreateWithoutDnsInput> | DnsTickCreateWithoutDnsInput[] | DnsTickUncheckedCreateWithoutDnsInput[]
    connectOrCreate?: DnsTickCreateOrConnectWithoutDnsInput | DnsTickCreateOrConnectWithoutDnsInput[]
    createMany?: DnsTickCreateManyDnsInputEnvelope
    connect?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DnsTickUpdateManyWithoutDnsNestedInput = {
    create?: XOR<DnsTickCreateWithoutDnsInput, DnsTickUncheckedCreateWithoutDnsInput> | DnsTickCreateWithoutDnsInput[] | DnsTickUncheckedCreateWithoutDnsInput[]
    connectOrCreate?: DnsTickCreateOrConnectWithoutDnsInput | DnsTickCreateOrConnectWithoutDnsInput[]
    upsert?: DnsTickUpsertWithWhereUniqueWithoutDnsInput | DnsTickUpsertWithWhereUniqueWithoutDnsInput[]
    createMany?: DnsTickCreateManyDnsInputEnvelope
    set?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    disconnect?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    delete?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    connect?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    update?: DnsTickUpdateWithWhereUniqueWithoutDnsInput | DnsTickUpdateWithWhereUniqueWithoutDnsInput[]
    updateMany?: DnsTickUpdateManyWithWhereWithoutDnsInput | DnsTickUpdateManyWithWhereWithoutDnsInput[]
    deleteMany?: DnsTickScalarWhereInput | DnsTickScalarWhereInput[]
  }

  export type DnsTickUncheckedUpdateManyWithoutDnsNestedInput = {
    create?: XOR<DnsTickCreateWithoutDnsInput, DnsTickUncheckedCreateWithoutDnsInput> | DnsTickCreateWithoutDnsInput[] | DnsTickUncheckedCreateWithoutDnsInput[]
    connectOrCreate?: DnsTickCreateOrConnectWithoutDnsInput | DnsTickCreateOrConnectWithoutDnsInput[]
    upsert?: DnsTickUpsertWithWhereUniqueWithoutDnsInput | DnsTickUpsertWithWhereUniqueWithoutDnsInput[]
    createMany?: DnsTickCreateManyDnsInputEnvelope
    set?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    disconnect?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    delete?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    connect?: DnsTickWhereUniqueInput | DnsTickWhereUniqueInput[]
    update?: DnsTickUpdateWithWhereUniqueWithoutDnsInput | DnsTickUpdateWithWhereUniqueWithoutDnsInput[]
    updateMany?: DnsTickUpdateManyWithWhereWithoutDnsInput | DnsTickUpdateManyWithWhereWithoutDnsInput[]
    deleteMany?: DnsTickScalarWhereInput | DnsTickScalarWhereInput[]
  }

  export type WebsiteCreateNestedOneWithoutTicksInput = {
    create?: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutTicksInput
    connect?: WebsiteWhereUniqueInput
  }

  export type EnumWebsiteStatusFieldUpdateOperationsInput = {
    set?: $Enums.WebsiteStatus
  }

  export type WebsiteUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    connectOrCreate?: WebsiteCreateOrConnectWithoutTicksInput
    upsert?: WebsiteUpsertWithoutTicksInput
    connect?: WebsiteWhereUniqueInput
    update?: XOR<XOR<WebsiteUpdateToOneWithWhereWithoutTicksInput, WebsiteUpdateWithoutTicksInput>, WebsiteUncheckedUpdateWithoutTicksInput>
  }

  export type DnsCreateNestedOneWithoutTicksInput = {
    create?: XOR<DnsCreateWithoutTicksInput, DnsUncheckedCreateWithoutTicksInput>
    connectOrCreate?: DnsCreateOrConnectWithoutTicksInput
    connect?: DnsWhereUniqueInput
  }

  export type EnumDnsStatusFieldUpdateOperationsInput = {
    set?: $Enums.DnsStatus
  }

  export type DnsUpdateOneRequiredWithoutTicksNestedInput = {
    create?: XOR<DnsCreateWithoutTicksInput, DnsUncheckedCreateWithoutTicksInput>
    connectOrCreate?: DnsCreateOrConnectWithoutTicksInput
    upsert?: DnsUpsertWithoutTicksInput
    connect?: DnsWhereUniqueInput
    update?: XOR<XOR<DnsUpdateToOneWithWhereWithoutTicksInput, DnsUpdateWithoutTicksInput>, DnsUncheckedUpdateWithoutTicksInput>
  }

  export type EnumRecordFieldUpdateOperationsInput = {
    set?: $Enums.Record
  }

  export type WebsiteCreateNestedManyWithoutUserInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
  }

  export type AlertsCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertsCreateWithoutUserInput, AlertsUncheckedCreateWithoutUserInput> | AlertsCreateWithoutUserInput[] | AlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertsCreateOrConnectWithoutUserInput | AlertsCreateOrConnectWithoutUserInput[]
    createMany?: AlertsCreateManyUserInputEnvelope
    connect?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
  }

  export type WebsiteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
  }

  export type AlertsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AlertsCreateWithoutUserInput, AlertsUncheckedCreateWithoutUserInput> | AlertsCreateWithoutUserInput[] | AlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertsCreateOrConnectWithoutUserInput | AlertsCreateOrConnectWithoutUserInput[]
    createMany?: AlertsCreateManyUserInputEnvelope
    connect?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
  }

  export type WebsiteUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    upsert?: WebsiteUpsertWithWhereUniqueWithoutUserInput | WebsiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    disconnect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    delete?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    update?: WebsiteUpdateWithWhereUniqueWithoutUserInput | WebsiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebsiteUpdateManyWithWhereWithoutUserInput | WebsiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
  }

  export type AlertsUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertsCreateWithoutUserInput, AlertsUncheckedCreateWithoutUserInput> | AlertsCreateWithoutUserInput[] | AlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertsCreateOrConnectWithoutUserInput | AlertsCreateOrConnectWithoutUserInput[]
    upsert?: AlertsUpsertWithWhereUniqueWithoutUserInput | AlertsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertsCreateManyUserInputEnvelope
    set?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    disconnect?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    delete?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    connect?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    update?: AlertsUpdateWithWhereUniqueWithoutUserInput | AlertsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertsUpdateManyWithWhereWithoutUserInput | AlertsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertsScalarWhereInput | AlertsScalarWhereInput[]
  }

  export type WebsiteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput> | WebsiteCreateWithoutUserInput[] | WebsiteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WebsiteCreateOrConnectWithoutUserInput | WebsiteCreateOrConnectWithoutUserInput[]
    upsert?: WebsiteUpsertWithWhereUniqueWithoutUserInput | WebsiteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WebsiteCreateManyUserInputEnvelope
    set?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    disconnect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    delete?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    connect?: WebsiteWhereUniqueInput | WebsiteWhereUniqueInput[]
    update?: WebsiteUpdateWithWhereUniqueWithoutUserInput | WebsiteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WebsiteUpdateManyWithWhereWithoutUserInput | WebsiteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
  }

  export type AlertsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AlertsCreateWithoutUserInput, AlertsUncheckedCreateWithoutUserInput> | AlertsCreateWithoutUserInput[] | AlertsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AlertsCreateOrConnectWithoutUserInput | AlertsCreateOrConnectWithoutUserInput[]
    upsert?: AlertsUpsertWithWhereUniqueWithoutUserInput | AlertsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AlertsCreateManyUserInputEnvelope
    set?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    disconnect?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    delete?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    connect?: AlertsWhereUniqueInput | AlertsWhereUniqueInput[]
    update?: AlertsUpdateWithWhereUniqueWithoutUserInput | AlertsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AlertsUpdateManyWithWhereWithoutUserInput | AlertsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AlertsScalarWhereInput | AlertsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAlertInput = {
    create?: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertInput
    connect?: UserWhereUniqueInput
  }

  export type EnumAlertFieldUpdateOperationsInput = {
    set?: $Enums.Alert
  }

  export type EnumMsgTypeFieldUpdateOperationsInput = {
    set?: $Enums.MsgType
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type EnumAlertStatusFieldUpdateOperationsInput = {
    set?: $Enums.AlertStatus
  }

  export type UserUpdateOneRequiredWithoutAlertNestedInput = {
    create?: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
    connectOrCreate?: UserCreateOrConnectWithoutAlertInput
    upsert?: UserUpsertWithoutAlertInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAlertInput, UserUpdateWithoutAlertInput>, UserUncheckedUpdateWithoutAlertInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedEnumWebsiteStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusFilter<$PrismaModel> | $Enums.WebsiteStatus
  }

  export type NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.WebsiteStatus | EnumWebsiteStatusFieldRefInput<$PrismaModel>
    in?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.WebsiteStatus[] | ListEnumWebsiteStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumWebsiteStatusWithAggregatesFilter<$PrismaModel> | $Enums.WebsiteStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumWebsiteStatusFilter<$PrismaModel>
    _max?: NestedEnumWebsiteStatusFilter<$PrismaModel>
  }

  export type NestedEnumDnsStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.DnsStatus | EnumDnsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDnsStatusFilter<$PrismaModel> | $Enums.DnsStatus
  }

  export type NestedEnumDnsStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.DnsStatus | EnumDnsStatusFieldRefInput<$PrismaModel>
    in?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.DnsStatus[] | ListEnumDnsStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumDnsStatusWithAggregatesFilter<$PrismaModel> | $Enums.DnsStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumDnsStatusFilter<$PrismaModel>
    _max?: NestedEnumDnsStatusFilter<$PrismaModel>
  }

  export type NestedEnumRecordFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    notIn?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordFilter<$PrismaModel> | $Enums.Record
  }

  export type NestedEnumRecordWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Record | EnumRecordFieldRefInput<$PrismaModel>
    in?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    notIn?: $Enums.Record[] | ListEnumRecordFieldRefInput<$PrismaModel>
    not?: NestedEnumRecordWithAggregatesFilter<$PrismaModel> | $Enums.Record
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRecordFilter<$PrismaModel>
    _max?: NestedEnumRecordFilter<$PrismaModel>
  }

  export type NestedEnumAlertFilter<$PrismaModel = never> = {
    equals?: $Enums.Alert | EnumAlertFieldRefInput<$PrismaModel>
    in?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    notIn?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertFilter<$PrismaModel> | $Enums.Alert
  }

  export type NestedEnumMsgTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.MsgType | EnumMsgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMsgTypeFilter<$PrismaModel> | $Enums.MsgType
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedEnumAlertStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusFilter<$PrismaModel> | $Enums.AlertStatus
  }

  export type NestedEnumAlertWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Alert | EnumAlertFieldRefInput<$PrismaModel>
    in?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    notIn?: $Enums.Alert[] | ListEnumAlertFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertWithAggregatesFilter<$PrismaModel> | $Enums.Alert
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertFilter<$PrismaModel>
    _max?: NestedEnumAlertFilter<$PrismaModel>
  }

  export type NestedEnumMsgTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MsgType | EnumMsgTypeFieldRefInput<$PrismaModel>
    in?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.MsgType[] | ListEnumMsgTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumMsgTypeWithAggregatesFilter<$PrismaModel> | $Enums.MsgType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMsgTypeFilter<$PrismaModel>
    _max?: NestedEnumMsgTypeFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AlertStatus | EnumAlertStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AlertStatus[] | ListEnumAlertStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAlertStatusWithAggregatesFilter<$PrismaModel> | $Enums.AlertStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAlertStatusFilter<$PrismaModel>
    _max?: NestedEnumAlertStatusFilter<$PrismaModel>
  }

  export type UserCreateWithoutWebsitesInput = {
    id?: string
    username: string
    password: string
    email: string
    alert?: AlertsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWebsitesInput = {
    id?: string
    username: string
    password: string
    email: string
    alert?: AlertsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWebsitesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
  }

  export type WebsiteTickCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    CreatedAt?: Date | string
  }

  export type WebsiteTickUncheckedCreateWithoutWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    CreatedAt?: Date | string
  }

  export type WebsiteTickCreateOrConnectWithoutWebsiteInput = {
    where: WebsiteTickWhereUniqueInput
    create: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput>
  }

  export type WebsiteTickCreateManyWebsiteInputEnvelope = {
    data: WebsiteTickCreateManyWebsiteInput | WebsiteTickCreateManyWebsiteInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWebsitesInput = {
    update: XOR<UserUpdateWithoutWebsitesInput, UserUncheckedUpdateWithoutWebsitesInput>
    create: XOR<UserCreateWithoutWebsitesInput, UserUncheckedCreateWithoutWebsitesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWebsitesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWebsitesInput, UserUncheckedUpdateWithoutWebsitesInput>
  }

  export type UserUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alert?: AlertsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWebsitesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    alert?: AlertsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WebsiteTickUpsertWithWhereUniqueWithoutWebsiteInput = {
    where: WebsiteTickWhereUniqueInput
    update: XOR<WebsiteTickUpdateWithoutWebsiteInput, WebsiteTickUncheckedUpdateWithoutWebsiteInput>
    create: XOR<WebsiteTickCreateWithoutWebsiteInput, WebsiteTickUncheckedCreateWithoutWebsiteInput>
  }

  export type WebsiteTickUpdateWithWhereUniqueWithoutWebsiteInput = {
    where: WebsiteTickWhereUniqueInput
    data: XOR<WebsiteTickUpdateWithoutWebsiteInput, WebsiteTickUncheckedUpdateWithoutWebsiteInput>
  }

  export type WebsiteTickUpdateManyWithWhereWithoutWebsiteInput = {
    where: WebsiteTickScalarWhereInput
    data: XOR<WebsiteTickUpdateManyMutationInput, WebsiteTickUncheckedUpdateManyWithoutWebsiteInput>
  }

  export type WebsiteTickScalarWhereInput = {
    AND?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
    OR?: WebsiteTickScalarWhereInput[]
    NOT?: WebsiteTickScalarWhereInput | WebsiteTickScalarWhereInput[]
    id?: StringFilter<"WebsiteTick"> | string
    response_time_ms?: IntFilter<"WebsiteTick"> | number
    status?: EnumWebsiteStatusFilter<"WebsiteTick"> | $Enums.WebsiteStatus
    region?: StringFilter<"WebsiteTick"> | string
    userId?: StringFilter<"WebsiteTick"> | string
    website_id?: StringFilter<"WebsiteTick"> | string
    CreatedAt?: DateTimeFilter<"WebsiteTick"> | Date | string
  }

  export type DnsTickCreateWithoutDnsInput = {
    id?: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    check_id?: string | null
    resolver_ip: string
    CreatedAt?: Date | string
  }

  export type DnsTickUncheckedCreateWithoutDnsInput = {
    id?: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    check_id?: string | null
    resolver_ip: string
    CreatedAt?: Date | string
  }

  export type DnsTickCreateOrConnectWithoutDnsInput = {
    where: DnsTickWhereUniqueInput
    create: XOR<DnsTickCreateWithoutDnsInput, DnsTickUncheckedCreateWithoutDnsInput>
  }

  export type DnsTickCreateManyDnsInputEnvelope = {
    data: DnsTickCreateManyDnsInput | DnsTickCreateManyDnsInput[]
    skipDuplicates?: boolean
  }

  export type DnsTickUpsertWithWhereUniqueWithoutDnsInput = {
    where: DnsTickWhereUniqueInput
    update: XOR<DnsTickUpdateWithoutDnsInput, DnsTickUncheckedUpdateWithoutDnsInput>
    create: XOR<DnsTickCreateWithoutDnsInput, DnsTickUncheckedCreateWithoutDnsInput>
  }

  export type DnsTickUpdateWithWhereUniqueWithoutDnsInput = {
    where: DnsTickWhereUniqueInput
    data: XOR<DnsTickUpdateWithoutDnsInput, DnsTickUncheckedUpdateWithoutDnsInput>
  }

  export type DnsTickUpdateManyWithWhereWithoutDnsInput = {
    where: DnsTickScalarWhereInput
    data: XOR<DnsTickUpdateManyMutationInput, DnsTickUncheckedUpdateManyWithoutDnsInput>
  }

  export type DnsTickScalarWhereInput = {
    AND?: DnsTickScalarWhereInput | DnsTickScalarWhereInput[]
    OR?: DnsTickScalarWhereInput[]
    NOT?: DnsTickScalarWhereInput | DnsTickScalarWhereInput[]
    id?: StringFilter<"DnsTick"> | string
    latency_ms?: IntFilter<"DnsTick"> | number
    status?: EnumDnsStatusFilter<"DnsTick"> | $Enums.DnsStatus
    region?: StringFilter<"DnsTick"> | string
    userId?: StringFilter<"DnsTick"> | string
    dns_id?: StringFilter<"DnsTick"> | string
    check_id?: StringNullableFilter<"DnsTick"> | string | null
    resolver_ip?: StringFilter<"DnsTick"> | string
    CreatedAt?: DateTimeFilter<"DnsTick"> | Date | string
  }

  export type WebsiteCreateWithoutTicksInput = {
    id?: string
    url: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    User: UserCreateNestedOneWithoutWebsitesInput
  }

  export type WebsiteUncheckedCreateWithoutTicksInput = {
    id?: string
    url: string
    userId: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WebsiteCreateOrConnectWithoutTicksInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
  }

  export type WebsiteUpsertWithoutTicksInput = {
    update: XOR<WebsiteUpdateWithoutTicksInput, WebsiteUncheckedUpdateWithoutTicksInput>
    create: XOR<WebsiteCreateWithoutTicksInput, WebsiteUncheckedCreateWithoutTicksInput>
    where?: WebsiteWhereInput
  }

  export type WebsiteUpdateToOneWithWhereWithoutTicksInput = {
    where?: WebsiteWhereInput
    data: XOR<WebsiteUpdateWithoutTicksInput, WebsiteUncheckedUpdateWithoutTicksInput>
  }

  export type WebsiteUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    User?: UserUpdateOneRequiredWithoutWebsitesNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsCreateWithoutTicksInput = {
    id?: string
    userId: string
    domain: string
    ip_addr: string
    resolver?: string | null
    interval: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authoritative?: boolean
  }

  export type DnsUncheckedCreateWithoutTicksInput = {
    id?: string
    userId: string
    domain: string
    ip_addr: string
    resolver?: string | null
    interval: number
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    authoritative?: boolean
  }

  export type DnsCreateOrConnectWithoutTicksInput = {
    where: DnsWhereUniqueInput
    create: XOR<DnsCreateWithoutTicksInput, DnsUncheckedCreateWithoutTicksInput>
  }

  export type DnsUpsertWithoutTicksInput = {
    update: XOR<DnsUpdateWithoutTicksInput, DnsUncheckedUpdateWithoutTicksInput>
    create: XOR<DnsCreateWithoutTicksInput, DnsUncheckedCreateWithoutTicksInput>
    where?: DnsWhereInput
  }

  export type DnsUpdateToOneWithWhereWithoutTicksInput = {
    where?: DnsWhereInput
    data: XOR<DnsUpdateWithoutTicksInput, DnsUncheckedUpdateWithoutTicksInput>
  }

  export type DnsUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    ip_addr?: StringFieldUpdateOperationsInput | string
    resolver?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoritative?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DnsUncheckedUpdateWithoutTicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    domain?: StringFieldUpdateOperationsInput | string
    ip_addr?: StringFieldUpdateOperationsInput | string
    resolver?: NullableStringFieldUpdateOperationsInput | string | null
    interval?: IntFieldUpdateOperationsInput | number
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    authoritative?: BoolFieldUpdateOperationsInput | boolean
  }

  export type WebsiteCreateWithoutUserInput = {
    id?: string
    url: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticks?: WebsiteTickCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteUncheckedCreateWithoutUserInput = {
    id?: string
    url: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    ticks?: WebsiteTickUncheckedCreateNestedManyWithoutWebsiteInput
  }

  export type WebsiteCreateOrConnectWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteCreateManyUserInputEnvelope = {
    data: WebsiteCreateManyUserInput | WebsiteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AlertsCreateWithoutUserInput = {
    id?: string
    website_id: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified?: boolean | null
    status?: $Enums.AlertStatus
    msg: string
    created_at?: Date | string
  }

  export type AlertsUncheckedCreateWithoutUserInput = {
    id?: string
    website_id: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified?: boolean | null
    status?: $Enums.AlertStatus
    msg: string
    created_at?: Date | string
  }

  export type AlertsCreateOrConnectWithoutUserInput = {
    where: AlertsWhereUniqueInput
    create: XOR<AlertsCreateWithoutUserInput, AlertsUncheckedCreateWithoutUserInput>
  }

  export type AlertsCreateManyUserInputEnvelope = {
    data: AlertsCreateManyUserInput | AlertsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WebsiteUpsertWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    update: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
    create: XOR<WebsiteCreateWithoutUserInput, WebsiteUncheckedCreateWithoutUserInput>
  }

  export type WebsiteUpdateWithWhereUniqueWithoutUserInput = {
    where: WebsiteWhereUniqueInput
    data: XOR<WebsiteUpdateWithoutUserInput, WebsiteUncheckedUpdateWithoutUserInput>
  }

  export type WebsiteUpdateManyWithWhereWithoutUserInput = {
    where: WebsiteScalarWhereInput
    data: XOR<WebsiteUpdateManyMutationInput, WebsiteUncheckedUpdateManyWithoutUserInput>
  }

  export type WebsiteScalarWhereInput = {
    AND?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
    OR?: WebsiteScalarWhereInput[]
    NOT?: WebsiteScalarWhereInput | WebsiteScalarWhereInput[]
    id?: StringFilter<"Website"> | string
    url?: StringFilter<"Website"> | string
    userId?: StringFilter<"Website"> | string
    active?: BoolFilter<"Website"> | boolean
    createdAt?: DateTimeFilter<"Website"> | Date | string
    updatedAt?: DateTimeFilter<"Website"> | Date | string
  }

  export type AlertsUpsertWithWhereUniqueWithoutUserInput = {
    where: AlertsWhereUniqueInput
    update: XOR<AlertsUpdateWithoutUserInput, AlertsUncheckedUpdateWithoutUserInput>
    create: XOR<AlertsCreateWithoutUserInput, AlertsUncheckedCreateWithoutUserInput>
  }

  export type AlertsUpdateWithWhereUniqueWithoutUserInput = {
    where: AlertsWhereUniqueInput
    data: XOR<AlertsUpdateWithoutUserInput, AlertsUncheckedUpdateWithoutUserInput>
  }

  export type AlertsUpdateManyWithWhereWithoutUserInput = {
    where: AlertsScalarWhereInput
    data: XOR<AlertsUpdateManyMutationInput, AlertsUncheckedUpdateManyWithoutUserInput>
  }

  export type AlertsScalarWhereInput = {
    AND?: AlertsScalarWhereInput | AlertsScalarWhereInput[]
    OR?: AlertsScalarWhereInput[]
    NOT?: AlertsScalarWhereInput | AlertsScalarWhereInput[]
    id?: StringFilter<"Alerts"> | string
    website_id?: StringFilter<"Alerts"> | string
    userId?: StringFilter<"Alerts"> | string
    alert_type?: EnumAlertFilter<"Alerts"> | $Enums.Alert
    type?: EnumMsgTypeFilter<"Alerts"> | $Enums.MsgType
    verified?: BoolNullableFilter<"Alerts"> | boolean | null
    status?: EnumAlertStatusFilter<"Alerts"> | $Enums.AlertStatus
    msg?: StringFilter<"Alerts"> | string
    created_at?: DateTimeFilter<"Alerts"> | Date | string
  }

  export type UserCreateWithoutAlertInput = {
    id?: string
    username: string
    password: string
    email: string
    Websites?: WebsiteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAlertInput = {
    id?: string
    username: string
    password: string
    email: string
    Websites?: WebsiteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAlertInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
  }

  export type UserUpsertWithoutAlertInput = {
    update: XOR<UserUpdateWithoutAlertInput, UserUncheckedUpdateWithoutAlertInput>
    create: XOR<UserCreateWithoutAlertInput, UserUncheckedCreateWithoutAlertInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAlertInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAlertInput, UserUncheckedUpdateWithoutAlertInput>
  }

  export type UserUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Websites?: WebsiteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAlertInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Websites?: WebsiteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WebsiteTickCreateManyWebsiteInput = {
    id?: string
    response_time_ms: number
    status: $Enums.WebsiteStatus
    region: string
    userId: string
    CreatedAt?: Date | string
  }

  export type WebsiteTickUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTickUncheckedUpdateWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteTickUncheckedUpdateManyWithoutWebsiteInput = {
    id?: StringFieldUpdateOperationsInput | string
    response_time_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumWebsiteStatusFieldUpdateOperationsInput | $Enums.WebsiteStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsTickCreateManyDnsInput = {
    id?: string
    latency_ms: number
    status: $Enums.DnsStatus
    region: string
    userId: string
    check_id?: string | null
    resolver_ip: string
    CreatedAt?: Date | string
  }

  export type DnsTickUpdateWithoutDnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsTickUncheckedUpdateWithoutDnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DnsTickUncheckedUpdateManyWithoutDnsInput = {
    id?: StringFieldUpdateOperationsInput | string
    latency_ms?: IntFieldUpdateOperationsInput | number
    status?: EnumDnsStatusFieldUpdateOperationsInput | $Enums.DnsStatus
    region?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    check_id?: NullableStringFieldUpdateOperationsInput | string | null
    resolver_ip?: StringFieldUpdateOperationsInput | string
    CreatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WebsiteCreateManyUserInput = {
    id?: string
    url: string
    active?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AlertsCreateManyUserInput = {
    id?: string
    website_id: string
    alert_type: $Enums.Alert
    type: $Enums.MsgType
    verified?: boolean | null
    status?: $Enums.AlertStatus
    msg: string
    created_at?: Date | string
  }

  export type WebsiteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: WebsiteTickUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    ticks?: WebsiteTickUncheckedUpdateManyWithoutWebsiteNestedInput
  }

  export type WebsiteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    active?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlertsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    website_id?: StringFieldUpdateOperationsInput | string
    alert_type?: EnumAlertFieldUpdateOperationsInput | $Enums.Alert
    type?: EnumMsgTypeFieldUpdateOperationsInput | $Enums.MsgType
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    status?: EnumAlertStatusFieldUpdateOperationsInput | $Enums.AlertStatus
    msg?: StringFieldUpdateOperationsInput | string
    created_at?: DateTimeFieldUpdateOperationsInput | Date | string
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