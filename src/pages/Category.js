import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { CategoryWrapper } from '../components/NominationCategoryElements';
import Nominations from '../components/Nominations';
import { Page, PageBody, Title, TitleWrapper } from '../components/PageElements';

function Category() {
    const {categoryId} = useParams();

    const [categoryData, setCategoryData] = useState({title: '', nominations: []});

    const {title, nominations} = categoryData;

    useEffect(() => {
        getCategoryData();
    }, []);
    
    const getCategoryData = async () => {
        return await fetch("http://localhost:3030/categories/" + categoryId )
            .then((response) => response.json())
            .then((data) => setCategoryData({title: data.CategoryTitle, nominations: data.Nominations}));
      };
    
    return (
        <Page>
            <PageBody>
                    <CategoryWrapper>
                        <TitleWrapper>
                            <Title>
                                {title}
                            </Title>
                        </TitleWrapper>
                        <Nominations nominaionsData={nominations}/>
                    </CategoryWrapper>
            </PageBody>
        </Page>
    )
}

export default Category;