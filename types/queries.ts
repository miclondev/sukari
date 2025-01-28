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
    profilePicture
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetProfileQueryVariables,
  APITypes.GetProfileQuery
>;
export const getTour = /* GraphQL */ `query GetTour($id: ID!) {
  getTour(id: $id) {
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
` as GeneratedQuery<APITypes.GetTourQueryVariables, APITypes.GetTourQuery>;
export const listActivities = /* GraphQL */ `query ListActivities(
  $filter: ModelActivityFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listActivities(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listGroups(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listItineraries(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listPayments(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
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
      profilePicture
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
export const listTours = /* GraphQL */ `query ListTours(
  $filter: ModelTourFilterInput
  $id: ID
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
) {
  listTours(
    filter: $filter
    id: $id
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
  ) {
    items {
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
      updatedAt
      whatsIncluded
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListToursQueryVariables, APITypes.ListToursQuery>;
export const tourByOrg = /* GraphQL */ `query TourByOrg(
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelTourFilterInput
  $limit: Int
  $nextToken: String
  $orgId: ID!
  $sortDirection: ModelSortDirection
) {
  tourByOrg(
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    orgId: $orgId
    sortDirection: $sortDirection
  ) {
    items {
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
      updatedAt
      whatsIncluded
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.TourByOrgQueryVariables, APITypes.TourByOrgQuery>;
export const tourByStatus = /* GraphQL */ `query TourByStatus(
  $createdAt: ModelStringKeyConditionInput
  $filter: ModelTourFilterInput
  $limit: Int
  $nextToken: String
  $sortDirection: ModelSortDirection
  $status: String!
) {
  tourByStatus(
    createdAt: $createdAt
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    sortDirection: $sortDirection
    status: $status
  ) {
    items {
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
      updatedAt
      whatsIncluded
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.TourByStatusQueryVariables,
  APITypes.TourByStatusQuery
>;
