import Link from 'next/link';

const NotFound = () => {
  return (
    <div className='not-found'>
      <h1>ooops...</h1>
      <h2>that page cannot be found</h2>
      <p>
        go back to the{' '}
        <Link href='/'>
          <a>homepage</a>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
