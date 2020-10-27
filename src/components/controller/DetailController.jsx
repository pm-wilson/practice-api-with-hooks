import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/details-api';
import Detail from '../display/Detail';

const DetailController = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);

  const id = window.location.pathname;
  const splitId = id.split('/');
  const idToUse = splitId[2];

  console.log(match, 'match');

  useEffect(() => {
    getDetails()
      .then(details => setDetails(details))
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;

  return (
    <div>
      <Detail details={details} />
    </div>
  );
};

export default DetailController;
