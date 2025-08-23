import IBasketball from '../../components/icons/IBasketball';
import ICamera from '../../components/icons/ICamera';
import IMagicWand from '../../components/icons/IMagicWand';
import IMusicNotes from '../../components/icons/IMusicNotes';
import IPaintBrush from '../../components/icons/IPaintBrush';
import IPlanet from '../../components/icons/IPlanet';
import ISwatches from '../../components/icons/ISwatches';
import IVideoCamera from '../../components/icons/IVideoCamera';
import Heading from '../../components/UI/Heading';
import './CategoriesSection.scss'

type CategoryItemProps = {
  categoryImage: string;
  categoryLabel: string;
  categoryIcon: React.ReactNode;
}
const CategoryItem = ({
  categoryImage,
  categoryLabel,
  categoryIcon
}: CategoryItemProps) => {
  return(
    <div className="category-item">
      <div className="category-item__bg">
        <div className="category-item__blur"></div>
        <img src={categoryImage} alt={`category is ${categoryLabel}`} />
      </div>
      <div className="category-item__icon">
        {categoryIcon}
      </div>
      <div className="category-item__title">
        <Heading level={5} label={categoryLabel}/>
      </div>
    </div>
  )
}

const CATEGORIES = [
  {
    categoryLabel: 'Art',
    categoryIcon: IPaintBrush,
  },
  {
    categoryLabel: 'Collectibles',
    categoryIcon: ISwatches,
  },
  {
    categoryLabel: 'Music',
    categoryIcon: IMusicNotes,
  },
  {
    categoryLabel: 'Photography',
    categoryIcon: ICamera,
  },
  {
    categoryLabel: 'Video',
    categoryIcon: IVideoCamera,
  },
  {
    categoryLabel: 'Utility',
    categoryIcon: IMagicWand,
  },
  {
    categoryLabel: 'Sport',
    categoryIcon: IBasketball,
  },
  {
    categoryLabel: 'Virtual Worlds',
    categoryIcon: IPlanet,
  },
]
const CategoriesSection = () => {
  return ( 
    <div className="container categories">
      <Heading 
        label='Browse Categories'
        level={3}
      />
      <div className="categories-grid">
        {CATEGORIES.map((item, index) => {
          const Icon = item.categoryIcon
          return (
            <CategoryItem
              key={`${item.categoryLabel}__${index}`}
              categoryImage={`/categories/c-${++index}.jpg`}
              categoryLabel={item.categoryLabel}
              categoryIcon={<Icon/>}
            />
          )
        }) }
      </div>
    </div>
   );
}
 
export default CategoriesSection;