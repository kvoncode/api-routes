import styled from "styled-components";
import { useFormik } from "formik";

// limited area with shadow
const StyledLoginForm = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 330px;
`;

// most outer layer div container
const StyledLogin = styled.div`
  color: #232b2b;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 500px;
  font-family: "Open Sans", sans-serif;
  height: 80vh;
`;

const StyledInput = styled.input`
  border: none;
  background: #f7f7f7;
  font-size: 1rem;
  height: 1.5rem;
  width: 20rem;
  padding: 0.1rem 0.5rem;
  color: #333232;

  &:focus {
    outline: 0;
    box-shadow: 0px 1px 3px #888888;
  }
`;

const StyledLabel = styled.label`
  font-size: 0.8rem;
  margin: 0.5rem 0;
  background: #fe8e7a;
  border-radius: 2px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledHeader = styled.h2`
  color: #7a7a7a;
`;

const StyledForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const StyledSubmit = styled.button`
  margin: 1rem 0;
  background: #fe8e7a;
  color: white;
  width: 100%;
  height: 3rem;
  border: 1px solid #fe8e7a;
  border-radius: 2px;

  &:hover {
    background: white;
    color: #fe8e7a;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 1px 10px #fe8e7a;
  }
`;

const Registration = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <StyledLogin>
      <StyledLoginForm>
        <StyledHeader>Registration</StyledHeader>
        <StyledForm onSubmit={formik.handleSubmit}>
          <StyledLabel>
            Email
            <StyledInput
              required
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </StyledLabel>
          <StyledLabel>
            Password
            <StyledInput
              required
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </StyledLabel>
          <StyledSubmit type="submit">Register</StyledSubmit>
        </StyledForm>
      </StyledLoginForm>
    </StyledLogin>
  );
};

export default Registration;
