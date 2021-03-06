import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  align-items: center;

  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h3 {
    text-align: center;
    font-size: 27px;
  }
  p {
    margin: 0;
    margin-top: 1rem;
    text-align: center;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    background: transparent;
    border: transparent;
    color: var(--primary-500);
    cursor: pointer;
    letter-spacing: var(--letterSpacing);
  }
  .form-input {
    padding: 3px 10px;
    display: flex;
    align-items: center;
  }
  .form-input-password {
    width: 90%;
    border: none;
    background-color: transparent;
    height: 100%;
  }
  .form-input-password:focus {
    outline: none;
  }
  .toggle_password {
    border: none;
    background-color: transparent;
    cursor: pointer;
    transition: 0.3s;
    border-radius: 50%;
  }
  .toggle_password svg {
    color: #666;
  }
  .toggle_password:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  .toggle_password:active {
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

export default Wrapper;
