const whatsappNumber = "5531986183336";

const message = encodeURIComponent(
  "Olá! Conheci a Signorge pelo site e gostaria de conversar sobre um projeto."
);

export const whatsappUrl =
  `https://wa.me/${whatsappNumber}?text=${message}`;