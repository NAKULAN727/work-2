import styled from "styled-components";

export const ImpactStyle = styled.div`
  h1 {
    text-align: center;
    margin-bottom: 50px;
  }

  .parent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    gap: 30px;
  }

  .child1,
  .child2,
  .child3,
  .child4 {
    display: flex;
    flex-direction: row;         
    justify-content: space-between; 
    align-items: center;          
    border-radius: 15px;
    padding: 1rem 2rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    width: 450px;
    height: 50px;
  }

  .child1 {
    background-color: rgb(255, 223, 228);
  }
  .child2 {
    background-color: rgb(226, 240, 250);
  }
  .child3 {
    background-color: rgb(222, 255, 236);
  }
  .child4 {
    background-color: rgb(255, 230, 199);
  }

  .text-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  .details {
    font-size: 16px;
    font-weight: 500;
    color: black;
  }

  .numbers {
    font-size: 22px;
    font-weight: 700;
    color: black;
  }

  .card-image {
    width: 120px;
    height: 150px;
    //object-fit: contain;
  }

  .glance {
    color: rgb(252, 41, 71);
  }
`;
