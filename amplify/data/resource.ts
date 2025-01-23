import { type ClientSchema, a, defineData } from "@aws-amplify/backend";

const schema = a
  .schema({
    Trip: a.model({
      title: a.string(),
      description: a.string(),
      startDate: a.date(),
      endDate: a.date(),
      totalCost: a.float(),
      status: a.enum(["PLANNING", "CONFIRMED", "IN_PROGRESS", "COMPLETED"]),
      destination: a.string(),
      // Relationships
      groupId: a.id(),
      group: a.belongsTo("Group", "groupId"),
      payments: a.hasMany("Payment", "tripId"),
      itineraryId: a.id(),
      itinerary: a.hasOne("Itinerary", "tripId"),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Group: a.model({
      name: a.string(),
      description: a.string(),
      members: a.string().array(), // Array of user IDs
      adminId: a.string(), // User ID of group admin
      trips: a.hasMany("Trip", "groupId"),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Payment: a.model({
      amount: a.float(),
      dueDate: a.date(),
      status: a.enum(["PENDING", "PAID", "OVERDUE"]),
      userId: a.string(), // User who made/owes payment
      tripId: a.id(),
      trip: a.belongsTo("Trip", "tripId"),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Itinerary: a.model({
      tripId: a.id(),
      trip: a.belongsTo("Trip", "tripId"),
      activities: a.hasMany("Activity", "itineraryId"),
      notes: a.string(),
      createdAt: a.datetime(),
      updatedAt: a.datetime(),
    }),

    Activity: a.model({
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
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
  },
});
