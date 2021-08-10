import React from "react";
import styled from "styled-components";
import { SearchContext } from "../../../context/Search";
import { GoogleIcon } from "../../Icon";
import { useHistory } from "react-router";
import * as ROUTES from "../../../constants/routes";

interface Props {
  className?: string;
}

const SearchField: React.FC<Props> = ({ className }: Props) => {
  const history = useHistory();
  const { search, setSearch } = React.useContext(SearchContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch({ ...search, query: event.target.value });
    console.log(search);
    const params = new URLSearchParams({ q: event.target.value });
    history.replace({
      pathname: event.target.value.length > 0 ? ROUTES.SEARCH : ROUTES.HOME,
      search: event.target.value.length > 0 && params.toString(),
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <Container className={className} onSubmit={handleSubmit}>
      <Icon />
      <Field
        value={search.query}
        type={"text"}
        onChange={handleChange}
        autoFocus
      />
      <Location>Location</Location>
    </Container>
  );
};

const Container = styled.form`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  padding: 10px;
  border-radius: 10px;
`;

const Icon = styled(GoogleIcon)`
  height: 20px;
`;

const Field = styled.input`
  margin: 0 15px;
  width: 500px;
  outline: none;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text.light};
  font-weight: ${({ theme }) => theme.weight.medium};
`;

const Location = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.size.tiny};
  color: ${({ theme }) => theme.colors.text.light};
  margin-right: 15px;
  letter-spacing: 2px;
  cursor: pointer;

  :after {
    content: "";
    position: absolute;
    top: 50%;
    right: -12.5px;
    background-color: rgb(250, 67, 102);
    height: 5px;
    width: 5px;
    border-radius: 10px;
    transform: translate(0, -50%);
  }
`;

export default SearchField;
