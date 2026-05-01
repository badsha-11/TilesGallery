import { headers } from "next/headers";

const TopGenaretions = async () => {
  const host = headers().get("host");
  const protocol = process.env.NODE_ENV === "development" ? "http" : "https";

  const res = await fetch(`${protocol}://${host}/data.json`, {
    cache: "no-store",
  });

  const data = await res.json();
  console.log(data);

  return <div></div>;
};

export default TopGenaretions;