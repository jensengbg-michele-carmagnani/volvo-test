import Spinner from './components/Spinner';

type Props = {};

const loading = (props: Props) => {
  return (
    <div role="status">
      <Spinner />
    </div>
  );
};

export default loading;
