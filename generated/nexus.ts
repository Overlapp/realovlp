/**
 * This file was generated by Nexus Schema
 * Do not make changes to this file directly
 */


import type { Context } from "./../lib/api/context"
import type { FieldAuthorizeResolver } from "nexus/dist/plugins/fieldAuthorizePlugin"
import type { ValidateResolver } from "nexus-validate"
import type { core } from "nexus"
declare global {
  interface NexusGenCustomInputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, opts?: core.CommonInputFieldConfig<TypeName, FieldName>): void // "DateTime";
  }
}
declare global {
  interface NexusGenCustomOutputMethods<TypeName extends string> {
    /**
     * A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.
     */
    date<FieldName extends string>(fieldName: FieldName, ...opts: core.ScalarOutSpread<TypeName, FieldName>): void // "DateTime";
  }
}


declare global {
  interface NexusGen extends NexusGenTypes {}
}

export interface NexusGenInputs {
  ArticleInput: { // input type
    body: string; // String!
    description: string; // String!
    tagList: string[]; // [String!]!
    title: string; // String!
  }
  CommentInput: { // input type
    body: string; // String!
  }
  UserLoginInput: { // input type
    email: string; // String!
    password: string; // String!
  }
  UserSignupInput: { // input type
    email: string; // String!
    password: string; // String!
    username: string; // String!
  }
  UserUpdateInput: { // input type
    bio?: string | null; // String
    email: string; // String!
    image?: string | null; // String
    password?: string | null; // String
    username: string; // String!
  }
}

export interface NexusGenEnums {
}

export interface NexusGenScalars {
  String: string
  Int: number
  Float: number
  Boolean: boolean
  ID: string
  DateTime: any
}

