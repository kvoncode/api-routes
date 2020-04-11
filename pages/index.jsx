import styled from "styled-components";

import useSWR from "swr";

const fetcher = url => fetch(url).then(res => res.json())

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

const People = () => {
  const { data, error } = useSWR("/api", fetcher);

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  const names = data.map(el => (<p>{el.name}</p>))

  return <div>{names}</div>;
}

const Main = () => {



  return (
    <StyledMain>
      <StyledHeader>API Route</StyledHeader>
      <StyledP>
        Task: Create API route and fetch data from it. Display list of data on
        main page. Later on we can make api routes for mongodb requests
      </StyledP>

      <People></People>
    </StyledMain>
  );
};

export default Main;
