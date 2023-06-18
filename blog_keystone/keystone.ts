import { config } from "@keystone-6/core";
import { lists } from "./schema";
import { statelessSessions } from "@keystone-6/core/session";
import { createAuth } from "@keystone-6/auth";

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
});
const session = statelessSessions({
  secret: "-- EXAMPLE COOKIE SECRET; CHANGE ME --",
});
export default withAuth(
  config({
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    lists,
    session,
  })
);
