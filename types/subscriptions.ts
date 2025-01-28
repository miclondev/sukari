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
    profilePicture
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateProfileSubscriptionVariables,
  APITypes.OnCreateProfileSubscription
>;
export const onCreateTour = /* GraphQL */ `subscription OnCreateTour($filter: ModelSubscriptionTourFilterInput) {
  onCreateTour(filter: $filter) {
    createdAt
    days
    description
    destination
    groupSize
    highlights
    id
    images
    nextDeparture
    orgId
    previousCost
    status
    title
    totalCost
    tourItenerary {
      activities
      day
      description
      image
      meals
      title
      __typename
    }
    updatedAt
    whatsIncluded
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTourSubscriptionVariables,
  APITypes.OnCreateTourSubscription
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
    profilePicture
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteProfileSubscriptionVariables,
  APITypes.OnDeleteProfileSubscription
>;
export const onDeleteTour = /* GraphQL */ `subscription OnDeleteTour($filter: ModelSubscriptionTourFilterInput) {
  onDeleteTour(filter: $filter) {
    createdAt
    days
    description
    destination
    groupSize
    highlights
    id
    images
    nextDeparture
    orgId
    previousCost
    status
    title
    totalCost
    tourItenerary {
      activities
      day
      description
      image
      meals
      title
      __typename
    }
    updatedAt
    whatsIncluded
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTourSubscriptionVariables,
  APITypes.OnDeleteTourSubscription
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
    profilePicture
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateProfileSubscriptionVariables,
  APITypes.OnUpdateProfileSubscription
>;
export const onUpdateTour = /* GraphQL */ `subscription OnUpdateTour($filter: ModelSubscriptionTourFilterInput) {
  onUpdateTour(filter: $filter) {
    createdAt
    days
    description
    destination
    groupSize
    highlights
    id
    images
    nextDeparture
    orgId
    previousCost
    status
    title
    totalCost
    tourItenerary {
      activities
      day
      description
      image
      meals
      title
      __typename
    }
    updatedAt
    whatsIncluded
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTourSubscriptionVariables,
  APITypes.OnUpdateTourSubscription
>;
