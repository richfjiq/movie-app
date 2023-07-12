import { FC } from 'react';

const Loading: FC = () => {
  return (
    <div className="flex justify-center">
      <div
        className="w-20 h-20 rounded-full animate-spin
    border border-solid border-cyan border-t-0"
      />
    </div>
  );
};

export default Loading;
