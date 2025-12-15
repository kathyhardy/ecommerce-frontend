# Generated TypeScript README
This README will guide you through the process of using the generated JavaScript SDK package for the connector `example`. It will also provide examples on how to use your generated SDK to call your Data Connect queries and mutations.

**If you're looking for the `React README`, you can find it at [`dataconnect-generated/react/README.md`](./react/README.md)**

***NOTE:** This README is generated alongside the generated SDK. If you make changes to this file, they will be overwritten when the SDK is regenerated.*

# Table of Contents
- [**Overview**](#generated-javascript-readme)
- [**Accessing the connector**](#accessing-the-connector)
  - [*Connecting to the local Emulator*](#connecting-to-the-local-emulator)
- [**Queries**](#queries)
  - [*ListMembershipTypes*](#listmembershiptypes)
  - [*GetUserSubscription*](#getusersubscription)
- [**Mutations**](#mutations)
  - [*CreateMembershipType*](#createmembershiptype)
  - [*UpdateDigitalAsset*](#updatedigitalasset)

# Accessing the connector
A connector is a collection of Queries and Mutations. One SDK is generated for each connector - this SDK is generated for the connector `example`. You can find more information about connectors in the [Data Connect documentation](https://firebase.google.com/docs/data-connect#how-does).

You can use this generated SDK by importing from the package `@dataconnect/generated` as shown below. Both CommonJS and ESM imports are supported.

You can also follow the instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#set-client).

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
```

## Connecting to the local Emulator
By default, the connector will connect to the production service.

To connect to the emulator, you can use the following code.
You can also follow the emulator instructions from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#instrument-clients).

```typescript
import { connectDataConnectEmulator, getDataConnect } from 'firebase/data-connect';
import { connectorConfig } from '@dataconnect/generated';

const dataConnect = getDataConnect(connectorConfig);
connectDataConnectEmulator(dataConnect, 'localhost', 9399);
```

After it's initialized, you can call your Data Connect [queries](#queries) and [mutations](#mutations) from your generated SDK.

# Queries

There are two ways to execute a Data Connect Query using the generated Web SDK:
- Using a Query Reference function, which returns a `QueryRef`
  - The `QueryRef` can be used as an argument to `executeQuery()`, which will execute the Query and return a `QueryPromise`
- Using an action shortcut function, which returns a `QueryPromise`
  - Calling the action shortcut function will execute the Query and return a `QueryPromise`

The following is true for both the action shortcut function and the `QueryRef` function:
- The `QueryPromise` returned will resolve to the result of the Query once it has finished executing
- If the Query accepts arguments, both the action shortcut function and the `QueryRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Query
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each query. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-queries).

## ListMembershipTypes
You can execute the `ListMembershipTypes` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
listMembershipTypes(): QueryPromise<ListMembershipTypesData, undefined>;

interface ListMembershipTypesRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (): QueryRef<ListMembershipTypesData, undefined>;
}
export const listMembershipTypesRef: ListMembershipTypesRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
listMembershipTypes(dc: DataConnect): QueryPromise<ListMembershipTypesData, undefined>;

interface ListMembershipTypesRef {
  ...
  (dc: DataConnect): QueryRef<ListMembershipTypesData, undefined>;
}
export const listMembershipTypesRef: ListMembershipTypesRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the listMembershipTypesRef:
```typescript
const name = listMembershipTypesRef.operationName;
console.log(name);
```

### Variables
The `ListMembershipTypes` query has no variables.
### Return Type
Recall that executing the `ListMembershipTypes` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `ListMembershipTypesData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface ListMembershipTypesData {
  membershipTypes: ({
    id: UUIDString;
    name: string;
    description: string;
    price: number;
    features?: string[] | null;
  } & MembershipType_Key)[];
}
```
### Using `ListMembershipTypes`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, listMembershipTypes } from '@dataconnect/generated';


// Call the `listMembershipTypes()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await listMembershipTypes();

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await listMembershipTypes(dataConnect);

console.log(data.membershipTypes);

// Or, you can use the `Promise` API.
listMembershipTypes().then((response) => {
  const data = response.data;
  console.log(data.membershipTypes);
});
```

### Using `ListMembershipTypes`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, listMembershipTypesRef } from '@dataconnect/generated';


// Call the `listMembershipTypesRef()` function to get a reference to the query.
const ref = listMembershipTypesRef();

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = listMembershipTypesRef(dataConnect);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.membershipTypes);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.membershipTypes);
});
```

## GetUserSubscription
You can execute the `GetUserSubscription` query using the following action shortcut function, or by calling `executeQuery()` after calling the following `QueryRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
getUserSubscription(vars: GetUserSubscriptionVariables): QueryPromise<GetUserSubscriptionData, GetUserSubscriptionVariables>;

interface GetUserSubscriptionRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: GetUserSubscriptionVariables): QueryRef<GetUserSubscriptionData, GetUserSubscriptionVariables>;
}
export const getUserSubscriptionRef: GetUserSubscriptionRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `QueryRef` function.
```typescript
getUserSubscription(dc: DataConnect, vars: GetUserSubscriptionVariables): QueryPromise<GetUserSubscriptionData, GetUserSubscriptionVariables>;

interface GetUserSubscriptionRef {
  ...
  (dc: DataConnect, vars: GetUserSubscriptionVariables): QueryRef<GetUserSubscriptionData, GetUserSubscriptionVariables>;
}
export const getUserSubscriptionRef: GetUserSubscriptionRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the getUserSubscriptionRef:
```typescript
const name = getUserSubscriptionRef.operationName;
console.log(name);
```

### Variables
The `GetUserSubscription` query requires an argument of type `GetUserSubscriptionVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface GetUserSubscriptionVariables {
  id: UUIDString;
}
```
### Return Type
Recall that executing the `GetUserSubscription` query returns a `QueryPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `GetUserSubscriptionData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
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
```
### Using `GetUserSubscription`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, getUserSubscription, GetUserSubscriptionVariables } from '@dataconnect/generated';

// The `GetUserSubscription` query requires an argument of type `GetUserSubscriptionVariables`:
const getUserSubscriptionVars: GetUserSubscriptionVariables = {
  id: ..., 
};

// Call the `getUserSubscription()` function to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await getUserSubscription(getUserSubscriptionVars);
// Variables can be defined inline as well.
const { data } = await getUserSubscription({ id: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await getUserSubscription(dataConnect, getUserSubscriptionVars);

console.log(data.userSubscription);

// Or, you can use the `Promise` API.
getUserSubscription(getUserSubscriptionVars).then((response) => {
  const data = response.data;
  console.log(data.userSubscription);
});
```

### Using `GetUserSubscription`'s `QueryRef` function

```typescript
import { getDataConnect, executeQuery } from 'firebase/data-connect';
import { connectorConfig, getUserSubscriptionRef, GetUserSubscriptionVariables } from '@dataconnect/generated';

// The `GetUserSubscription` query requires an argument of type `GetUserSubscriptionVariables`:
const getUserSubscriptionVars: GetUserSubscriptionVariables = {
  id: ..., 
};

// Call the `getUserSubscriptionRef()` function to get a reference to the query.
const ref = getUserSubscriptionRef(getUserSubscriptionVars);
// Variables can be defined inline as well.
const ref = getUserSubscriptionRef({ id: ..., });

// You can also pass in a `DataConnect` instance to the `QueryRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = getUserSubscriptionRef(dataConnect, getUserSubscriptionVars);

// Call `executeQuery()` on the reference to execute the query.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeQuery(ref);

console.log(data.userSubscription);

// Or, you can use the `Promise` API.
executeQuery(ref).then((response) => {
  const data = response.data;
  console.log(data.userSubscription);
});
```

# Mutations

There are two ways to execute a Data Connect Mutation using the generated Web SDK:
- Using a Mutation Reference function, which returns a `MutationRef`
  - The `MutationRef` can be used as an argument to `executeMutation()`, which will execute the Mutation and return a `MutationPromise`
- Using an action shortcut function, which returns a `MutationPromise`
  - Calling the action shortcut function will execute the Mutation and return a `MutationPromise`

The following is true for both the action shortcut function and the `MutationRef` function:
- The `MutationPromise` returned will resolve to the result of the Mutation once it has finished executing
- If the Mutation accepts arguments, both the action shortcut function and the `MutationRef` function accept a single argument: an object that contains all the required variables (and the optional variables) for the Mutation
- Both functions can be called with or without passing in a `DataConnect` instance as an argument. If no `DataConnect` argument is passed in, then the generated SDK will call `getDataConnect(connectorConfig)` behind the scenes for you.

Below are examples of how to use the `example` connector's generated functions to execute each mutation. You can also follow the examples from the [Data Connect documentation](https://firebase.google.com/docs/data-connect/web-sdk#using-mutations).

## CreateMembershipType
You can execute the `CreateMembershipType` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
createMembershipType(vars: CreateMembershipTypeVariables): MutationPromise<CreateMembershipTypeData, CreateMembershipTypeVariables>;

interface CreateMembershipTypeRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: CreateMembershipTypeVariables): MutationRef<CreateMembershipTypeData, CreateMembershipTypeVariables>;
}
export const createMembershipTypeRef: CreateMembershipTypeRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
createMembershipType(dc: DataConnect, vars: CreateMembershipTypeVariables): MutationPromise<CreateMembershipTypeData, CreateMembershipTypeVariables>;

interface CreateMembershipTypeRef {
  ...
  (dc: DataConnect, vars: CreateMembershipTypeVariables): MutationRef<CreateMembershipTypeData, CreateMembershipTypeVariables>;
}
export const createMembershipTypeRef: CreateMembershipTypeRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the createMembershipTypeRef:
```typescript
const name = createMembershipTypeRef.operationName;
console.log(name);
```

### Variables
The `CreateMembershipType` mutation requires an argument of type `CreateMembershipTypeVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface CreateMembershipTypeVariables {
  name: string;
  description: string;
  price: number;
  features: string[];
}
```
### Return Type
Recall that executing the `CreateMembershipType` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `CreateMembershipTypeData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface CreateMembershipTypeData {
  membershipType_insert: MembershipType_Key;
}
```
### Using `CreateMembershipType`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, createMembershipType, CreateMembershipTypeVariables } from '@dataconnect/generated';

// The `CreateMembershipType` mutation requires an argument of type `CreateMembershipTypeVariables`:
const createMembershipTypeVars: CreateMembershipTypeVariables = {
  name: ..., 
  description: ..., 
  price: ..., 
  features: ..., 
};

// Call the `createMembershipType()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await createMembershipType(createMembershipTypeVars);
// Variables can be defined inline as well.
const { data } = await createMembershipType({ name: ..., description: ..., price: ..., features: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await createMembershipType(dataConnect, createMembershipTypeVars);

console.log(data.membershipType_insert);

// Or, you can use the `Promise` API.
createMembershipType(createMembershipTypeVars).then((response) => {
  const data = response.data;
  console.log(data.membershipType_insert);
});
```

### Using `CreateMembershipType`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, createMembershipTypeRef, CreateMembershipTypeVariables } from '@dataconnect/generated';

// The `CreateMembershipType` mutation requires an argument of type `CreateMembershipTypeVariables`:
const createMembershipTypeVars: CreateMembershipTypeVariables = {
  name: ..., 
  description: ..., 
  price: ..., 
  features: ..., 
};

// Call the `createMembershipTypeRef()` function to get a reference to the mutation.
const ref = createMembershipTypeRef(createMembershipTypeVars);
// Variables can be defined inline as well.
const ref = createMembershipTypeRef({ name: ..., description: ..., price: ..., features: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = createMembershipTypeRef(dataConnect, createMembershipTypeVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.membershipType_insert);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.membershipType_insert);
});
```

## UpdateDigitalAsset
You can execute the `UpdateDigitalAsset` mutation using the following action shortcut function, or by calling `executeMutation()` after calling the following `MutationRef` function, both of which are defined in [dataconnect-generated/index.d.ts](./index.d.ts):
```typescript
updateDigitalAsset(vars: UpdateDigitalAssetVariables): MutationPromise<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;

interface UpdateDigitalAssetRef {
  ...
  /* Allow users to create refs without passing in DataConnect */
  (vars: UpdateDigitalAssetVariables): MutationRef<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;
}
export const updateDigitalAssetRef: UpdateDigitalAssetRef;
```
You can also pass in a `DataConnect` instance to the action shortcut function or `MutationRef` function.
```typescript
updateDigitalAsset(dc: DataConnect, vars: UpdateDigitalAssetVariables): MutationPromise<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;

interface UpdateDigitalAssetRef {
  ...
  (dc: DataConnect, vars: UpdateDigitalAssetVariables): MutationRef<UpdateDigitalAssetData, UpdateDigitalAssetVariables>;
}
export const updateDigitalAssetRef: UpdateDigitalAssetRef;
```

If you need the name of the operation without creating a ref, you can retrieve the operation name by calling the `operationName` property on the updateDigitalAssetRef:
```typescript
const name = updateDigitalAssetRef.operationName;
console.log(name);
```

### Variables
The `UpdateDigitalAsset` mutation requires an argument of type `UpdateDigitalAssetVariables`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:

```typescript
export interface UpdateDigitalAssetVariables {
  id: UUIDString;
  title?: string | null;
  description?: string | null;
  fileUrl?: string | null;
  thumbnailUrl?: string | null;
  type?: string | null;
  categories?: string[] | null;
}
```
### Return Type
Recall that executing the `UpdateDigitalAsset` mutation returns a `MutationPromise` that resolves to an object with a `data` property.

The `data` property is an object of type `UpdateDigitalAssetData`, which is defined in [dataconnect-generated/index.d.ts](./index.d.ts). It has the following fields:
```typescript
export interface UpdateDigitalAssetData {
  digitalAsset_update?: DigitalAsset_Key | null;
}
```
### Using `UpdateDigitalAsset`'s action shortcut function

```typescript
import { getDataConnect } from 'firebase/data-connect';
import { connectorConfig, updateDigitalAsset, UpdateDigitalAssetVariables } from '@dataconnect/generated';

// The `UpdateDigitalAsset` mutation requires an argument of type `UpdateDigitalAssetVariables`:
const updateDigitalAssetVars: UpdateDigitalAssetVariables = {
  id: ..., 
  title: ..., // optional
  description: ..., // optional
  fileUrl: ..., // optional
  thumbnailUrl: ..., // optional
  type: ..., // optional
  categories: ..., // optional
};

// Call the `updateDigitalAsset()` function to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await updateDigitalAsset(updateDigitalAssetVars);
// Variables can be defined inline as well.
const { data } = await updateDigitalAsset({ id: ..., title: ..., description: ..., fileUrl: ..., thumbnailUrl: ..., type: ..., categories: ..., });

// You can also pass in a `DataConnect` instance to the action shortcut function.
const dataConnect = getDataConnect(connectorConfig);
const { data } = await updateDigitalAsset(dataConnect, updateDigitalAssetVars);

console.log(data.digitalAsset_update);

// Or, you can use the `Promise` API.
updateDigitalAsset(updateDigitalAssetVars).then((response) => {
  const data = response.data;
  console.log(data.digitalAsset_update);
});
```

### Using `UpdateDigitalAsset`'s `MutationRef` function

```typescript
import { getDataConnect, executeMutation } from 'firebase/data-connect';
import { connectorConfig, updateDigitalAssetRef, UpdateDigitalAssetVariables } from '@dataconnect/generated';

// The `UpdateDigitalAsset` mutation requires an argument of type `UpdateDigitalAssetVariables`:
const updateDigitalAssetVars: UpdateDigitalAssetVariables = {
  id: ..., 
  title: ..., // optional
  description: ..., // optional
  fileUrl: ..., // optional
  thumbnailUrl: ..., // optional
  type: ..., // optional
  categories: ..., // optional
};

// Call the `updateDigitalAssetRef()` function to get a reference to the mutation.
const ref = updateDigitalAssetRef(updateDigitalAssetVars);
// Variables can be defined inline as well.
const ref = updateDigitalAssetRef({ id: ..., title: ..., description: ..., fileUrl: ..., thumbnailUrl: ..., type: ..., categories: ..., });

// You can also pass in a `DataConnect` instance to the `MutationRef` function.
const dataConnect = getDataConnect(connectorConfig);
const ref = updateDigitalAssetRef(dataConnect, updateDigitalAssetVars);

// Call `executeMutation()` on the reference to execute the mutation.
// You can use the `await` keyword to wait for the promise to resolve.
const { data } = await executeMutation(ref);

console.log(data.digitalAsset_update);

// Or, you can use the `Promise` API.
executeMutation(ref).then((response) => {
  const data = response.data;
  console.log(data.digitalAsset_update);
});
```

