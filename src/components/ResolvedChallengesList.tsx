const ResolvedChallengesList: React.FC<{ challenges: string[] }> = ({
  challenges,
}) => (
  <ol className="card__info-challenges-list">
    {challenges.length === 0 && (
      <li className="card__info-challenges-items">No resolved challenges</li>
    )}
    {challenges.map((challenge, index) => (
      <li key={index} className="card__info-challenges-items">
        {challenge}
      </li>
    ))}
  </ol>
);

export default ResolvedChallengesList;
