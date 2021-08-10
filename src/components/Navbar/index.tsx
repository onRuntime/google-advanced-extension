import styled from "styled-components";
import Link from "../Link";
import * as ROUTES from "../../constants/routes";

const Navbar: React.FC = () => {
  return (
    <Container>
      <Col>
        <NavItem>
          <ProductButton></ProductButton>
        </NavItem>
        <NavItem>
          <NavLink href={ROUTES.GOOGLE_STORE}>Store</NavLink>
        </NavItem>
      </Col>
      <Col>{/* center */}</Col>
      <Col>
        <NavItem>
          <NavLink href={ROUTES.GOOGLE_IMAGES}>Images</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href={ROUTES.GOOGLE_MAIL}>Gmail</NavLink>
        </NavItem>
        <NavItem>
          <ProfileImage src={"https://picsum.photos/200"} />
        </NavItem>
      </Col>
    </Container>
  );
};

const Container = styled.nav`
  height: 60px;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }) => theme.colors.layout.darker};
`;

const Col = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  margin: 0 15px;

  :first-child {
    margin-left: 0;
  }

  :last-child {
    margin-right: 0;
  }
`;

const NavLink = styled(Link)<{ active?: boolean }>`
  position: relative;
  color: ${({ theme }) => theme.colors.text.light};
  font-size: ${({ theme }) => theme.size.small};
  font-weight: ${({ active, theme }) =>
    active ? theme.weight.bold : theme.weight.medium};
  text-transform: uppercase;
  display: flex;
  align-items: center;
`;

const ProductButton = styled.div`
  height: 40px;
  width: 40px;
  background-color: ${({ theme }) => theme.colors.layout.darker};
  border-radius: 10px;
  transition: all 0.2s;

  :hover {
    background-color: ${({ theme }) => theme.colors.layout.dark};
  }
`;

const ProfileImage = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  object-fit: cover;
`;

export default Navbar;
