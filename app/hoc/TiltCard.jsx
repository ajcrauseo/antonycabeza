'use client';

import Tilt from 'react-parallax-tilt';

// Aísla la librería react-parallax-tilt (que necesita el navegador) en un
// Client Component pequeño reutilizable desde cualquier Server Component.
const TiltCard = ({ children, ...props }) => {
  return <Tilt {...props}>{children}</Tilt>;
};

export default TiltCard;
