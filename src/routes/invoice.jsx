import { Fragment } from 'react';
import { useParams } from 'react-router-dom';

export default function Invoice() {
    let params = useParams();

    return(
        <Fragment>
            <h3>Invoice {params.invoiceId}</h3>
        </Fragment>
    );
}