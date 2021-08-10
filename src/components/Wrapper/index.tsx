import Navbar from "../Navbar";

interface Props {
  children: React.ReactNode;
}

const Wrapper: React.FC<Props> = ({ children }: Props) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

export default Wrapper;
