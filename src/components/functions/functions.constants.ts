type FuncTitleType = {
  title: string;
  description: string;
};

type FuncImgType = {
  image: string;
  title: string;
  description: string;
};

export const FUNC_TITLE: FuncTitleType = {
  title: "Удалённое нотариальное заверение документов",
  description:
    "Проводите нотариальные действия со своими клиентами дистанционно и по запросу с помощью решения ProNotary RON — закрытой и безопасной платформы, которая обеспечивает работу вашего бизнеса.",
};

export const FUNC_IMAGES: FuncImgType[] = [
    {
        image: 'src/assets/images/functions/function1.webp',
        title: 'Совместная работа в реальном времени',
        description: 'Общайтесь с клиентами, проверяйте личности и подписывайте документы в реальном времени.'
    },

    {
        image: 'src/assets/images/functions/function2.webp',
        title: 'Видеозапись и запись экрана',
        description: 'Безопасная видеозапись и полноэкранная запись доступны и включены для каждой операции.'
    },
    {
       image: 'src/assets/images/functions/function3.webp',
        title: 'Платформа с вашим брендом',
        description: 'Мгновенно меняйте цвета платформы и логотип, чтобы лучше отражать ваш бренд при работе с клиентами.' 
    }
] 
