function Wrapper({ children, className }) {
  // console.log(children);
  // console.log(className);
  return (
    <div
      className={`w-full max-w-[1280px] px-3 mx-auto md:px-8 min-[426px]:px-5 ${
        className || ""
      }`}
    >
      {children}
    </div>
  );
}

export default Wrapper;
