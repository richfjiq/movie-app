import { FC } from 'react';

interface Props {
  rated?: number;
}

const CircleProgress: FC<Props> = ({ rated = 0 }) => {
  let bgOpacity = 'rgba(218, 35, 96, .5)';
  let bg = '#DA2360';

  if (rated > 40 && rated < 70) {
    bgOpacity = 'rgba(211, 213, 48, 0.4)';
    bg = '#D3D530';
  } else if (rated >= 70) {
    bgOpacity = 'rgba(30, 208, 122, 0.4)';
    bg = '#1ED07A';
  }

  return (
    <div className="flex justify-center items-center absolute bottom-[-17px] left-[10px] bg-dark-jungle-green w-[37px] h-[37px] rounded-full">
      <div
        className="progress_bar"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        style={{
          background: `radial-gradient(closest-side, #081C22 85%, transparent 80% 100%), conic-gradient(${bg} ${rated}%, ${bgOpacity} 0)`,
        }}
      >
        <div className="relative">
          <p className="ml-[-3px]">{rated}</p>
          <p className="absolute text-[6px] top-0 left-[11px]">%</p>
        </div>
      </div>
    </div>
  );
};

export default CircleProgress;
