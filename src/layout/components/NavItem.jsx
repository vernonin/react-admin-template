import { theme } from 'antd';
import styled from 'styled-components';
import { colorWithAlpha } from '../../utils/common';
const NavItemStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  transition: all .3s;
  &:hover {
    background: ${props => props.bgColor};
  }
`
export default function NavItem({ children, onClick }) {
  const { token: { colorPrimary } } = theme.useToken();

  function handleClick() {
    if (onClick && typeof onClick === 'function') {
      handleClick();
    }
  }

  return (
    <NavItemStyled bgColor={colorWithAlpha(colorPrimary, 0.08)} onClick={handleClick}>
      { children }
    </NavItemStyled>
  )
}
