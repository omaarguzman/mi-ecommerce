const items = [
  {
    id: 1,
    nombre: "Samsung Galaxy S24",
    precio: "25,000",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893239/E-commerce/Celulares/sdlc1wut1fzgz3wg2sdc.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 2,
    nombre: "Lenovo IdeaCentre 3i",
    precio: "6,300",
    descripcion: "Computadora todo en uno de 24 pulgadas con procesadores Intel® Core™ de 12va generación, pantalla hasta FHD IPS vívida con tarjeta gráfica independiente NVIDIA GeForce opcional, sonido envolvente con un sistema de altavoces con certificación Harman Kardon®, cámara web de alta resolución con sensor de infrarrojos integrado opcional para hacer videoconferencias e iniciar sesión con reconocimiento facial de forma segura, diseño meditado para ayudar a tener ordenado el espacio de trabajo.",
    categoria: "Computadoras",
  },
  {
    id: 3,
    nombre: "TV LG 70 pulgadas 4K",
    precio: "12,780",
    descripcion: "Vive una experiencia de Colores Puros y Precisos en 4K REAL. Sus Nano partículas filtran y refinan los colores impuros dando una imagen más vibrante y realista. Con su Procesador α5 AI 4K Gen6 elimina el ruido del video creando colores y contrastes más vibrantes.",
    categoria: "Televisiones",
  },
  {
    id: 4,
    nombre: "Iphone 15",
    precio: "27,300",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893238/E-commerce/Celulares/hk3yrr3fw8egllimmesh.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 5,
    nombre: "Lenovo IdeaPad Slim 3i",
    precio: "8,000",
    descripcion: "La laptop IdeaPad Slim 3i de 8.ª generación está diseñada con calidad de grado militar y es ideal para el trabajo, la escuela o el entretenimiento durante los desplazamientos. Equipado con procesadores Intel® Core™ de hasta 13.a generación, este dispositivo de 15″ cuenta con una capacidad de respuesta rápida para todas tus aplicaciones, así podrás realizar múltiples tareas a la vez según te dicte el corazón. Además, gracias a las enormes cantidades de almacenamiento podrás guardar toda tu biblioteca multimedia en el PC sin renunciar a nada.",
    categoria: "Computadoras",
  },
  {
    id: 6,
    nombre: "TV Samsung 65 pulgadas UHD 4K",
    precio: "9,200",
    descripcion: "Disfruta cada sutileza en las imágenes gracias a las variaciones realistas del Dynamic Crystal Color. Siente cada matiz de color tal y como fue concebido ya que el potente escalado 4K te garantiza una resolución de hasta 4K para tus contenidos favoritos.",
    categoria: "Televisiones",
  },
  {
    id: 7,
    nombre: "Samsung Galaxy zflip 6",
    precio: "25,000",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893238/E-commerce/Celulares/mbo2gsr04hrq5hetnqp1.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 8,
    nombre: "Lenovo IdeaCentre AIO",
    precio: "11,00",
    descripcion: "Trabaja, juega y edita sin distracciones en el ordenador todo en uno IdeaCentre AIO i Gen 9. Disfruta de una eficiencia insuperable y un rendimiento increíble. Intensifica tu capacidad multitarea con la memoria DDR 5. ¿Y lo mejor de todo? Disfruta de un silencio relajante mientras trabajas gracias a nuestra certificación de bajo nivel de ruido.",
    categoria: "Computadoras",
  },
  {
    id: 9,
    nombre: "TV LG 60 pulgadas UHD",
    precio: "9,400",
    descripcion: "Compatible con FILMMAKER MODE ™ y Active HDR podrás llevar la experiencia de cine a casa en calidad de imagen 4K REAL. Su nuevo procesador α5 Gen5 AI Processor 4K analiza y optimiza automáticamente la imagen y sonido por lo que el contenido luce espectacular.",
    categoria: "Televisiones",
  },
  {
    id: 10,
    nombre: "Honor X8",
    precio: "9,500",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893238/E-commerce/Celulares/m3rha0sqbgd71m4ignkj.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 11,
    nombre: "Lenovo ThinkBook 14",
    precio: "13,000",
    descripcion: "Las mejores laptops dan resultados, incluso cuando haces tareas difíciles o trabajas muchas horas. La ThinkBook 14 4ta generación cumplirá tus expectativas, con hasta procesadores Intel® Core™ de 12va generación con vPro Essentials, almacenamiento con SSD dual y memoria de hasta 16 GB. Además, la refrigeración inteligente hace que todo funcione sin problemas al ajustar el rendimiento según la velocidad del ventilador, la capacidad térmica y la duración de la batería.",
    categoria: "Computadoras",
  },
  {
    id: 12,
    nombre: "TV Samsung 50 pulgadas QLED",
    precio: "8,100",
    descripcion: "Toma mil millones de tonos de colores inquebrantables, disfruta de colores vivos y realistas en cualquier nivel de brillo, ya que la tecnología Quantum Dot trabaja para crear cada tono que ve en la pantalla.",
    categoria: "Televisiones",
  },
  {
    id: 13,
    nombre: "Morotola Moto G24",
    precio: "4,500",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893238/E-commerce/Celulares/vre8rzcmii2bgei13z9r.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 14,
    nombre: "Lenovo ThinkPad E14",
    precio: "15,600",
    descripcion: "Con los procesadores Intel® Core™ Ultra, la laptop Lenovo ThinkPad E14 Gen 6 lleva a la vanguardia la productividad asistida por IA. Disfruta de un rendimiento optimizado con motores de IA dedicados, incluida la unidad de procesamiento neuronal (NPU) de baja potencia que te permite hacer mucho más con la energía de la batería. Realiza múltiples tareas, incluso cuando no estés conectado: activa el encuadre automático, el desenfoque de fondo y la mejora en la iluminación para tus reuniones en línea. Olvida las limitaciones habituales de las baterías y disfruta del impulso adicional para superar cualquier situación que se te presente.",
    categoria: "Computadoras",
  },
  {
    id: 15,
    nombre: "TV Hisense 65 pulgadas UHD",
    precio: "8,700",
    descripcion: "Con Hisense UHD 4K A6H, podrás disfrutar todo tu contenido favorito en resolución 4K. Cuentan con sistema operativo Google TV, ofreciéndote más de 300 canales y todas tus plataformas favoritas como Netflix, Amazon Prime Video, Disney+ o HBO Max. Además, cuenta con DTS Virtual X creando una experiencia de sonido inmersivo, Dolby Vision™ y Filmmaker Mode para transformae tu espacio en una experiencia cinematográfica inigualable.",
    categoria: "Televisiones",
  },
  {
    id: 16,
    nombre: "Samsung Galaxy S23 Ultra",
    precio: "23,900",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893238/E-commerce/Celulares/wxh1wcrlncnbnn22oecl.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 17,
    nombre: "ThinkCentre M70q",
    precio: "15,800",
    descripcion: "El Lenovo ThinkCentre M70q Tiny de 4.ª generación (Intel) ahorra espacio sin renunciar al rendimiento. Este PC, equipado con potencia de sobremesa de tamaño completo y hasta la plataforma Intel vPro® con procesadores Intel® Core™ de 13.ª generación, admite almacenamiento HDD y SDD dual. También tiene puertos de expansión duales opcionales que pueden configurarse para satisfacer tus necesidades en particular. Ideal para el profesional moderno, tanto del sector de la atención médica, del comercio minorista como de la oficina principal o administrativa.",
    categoria: "Computadoras",
  },
  {
    id: 18,
    nombre: "TV Sony Bravia 65 pulgadas 4K UHD",
    precio: "15,300",
    descripcion: "Experimenta todo tu contenido favorito con una calidad de imagen 4K HDR realista, con la tecnología del procesador 4K X1™. Todo tu entretenimiento en un solo lugar: encuentra tu contenido favorito fácilmente con Google TV™. Disfruta tus contenidos favoritos en calidad 4K, con más detalles y texturas más realistas, gracias a 4K X-REALITY PRO y 4K PROCESSOR X1.",
    categoria: "Televisiones",
  },
  {
    id: 19,
    nombre: "Motorola Edge 50 Fusion",
    precio: "7,700",
    imagen: "https://res.cloudinary.com/drfayq6js/image/upload/v1722893238/E-commerce/Celulares/vzwekdlvcsky3zybe0le.webp",
    descripcion: "Producto sujeto a disponibilidad de existencias. Se enviará un correo confirmando la orden y, posteriormente, una vez que se confirme disponibilidad, se le informará por la misma vía la entrega de su compra. Si el producto no estuviera disponible se procederá con el reembolso total del monto. ",
    categoria: "Celulares",
  },
  {
    id: 20,
    nombre: "Lenovo LOQ 9na Gen",
    precio: "16,200",
    descripcion: "Da un salto revolucionario hacia el rendimiento híbrido del mundo real con los procesadores Intel® Core™ de 12.ª generación. Gracias a su rendimiento revolucionario y núcleos eficaces, permiten transmitir, editar, jugar y grabar, ofreciendo el rendimiento que necesitas. Intel® Thread Director mantiene tus juegos libres de interrupciones o limitaciones, mientras que la tecnología Intel® Turbo Boost aumenta tus velocidades de fotogramas durante las cargas máximas; de este modo, las tareas en segundo plano no te ralentizarán. Asimismo, Intel® Wi-Fi 6 te ofrece acceso VIP sin retrasos para el tráfico de Internet.",
    categoria: "Computadoras",
  },
  {
    id: 21,
    nombre: "TV Samsung 75 pulgadas 4K UHD Smart TV",
    precio: "14,300",
    descripcion: "Disfruta cada sutileza en las imágenes gracias a las variaciones realistas del Dynamic Crystal Color. Siente cada matiz de color tal y como fue concebido ya que el potente escalado 4K te garantiza una resolución de hasta 4K para tus contenidos favoritos.",
    categoria: "Televisiones",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items);
    }, 1000);
  });
};

export const getProductsById = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(items.find((e) => e.id === id * 1));
    }, 1000);
  });
};
