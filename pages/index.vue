<script setup lang="ts"></script>

<template>
  <div>
    <section class="relative h-[50vh] lg:h-[70vh]">
      <div
        class="grid place-content-center h-full bg-gradient-to-t from-black/70 to-transparent"
      >
        <NuxtImg
          class="absolute top-0 left-0 w-full h-full object-cover object-top -z-10"
          src="/img/enclosure-home.jpg"
          :ismap="undefined"
          :loading="'lazy'"
          :decoding="'auto'"
          :format="'webp'"
          width="1920"
          height="1080"
        />
        <h1
          class="font-bold text-white text-lg lg:text-3xl text-center max-w-screen-md drop-shadow-lg animate-text"
        >
          Bienvenidos al Sistema de Reservas para la Gestión de Recintos
          Deportivos de la Universidad de Tarapacá
        </h1>
      </div>
    </section>
    <section class="mt-20 px-4">
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 place-items-center max-w-screen-xl mx-auto lg:gap-x-4 xl:gap-x-0"
      >
        <CardInfo
          :title="'Haz tu reserva'"
          :description="'Encuentra el espacio perfecto para tu juego en nuestra sección de reservas deportivas.'"
          :button-text="'Reservar'"
        />
        <CardInfo
          :title="'Historial de reservas'"
          :description="'Explora tu historial de reservas de canchas y revive los momentos de gloria en cada jugada.'"
          :button-text="'Ver historial'"
        />
        <CardInfo
          class="md:col-span-2 lg:col-span-1"
          :title="'Gestión de reservas'"
          :description="'Simplifica la gestión de canchas con nuestra sección de reservas, donde cada partido encuentra su lugar.'"
          :button-text="'Gestionar reservas'"
        />
      </div>
    </section>
    <section class="mt-20">
      <h1
        class="bg-dark-blue text-white text-center py-4 font-bold text-lg lg:text-2xl lg:py-6"
      >
        Noticias
      </h1>
      <div class="px-10">
        <SwipersNotices />
      </div>
    </section>
    <section>
      <h1
        class="bg-dark-blue text-white text-center py-4 font-bold text-lg lg:text-2xl lg:py-6"
      >
        Recintos
      </h1>
      <SwipersEnclosures />
    </section>
    <section>
      <h1
        class="bg-dark-blue text-white text-center py-4 font-bold text-lg lg:text-2xl lg:py-6"
      >
        Ubicación
      </h1>
      <div class="py-10">
        <NuxtImg
          class="h-[250px] md:h-[300px] lg:h-auto w-full object-cover"
          src="/img/google-maps.png"
          :ismap="undefined"
          :loading="'lazy'"
          :decoding="'auto'"
          :format="'webp'"
          width="1898"
          height="683"
        />
      </div>
    </section>
  </div>
</template>
