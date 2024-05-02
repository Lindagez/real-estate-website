export default function Layout({ title, children }) {
  return (
    <>
      <div className='w-100'>
        <div className='container'>
          <h1 className='mb-2'>{title}</h1>
          {children}
        </div>
      </div>
    </>
  );
}
