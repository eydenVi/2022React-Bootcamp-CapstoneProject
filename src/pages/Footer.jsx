import React from 'react';
import styled from "styled-components";

const Styles = styled.div`
  footer {
    width: 100%;
    display: flex;
    position: relative;
    justify-content: center;
    margin: 2.5em auto;
  }
`

const Footer = () => {
  return (
    <Styles>
      <footer>
        <div className="footer-text">
          <p>
            Ecommerce created during Wizeline’s Academy React Bootcamp
          </p>
        </div>
      </footer>
    </Styles>
  );
};

export default Footer;
