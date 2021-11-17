import React, {useEffect, useState} from 'react';
import { Page, PageBody, Title, TitleLink, TitleWrapper } from '../components/styled/PageElements';
import { CategoryWrapper } from '../components/styled/NominationCategoryElements';
import Nominations from '../components/Nominations';

function Categories() {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getCategoriesData();
    }, []);
    
    const getCategoriesData = async () => {
        return await fetch(`${process.env.REACT_APP_API_URL}/categories`)
            .then((response) => response.json())
            .then((data) => setCategoriesData(data));
      };

    return (
        <Page>
            <PageBody>
                {categoriesData.map((category, index) => (
                        <CategoryWrapper key={index}>
                            <TitleWrapper>
                                <Title>
                                    <TitleLink href={`/category/${category.id}`}>
                                        {category.CategoryTitle}
                                    </TitleLink>
                                </Title>
                            </TitleWrapper>
                            <Nominations categoryId={category.id}/>
                        </CategoryWrapper>
                    ))}
            </PageBody>
        </Page>
    )
}

export default Categories
