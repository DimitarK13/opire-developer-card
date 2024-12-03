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
    <div>
      <p>
        {isPrice ? '$' : ''}
        {number}
      </p>
      <p>{description}</p>
    </div>
  );
};

export default Stat;
