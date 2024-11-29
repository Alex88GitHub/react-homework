import img from './tiger-of-sweden.jpg';
import {ReactComponent as LikeIcon} from './favorite-icon.svg';
import './index.css'

const ShopCard = ({item}) => {
  return (
    <div className='shop-card'>
      <header className='shop-card__header'>
        <a className='shop-card__link' href='/'>back to all</a>
        <button className='shop-card__favorite-btn'>
          <LikeIcon width={24} height={24}/>
        </button>
      </header>
      <div className='shop-card__img'>
        <img src={img} alt='Photo.'/>
      </div>
      <div className='shop-card__content-wrapper'>
        <h2 className='shop-card__title'>{item.title}</h2>
        <p className='shop-card__desc-short'>{item.description}</p>
        <span className='shop-card__price'>{item.currency}{item.price}</span>
        <p>{item.descriptionFull}</p>
        <div className='shop-card__btn-wrapper'>
          <button className='shop-card__btn'>add to card</button>
          <button className='shop-card__btn'>wishlist</button>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;