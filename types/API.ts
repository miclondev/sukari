/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Activity = {
  __typename: "Activity",
  cost?: number | null,
  createdAt?: string | null,
  description?: string | null,
  endTime?: string | null,
  id: string,
  itinerary?: Itinerary | null,
  itineraryId?: string | null,
  location?: string | null,
  owner?: string | null,
  startTime?: string | null,
  status?: ActivityStatus | null,
  title?: string | null,
  type?: ActivityType | null,
  updatedAt?: string | null,
};

export type Itinerary = {
  __typename: "Itinerary",
  activities?: ModelActivityConnection | null,
  createdAt?: string | null,
  id: string,
  notes?: string | null,
  owner?: string | null,
  trip?: Trip | null,
  tripId?: string | null,
  updatedAt?: string | null,
};

export type ModelActivityConnection = {
  __typename: "ModelActivityConnection",
  items:  Array<Activity | null >,
  nextToken?: string | null,
};

export type Trip = {
  __typename: "Trip",
  createdAt?: string | null,
  description?: string | null,
  destination?: string | null,
  endDate?: string | null,
  group?: Group | null,
  groupId?: string | null,
  id: string,
  itinerary?: Itinerary | null,
  itineraryId?: string | null,
  owner?: string | null,
  payments?: ModelPaymentConnection | null,
  startDate?: string | null,
  status?: TripStatus | null,
  title?: string | null,
  totalCost?: number | null,
  updatedAt?: string | null,
};

export type Group = {
  __typename: "Group",
  adminId?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id: string,
  members?: Array< string | null > | null,
  name?: string | null,
  owner?: string | null,
  trips?: ModelTripConnection | null,
  updatedAt?: string | null,
};

export type ModelTripConnection = {
  __typename: "ModelTripConnection",
  items:  Array<Trip | null >,
  nextToken?: string | null,
};

export type ModelPaymentConnection = {
  __typename: "ModelPaymentConnection",
  items:  Array<Payment | null >,
  nextToken?: string | null,
};

