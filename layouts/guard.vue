<template>
  <div class="flex">
    <LayoutsGuardNav />
    <div class="overflow-hidden w-full pb-20 lg:pb-0">
      <LayoutsGuardHeader />
      <main class="px-4 lg:p-6 py-10">
        <slot />
      </main>
    </div>
  </div>
</template>
