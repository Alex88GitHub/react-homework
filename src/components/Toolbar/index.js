import './index.css';

const Toolbar = ({filters, selected, onSelectFilter}) => {

  return (
    <ul className='filter-list' onClick={(evt) => onSelectFilter(evt.target.textContent)}>
      {filters.map((filter) => {
        return (
          <li className={`filter-list__item ${selected === filter ? `active` : ``}`}>{filter}</li>
        )
      })}
    </ul>
  );
};

export default Toolbar;