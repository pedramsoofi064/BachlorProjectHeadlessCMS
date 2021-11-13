import { config } from "@keystone-next/keystone";
import { statelessSessions } from "@keystone-next/keystone/session";
import { createAuth } from "@keystone-next/auth";

import { lists } from "./schema";

const { withAuth } = createAuth({
  listKey: "User",
  identityField: "email",
  secretField: "password",
  sessionData: "email",
  initFirstItem: {
    fields: ["email", "password"],
    itemData: { isAdmin: true },
  },
});

let sessionSecret = process.env.SESSION_SECRET;

// if (!sessionSecret) {
//   if (process.env.NODE_ENV === "production") {
//     throw new Error(
//       "The SESSION_SECRET environment variable must be set in production"
//     );
//   } else {
//     sessionSecret = "--x DEV COOKIE SECRET; CHANGE ME x--";
//   }
// }

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const session = statelessSessions({
  maxAge: sessionMaxAge,
  secret: "asaaaaaaaaaaaaaaaaaaaaaadsadsadaaaaaafffffffffffffffffff",
  secure: false, // default: process.env.NODE_ENV === 'production'
});

export default withAuth(
  // Using the config function helps typescript guide you to the available options.
  config({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    db: {
      provider: "sqlite",
      url: "file:./keystone.db",
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data,
    },
    server: {
      port: 3000,
      maxFileSize: 200 * 1024 * 1024,
      healthCheck: true,
    },
    lists,
    session,
    images: {
      upload: "local",
      local: {
        storagePath: "public/uploads/images",
        baseUrl: "/images",
      },
    },
  })
);