export interface NexusGenObjects {
  Article: { // root type
    body: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    favoritesCount: number; // Int!
    id: number; // Int!
    slug: string; // String!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  AuthUser: { // root type
    bio?: string | null; // String
    email: string; // String!
    id: number; // Int!
    image?: string | null; // String
    token?: string | null; // String
    username: string; // String!
  }
  Comment: { // root type
    body: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: {};
  Profile: { // root type
    bio?: string | null; // String
    image?: string | null; // String
    username: string; // String!
  }
  Query: {};
}

export interface NexusGenInterfaces {
  BaseUser: NexusGenRootTypes['AuthUser'] | NexusGenRootTypes['Profile'];
  Node: NexusGenRootTypes['Article'] | NexusGenRootTypes['AuthUser'] | NexusGenRootTypes['Comment'];
}

export interface NexusGenUnions {
}

export type NexusGenRootTypes = NexusGenInterfaces & NexusGenObjects

export type NexusGenAllTypes = NexusGenRootTypes & NexusGenScalars

export interface NexusGenFieldTypes {
  Article: { // field return type
    author: NexusGenRootTypes['Profile']; // Profile!
    body: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    description: string; // String!
    favorited: boolean; // Boolean!
    favoritesCount: number; // Int!
    id: number; // Int!
    slug: string; // String!
    tagList: string[]; // [String!]!
    title: string; // String!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  AuthUser: { // field return type
    bio: string | null; // String
    email: string; // String!
    id: number; // Int!
    image: string | null; // String
    token: string | null; // String
    username: string; // String!
  }
  Comment: { // field return type
    author: NexusGenRootTypes['Profile']; // Profile!
    body: string; // String!
    createdAt: NexusGenScalars['DateTime']; // DateTime!
    id: number; // Int!
    updatedAt: NexusGenScalars['DateTime']; // DateTime!
  }
  Mutation: { // field return type
    createArticle: NexusGenRootTypes['Article']; // Article!
    createComment: NexusGenRootTypes['Comment']; // Comment!
    deleteArticle: NexusGenRootTypes['Article']; // Article!
    deleteComment: NexusGenRootTypes['Comment']; // Comment!
    favorite: NexusGenRootTypes['Article']; // Article!
    follow: NexusGenRootTypes['Profile']; // Profile!
    login: NexusGenRootTypes['AuthUser']; // AuthUser!
    signup: NexusGenRootTypes['AuthUser'] | null; // AuthUser
    unFollow: NexusGenRootTypes['Profile']; // Profile!
    unfavorite: NexusGenRootTypes['Article']; // Article!
    updateArticle: NexusGenRootTypes['Article']; // Article!
    updateUser: NexusGenRootTypes['AuthUser']; // AuthUser!
  }
  Profile: { // field return type
    bio: string | null; // String
    following: boolean; // Boolean!
    image: string | null; // String
    username: string; // String!
  }
  Query: { // field return type
    article: NexusGenRootTypes['Article'] | null; // Article
    articles: NexusGenRootTypes['Article'][]; // [Article!]!
    articlesCount: number; // Int!
    checkEmail: string | null; // String
    checkUsername: string | null; // String
    comments: NexusGenRootTypes['Comment'][]; // [Comment!]!
    currentUser: NexusGenRootTypes['AuthUser']; // AuthUser!
    feed: NexusGenRootTypes['Article'][]; // [Article!]!
    feedCount: number; // Int!
    profile: NexusGenRootTypes['Profile'] | null; // Profile
    tags: string[]; // [String!]!
  }
  BaseUser: { // field return type
    bio: string | null; // String
    image: string | null; // String
    username: string; // String!
  }
  Node: { // field return type
    id: number; // Int!
  }
}

export interface NexusGenFieldTypeNames {
  Article: { // field return type name
    author: 'Profile'
    body: 'String'
    createdAt: 'DateTime'
    description: 'String'
    favorited: 'Boolean'
    favoritesCount: 'Int'
    id: 'Int'
    slug: 'String'
    tagList: 'String'
    title: 'String'
    updatedAt: 'DateTime'
  }
  AuthUser: { // field return type name
    bio: 'String'
    email: 'String'
    id: 'Int'
    image: 'String'
    token: 'String'
    username: 'String'
  }
  Comment: { // field return type name
    author: 'Profile'
    body: 'String'
    createdAt: 'DateTime'
    id: 'Int'
    updatedAt: 'DateTime'
  }
  Mutation: { // field return type name
    createArticle: 'Article'
    createComment: 'Comment'
    deleteArticle: 'Article'
    deleteComment: 'Comment'
    favorite: 'Article'
    follow: 'Profile'
    login: 'AuthUser'
    signup: 'AuthUser'
    unFollow: 'Profile'
    unfavorite: 'Article'
    updateArticle: 'Article'
    updateUser: 'AuthUser'
  }
  Profile: { // field return type name
    bio: 'String'
    following: 'Boolean'
    image: 'String'
    username: 'String'
  }
  Query: { // field return type name
    article: 'Article'
    articles: 'Article'
    articlesCount: 'Int'
    checkEmail: 'String'
    checkUsername: 'String'
    comments: 'Comment'
    currentUser: 'AuthUser'
    feed: 'Article'
    feedCount: 'Int'
    profile: 'Profile'
    tags: 'String'
  }
  BaseUser: { // field return type name
    bio: 'String'
    image: 'String'
    username: 'String'
  }
  Node: { // field return type name
    id: 'Int'
  }
}

export interface NexusGenArgTypes {
  Mutation: {
    createArticle: { // args
      body: string; // String!
      description: string; // String!
      tagList: Array<string | null>; // [String]!
      title: string; // String!
    }
    createComment: { // args
      input: NexusGenInputs['CommentInput']; // CommentInput!
      slug: string; // String!
    }
    deleteArticle: { // args
      slug: string; // String!
    }
    deleteComment: { // args
      id: number; // Int!
    }
    favorite: { // args
      slug: string; // String!
    }
    follow: { // args
      username: string; // String!
    }
    login: { // args
      input: NexusGenInputs['UserLoginInput']; // UserLoginInput!
    }
    signup: { // args
      input: NexusGenInputs['UserSignupInput']; // UserSignupInput!
    }
    unFollow: { // args
      username: string; // String!
    }
    unfavorite: { // args
      slug: string; // String!
    }
    updateArticle: { // args
      input: NexusGenInputs['ArticleInput']; // ArticleInput!
      slug: string; // String!
    }
    updateUser: { // args
      input: NexusGenInputs['UserUpdateInput']; // UserUpdateInput!
    }
  }
  Query: {
    article: { // args
      slug: string; // String!
    }
    articles: { // args
      author?: string | null; // String
      cursor?: number | null; // Int
      favorited?: string | null; // String
      limit: number | null; // Int
      offset?: number | null; // Int
      tag?: string | null; // String
    }
    articlesCount: { // args
      author?: string | null; // String
      favorited?: string | null; // String
      tag?: string | null; // String
    }
    checkEmail: { // args
      email: string; // String!
    }
    checkUsername: { // args
      username: string; // String!
    }
    comments: { // args
      articleId: number; // Int!
      cursor?: number | null; // Int
      limit: number | null; // Int
      offset?: number | null; // Int
    }
    feed: { // args
      cursor?: number | null; // Int
      limit: number | null; // Int
      offset?: number | null; // Int
    }
    profile: { // args
      username: string; // String!
    }
  }
}

export interface NexusGenAbstractTypeMembers {
  BaseUser: "AuthUser" | "Profile"
  Node: "Article" | "AuthUser" | "Comment"
}

export interface NexusGenTypeInterfaces {
  Article: "Node"
  AuthUser: "BaseUser" | "Node"
  Comment: "Node"
  Profile: "BaseUser"
}

export type NexusGenObjectNames = keyof NexusGenObjects;

export type NexusGenInputNames = keyof NexusGenInputs;

export type NexusGenEnumNames = never;

export type NexusGenInterfaceNames = keyof NexusGenInterfaces;

export type NexusGenScalarNames = keyof NexusGenScalars;

export type NexusGenUnionNames = never;

export type NexusGenObjectsUsingAbstractStrategyIsTypeOf = never;

export type NexusGenAbstractsUsingStrategyResolveType = never;

export type NexusGenFeaturesConfig = {
  abstractTypeStrategies: {
    resolveType: false
    __typename: false
    isTypeOf: false
  }
}

export interface NexusGenTypes {
  context: Context;
  inputTypes: NexusGenInputs;
  rootTypes: NexusGenRootTypes;
  inputTypeShapes: NexusGenInputs & NexusGenEnums & NexusGenScalars;
  argTypes: NexusGenArgTypes;
  fieldTypes: NexusGenFieldTypes;
  fieldTypeNames: NexusGenFieldTypeNames;
  allTypes: NexusGenAllTypes;
  typeInterfaces: NexusGenTypeInterfaces;
  objectNames: NexusGenObjectNames;
  inputNames: NexusGenInputNames;
  enumNames: NexusGenEnumNames;
  interfaceNames: NexusGenInterfaceNames;
  scalarNames: NexusGenScalarNames;
  unionNames: NexusGenUnionNames;
  allInputTypes: NexusGenTypes['inputNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['scalarNames'];
  allOutputTypes: NexusGenTypes['objectNames'] | NexusGenTypes['enumNames'] | NexusGenTypes['unionNames'] | NexusGenTypes['interfaceNames'] | NexusGenTypes['scalarNames'];
  allNamedTypes: NexusGenTypes['allInputTypes'] | NexusGenTypes['allOutputTypes']
  abstractTypes: NexusGenTypes['interfaceNames'] | NexusGenTypes['unionNames'];
  abstractTypeMembers: NexusGenAbstractTypeMembers;
  objectsUsingAbstractStrategyIsTypeOf: NexusGenObjectsUsingAbstractStrategyIsTypeOf;
  abstractsUsingStrategyResolveType: NexusGenAbstractsUsingStrategyResolveType;
  features: NexusGenFeaturesConfig;
}


declare global {
  interface NexusGenPluginTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginInputTypeConfig<TypeName extends string> {
  }
  interface NexusGenPluginFieldConfig<TypeName extends string, FieldName extends string> {
    /**
     * Authorization for an individual field. Returning "true"
     * or "Promise<true>" means the field can be accessed.
     * Returning "false" or "Promise<false>" will respond
     * with a "Not Authorized" error for the field.
     * Returning or throwing an error will also prevent the
     * resolver from executing.
     */
    authorize?: FieldAuthorizeResolver<TypeName, FieldName>
    /**
     * Validate mutation arguments.
     */
    validate?: ValidateResolver<TypeName, FieldName>
  }
  interface NexusGenPluginInputFieldConfig<TypeName extends string, FieldName extends string> {
  }
  interface NexusGenPluginSchemaConfig {
  }
  interface NexusGenPluginArgConfig {
  }
}