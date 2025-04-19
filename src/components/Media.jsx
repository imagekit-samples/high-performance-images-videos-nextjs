'use client';

const Media = ({ src, contentType, poster, ...props }) => {
    if (contentType === 'video') {
        return <video src={src} poster={poster} {...props} />;
    } else {
        return <img src={src} {...props} />;
    }
};

export default Media;
