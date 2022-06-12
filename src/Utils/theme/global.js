import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    font-family: 'Exo', sans-serif;
  }

  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }
  ._header-sign-btn {
    background: none;
    color: ${({ theme }) => theme.nave};
    padding: 5px 10px;
    margin-left: 10px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    font-size:inherit;
    font-weight: bold;
}
.welcome-dashboard {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: auto;
    height: 140px;
    background: linear-gradient(45deg, #1744c6, #0f9ed7);
    color:white;
    border-radius: 10px;
    align-items: center;
    box-shadow: 0px 15px 30px -10px #1465cc;
}
.invert{
  background: ${({ theme }) => theme.text};
    color: ${({ theme }) => theme.body};
    padding: 20px;
    border-radius:10px
}
.header__ {
    font-family: 'Nunito', sans-serif;
    align-items: center;
    padding: 10px;
    height: 93px;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    justify-content: space-between;
    width: 100%;
    background: ${({ theme }) => theme.fade};
}
.p_i_i {
    display: flex;
    width: fit-content;
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color};
    margin: 10px;
    align-items: center;
    border-radius: 50px;
    justify-content: space-between;
}
._header-side-bar {
    width: 40%;
    height: 68px;
    font-size: larger;
    color: #ffffff;
    background: #ffa013;
    border: none;
    margin: 10px;
    box-shadow: 0px 10px 20px -1px #0000004d;
    border-radius: 25px;
}
.header__side-bar {
    position: fixed;
    top: 0;
    left: 0;
    background: ${({ theme }) => theme.fade};
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: table-footer-group;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    padding: 32px 10px;
    width: 100%;
    height: 100vh;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-flex-wrap: nowrap;
    -ms-flex-wrap: nowrap;
    flex-wrap: wrap;
}
  `
