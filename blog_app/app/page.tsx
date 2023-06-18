import { getClient } from "@/app/helpers/client";

import { gql } from "@apollo/client";

const query = gql`
  query Posts {
    posts {
      title
      content {
        document
      }
    }
  }
`;

export default async function Page() {
  const { data } = await getClient().query({ query });
  console.log("CONCOLE", data?.posts[0]?.title);

  return <main>{data?.posts[0]?.title}</main>;
}
