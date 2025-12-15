import { CreateMembershipTypeData, CreateMembershipTypeVariables, ListMembershipTypesData, UpdateDigitalAssetData, UpdateDigitalAssetVariables, GetUserSubscriptionData, GetUserSubscriptionVariables } from '../';
import { UseDataConnectQueryResult, useDataConnectQueryOptions, UseDataConnectMutationResult, useDataConnectMutationOptions} from '@tanstack-query-firebase/react/data-connect';
import { UseQueryResult, UseMutationResult} from '@tanstack/react-query';
import { DataConnect } from 'firebase/data-connect';
import { FirebaseError } from 'firebase/app';


export function useCreateMembershipType(options?: useDataConnectMutationOptions<CreateMembershipTypeData, FirebaseError, CreateMembershipTypeVariables>): UseDataConnectMutationResult<CreateMembershipTypeData, CreateMembershipTypeVariables>;
export function useCreateMembershipType(dc: DataConnect, options?: useDataConnectMutationOptions<CreateMembershipTypeData, FirebaseError, CreateMembershipTypeVariables>): UseDataConnectMutationResult<CreateMembershipTypeData, CreateMembershipTypeVariables>;

export function useListMembershipTypes(options?: useDataConnectQueryOptions<ListMembershipTypesData>): UseDataConnectQueryResult<ListMembershipTypesData, undefined>;
export function useListMembershipTypes(dc: DataConnect, options?: useDataConnectQueryOptions<ListMembershipTypesData>): UseDataConnectQueryResult<ListMembershipTypesData, undefined>;

export function useUpdateDigitalAsset(options?: useDataConnectMutationOptions<UpdateDigitalAssetData, FirebaseError, UpdateDigitalAssetVariables>): UseDataConnectMutationResult<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;
export function useUpdateDigitalAsset(dc: DataConnect, options?: useDataConnectMutationOptions<UpdateDigitalAssetData, FirebaseError, UpdateDigitalAssetVariables>): UseDataConnectMutationResult<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;

export function useGetUserSubscription(vars: GetUserSubscriptionVariables, options?: useDataConnectQueryOptions<GetUserSubscriptionData>): UseDataConnectQueryResult<GetUserSubscriptionData, GetUserSubscriptionVariables>;
export function useGetUserSubscription(dc: DataConnect, vars: GetUserSubscriptionVariables, options?: useDataConnectQueryOptions<GetUserSubscriptionData>): UseDataConnectQueryResult<GetUserSubscriptionData, GetUserSubscriptionVariables>;
