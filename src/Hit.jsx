import { Highlight } from "react-instantsearch";
import { getPropertyByPath } from "instantsearch.js/es/lib/utils";

export const Hit = ({ hit }) => {
    // console.log("Hit data:", hit);
    return (
        <article>
            <h1>
                <Highlight attribute="title" hit={hit} />
            </h1>
        </article>
    );
};