export type Payment = {
  __typename: "Payment",
  amount?: number | null,
  createdAt?: string | null,
  dueDate?: string | null,
  id: string,
  owner?: string | null,
  status?: PaymentStatus | null,
  trip?: Trip | null,
  tripId?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export enum PaymentStatus {
  OVERDUE = "OVERDUE",
  PAID = "PAID",
  PENDING = "PENDING",
}


export enum TripStatus {
  COMPLETED = "COMPLETED",
  CONFIRMED = "CONFIRMED",
  IN_PROGRESS = "IN_PROGRESS",
  PLANNING = "PLANNING",
}


export enum ActivityStatus {
  BOOKED = "BOOKED",
  CANCELLED = "CANCELLED",
  COMPLETED = "COMPLETED",
  PLANNED = "PLANNED",
}


export enum ActivityType {
  ACCOMMODATION = "ACCOMMODATION",
  FOOD = "FOOD",
  OTHER = "OTHER",
  SIGHTSEEING = "SIGHTSEEING",
  TRANSPORT = "TRANSPORT",
}


export type Profile = {
  __typename: "Profile",
  accountType?: ProfileAccountType | null,
  cognitoUsername?: string | null,
  createdAt?: string | null,
  email?: string | null,
  id: string,
  owner?: string | null,
  updatedAt?: string | null,
};

export enum ProfileAccountType {
  organization = "organization",
  user = "user",
}


export type ModelActivityFilterInput = {
  and?: Array< ModelActivityFilterInput | null > | null,
  cost?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  id?: ModelIDInput | null,
  itineraryId?: ModelIDInput | null,
  location?: ModelStringInput | null,
  not?: ModelActivityFilterInput | null,
  or?: Array< ModelActivityFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  status?: ModelActivityStatusInput | null,
  title?: ModelStringInput | null,
  type?: ModelActivityTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelFloatInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelActivityStatusInput = {
  eq?: ActivityStatus | null,
  ne?: ActivityStatus | null,
};

export type ModelActivityTypeInput = {
  eq?: ActivityType | null,
  ne?: ActivityType | null,
};

export type ModelGroupFilterInput = {
  adminId?: ModelStringInput | null,
  and?: Array< ModelGroupFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  id?: ModelIDInput | null,
  members?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelGroupFilterInput | null,
  or?: Array< ModelGroupFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelGroupConnection = {
  __typename: "ModelGroupConnection",
  items:  Array<Group | null >,
  nextToken?: string | null,
};

export type ModelItineraryFilterInput = {
  and?: Array< ModelItineraryFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelItineraryFilterInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelItineraryFilterInput | null > | null,
  owner?: ModelStringInput | null,
  tripId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelItineraryConnection = {
  __typename: "ModelItineraryConnection",
  items:  Array<Itinerary | null >,
  nextToken?: string | null,
};

export type ModelPaymentFilterInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelPaymentFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelPaymentFilterInput | null,
  or?: Array< ModelPaymentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelPaymentStatusInput | null,
  tripId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type ModelPaymentStatusInput = {
  eq?: PaymentStatus | null,
  ne?: PaymentStatus | null,
};

export type ModelProfileFilterInput = {
  accountType?: ModelProfileAccountTypeInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  cognitoUsername?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelProfileFilterInput | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelProfileAccountTypeInput = {
  eq?: ProfileAccountType | null,
  ne?: ProfileAccountType | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelProfileConnection = {
  __typename: "ModelProfileConnection",
  items:  Array<Profile | null >,
  nextToken?: string | null,
};

export type ModelTripFilterInput = {
  and?: Array< ModelTripFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  itineraryId?: ModelIDInput | null,
  not?: ModelTripFilterInput | null,
  or?: Array< ModelTripFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  status?: ModelTripStatusInput | null,
  title?: ModelStringInput | null,
  totalCost?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTripStatusInput = {
  eq?: TripStatus | null,
  ne?: TripStatus | null,
};

export type ModelActivityConditionInput = {
  and?: Array< ModelActivityConditionInput | null > | null,
  cost?: ModelFloatInput | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  endTime?: ModelStringInput | null,
  itineraryId?: ModelIDInput | null,
  location?: ModelStringInput | null,
  not?: ModelActivityConditionInput | null,
  or?: Array< ModelActivityConditionInput | null > | null,
  owner?: ModelStringInput | null,
  startTime?: ModelStringInput | null,
  status?: ModelActivityStatusInput | null,
  title?: ModelStringInput | null,
  type?: ModelActivityTypeInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateActivityInput = {
  cost?: number | null,
  createdAt?: string | null,
  description?: string | null,
  endTime?: string | null,
  id?: string | null,
  itineraryId?: string | null,
  location?: string | null,
  startTime?: string | null,
  status?: ActivityStatus | null,
  title?: string | null,
  type?: ActivityType | null,
  updatedAt?: string | null,
};

export type ModelGroupConditionInput = {
  adminId?: ModelStringInput | null,
  and?: Array< ModelGroupConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  members?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelGroupConditionInput | null,
  or?: Array< ModelGroupConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateGroupInput = {
  adminId?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id?: string | null,
  members?: Array< string | null > | null,
  name?: string | null,
  updatedAt?: string | null,
};

export type ModelItineraryConditionInput = {
  and?: Array< ModelItineraryConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  not?: ModelItineraryConditionInput | null,
  notes?: ModelStringInput | null,
  or?: Array< ModelItineraryConditionInput | null > | null,
  owner?: ModelStringInput | null,
  tripId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateItineraryInput = {
  createdAt?: string | null,
  id?: string | null,
  notes?: string | null,
  tripId?: string | null,
  updatedAt?: string | null,
};

export type ModelPaymentConditionInput = {
  amount?: ModelFloatInput | null,
  and?: Array< ModelPaymentConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  dueDate?: ModelStringInput | null,
  not?: ModelPaymentConditionInput | null,
  or?: Array< ModelPaymentConditionInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelPaymentStatusInput | null,
  tripId?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
  userId?: ModelStringInput | null,
};

export type CreatePaymentInput = {
  amount?: number | null,
  createdAt?: string | null,
  dueDate?: string | null,
  id?: string | null,
  status?: PaymentStatus | null,
  tripId?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type ModelProfileConditionInput = {
  accountType?: ModelProfileAccountTypeInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  cognitoUsername?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelProfileConditionInput | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateProfileInput = {
  accountType?: ProfileAccountType | null,
  cognitoUsername?: string | null,
  createdAt?: string | null,
  email?: string | null,
  id?: string | null,
  updatedAt?: string | null,
};

export type ModelTripConditionInput = {
  and?: Array< ModelTripConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  description?: ModelStringInput | null,
  destination?: ModelStringInput | null,
  endDate?: ModelStringInput | null,
  groupId?: ModelIDInput | null,
  itineraryId?: ModelIDInput | null,
  not?: ModelTripConditionInput | null,
  or?: Array< ModelTripConditionInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelStringInput | null,
  status?: ModelTripStatusInput | null,
  title?: ModelStringInput | null,
  totalCost?: ModelFloatInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTripInput = {
  createdAt?: string | null,
  description?: string | null,
  destination?: string | null,
  endDate?: string | null,
  groupId?: string | null,
  id?: string | null,
  itineraryId?: string | null,
  startDate?: string | null,
  status?: TripStatus | null,
  title?: string | null,
  totalCost?: number | null,
  updatedAt?: string | null,
};

export type DeleteActivityInput = {
  id: string,
};

export type DeleteGroupInput = {
  id: string,
};

export type DeleteItineraryInput = {
  id: string,
};

export type DeletePaymentInput = {
  id: string,
};

export type DeleteProfileInput = {
  id: string,
};

export type DeleteTripInput = {
  id: string,
};

export type UpdateActivityInput = {
  cost?: number | null,
  createdAt?: string | null,
  description?: string | null,
  endTime?: string | null,
  id: string,
  itineraryId?: string | null,
  location?: string | null,
  startTime?: string | null,
  status?: ActivityStatus | null,
  title?: string | null,
  type?: ActivityType | null,
  updatedAt?: string | null,
};

export type UpdateGroupInput = {
  adminId?: string | null,
  createdAt?: string | null,
  description?: string | null,
  id: string,
  members?: Array< string | null > | null,
  name?: string | null,
  updatedAt?: string | null,
};

export type UpdateItineraryInput = {
  createdAt?: string | null,
  id: string,
  notes?: string | null,
  tripId?: string | null,
  updatedAt?: string | null,
};

export type UpdatePaymentInput = {
  amount?: number | null,
  createdAt?: string | null,
  dueDate?: string | null,
  id: string,
  status?: PaymentStatus | null,
  tripId?: string | null,
  updatedAt?: string | null,
  userId?: string | null,
};

export type UpdateProfileInput = {
  accountType?: ProfileAccountType | null,
  cognitoUsername?: string | null,
  createdAt?: string | null,
  email?: string | null,
  id: string,
  updatedAt?: string | null,
};

export type UpdateTripInput = {
  createdAt?: string | null,
  description?: string | null,
  destination?: string | null,
  endDate?: string | null,
  groupId?: string | null,
  id: string,
  itineraryId?: string | null,
  startDate?: string | null,
  status?: TripStatus | null,
  title?: string | null,
  totalCost?: number | null,
  updatedAt?: string | null,
};

export type ModelSubscriptionActivityFilterInput = {
  and?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  cost?: ModelSubscriptionFloatInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  endTime?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  itineraryId?: ModelSubscriptionIDInput | null,
  location?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionActivityFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startTime?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  type?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionFloatInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionGroupFilterInput = {
  adminId?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  members?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionGroupFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionItineraryFilterInput = {
  and?: Array< ModelSubscriptionItineraryFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  notes?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionItineraryFilterInput | null > | null,
  owner?: ModelStringInput | null,
  tripId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionPaymentFilterInput = {
  amount?: ModelSubscriptionFloatInput | null,
  and?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  dueDate?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionPaymentFilterInput | null > | null,
  owner?: ModelStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  tripId?: ModelSubscriptionIDInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  userId?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionProfileFilterInput = {
  accountType?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  cognitoUsername?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionProfileFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTripFilterInput = {
  and?: Array< ModelSubscriptionTripFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  description?: ModelSubscriptionStringInput | null,
  destination?: ModelSubscriptionStringInput | null,
  endDate?: ModelSubscriptionStringInput | null,
  groupId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  itineraryId?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTripFilterInput | null > | null,
  owner?: ModelStringInput | null,
  startDate?: ModelSubscriptionStringInput | null,
  status?: ModelSubscriptionStringInput | null,
  title?: ModelSubscriptionStringInput | null,
  totalCost?: ModelSubscriptionFloatInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetActivityQueryVariables = {
  id: string,
};

export type GetActivityQuery = {
  getActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type GetGroupQueryVariables = {
  id: string,
};

export type GetGroupQuery = {
  getGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type GetItineraryQueryVariables = {
  id: string,
};

export type GetItineraryQuery = {
  getItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetPaymentQueryVariables = {
  id: string,
};

export type GetPaymentQuery = {
  getPayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type GetTripQueryVariables = {
  id: string,
};

export type GetTripQuery = {
  getTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};

export type ListActivitiesQueryVariables = {
  filter?: ModelActivityFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListActivitiesQuery = {
  listActivities?:  {
    __typename: "ModelActivityConnection",
    items:  Array< {
      __typename: "Activity",
      cost?: number | null,
      createdAt?: string | null,
      description?: string | null,
      endTime?: string | null,
      id: string,
      itineraryId?: string | null,
      location?: string | null,
      owner?: string | null,
      startTime?: string | null,
      status?: ActivityStatus | null,
      title?: string | null,
      type?: ActivityType | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListGroupsQueryVariables = {
  filter?: ModelGroupFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListGroupsQuery = {
  listGroups?:  {
    __typename: "ModelGroupConnection",
    items:  Array< {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListItinerariesQueryVariables = {
  filter?: ModelItineraryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItinerariesQuery = {
  listItineraries?:  {
    __typename: "ModelItineraryConnection",
    items:  Array< {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListPaymentsQueryVariables = {
  filter?: ModelPaymentFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPaymentsQuery = {
  listPayments?:  {
    __typename: "ModelPaymentConnection",
    items:  Array< {
      __typename: "Payment",
      amount?: number | null,
      createdAt?: string | null,
      dueDate?: string | null,
      id: string,
      owner?: string | null,
      status?: PaymentStatus | null,
      tripId?: string | null,
      updatedAt?: string | null,
      userId?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  id?: string | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles?:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      accountType?: ProfileAccountType | null,
      cognitoUsername?: string | null,
      createdAt?: string | null,
      email?: string | null,
      id: string,
      owner?: string | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTripsQueryVariables = {
  filter?: ModelTripFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTripsQuery = {
  listTrips?:  {
    __typename: "ModelTripConnection",
    items:  Array< {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type CreateActivityMutationVariables = {
  condition?: ModelActivityConditionInput | null,
  input: CreateActivityInput,
};

export type CreateActivityMutation = {
  createActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateGroupMutationVariables = {
  condition?: ModelGroupConditionInput | null,
  input: CreateGroupInput,
};

export type CreateGroupMutation = {
  createGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateItineraryMutationVariables = {
  condition?: ModelItineraryConditionInput | null,
  input: CreateItineraryInput,
};

export type CreateItineraryMutation = {
  createItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreatePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: CreatePaymentInput,
};

export type CreatePaymentMutation = {
  createPayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type CreateProfileMutationVariables = {
  condition?: ModelProfileConditionInput | null,
  input: CreateProfileInput,
};

export type CreateProfileMutation = {
  createProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type CreateTripMutationVariables = {
  condition?: ModelTripConditionInput | null,
  input: CreateTripInput,
};

export type CreateTripMutation = {
  createTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteActivityMutationVariables = {
  condition?: ModelActivityConditionInput | null,
  input: DeleteActivityInput,
};

export type DeleteActivityMutation = {
  deleteActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteGroupMutationVariables = {
  condition?: ModelGroupConditionInput | null,
  input: DeleteGroupInput,
};

export type DeleteGroupMutation = {
  deleteGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteItineraryMutationVariables = {
  condition?: ModelItineraryConditionInput | null,
  input: DeleteItineraryInput,
};

export type DeleteItineraryMutation = {
  deleteItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeletePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: DeletePaymentInput,
};

export type DeletePaymentMutation = {
  deletePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  condition?: ModelProfileConditionInput | null,
  input: DeleteProfileInput,
};

export type DeleteProfileMutation = {
  deleteProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type DeleteTripMutationVariables = {
  condition?: ModelTripConditionInput | null,
  input: DeleteTripInput,
};

export type DeleteTripMutation = {
  deleteTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateActivityMutationVariables = {
  condition?: ModelActivityConditionInput | null,
  input: UpdateActivityInput,
};

export type UpdateActivityMutation = {
  updateActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateGroupMutationVariables = {
  condition?: ModelGroupConditionInput | null,
  input: UpdateGroupInput,
};

export type UpdateGroupMutation = {
  updateGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateItineraryMutationVariables = {
  condition?: ModelItineraryConditionInput | null,
  input: UpdateItineraryInput,
};

export type UpdateItineraryMutation = {
  updateItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdatePaymentMutationVariables = {
  condition?: ModelPaymentConditionInput | null,
  input: UpdatePaymentInput,
};

export type UpdatePaymentMutation = {
  updatePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  condition?: ModelProfileConditionInput | null,
  input: UpdateProfileInput,
};

export type UpdateProfileMutation = {
  updateProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type UpdateTripMutationVariables = {
  condition?: ModelTripConditionInput | null,
  input: UpdateTripInput,
};

export type UpdateTripMutation = {
  updateTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnCreateActivitySubscription = {
  onCreateActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnCreateGroupSubscription = {
  onCreateGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateItinerarySubscriptionVariables = {
  filter?: ModelSubscriptionItineraryFilterInput | null,
  owner?: string | null,
};

export type OnCreateItinerarySubscription = {
  onCreateItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnCreatePaymentSubscription = {
  onCreatePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnCreateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnCreateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
  owner?: string | null,
};

export type OnCreateTripSubscription = {
  onCreateTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnDeleteActivitySubscription = {
  onDeleteActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnDeleteGroupSubscription = {
  onDeleteGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteItinerarySubscriptionVariables = {
  filter?: ModelSubscriptionItineraryFilterInput | null,
  owner?: string | null,
};

export type OnDeleteItinerarySubscription = {
  onDeleteItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeletePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnDeletePaymentSubscription = {
  onDeletePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnDeleteProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnDeleteTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTripSubscription = {
  onDeleteTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateActivitySubscriptionVariables = {
  filter?: ModelSubscriptionActivityFilterInput | null,
  owner?: string | null,
};

export type OnUpdateActivitySubscription = {
  onUpdateActivity?:  {
    __typename: "Activity",
    cost?: number | null,
    createdAt?: string | null,
    description?: string | null,
    endTime?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    location?: string | null,
    owner?: string | null,
    startTime?: string | null,
    status?: ActivityStatus | null,
    title?: string | null,
    type?: ActivityType | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateGroupSubscriptionVariables = {
  filter?: ModelSubscriptionGroupFilterInput | null,
  owner?: string | null,
};

export type OnUpdateGroupSubscription = {
  onUpdateGroup?:  {
    __typename: "Group",
    adminId?: string | null,
    createdAt?: string | null,
    description?: string | null,
    id: string,
    members?: Array< string | null > | null,
    name?: string | null,
    owner?: string | null,
    trips?:  {
      __typename: "ModelTripConnection",
      nextToken?: string | null,
    } | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateItinerarySubscriptionVariables = {
  filter?: ModelSubscriptionItineraryFilterInput | null,
  owner?: string | null,
};

export type OnUpdateItinerarySubscription = {
  onUpdateItinerary?:  {
    __typename: "Itinerary",
    activities?:  {
      __typename: "ModelActivityConnection",
      nextToken?: string | null,
    } | null,
    createdAt?: string | null,
    id: string,
    notes?: string | null,
    owner?: string | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdatePaymentSubscriptionVariables = {
  filter?: ModelSubscriptionPaymentFilterInput | null,
  owner?: string | null,
};

export type OnUpdatePaymentSubscription = {
  onUpdatePayment?:  {
    __typename: "Payment",
    amount?: number | null,
    createdAt?: string | null,
    dueDate?: string | null,
    id: string,
    owner?: string | null,
    status?: PaymentStatus | null,
    trip?:  {
      __typename: "Trip",
      createdAt?: string | null,
      description?: string | null,
      destination?: string | null,
      endDate?: string | null,
      groupId?: string | null,
      id: string,
      itineraryId?: string | null,
      owner?: string | null,
      startDate?: string | null,
      status?: TripStatus | null,
      title?: string | null,
      totalCost?: number | null,
      updatedAt?: string | null,
    } | null,
    tripId?: string | null,
    updatedAt?: string | null,
    userId?: string | null,
  } | null,
};

export type OnUpdateProfileSubscriptionVariables = {
  filter?: ModelSubscriptionProfileFilterInput | null,
  owner?: string | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile?:  {
    __typename: "Profile",
    accountType?: ProfileAccountType | null,
    cognitoUsername?: string | null,
    createdAt?: string | null,
    email?: string | null,
    id: string,
    owner?: string | null,
    updatedAt?: string | null,
  } | null,
};

export type OnUpdateTripSubscriptionVariables = {
  filter?: ModelSubscriptionTripFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTripSubscription = {
  onUpdateTrip?:  {
    __typename: "Trip",
    createdAt?: string | null,
    description?: string | null,
    destination?: string | null,
    endDate?: string | null,
    group?:  {
      __typename: "Group",
      adminId?: string | null,
      createdAt?: string | null,
      description?: string | null,
      id: string,
      members?: Array< string | null > | null,
      name?: string | null,
      owner?: string | null,
      updatedAt?: string | null,
    } | null,
    groupId?: string | null,
    id: string,
    itinerary?:  {
      __typename: "Itinerary",
      createdAt?: string | null,
      id: string,
      notes?: string | null,
      owner?: string | null,
      tripId?: string | null,
      updatedAt?: string | null,
    } | null,
    itineraryId?: string | null,
    owner?: string | null,
    payments?:  {
      __typename: "ModelPaymentConnection",
      nextToken?: string | null,
    } | null,
    startDate?: string | null,
    status?: TripStatus | null,
    title?: string | null,
    totalCost?: number | null,
    updatedAt?: string | null,
  } | null,
};
