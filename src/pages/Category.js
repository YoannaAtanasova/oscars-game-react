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
        fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`)
            .then((response) => response.json())
            .then((data) => setCategoryData(
                {
                    title: data.CategoryTitle, 
                    nominations: data.Nominations
                }));
    }, [categoryId]);
    
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