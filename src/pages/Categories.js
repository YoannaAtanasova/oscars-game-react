import React, {useEffect, useState} from 'react';
import { Page, PageBody, Title, TitleLink, TitleWrapper } from '../components/PageElements';
import { CategoryWrapper } from '../components/NominationCategoryElements';
import Nominations from '../components/Nominations';

function Categories() {
    const [categoriesData, setCategoriesData] = useState([]);

    useEffect(() => {
        getCategoriesData();
    }, []);
    
    const getCategoriesData = async () => {
        return await fetch("http://localhost:3030/categories")
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
                                    <TitleLink href={'/category/' + category.Id}>
                                        {category.CategoryTitle}
                                    </TitleLink>
                                </Title>
                            </TitleWrapper>
                            <Nominations nominaionsData={category.Nominations}/>
                        </CategoryWrapper>
                    ))}
            </PageBody>
        </Page>
    )
}

export default Categories
