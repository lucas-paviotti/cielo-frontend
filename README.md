Este sitio está creado con [Next.js](https://nextjs.org/) y [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Comenzar

Correr el comando:

```
npm run dev
```

Para iniciar Next.js

Abrir [http://localhost:3000](http://localhost:3000) para ver el sitio.

### Variables de entorno necesarias

```
REACT_APP_STRAPI_TOKEN_ADMIN
REACT_APP_STRAPI_URL
REACT_APP_GOOGLE_MAPS_KEY
REACT_APP_RECAPTCHA_SITE_KEY
RECAPTCHA_SECRET_KEY
MAILGUN_API_KEY
REACT_APP_GOOGLE_ANALYTICS
```

### Global State

Esta app usa [Zustand](https://github.com/pmndrs/zustand) para el global state.

Ejemplo:

```
const { isOpen, toggleModal, currentMedia } = useModal((state) => ({
    isOpen: state.modals.gallery.isOpen,
    currentMedia: state.modals.gallery.data,
    toggleModal: state.toggleModal,
  }));
```

O también:

```
const { isOpen, toggleModal, currentMedia } = useModal((state) => ({
    isOpen: state.modals.gallery.isOpen,
    currentMedia: state.modals.gallery.data,
    toggleModal: state.toggleModal,
  }));
```

const toggleModal = useModal((state) => state.toggleModal);

### Strapi

La app realiza llamados a un backend de Strapi que está hosteada en [Digital Ocean](https://www.digitalocean.com/).

### Formik

Los formularios son controlados usando [Formik](https://formik.org/)

### Email

Los mails se envían a través de [Mailgun](https://www.mailgun.com/es/)
