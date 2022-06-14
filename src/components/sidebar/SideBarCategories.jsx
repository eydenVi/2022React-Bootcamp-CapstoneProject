import React from 'react';
import PropTypes from 'prop-types';
import styled from "styled-components";


const Styles = styled.div`
  label {
    display: block;
    margin-bottom: 15px;
  }

  .category-check {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`

const SideBarCategories = ({categories, categoriesState, setCategoriesState}) => {
  
  const handleChange = (event, categoryName) => {
    setCategoriesState(
      {
        ...categoriesState,
        [categoryName]: event.target.checked,
      })
  };
  
  return (
    <Styles>
      {categories.map((category, index) => {
        return (
          <div className="category-check" key={category.id}>
            <label key={category.id}>{category.name}</label>
            <input
              type="checkbox"
              name={category.name}
              key={`${category.name}-${index}`}
              onChange={(event) => {
                handleChange(event, category.name)
              }}
            />
          </div>
        );
      })}
    
    </Styles>
  );
};

SideBarCategories.propTypes = {
  categories: PropTypes.array.isRequired,
  categoriesState: PropTypes.object.isRequired,
  setCategoriesState: PropTypes.func.isRequired,
};

export default SideBarCategories;
