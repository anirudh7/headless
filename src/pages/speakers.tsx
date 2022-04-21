import Head from "next/head";
import { Header, Footer } from "components";
import { client } from "client";
import Speaker from "../components/itsnzSpeaker";

export default function Speakers() {
  const { useQuery } = client;
  const { generalSettings } = client.useQuery();
  const itsnzSpeakers = useQuery().itsnzSpeakers()?.nodes;

  return (
    <>
      <Header
        title={generalSettings.title}
        description={generalSettings.description}
      />

      <Head>
        <title>Meet the Team - {generalSettings.title}</title>
      </Head>

      <main className="content content-single">
        <div className="wrap">
          <h2>ITS NZ Speakers</h2>

          {itsnzSpeakers.map((speaker) => (
            <Speaker key={speaker.id} speaker={speaker} />
          ))}
        </div>
      </main>

      <Footer copyrightHolder={generalSettings.title} />
    </>
  );
}
