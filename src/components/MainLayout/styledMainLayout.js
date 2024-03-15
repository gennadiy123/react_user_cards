import styled from "styled-components";

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, 360px);
  gap: 28px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: palegoldenrod;
  padding: 20px;
  border-radius: 10px;
  min-height: 250px;
`;

export const AddCard = styled(Card)`
  display: flex;
  justify-content: center;
  cursor: pointer;

  & h2 {
    font-size: 50px;
    font-weight: bold;
    color: purple;
  }
`;

export const CardButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: lightblue;
  border-radius: 16px;
  cursor: pointer;
  margin-bottom: 20px;
  width: 200px;
  padding: 8px 0;
`;

export const DeleteCardButton = styled(CardButton)`
  background-color: #ff7777;
`;

export const Text = styled.p`
  margin-bottom: 0;
`;
