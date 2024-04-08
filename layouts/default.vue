<template>
  <div class="flex">
    <LayoutsDefaultNav />
    <div class="overflow-hidden w-full pb-20 lg:pb-0">
      <LayoutsDefaultHeader />
      <main>
        <slot />
      </main>
      <LayoutsDefaultFooter />
    </div>
  </div>
</template>
