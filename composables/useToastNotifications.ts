import type { Notification } from '@nuxt/ui/dist/runtime/types';

export const useToastNotifications = () => {
  const authNotifications = {
    error: (title: string, description: string): Partial<Notification> => {
      return {
        title,
        description,
        color: 'red',
        icon: 'i-heroicons-exclamation-circle',
        timeout: 3000,
      };
    },
    success: (
      title: string,
      description: string,
      path: string | null
    ): Partial<Notification> => {
      return {
        title,
        description,
        color: 'green',
        icon: 'i-heroicons-check-circle',
        timeout: 3000,
        callback: () => {
          navigateTo(path);
        },
      };
    },
  };

  const reservationNotifications = {
    error: (title: string, description: string): Partial<Notification> => {
      return {
        title,
        description,
        color: 'red',
        icon: 'i-heroicons-exclamation-circle',
        timeout: 3000,
      };
    },

    success: (title: string, description: string): Partial<Notification> => {
      return {
        title,
        description,
        color: 'green',
        icon: 'i-heroicons-check-circle',
        timeout: 3000,
      };
    },
  };

  return { authNotifications, reservationNotifications };
};
