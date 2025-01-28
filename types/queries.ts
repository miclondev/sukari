/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getActivity = /* GraphQL */ `query GetActivity($id: ID!) {
  getActivity(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetActivityQueryVariables,
  APITypes.GetActivityQuery
>;
export const getGroup = /* GraphQL */ `query GetGroup($id: ID!) {
  getGroup(id: $id) {
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
` as GeneratedQuery<APITypes.GetGroupQueryVariables, APITypes.GetGroupQuery>;
export const getItinerary = /* GraphQL */ `query GetItinerary($id: ID!) {
  getItinerary(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetItineraryQueryVariables,
  APITypes.GetItineraryQuery
>;
export const getPayment = /* GraphQL */ `query GetPayment($id: ID!) {
  getPayment(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetPaymentQueryVariables,
  APITypes.GetPaymentQuery
>;
export const getProfile = /* GraphQL */ `query GetProfile($id: ID!) {
  getProfile(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const getTrip = /* GraphQL */ `query GetTrip($id: ID!) {
  getTrip(id: $id) {
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
` as GeneratedQuery<APITypes.GetTripQueryVariables, APITypes.GetTripQuery>;
export const listActivities = /* GraphQL */ `query ListActivities(
  $filter: ModelActivityFilterInput
  $limit: Int
  $nextToken: String
) {
  listActivities(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      cost
      createdAt
      description
      endTime
      id
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListActivitiesQueryVariables,
  APITypes.ListActivitiesQuery
>;
export const listGroups = /* GraphQL */ `query ListGroups(
  $filter: ModelGroupFilterInput
  $limit: Int
  $nextToken: String
) {
  listGroups(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListGroupsQueryVariables,
  APITypes.ListGroupsQuery
>;
export const listItineraries = /* GraphQL */ `query ListItineraries(
  $filter: ModelItineraryFilterInput
  $limit: Int
  $nextToken: String
) {
  listItineraries(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      notes
      owner
      tripId
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListItinerariesQueryVariables,
  APITypes.ListItinerariesQuery
>;
export const listPayments = /* GraphQL */ `query ListPayments(
  $filter: ModelPaymentFilterInput
  $limit: Int
  $nextToken: String
) {
  listPayments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListPaymentsQueryVariables,
  APITypes.ListPaymentsQuery
>;
export const listProfiles = /* GraphQL */ `query ListProfiles(
  $filter: ModelProfileFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listProfiles(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
      accountType
      cognitoUsername
      createdAt
      email
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListProfilesQueryVariables,
  APITypes.ListProfilesQuery
>;
export const listTrips = /* GraphQL */ `query ListTrips(
  $filter: ModelTripFilterInput
  $limit: Int
  $nextToken: String
) {
  listTrips(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
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
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTripsQueryVariables, APITypes.ListTripsQuery>;
