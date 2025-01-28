import type { Schema } from "@/amplify/data/resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

const useClient = () => {
  return {
    Profile: client.models.Profile,
    Tour: client.models.Tour,
    Group: client.models.Group,
    Payment: client.models.Payment,
    Itinerary: client.models.Itinerary,
    Activity: client.models.Activity,
  };
};

export default useClient;
