import githubIcon from '../assets/github-icon.svg';
import twitterIcon from '../assets/twitter-icon.svg';
import linkedinIcon from '../assets/linkedin-icon.svg';

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

const SocialLinks: React.FC<
  Pick<Developer, 'githubLink' | 'twitterLink' | 'linkedinLink'>
> = ({ githubLink, twitterLink, linkedinLink }) => (
  <div className="card__details-socials">
    <a href={githubLink} target="_blank">
      <img
        className="card__details-socials-icon"
        src={githubIcon}
        alt="GitHub Logo"
      />
    </a>
    <a href={twitterLink} target="_blank">
      <img
        className="card__details-socials-icon"
        src={twitterIcon}
        alt="Twitter Logo"
      />
    </a>
    <a href={linkedinLink} target="_blank">
      <img
        className="card__details-socials-icon"
        src={linkedinIcon}
        alt="LinkedIn Logo"
      />
    </a>
  </div>
);

export default SocialLinks;
