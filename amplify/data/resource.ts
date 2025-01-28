import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { tourItenerary, tourModel } from "./models/tour";

const schema = a
  .schema({
    tourItenerary,
    Tour: tourModel,

    Profile: a.model({
      id: a.id(),
      accountType: a.enum(["user", "organization"]),
      cognitoUsername: a.string(),
      email: a.string(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Group: a.model({
      id: a.id(),
      name: a.string(),
      description: a.string(),
      members: a.string().array(), // Array of user IDs
      adminId: a.string(), // User ID of group admin
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Payment: a.model({
      id: a.id(),
      amount: a.float(),
      dueDate: a.date(),
      status: a.enum(["PENDING", "PAID", "OVERDUE"]),
      userId: a.string(), // User who made/owes payment
      tripId: a.id(),

      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Itinerary: a.model({
      id: a.id(),
      tripId: a.id(),

      activities: a.hasMany("Activity", "itineraryId"),
      notes: a.string(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Activity: a.model({
      id: a.id(),
      title: a.string(),
      description: a.string(),
      startTime: a.datetime(),
      endTime: a.datetime(),
      location: a.string(),
      cost: a.float(),
      type: a.enum(["TRANSPORT", "ACCOMMODATION", "SIGHTSEEING", "FOOD", "OTHER"]),
      status: a.enum(["PLANNED", "BOOKED", "COMPLETED", "CANCELLED"]),
      itineraryId: a.id(),
      itinerary: a.belongsTo("Itinerary", "itineraryId"),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),
  })
  .authorization((allow) => [allow.owner()]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  name: "sukari",
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    apiKeyAuthorizationMode: { expiresInDays: 365 },
  },
});
