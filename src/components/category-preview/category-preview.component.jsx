

import ProductCard from '../product-card/product-card.component';
import { CategoryPreviewContainer,CategoryTitle,PreviewContainer} from './category-preview.styles';
/* import './category-preview.styles.jsx'; */

const CategoryPreview = ({title,products}) => {
    return (
        <CategoryPreviewContainer>
            <h2>
                <CategoryTitle to={title} >{title.toUpperCase()}</CategoryTitle>
            </h2>
            <PreviewContainer>
                {
                    products.filter((_,idx)=>idx < 4 ).map((product)=>
                    <ProductCard key={product.id} product={product}/>)
                }
            </PreviewContainer>
        </CategoryPreviewContainer>
    )
}

export default CategoryPreview