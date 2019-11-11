import React, { Component } from 'react';

class CategoryCollapsseContent extends Component {
    getCollapsseContent = () => {
        return this.props.categoryList.childCategories.map((category) => {
            return <CategoryCollapsseContent category={category} />;
        });
    };

    render () {
        return this.getCollapsseContent();
    }
}

export default CategoryCollapsseContent;
