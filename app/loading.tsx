import Spinner from './components/ui/Spinner';

type Props = {};

const loading = (props: Props) => {
  return (
    <div role="status" className="flex justify-center items-center h-screen">
      <Spinner />
      <div>Loading...</div>
    </div>
  );
};

export default loading;
