import Toolbar from '../Toolbar';
import ProjectList from '../ProjectList';
import { useState } from 'react';

const Portfolio = ({filters, selected, projects}) => {
  const [filter, setFilter] = useState(selected);
  const onSelectFilter = (value) => setFilter(value);
  
  return(
    <div>
      <Toolbar filters={filters} selected={filter} onSelectFilter={onSelectFilter} />
      <ProjectList projects={filter === 'All' ? projects : projects.filter((project) => filter === project.category)} />
    </div>
  );
};

export default Portfolio;