'use client';

import { Image, Video, buildSrc } from "@imagekit/next";

const Media = ({ src, contentType, poster, ...props }) => {
  src = src.replace("https://d1o2glsg6m692z.cloudfront.net/", "");

  if (src.includes('.gif')) {
    let gifSrc = `${src}/ik-gif-video.mp4`;
    return <Video src={gifSrc} muted loop autoPlay {...props} />;
  } else if (contentType === 'video') {
    let posterURL = buildSrc({
      urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT,
      src: `${src}/ik-thumbnail.jpg`,
      transformation: [{
          width: props.width,
          height: props.height,
          crop: "at_max"
      }]
    });

    return <Video src={src} poster={posterURL} {...props} />;
  } else if (contentType === 'videoThumbnail') {
    let posterURL = buildSrc({
      urlEndpoint: process.env.NEXT_PUBLIC_IK_URL_ENDPOINT,
      src: `${src}/ik-thumbnail.jpg`,
      transformation: [{
          width: props.width,
          height: props.height,
          crop: "at_max"
      }]
    });

    return <Image src={posterURL} {...props} />;
  } else {
    return <Image src={src} {...props} />;
  }
};

export default Media;