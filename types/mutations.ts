/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createActivity = /* GraphQL */ `mutation CreateActivity(
  $condition: ModelActivityConditionInput
  $input: CreateActivityInput!
) {
  createActivity(condition: $condition, input: $input) {
    cost
    createdAt
    description
    endTime
    id
    itinerary {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    itineraryId
    location
    owner
    startTime
    status
    title
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateActivityMutationVariables,
  APITypes.CreateActivityMutation
>;
export const createGroup = /* GraphQL */ `mutation CreateGroup(
  $condition: ModelGroupConditionInput
  $input: CreateGroupInput!
) {
  createGroup(condition: $condition, input: $input) {
    adminId
    createdAt
    description
    id
    members
    name
    owner
    trips {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateGroupMutationVariables,
  APITypes.CreateGroupMutation
>;
export const createItinerary = /* GraphQL */ `mutation CreateItinerary(
  $condition: ModelItineraryConditionInput
  $input: CreateItineraryInput!
) {
  createItinerary(condition: $condition, input: $input) {
    activities {
      nextToken
      __typename
    }
    createdAt
    id
    notes
    owner
    trip {
      createdAt
      description
      destination
      endDate
      groupId
      id
      itineraryId
      owner
      startDate
      status
      title
      totalCost
      updatedAt
      __typename
    }
    tripId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateItineraryMutationVariables,
  APITypes.CreateItineraryMutation
>;
export const createPayment = /* GraphQL */ `mutation CreatePayment(
  $condition: ModelPaymentConditionInput
  $input: CreatePaymentInput!
) {
  createPayment(condition: $condition, input: $input) {
    amount
    createdAt
    dueDate
    id
    owner
    status
    trip {
      createdAt
      description
      destination
      endDate
      groupId
      id
      itineraryId
      owner
      startDate
      status
      title
      totalCost
      updatedAt
      __typename
    }
    tripId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreatePaymentMutationVariables,
  APITypes.CreatePaymentMutation
>;
export const createProfile = /* GraphQL */ `mutation CreateProfile(
  $condition: ModelProfileConditionInput
  $input: CreateProfileInput!
) {
  createProfile(condition: $condition, input: $input) {
    accountType
    cognitoUsername
    createdAt
    email
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateProfileMutationVariables,
  APITypes.CreateProfileMutation
>;
export const createTrip = /* GraphQL */ `mutation CreateTrip(
  $condition: ModelTripConditionInput
  $input: CreateTripInput!
) {
  createTrip(condition: $condition, input: $input) {
    createdAt
    description
    destination
    endDate
    group {
      adminId
      createdAt
      description
      id
      members
      name
      owner
      updatedAt
      __typename
    }
    groupId
    id
    itinerary {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    itineraryId
    owner
    payments {
      nextToken
      __typename
    }
    startDate
    status
    title
    totalCost
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTripMutationVariables,
  APITypes.CreateTripMutation
>;
export const deleteActivity = /* GraphQL */ `mutation DeleteActivity(
  $condition: ModelActivityConditionInput
  $input: DeleteActivityInput!
) {
  deleteActivity(condition: $condition, input: $input) {
    cost
    createdAt
    description
    endTime
    id
    itinerary {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    itineraryId
    location
    owner
    startTime
    status
    title
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteActivityMutationVariables,
  APITypes.DeleteActivityMutation
>;
export const deleteGroup = /* GraphQL */ `mutation DeleteGroup(
  $condition: ModelGroupConditionInput
  $input: DeleteGroupInput!
) {
  deleteGroup(condition: $condition, input: $input) {
    adminId
    createdAt
    description
    id
    members
    name
    owner
    trips {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteGroupMutationVariables,
  APITypes.DeleteGroupMutation
>;
export const deleteItinerary = /* GraphQL */ `mutation DeleteItinerary(
  $condition: ModelItineraryConditionInput
  $input: DeleteItineraryInput!
) {
  deleteItinerary(condition: $condition, input: $input) {
    activities {
      nextToken
      __typename
    }
    createdAt
    id
    notes
    owner
    trip {
      createdAt
      description
      destination
      endDate
      groupId
      id
      itineraryId
      owner
      startDate
      status
      title
      totalCost
      updatedAt
      __typename
    }
    tripId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteItineraryMutationVariables,
  APITypes.DeleteItineraryMutation
>;
export const deletePayment = /* GraphQL */ `mutation DeletePayment(
  $condition: ModelPaymentConditionInput
  $input: DeletePaymentInput!
) {
  deletePayment(condition: $condition, input: $input) {
    amount
    createdAt
    dueDate
    id
    owner
    status
    trip {
      createdAt
      description
      destination
      endDate
      groupId
      id
      itineraryId
      owner
      startDate
      status
      title
      totalCost
      updatedAt
      __typename
    }
    tripId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeletePaymentMutationVariables,
  APITypes.DeletePaymentMutation
>;
export const deleteProfile = /* GraphQL */ `mutation DeleteProfile(
  $condition: ModelProfileConditionInput
  $input: DeleteProfileInput!
) {
  deleteProfile(condition: $condition, input: $input) {
    accountType
    cognitoUsername
    createdAt
    email
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteProfileMutationVariables,
  APITypes.DeleteProfileMutation
>;
export const deleteTrip = /* GraphQL */ `mutation DeleteTrip(
  $condition: ModelTripConditionInput
  $input: DeleteTripInput!
) {
  deleteTrip(condition: $condition, input: $input) {
    createdAt
    description
    destination
    endDate
    group {
      adminId
      createdAt
      description
      id
      members
      name
      owner
      updatedAt
      __typename
    }
    groupId
    id
    itinerary {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    itineraryId
    owner
    payments {
      nextToken
      __typename
    }
    startDate
    status
    title
    totalCost
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTripMutationVariables,
  APITypes.DeleteTripMutation
>;
export const updateActivity = /* GraphQL */ `mutation UpdateActivity(
  $condition: ModelActivityConditionInput
  $input: UpdateActivityInput!
) {
  updateActivity(condition: $condition, input: $input) {
    cost
    createdAt
    description
    endTime
    id
    itinerary {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    itineraryId
    location
    owner
    startTime
    status
    title
    type
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateActivityMutationVariables,
  APITypes.UpdateActivityMutation
>;
export const updateGroup = /* GraphQL */ `mutation UpdateGroup(
  $condition: ModelGroupConditionInput
  $input: UpdateGroupInput!
) {
  updateGroup(condition: $condition, input: $input) {
    adminId
    createdAt
    description
    id
    members
    name
    owner
    trips {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateGroupMutationVariables,
  APITypes.UpdateGroupMutation
>;
export const updateItinerary = /* GraphQL */ `mutation UpdateItinerary(
  $condition: ModelItineraryConditionInput
  $input: UpdateItineraryInput!
) {
  updateItinerary(condition: $condition, input: $input) {
    activities {
      nextToken
      __typename
    }
    createdAt
    id
    notes
    owner
    trip {
      createdAt
      description
      destination
      endDate
      groupId
      id
      itineraryId
      owner
      startDate
      status
      title
      totalCost
      updatedAt
      __typename
    }
    tripId
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateItineraryMutationVariables,
  APITypes.UpdateItineraryMutation
>;
export const updatePayment = /* GraphQL */ `mutation UpdatePayment(
  $condition: ModelPaymentConditionInput
  $input: UpdatePaymentInput!
) {
  updatePayment(condition: $condition, input: $input) {
    amount
    createdAt
    dueDate
    id
    owner
    status
    trip {
      createdAt
      description
      destination
      endDate
      groupId
      id
      itineraryId
      owner
      startDate
      status
      title
      totalCost
      updatedAt
      __typename
    }
    tripId
    updatedAt
    userId
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdatePaymentMutationVariables,
  APITypes.UpdatePaymentMutation
>;
export const updateProfile = /* GraphQL */ `mutation UpdateProfile(
  $condition: ModelProfileConditionInput
  $input: UpdateProfileInput!
) {
  updateProfile(condition: $condition, input: $input) {
    accountType
    cognitoUsername
    createdAt
    email
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateProfileMutationVariables,
  APITypes.UpdateProfileMutation
>;
export const updateTrip = /* GraphQL */ `mutation UpdateTrip(
  $condition: ModelTripConditionInput
  $input: UpdateTripInput!
) {
  updateTrip(condition: $condition, input: $input) {
    createdAt
    description
    destination
    endDate
    group {
      adminId
      createdAt
      description
      id
      members
      name
      owner
      updatedAt
      __typename
    }
    groupId
    id
    itinerary {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    itineraryId
    owner
    payments {
      nextToken
      __typename
    }
    startDate
    status
    title
    totalCost
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTripMutationVariables,
  APITypes.UpdateTripMutation
>;
