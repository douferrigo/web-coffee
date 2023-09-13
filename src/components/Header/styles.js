import styled from "styled-components";

export const Container = styled.div`
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }

    .navbar {
    position: sticky;
    display: flex;
    top: 0;
    z-index: 1020;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    color: #fff;
    transition: background-color 0.3s;
    background: transparent;
  }
  header.active {
    background : black;
  }

  .left-icons,
  .right-icons {
    display: flex;
    gap: 10px;
  }

  .central-icon {
    text-align: center;
  }
`;

   
