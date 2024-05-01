export const ErrorPage = () => {
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">404</h1>
          <p className="py-6">
            The page you are looking for does not exist. Please click the button
            below to go back to the homepage.
          </p>
          <a href="/" className="btn btn-primary">
            Go back to homepage
          </a>
        </div>
      </div>
    </div>
  );
};
