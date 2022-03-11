interface ChipProps {
  text: string;
}

interface PortfolioProps {
  portfolio: {
    total: number;
    holdings: {
      name: string;
      amount: number;
      target: number;
    }[];
  };
}

const colors = ['bg-blue-600', 'bg-purple-600', 'bg-green-600', 'bg-red-600'];

export const Chip = ({ text }: ChipProps) => {
  return (
    <div className='bg-white w-fit text-slate-900 p-2 rounded-md text-xs uppercase font-bold'>
      {text}
    </div>
  );
};

export const AllocationInfo = () => (
  <div>
    <Chip text='My Asset Allocation' />
    <div className='leading-8 my-5'>
      Asset allocation is the most important building block of a portfolio management. The following
      table displays your current allocation vs your target allocation.
    </div>
  </div>
);

export const AllocationTable = ({ portfolio }: PortfolioProps) => {
  return (
    <div className='flex flex-col w-full'>
      <div className='flex w-full flex-row mt-4 text-xs text-gray-500'>
        <div className='flex w-[5%]'></div>
        <div className='flex w-[30%] pl-2'>Asset</div>
        <div className='flex w-[20%]'>$</div>
        <div className='flex w-[15%]'>%</div>
        <div className='flex w-[15%]'>Target</div>
        <div className='flex w-[15%]'>Diff.</div>
      </div>
      {portfolio.holdings.map((x, i) => {
        let actual = x.amount / portfolio.total;
        let textColor = actual > x.target ? 'text-yellow-600' : 'text-blue-600';
        return (
          <div className='flex w-full flex-row my-2 text-xs bg-white shadow-sm rounded-md' key={i}>
            <div className={`flex w-[5%] ${colors[i]} rounded-l-md bg`}></div>
            <div className='flex w-[30%] my-3 pl-2'>{x.name}</div>
            <div className='flex w-[20%] my-3'>{dollar(x.amount)}</div>
            <div className='flex w-[15%] my-3'>{percentage(actual)}</div>
            <div className='flex w-[15%] my-3'>{percentage(x.target)}</div>
            <div className={`flex w-[15%] my-3 ${textColor}`}>
              {percentage(x.amount / portfolio.total - x.target)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AllocationRecommendations = ({ portfolio }: PortfolioProps) => {
  return (
    <div className='flex flex-col w-full'>
      <h1 className='my-4 text-md font-bold'>Recommended Actions</h1>
      <p className='mb-4'>
        The following actions will bring your actual allocation in line with your target allocation
      </p>
      {portfolio.holdings.map((x, i) => {
        let action = x.target > x.amount / portfolio.total ? 'buy' : 'sell';
        let amount = Math.abs(x.target * portfolio.total - x.amount);
        let textColor = action === 'buy' ? 'text-green-600' : 'text-red-600';
        return (
          <div className='flex w-full flex-row my-2 text-xs bg-white shadow-sm rounded-md' key={i}>
            <div className={`flex w-[5%] ${colors[i]} rounded-l-md bg`}></div>
            <div className='flex w-[30%] my-3 pl-2'>{x.name}</div>
            <div className={`flex w-[65%] my-3 ${textColor}`}>
              {action} {dollar(amount)}
            </div>
          </div>
        );
      })}
    </div>
  );
};

function dollar(x: number) {
  return (
    '$' +
    Math.round(x)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')
  );
}

function percentage(x: number) {
  return Math.floor(x * 100).toString() + '%';
}
