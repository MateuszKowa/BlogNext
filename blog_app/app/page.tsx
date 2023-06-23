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
("ZMIAN TYLKO BY SPRAWDZIĆ PULL");
type postObject = {
  title: string;
  content: {
    document: [children: [{ text: string }]];
  };
};
export default async function Page() {
  const { data } = await getClient().query({ query });
  console.log("CONCOLE", data?.posts[0]);

  return (
    <main>
      {data?.posts?.map((value: postObject, index: number) => (
        <div className="bg-green-400 my-10" key={index}>
          <h1 key={index}>{value?.title}</h1>
          <div>{value?.content?.document[0]?.children[0]?.text}</div>
        </div>
      ))}
    </main>
  );
}
