import Badge from './Badge';

const TechnologiesList: React.FC<{ technologies: string[] }> = ({
  technologies,
}) => (
  <div>
    {technologies.map((tech, index) => (
      <Badge key={index}>{tech}</Badge>
    ))}
  </div>
);

export default TechnologiesList;
