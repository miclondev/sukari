import { a } from "@aws-amplify/backend";

export const tourItenerary = a.customType({
  title: a.string(),
  description: a.string(),
  image: a.string(),
});

export const tourModel = a
  .model({
    id: a.id(),
    title: a.string(),
    description: a.string(),
    startDate: a.date(),
    endDate: a.date(),
    previousCost: a.float(),
    totalCost: a.float(),
    status: a.string(),
    destination: a.string(),
    // Relationships
    groupId: a.id(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    tourItenerary: a.ref("tourItenerary").array(),
  })
  .authorization((allow) => [
    allow.group("ADMIN"),
    allow.authenticated().to(["read"]),
    // allow.authenticated.
  ]);
