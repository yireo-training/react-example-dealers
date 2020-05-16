import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import query from './dealers.graphql';

const Dealers = () => {
    const { loading, error, data } = useQuery(query);

    if (loading) {
        return <>Loading</>
    }

    if (error) {
        return <>{error}</>;
    }

    return (
        <>
            <h1>Dealers</h1>
            <ul>
                {data.dealers.items.map((dealer) => (
                    <li key={dealer.id}>{dealer.name} {dealer.address}</li>
                ))}
            </ul>
        </>
    );
};

export default Dealers;
