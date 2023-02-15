import Head from 'next/head';

export default function Title({ title }: { title: string }) {
  return (
    <div>
      <Head>
				<title>{title} | Overlapp <span className='text-sm' >Beta</span></title>
      </Head>
    </div>
  );
}
