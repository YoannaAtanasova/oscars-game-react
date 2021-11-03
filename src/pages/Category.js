import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { CategoryWrapper } from '../components/NominationCategoryElements';
import Nominations from '../components/Nominations';
import { Page, PageBody, Title, TitleWrapper } from '../components/PageElements';

function Category() {
    const {categoryId} = useParams();

    const [categoryData, setCategoryData] = useState([]);

    useEffect(() => {
        getCategoryData();
    }, []);
    
    const getCategoryData = async () => {
        return await fetch("http://localhost:3030/category-" + categoryId )
            .then((response) => response.json())
            .then((data) => setCategoryData(data));
      };
    
    return (
        <Page>
            <PageBody>
                {categoryData.map((category, index) => (
                    <CategoryWrapper key={index}>
                        <TitleWrapper>
                            <Title>
                                {category.CategoryTitle}
                            </Title>
                        </TitleWrapper>
                        <Nominations nominaionsData={category.Nominations}/>
                    </CategoryWrapper>
                ))}
            </PageBody>
        </Page>
    )
}

export default Category
