import React, { useState, useEffect } from 'react';
import { getDetails } from '../../services/details-api';
import Detail from '../display/Detail';
import PropTypes from 'prop-types';

const DetailController = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});

  useEffect(() => {
    getDetails(match.params.id)
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

DetailController.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  })
};

export default DetailController;
