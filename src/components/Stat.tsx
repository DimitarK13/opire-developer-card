interface StatProps {
  number: number;
  description: string;
  isPrice?: boolean;
}

const Stat: React.FC<StatProps> = ({
  number,
  description,
  isPrice = false,
}) => {
  return (
    <div className="statistic">
      <p className="statistic__number">
        {isPrice ? '$' : ''}
        {number}
      </p>
      <p className="statistic__description">{description}</p>
    </div>
  );
};

export default Stat;
