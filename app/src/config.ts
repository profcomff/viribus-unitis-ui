import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // Главная
        {
          media: {
            type: 'image',
            src: import('./assets/img/vulogo.jpg'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Viribus Unitis',
          description:
            '<b>Viribus Unitis</b> – Первое IT сообщество МГУ. Общаемся на айтишные темы и делаем полезные проекты вместе!<br />',
          button: 'Дальше',
        },

        // "Полезные ссылки"
        {
          media: {
            type: 'image',
            src: import('./assets/img/vulogo.jpg'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Полезные ссылки',
          description: '',
          textAlign: 'center',
          list: [
            '<b><a href="https://to.profcomff.com/qmow1D">Приложение Твой ФФ!</a></b>',
            '<a href="https://to.profcomff.com/profcomff-github">GitHub клуба</a>',
          ],
          button: 'Дальше',
        },

        // "Сообщество в других соцсетях"
        {
          media: {
            type: 'image',
            src: import('./assets/img/vulogo.jpg'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: 'Сообщество в других соцсетях',
          description: '',
          textAlign: 'center',
          list: [
            '<a href="https://to.profcomff.com/viribus-vk">Мы в ВК</a>',
            '<a href="https://to.profcomff.com/viribus-discord">Мы в Discord</a>',
          ],
          button: 'Дальше',
        },
      ],
    },
  ],
});
