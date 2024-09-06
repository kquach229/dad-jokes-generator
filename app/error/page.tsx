// pages/_error.tsx
export default function ErrorPage() {
  return (
    <main className='flex flex-col items-center justify-center min-h-screen bg-[#d7eaf3] p-6'>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm text-center'>
        <h1 className='text-2xl font-bold text-[#14397d] mb-4'>
          Sorry, something went wrong
        </h1>
        <p className='text-[#14397d]'>
          We encountered an unexpected error. Please try again later.
        </p>
      </div>
    </main>
  );
}
