import '../styles/ShoppingList.css'
const plantList = [
  {
    name: 'monstera',
    category: 'classique',
    id: '1ed',
    isBestSale: true,
    isSpecialOffer: false
  },
  {
    name: 'ficus lyrata',
    category: 'classique', 
    id: '2ab',
    isBestSale: false,
    isSpecialOffer: true
  },
  {
    name: 'pothos argenté',
    category: 'classique',
    id: '3sd',
    isBestSale: true,
    isSpecialOffer: true
  },
  {
    name: 'yucca',
    category: 'extérieur',
    id: '4kk',
    isBestSale: true,
    isSpecialOffer: false
  },
  {
    name: 'palmier',
    category: 'extérieur',
    id: '5pl',
    isBestSale: false,
    isSpecialOffer: true
  },
  {
    name: 'géranium',
    category: 'extérieur',
    id: '6uo',
    isBestSale: false,
    isSpecialOffer: true
  },
  {
	name: 'basilique',
	category: 'extérieur',
	id: '7ie',
    isBestSale: true,
    isSpecialOffer: false
  },
  {
    name: 'aloe',
    category: 'plante grasse',
    id: '8fp',
    isBestSale: true,
    isSpecialOffer: false
  },
  {
	name: 'succulente',
	category: 'plante grasse',
	id: '9vn',
    isBestSale: true,
    isSpecialOffer: false
  }
]

function ShoppingList() {

const categories = plantList.reduce(
    (acc, plant) => acc.includes(plant.category) ? acc : acc.concat(plant.category), []
)

return (
    <div>
        <h3>Les différentes catégories sont :</h3>
        <ul>
            {categories.map((cat) => (
                <li key={cat}>{cat}</li>
            ))}
        </ul>

        <h3>Les plantes disponibles sont :</h3>
        <ul>
            {plantList.map((plant) => (
                <li key={plant.id}>
                    {plant.isBestSale && <span className='best'>🔥 </span>}
                    {plant.name}
                    {plant.isSpecialOffer && <span className='lmj-sales'> 🎁 </span>}
                </li>
            ))}
        </ul>
    </div>
)


}

export default ShoppingList