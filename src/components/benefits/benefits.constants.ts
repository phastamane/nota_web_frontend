type BenefitImgType = {
  image: string;
  title: string;
  description: string;
};

export const BENEFIT_IMAGES: BenefitImgType[] = [
  {
    image: "src/assets/images/benefits/benefit1.webp",
    title: "Поддержка нескольких документов",
    description:
      "Загружайте несколько PDF-документов и назначайте нескольких подписантов для каждой транзакции.",
  },
  {
    image: "src/assets/images/benefits/benefit2.webp",
    title: "Мгновенная проверка личности",
    description:
      "Инструменты проверки личности доступны и могут использоваться для каждого подписанта в режиме реального времени.",
  },
  {
    image: "src/assets/images/benefits/benefit3.webp",
    title: "Электронный нотариальный журнал",
    description:
      "Ведите полный и структурированный электронный учёт всех нотариальных действий.",
  },
  {
    image: "src/assets/images/benefits/benefit4.webp",
    title: "Очередь нотариусов",
    description:
      "Быстро назначайте и распределяйте транзакции среди вашей команды нотариусов внутри платформы.",
  },
  {
    image: "src/assets/images/benefits/benefit5.webp",
    title: "Выставление счетов через Stripe",
    description:
      "Подключите свой аккаунт Stripe, чтобы выставлять счета подписантам до или после завершения транзакции.",
  },
];
