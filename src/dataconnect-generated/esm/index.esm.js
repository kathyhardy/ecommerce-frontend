import { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'example',
  service: 'ecommerce-frontend',
  location: 'us-east4'
};

export const createMembershipTypeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMembershipType', inputVars);
}
createMembershipTypeRef.operationName = 'CreateMembershipType';

export function createMembershipType(dcOrVars, vars) {
  return executeMutation(createMembershipTypeRef(dcOrVars, vars));
}

export const listMembershipTypesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMembershipTypes');
}
listMembershipTypesRef.operationName = 'ListMembershipTypes';

export function listMembershipTypes(dc) {
  return executeQuery(listMembershipTypesRef(dc));
}

export const updateDigitalAssetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDigitalAsset', inputVars);
}
updateDigitalAssetRef.operationName = 'UpdateDigitalAsset';

export function updateDigitalAsset(dcOrVars, vars) {
  return executeMutation(updateDigitalAssetRef(dcOrVars, vars));
}

export const getUserSubscriptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserSubscription', inputVars);
}
getUserSubscriptionRef.operationName = 'GetUserSubscription';

export function getUserSubscription(dcOrVars, vars) {
  return executeQuery(getUserSubscriptionRef(dcOrVars, vars));
}

