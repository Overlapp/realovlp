import Head from 'next/head';

export default function Title({ title }: { title: string }) {
  return (
    <div>
      <Head>
				<title>{title} | Overlapp</title>
      </Head>
    </div>
  );
}
