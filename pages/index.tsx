import { AllocationInfo, AllocationTable, AllocationRecommendations } from '../components/Elements';

// hard-coding in for time saving, but would have this returned via API
const portfolio = {
  total: 60231,
  holdings: [
    { name: 'US Equities', amount: 10123, target: 0.4 },
    { name: 'Int Equities', amount: 7023, target: 0.2 },
    { name: 'Bonds', amount: 15000, target: 0.2 },
    { name: 'Crypto', amount: 30223, target: 0.2 },
  ],
};

const Home = () => {
  return (
    <div className='flex flex-col sm:flex-row w-full min-h-screen'>
      <div className='w-full h-80 sm:min-h-screen sticky top-0 bg-black px-8 py-20 text-white'>
        <AllocationInfo />
      </div>
      <div className='w-full p-8'>
        <AllocationTable portfolio={portfolio} />
        <AllocationRecommendations portfolio={portfolio} />
      </div>
    </div>
  );
};

export default Home;
