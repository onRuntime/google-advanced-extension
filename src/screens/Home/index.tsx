import React from "react";
import styled from "styled-components";
import SearchField from "../../components/Search/Field";

const Home: React.FC = () => {
  return (
    <Container>
      <Brand>Google</Brand>
      <HomeSearchField />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: calc(100% - 62px);
  justify-content: center;
  align-items: center;
`;

const Brand = styled.div`
  font-size: ${({ theme }) => theme.size.extraTitle};
  font-weight: ${({ theme }) => theme.weight.medium};
  color: ${({ theme }) => theme.colors.text.lighter};
  display: flex;
`;

const HomeSearchField = styled(SearchField)`
  margin-top: 30px;
`;

export default Home;
