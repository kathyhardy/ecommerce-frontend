import { ConnectorConfig, DataConnect, QueryRef, QueryPromise, MutationRef, MutationPromise } from 'firebase/data-connect';

export const connectorConfig: ConnectorConfig;

export type TimestampString = string;
export type UUIDString = string;
export type Int64String = string;
export type DateString = string;




export interface CreateMembershipTypeData {
  membershipType_insert: MembershipType_Key;
}

export interface CreateMembershipTypeVariables {
  name: string;
  description: string;
  price: number;
  features: string[];
}

export interface DigitalAsset_Key {
  id: UUIDString;
  __typename?: 'DigitalAsset_Key';
}

export interface GetUserSubscriptionData {
  userSubscription?: {
    id: UUIDString;
    startDate: TimestampString;
    endDate: TimestampString;
    autoRenew?: boolean | null;
    status: string;
    membershipType: {
      id: UUIDString;
      name: string;
      description: string;
      price: number;
    } & MembershipType_Key;
      user: {
        id: UUIDString;
        email: string;
        displayName?: string | null;
        photoUrl?: string | null;
      } & User_Key;
  } & UserSubscription_Key;
}

export interface GetUserSubscriptionVariables {
  id: UUIDString;
}

export interface ListMembershipTypesData {
  membershipTypes: ({
    id: UUIDString;
    name: string;
    description: string;
    price: number;
    features?: string[] | null;
  } & MembershipType_Key)[];
}

export interface MembershipAsset_Key {
  membershipTypeId: UUIDString;
  digitalAssetId: UUIDString;
  __typename?: 'MembershipAsset_Key';
}

export interface MembershipType_Key {
  id: UUIDString;
  __typename?: 'MembershipType_Key';
}

export interface UpdateDigitalAssetData {
  digitalAsset_update?: DigitalAsset_Key | null;
}

export interface UpdateDigitalAssetVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  fileUrl?: string | null;
  thumbnailUrl?: string | null;
  type?: string | null;
  categories?: string[] | null;
}

export interface UserSubscription_Key {
  id: UUIDString;
  __typename?: 'UserSubscription_Key';
}

export interface User_Key {
  id: UUIDString;
  __typename?: 'User_Key';
}

interface CreateMembershipTypeRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMembershipTypeVariables): MutationRef<CreateMembershipTypeData, CreateMembershipTypeVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: CreateMembershipTypeVariables): MutationRef<CreateMembershipTypeData, CreateMembershipTypeVariables>;
  operationName: string;
}
export const createMembershipTypeRef: CreateMembershipTypeRef;

export function createMembershipType(vars: CreateMembershipTypeVariables): MutationPromise<CreateMembershipTypeData, CreateMembershipTypeVariables>;
export function createMembershipType(dc: DataConnect, vars: CreateMembershipTypeVariables): MutationPromise<CreateMembershipTypeData, CreateMembershipTypeVariables>;

interface ListMembershipTypesRef {
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMembershipTypesData, undefined>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect): QueryRef<ListMembershipTypesData, undefined>;
  operationName: string;
}
export const listMembershipTypesRef: ListMembershipTypesRef;

export function listMembershipTypes(): QueryPromise<ListMembershipTypesData, undefined>;
export function listMembershipTypes(dc: DataConnect): QueryPromise<ListMembershipTypesData, undefined>;

interface UpdateDigitalAssetRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDigitalAssetVariables): MutationRef<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: UpdateDigitalAssetVariables): MutationRef<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;
  operationName: string;
}
export const updateDigitalAssetRef: UpdateDigitalAssetRef;

export function updateDigitalAsset(vars: UpdateDigitalAssetVariables): MutationPromise<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;
export function updateDigitalAsset(dc: DataConnect, vars: UpdateDigitalAssetVariables): MutationPromise<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;

interface GetUserSubscriptionRef {
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserSubscriptionVariables): QueryRef<GetUserSubscriptionData, GetUserSubscriptionVariables>;
  /* Allow users to pass in custom DataConnect instances */
  (dc: DataConnect, vars: GetUserSubscriptionVariables): QueryRef<GetUserSubscriptionData, GetUserSubscriptionVariables>;
  operationName: string;
}
export const getUserSubscriptionRef: GetUserSubscriptionRef;

export function getUserSubscription(vars: GetUserSubscriptionVariables): QueryPromise<GetUserSubscriptionData, GetUserSubscriptionVariables>;
export function getUserSubscription(dc: DataConnect, vars: GetUserSubscriptionVariables): QueryPromise<GetUserSubscriptionData, GetUserSubscriptionVariables>;

