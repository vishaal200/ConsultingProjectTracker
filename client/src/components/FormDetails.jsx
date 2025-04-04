import React from "react";
import styled from "styled-components";

const FormDetails = () => {
  return (
    <StyledWrapper>
      <section className="section_form">
        <form id="consultation-form" className="feed-form" action="#">
          <input required placeholder="Name" type="text" />
          <input name="phone" required placeholder="Phone number" />
          <input name="email" required placeholder="E-mail" type="email" />
          <button className="button_submit">ORDER</button>
        </form>
      </section>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .feed-form {
    margin-top: 36px;
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  .feed-form input {
    height: 54px;
    border-radius: 5px;
    background: white;
    margin-bottom: 15px;
    border: none;
    padding: 0 20px;
    font-weight: 300;
    font-size: 14px;
    color: #4b4b4b;
  }

  .button_submit:hover,
  .feed-form input:hover {
    transform: scale(1.009);
    box-shadow: 0px 0px 3px 0px #212529;
  }

  .button_submit {
    width: 100%;
    height: 54px;
    font-size: 14px;
    color: white;
    background: red;
    border-radius: 5px;
    border: none;
    font-weight: 500;
    text-transform: uppercase;
  }
`;

export default FormDetails;
