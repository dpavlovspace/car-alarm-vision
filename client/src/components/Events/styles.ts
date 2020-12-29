import styled from 'styled-components';

export const EventsContainer = styled.div`
  width: 100%;
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  overflow: hidden;
`;

export const EventsHeader = styled.div`
  background-color: #707b7c;
  padding: 0.9rem 0.5rem;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #7f8c8d;
    transition: background-color 0.2s ease;
  }
`;

export const EventsTitle = styled.h1`
  color: #fff;
  text-align: center;
  height: auto;
  font-size: 0.8rem;
  font-weight: bold;
  text-transform: uppercase;
`;

export const EventsList = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`;

export const EventsItem = styled.div`
  padding: 0.5rem 1rem;
  color: #fff;
  border-bottom: 1px solid #707b7c;

  time {
    font-size: 0.8rem;
    margin-right: 1.1rem;
  }
`;
