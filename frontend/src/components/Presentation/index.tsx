import React, {useMemo, useRef} from 'react';

import type {Collection} from '../../services/api';
import {getUploadURL} from '../../utils/uploads';

import './index.css';

type PresentationProps = {
    collection: Collection;
    selectedPhotoIndex: number;
};

function Presentation({collection, selectedPhotoIndex}: PresentationProps) {
    const presentationImageRef = useRef<HTMLImageElement>(null);

    const requestFullScreen = () => {
        if (!presentationImageRef.current) return;
        presentationImageRef.current.requestFullscreen();
    }

    const currentPhoto = useMemo(() => collection?.attributes.photos[selectedPhotoIndex],
        [collection, selectedPhotoIndex]);
    console.log(currentPhoto);

    const currentPhotoUrl = useMemo(() => currentPhoto ?
            getUploadURL(currentPhoto.file.data.attributes.formats.large.url) : undefined,
        [currentPhoto]);

    const currentPhotoDescription = useMemo(
        () => currentPhoto ? currentPhoto.description : undefined
        , [currentPhoto]);

    const currentPhotoLocation = useMemo(
        () => currentPhoto ? currentPhoto.location : undefined
        , [currentPhoto]);

    const currentPhotoCamera = useMemo(
        () => currentPhoto ? currentPhoto.camera : undefined
        , [currentPhoto]);

    const currentPhotoDate = useMemo(
        () => currentPhoto ? currentPhoto.date : undefined
        , [currentPhoto]);

    return (
        <section className="presentation-section">
            <h1>{collection?.attributes.title}</h1>
            <p id="presentation-summary">{collection?.attributes.summary}</p>
            {/*<div className="presentation-current-photo">*/}
            {/*    <img ref={presentationImageRef} src={currentPhotoUrl} alt={currentPhotoDescription}*/}
            {/*         onClick={requestFullScreen} title="Cliquez pour agrandir" style={{cursor: "pointer"}}/>*/}
            {/*    <div>*/}
            {/*        <p>{currentPhotoDescription}</p>*/}
            {/*        <hr/>*/}
            {/*        <ul>*/}
            {/*            <li><strong>Lieu:</strong> {currentPhotoLocation}</li>*/}
            {/*            <li><strong>Appareil photo:</strong> {currentPhotoCamera}</li>*/}
            {/*            <li><strong>Date:</strong> {currentPhotoDate}</li>*/}
            {/*        </ul>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </section>
    );
}

export default Presentation;
