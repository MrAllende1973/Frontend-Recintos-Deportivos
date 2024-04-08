export default defineAppConfig({
  ui: {
    strategy: 'override',
    input: {
      color: {
        blue: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-royal-blue dark:focus:ring-royal-blue',
        },
      },
    },
    select: {
      color: {
        blue: {
          outline:
            'shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-royal-blue dark:focus:ring-royal-blue',
        },
      },
    },
  },
});
