const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-center">{children}</div>
    </div>
  );
};

export default AuthLayout;
