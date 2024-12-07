const ResolvedChallengesList: React.FC<{ challenges: string[] }> = ({
  challenges,
}) => (
  <ol className="card__info-challenges-list">
    {challenges.length === 0 && (
      <li className="card__info-challenges-items">No resolved challenges</li>
    )}
    {challenges.map((challenge, index) => (
      <li key={index} className="card__info-challenges-items">
        {challenge.length > 35 ? `${challenge.slice(0, 35)}...` : challenge}
      </li>
    ))}
  </ol>
);

export default ResolvedChallengesList;
