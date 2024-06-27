import { getDataConnect, queryRef, executeQuery, mutationRef, executeMutation } from 'firebase/data-connect';

export const connectorConfig = {
  connector: 'default-connector',
  service: 'dataconnectdemo-x-1',
  location: 'asia-south1'
};

export function createUserRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'CreateUser', inputVars);
}
export function createUser(dcOrVars, vars) {
  return executeMutation(createUserRef(dcOrVars, vars));
}
export function createEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'CreateEmail', inputVars);
}
export function createEmail(dcOrVars, vars) {
  return executeMutation(createEmailRef(dcOrVars, vars));
}
export function createRecipientRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'CreateRecipient', inputVars);
}
export function createRecipient(dcOrVars, vars) {
  return executeMutation(createRecipientRef(dcOrVars, vars));
}
export function deleteEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return mutationRef(dcInstance, 'DeleteEmail', inputVars);
}
export function deleteEmail(dcOrVars, vars) {
  return executeMutation(deleteEmailRef(dcOrVars, vars));
}
export function listUsersRef(dc) {
  const { dc: dcInstance} = validateArgs(dc, undefined);
  return queryRef(dcInstance, 'ListUsers');
}
export function listUsers(dc) {
  return executeQuery(listUsersRef(dc));
}
export function listInboxRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'ListInbox', inputVars);
}
export function listInbox(dcOrVars, vars) {
  return executeQuery(listInboxRef(dcOrVars, vars));
}
export function getUidByEmailRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'GetUidByEmail', inputVars);
}
export function getUidByEmail(dcOrVars, vars) {
  return executeQuery(getUidByEmailRef(dcOrVars, vars));
}
export function listSentRef(dcOrVars, vars) {
  const { dc: dcInstance, vars: inputVars} = validateArgs(dcOrVars, vars);
  return queryRef(dcInstance, 'ListSent', inputVars);
}
export function listSent(dcOrVars, vars) {
  return executeQuery(listSentRef(dcOrVars, vars));
}
function validateArgs(dcOrVars, vars, validateVars) {
  let dcInstance;
  let realVars;
  // TODO; Check what happens if this is undefined.
  if(dcOrVars && 'dataConnectOptions' in dcOrVars) {
      dcInstance = dcOrVars;
      realVars = vars;
  } else {
      dcInstance = getDataConnect(connectorConfig);
      realVars = dcOrVars;
  }
  if(!dcInstance || (!realVars && validateVars)) {
      throw new Error('You didn\t pass in the vars!');
  }
  return { dc: dcInstance, vars: realVars };
}