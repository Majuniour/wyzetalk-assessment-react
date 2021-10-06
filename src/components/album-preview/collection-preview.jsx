import React from 'react';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';

const AlbumPreview = (props) => (
    <div className="collection-pr">
        {/* <h1 className="title">{name}</h1> */}
        <div className="preview">
            {
                //console.log("Date", props.data)

                props.data.map(({ id, ...otherItemProps }) => (
                    <CollectionItem key={id} {...otherItemProps} />
                ))
            }
        </div>
    </div>
)


export default AlbumPreview;