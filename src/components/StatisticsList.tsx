import Stat from './Stat';

interface Statistic {
  number: number;
  description: string;
  isPrice: boolean;
}

const StatisticsList: React.FC<{ statistics: Statistic[] }> = ({
  statistics,
}) => (
  <div className="card__details-stats">
    {statistics.map((item, index) => (
      <Stat
        key={index}
        number={item.number}
        description={item.description}
        isPrice={item.isPrice}
      />
    ))}
  </div>
);

export default StatisticsList;
