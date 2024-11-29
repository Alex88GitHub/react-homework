import './index.css';

const ProjectList = ({projects}) => {
  return (
    <ul className='project-list'>
      {projects.map((project) => {
        return(
          <li className='project-list__item'>
            <img src={project.img} alt='Project photo.'/>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectList;