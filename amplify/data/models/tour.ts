import { a } from "@aws-amplify/backend";

export const tourItenerary = a.customType({
  day: a.integer(),
  title: a.string(),
  description: a.string(),
  image: a.string(),
  activities: a.string().array(),
  meals: a.string().array(),
});

export const tourModel = a
  .model({
    id: a.id(),
    orgId: a.id(),
    title: a.string(),
    description: a.string(),
    days: a.integer(),
    groupSize: a.integer(),
    nextDeparture: a.date(),
    images: a.string().array(),
    highlights: a.string().array(),
    whatsIncluded: a.string().array(),
    previousCost: a.float(),
    totalCost: a.float(),
    status: a.string().required(),
    destination: a.string(),
    createdAt: a.datetime(),
    updatedAt: a.datetime(),
    tourItenerary: a.ref("tourItenerary").array(),
  })
  .authorization((allow) => [
    allow.group("ADMIN"),
    allow.authenticated().to(["read"]),
    allow.guest().to(["read"]),
    // allow.authenticated.
  ])
  .secondaryIndexes((index) => [
    index("status").sortKeys(["createdAt"]).queryField("tourByStatus"),
    index("orgId").sortKeys(["createdAt"]).queryField("tourByOrg"),
  ]);
