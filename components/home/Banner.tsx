export default function HomeBanner() {
  return (
		<div className='text-black shadow-gray-300'>
      <div className='container flex flex-col items-center mx-auto py-8 space-y-2'>
				<h1 className='font-titillium font-extrabold text-6xl drop-shadow-lg'>Overlapp <span className="text-sm"> Beta</span></h1>
				<p className='font-light text-xl sm:text-2xl whitespace-nowrap'>A place to share your interests.</p>
      </div>
    </div>
  );
}
