import { useEffect, useState } from "react";

export default function Github() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/vighneshsapkale2002")
      .then(res => res.json())
      .then(setData);
  }, []);

  if (!data) return <p className="text-center py-10">Loading...</p>;

  return (
    <section id="github" className="py-20 text-center">
      <h2 className="text-3xl font-semibold">GitHub</h2>

      <div className="mt-6">
        <p>Repos: {data.public_repos}</p>
        <p>Followers: {data.followers}</p>

        <a
          href={data.html_url}
          target="_blank"
          className="text-blue-600 mt-2 inline-block"
        >
          Visit Profile →
        </a>
      </div>
    </section>
  );
}