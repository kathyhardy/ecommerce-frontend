const { queryRef, executeQuery, mutationRef, executeMutation, validateArgs } = require('firebase/data-connect');

const connectorConfig = {
  connector: 'example',
  service: 'ecommerce-frontend',
  location: 'us-east4'
};
exports.connectorConfig = connectorConfig;

const createMembershipTypeRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'CreateMembershipType', inputVars);
}
createMembershipTypeRef.operationName = 'CreateMembershipType';
exports.createMembershipTypeRef = createMembershipTypeRef;

exports.createMembershipType = function createMembershipType(dcOrVars, vars) {
  return executeMutation(createMembershipTypeRef(dcOrVars, vars));
};

const listMembershipTypesRef = (dc) => {
  const { dc: dcInstance} = validateArgs(connectorConfig, dc, undefined);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'ListMembershipTypes');
}
listMembershipTypesRef.operationName = 'ListMembershipTypes';
exports.listMembershipTypesRef = listMembershipTypesRef;

exports.listMembershipTypes = function listMembershipTypes(dc) {
  return executeQuery(listMembershipTypesRef(dc));
};

const updateDigitalAssetRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return mutationRef(dcInstance, 'UpdateDigitalAsset', inputVars);
}
updateDigitalAssetRef.operationName = 'UpdateDigitalAsset';
exports.updateDigitalAssetRef = updateDigitalAssetRef;

exports.updateDigitalAsset = function updateDigitalAsset(dcOrVars, vars) {
  return executeMutation(updateDigitalAssetRef(dcOrVars, vars));
};

const getUserSubscriptionRef = (dcOrVars, vars) => {
  const { dc: dcInstance, vars: inputVars} = validateArgs(connectorConfig, dcOrVars, vars, true);
  dcInstance._useGeneratedSdk();
  return queryRef(dcInstance, 'GetUserSubscription', inputVars);
}
getUserSubscriptionRef.operationName = 'GetUserSubscription';
exports.getUserSubscriptionRef = getUserSubscriptionRef;

exports.getUserSubscription = function getUserSubscription(dcOrVars, vars) {
  return executeQuery(getUserSubscriptionRef(dcOrVars, vars));
};
