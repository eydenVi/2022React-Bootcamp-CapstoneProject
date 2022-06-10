import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import Category from "./Category";

const Styles = styled.div`
  .cards-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    margin: 2.5em auto;
  }

  h3 {
    font-size: 2.4em;
    font-weight: lighter;
    margin-top: 2em;
  }
`


const Categories = ({categories}) => {
	return (
		<Styles>
			<h3>Categories</h3>
			<div className="cards-container">
				{categories.map(category => {
					const {data: categoryInfo} = category;
					return (
						<Category
							properties={categoryInfo}
							key={category.id}
						/>
					)
				})}
			</div>
		</Styles>
	);
};

Categories.propTypes = {
	categories: PropTypes.array.isRequired,
};

export default Categories;
