import { unix } from 'moment';
import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getEvents } from '../../actions/events';
import { AppState } from '../../store';
import {
  EventsContainer,
  EventsHeader,
  EventsItem,
  EventsList,
  EventsTitle,
} from './styles';

const Events: FC<{
  onClickHeader: React.MouseEventHandler<HTMLDivElement>;
}> = ({ onClickHeader }) => {
  const dispatch = useDispatch();
  const { events } = useSelector((state: AppState) => state.events);

  useEffect(() => {
    dispatch(getEvents());
  }, [dispatch]);

  return (
    <EventsContainer>
      <EventsHeader onClick={onClickHeader}>
        <EventsTitle>Latest events</EventsTitle>
      </EventsHeader>
      <EventsList>
        {events.map(({ id, timestamp, type }) => (
          <EventsItem key={id}>
            <time>{unix(timestamp).format('DD/MM/YY hh:mm:ss')}</time>
            {type}
          </EventsItem>
        ))}
      </EventsList>
    </EventsContainer>
  );
};

export default React.memo(Events);
