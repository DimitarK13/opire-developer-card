import { useState } from 'react';

import Badge from './Badge';
import SocialLinks from './SocialLinks';

import shareIcon from '../assets/share-icon.svg';
import StatisticsList from './StatisticsList';
import TechnologiesList from './TechnologiesList';
import ResolvedChallengesList from './ResolvedChallengesList';

interface Statistic {
  number: number;
  description: string;
  isPrice: boolean;
}

interface Developer {
  image: string;
  joinedDate: string;
  githubLink: string;
  twitterLink: string;
  linkedinLink: string;
  name: string;
  position: string;
  topContributor?: boolean;
  resolvedChallenges: string[];
  technologies: string[];
  statistics: Statistic[];
}

interface CardProps {
  developer: Developer;
}

const Card: React.FC<CardProps> = ({ developer }) => {
  const [style, setStyle] = useState<React.CSSProperties>({});

  const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (event) => {
    const card = event.currentTarget;
    const cardRect = card.getBoundingClientRect();

    const x = event.clientX - cardRect.left - cardRect.width / 2;
    const y = event.clientY - cardRect.top - cardRect.height / 2;

    const rotateX = (y / cardRect.height) * -20;
    const rotateY = (x / cardRect.width) * 20;

    setStyle({
      transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
    });
  };

  const handleMouseLeave: React.MouseEventHandler<HTMLDivElement> = () => {
    setStyle({
      transform: 'rotateX(0deg) rotateY(0deg)',
      transition: 'transform 0.3s ease-out',
    });
  };

  return (
    <div
      className="card"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={style}
    >
      <div className="card__details">
        <div>
          <div className="card__details-top">
            <img
              className="card__details-picture"
              src={developer.image}
              alt={developer.name}
            />

            <div className="card__details-wrap">
              <div className="card__details-info">
                <p className="card__details-date">
                  Joined: {developer.joinedDate}
                </p>

                <div className="card__details-socials">
                  <SocialLinks
                    githubLink={developer.githubLink}
                    twitterLink={developer.twitterLink}
                    linkedinLink={developer.linkedinLink}
                  />
                </div>
              </div>

              <StatisticsList statistics={developer.statistics} />
            </div>
          </div>

          <StatisticsList statistics={developer.statistics} />
        </div>

        <TechnologiesList technologies={developer.technologies} />
      </div>

      <div className="card__line"></div>

      <div className="card__info">
        {developer.topContributor && (
          <Badge isGradient={true}>Top Contributor</Badge>
        )}
        <h1 className="card__info-name">{developer.name}</h1>
        <p className="card__info-position">{developer.position}</p>

        <div className="card__info-challenges">
          <h2 className="card__info-challenges-title">Resolved Challenges:</h2>

          <ResolvedChallengesList challenges={developer.resolvedChallenges} />
        </div>

        <a
          className="card__info-share"
          href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
            window.location.href
          )}&text=${encodeURIComponent(
            `Check out ${developer.name}'s profile on our platform!`
          )}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={shareIcon} alt="Share Icon" />
        </a>
      </div>
    </div>
  );
};

export default Card;
