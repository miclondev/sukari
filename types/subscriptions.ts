/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateActivity = /* GraphQL */ `subscription OnCreateActivity(
  $filter: ModelSubscriptionActivityFilterInput
  $owner: String
) {
  onCreateActivity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateActivitySubscriptionVariables,
  APITypes.OnCreateActivitySubscription
>;
export const onCreateGroup = /* GraphQL */ `subscription OnCreateGroup(
  $filter: ModelSubscriptionGroupFilterInput
  $owner: String
) {
  onCreateGroup(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateGroupSubscriptionVariables,
  APITypes.OnCreateGroupSubscription
>;
export const onCreateItinerary = /* GraphQL */ `subscription OnCreateItinerary(
  $filter: ModelSubscriptionItineraryFilterInput
  $owner: String
) {
  onCreateItinerary(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateItinerarySubscriptionVariables,
  APITypes.OnCreateItinerarySubscription
>;
export const onCreatePayment = /* GraphQL */ `subscription OnCreatePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onCreatePayment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreatePaymentSubscriptionVariables,
  APITypes.OnCreatePaymentSubscription
>;
export const onCreateProfile = /* GraphQL */ `subscription OnCreateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onCreateProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onCreateTrip = /* GraphQL */ `subscription OnCreateTrip(
  $filter: ModelSubscriptionTripFilterInput
  $owner: String
) {
  onCreateTrip(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateTripSubscriptionVariables,
  APITypes.OnCreateTripSubscription
>;
export const onDeleteActivity = /* GraphQL */ `subscription OnDeleteActivity(
  $filter: ModelSubscriptionActivityFilterInput
  $owner: String
) {
  onDeleteActivity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteActivitySubscriptionVariables,
  APITypes.OnDeleteActivitySubscription
>;
export const onDeleteGroup = /* GraphQL */ `subscription OnDeleteGroup(
  $filter: ModelSubscriptionGroupFilterInput
  $owner: String
) {
  onDeleteGroup(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteGroupSubscriptionVariables,
  APITypes.OnDeleteGroupSubscription
>;
export const onDeleteItinerary = /* GraphQL */ `subscription OnDeleteItinerary(
  $filter: ModelSubscriptionItineraryFilterInput
  $owner: String
) {
  onDeleteItinerary(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteItinerarySubscriptionVariables,
  APITypes.OnDeleteItinerarySubscription
>;
export const onDeletePayment = /* GraphQL */ `subscription OnDeletePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onDeletePayment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeletePaymentSubscriptionVariables,
  APITypes.OnDeletePaymentSubscription
>;
export const onDeleteProfile = /* GraphQL */ `subscription OnDeleteProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onDeleteProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onDeleteTrip = /* GraphQL */ `subscription OnDeleteTrip(
  $filter: ModelSubscriptionTripFilterInput
  $owner: String
) {
  onDeleteTrip(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteTripSubscriptionVariables,
  APITypes.OnDeleteTripSubscription
>;
export const onUpdateActivity = /* GraphQL */ `subscription OnUpdateActivity(
  $filter: ModelSubscriptionActivityFilterInput
  $owner: String
) {
  onUpdateActivity(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateActivitySubscriptionVariables,
  APITypes.OnUpdateActivitySubscription
>;
export const onUpdateGroup = /* GraphQL */ `subscription OnUpdateGroup(
  $filter: ModelSubscriptionGroupFilterInput
  $owner: String
) {
  onUpdateGroup(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateGroupSubscriptionVariables,
  APITypes.OnUpdateGroupSubscription
>;
export const onUpdateItinerary = /* GraphQL */ `subscription OnUpdateItinerary(
  $filter: ModelSubscriptionItineraryFilterInput
  $owner: String
) {
  onUpdateItinerary(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateItinerarySubscriptionVariables,
  APITypes.OnUpdateItinerarySubscription
>;
export const onUpdatePayment = /* GraphQL */ `subscription OnUpdatePayment(
  $filter: ModelSubscriptionPaymentFilterInput
  $owner: String
) {
  onUpdatePayment(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdatePaymentSubscriptionVariables,
  APITypes.OnUpdatePaymentSubscription
>;
export const onUpdateProfile = /* GraphQL */ `subscription OnUpdateProfile(
  $filter: ModelSubscriptionProfileFilterInput
  $owner: String
) {
  onUpdateProfile(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onUpdateTrip = /* GraphQL */ `subscription OnUpdateTrip(
  $filter: ModelSubscriptionTripFilterInput
  $owner: String
) {
  onUpdateTrip(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateTripSubscriptionVariables,
  APITypes.OnUpdateTripSubscription
>;
