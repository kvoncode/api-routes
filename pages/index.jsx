import styled from "styled-components";

const StyledMain = styled.div`
  color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 500px;
  font-family: "Open Sans", sans-serif;
`;

const StyledHeader = styled.h1`
  color: #fe8e7a;
`;


const StyledP = styled.p`
  max-width: 600px;
  line-height: 1.6;
  color: #2e284d;
`;

const Main = () => {
  return (
    <StyledMain>
      <StyledHeader>Front-end authentication forms</StyledHeader>
      <StyledP>Task: create front-end forms using Formik and Next.js. After that we can use Next.js's lambda functions to make requests for simple login to MongoDB Atlas. After that we can use advanced login with JWT tokens and encryption. After that we can create custom authentication architecture similar to the current Google authentication using email, or product list with GraphQL and other business logic</StyledP>
    </StyledMain>
  );
};

export default Main;
