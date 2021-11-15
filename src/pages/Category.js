import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import { CategoryWrapper } from '../components/NominationCategoryElements';
import Nominations from '../components/Nominations';
import { Page, PageBody, Title, TitleWrapper } from '../components/PageElements';

function Category() {
    const {categoryId} = useParams();

    const [categoryTitle, setCategoryTitle] = useState(null);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/categories/${categoryId}`)
            .then((response) => response.json())
            .then((data) => setCategoryTitle(data.CategoryTitle));
    }, [categoryId]);
    
    return (
        <Page>
            <PageBody>
                    <CategoryWrapper>
                        <TitleWrapper>
                            <Title>
                                {categoryTitle}
                            </Title>
                        </TitleWrapper>
                        <Nominations categoryId={categoryId}/>
                    </CategoryWrapper>
            </PageBody>
        </Page>
    )
};

export default Category;