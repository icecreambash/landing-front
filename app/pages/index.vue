<script setup lang="ts">

import Logo from "~/components/layers/components/Logo.vue";
import { shallowRef } from 'vue';
import type { YMap } from '@yandex/ymaps3-types';

useSeoMeta({
  title: 'Автозапчасти для Skoda, Audi, Volkswagen, Seat в  городе Липецке',
  ogTitle: 'Автозапчасти для Skoda, Audi, Volkswagen, Seat в  городе Липецке',
  description: 'Специализированный магазин автозапчастей для Skoda, Audi, Volkswagen, Seat. Работаем с автомобилями не старше 2002 г.в. 80% Автозапчастей есть в наличии или привезем на следующий день. Безошибочный подбор по VIN номеру вашего авто. Работаем с официальными дистрибьюторами и гарантируем запчасти без контрафакта.',
  ogDescription: 'Специализированный магазин автозапчастей для Skoda, Audi, Volkswagen, Seat. Работаем с автомобилями не старше 2002 г.в. 80% Автозапчастей есть в наличии или привезем на следующий день. Безошибочный подбор по VIN номеру вашего авто. Работаем с официальными дистрибьюторами и гарантируем запчасти без контрафакта.',
})


const map = shallowRef<null | YMap>(null);


const tiles = ref(
    [
      {
        label:'Понедельник - Пятница',
        content:'10:00 - 18:00',
        color:'neutral',
      },
      {
        label:'Суббота',
        content:'10:00 - 15:00',
        color:'neutral',
      },
      {
        label:'Воскресение',
        content:'Выходной',
        color:'primary',
      }
    ]
)


const toPhone = () => {
  window.open(`tel:+74742200646`, '_blank');
}

const toWhat = () => {
  window.open(`https://wa.me/79005927328`, '_blank');
}


</script>

<template>
  <div class=" h-screen w-full">
    <div class="max-w-[1280px] px-[12px] flex flex-col gap-[12px] mx-auto">
      <div class="_header py-[16px] flex justify-between place-items-center">
        <Logo class="w-[200px]"/>
      </div>
      <div class="flex grid grid-cols-3 max-md:grid-cols-1 gap-[28px]">
        <div class="flex flex-col gap-[12px]">
          <UButton @click="toPhone"  size="xl" icon="i-heroicons-phone" class="w-full flex place-content-center" label="Позвонить +74742200646"/>
          <UButton @click="toWhat"  size="xl" icon="i-logos-whatsapp-icon" class="w-full flex place-content-center bg-green-500 hover:bg-green-600" label="Написать в WhatsApp"/>
        </div>
        <div class="flex flex-col gap-[6px]">
          <div class="" style="box-sizing: border-box; margin: 0px;  border: 0px; font-size: 15px; vertical-align: baseline; position: relative; min-height: 1px; float: left; font-family: Montserrat, sans-serif;">
            <div style="position:relative;overflow:hidden;"><a href="https://yandex.ru/maps/org/vag_avtozapchasti/1356991017/?utm_medium=mapframe&amp;utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Vag Автозапчасти</a> <a href="https://yandex.ru/maps/9/lipetsk/category/auto_parts_and_accessories_store/?utm_medium=mapframe&amp;utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:14px;">Магазин автозапчастей и автотоваров в Липецке</a> <a href="https://yandex.ru/maps/9/lipetsk/category/lubricants/?utm_medium=mapframe&amp;utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:28px;">Смазочные материалы в Липецке</a></div>
            <div style="position: relative; overflow: hidden; text-align: center;"><iframe align="middle" allowfullscreen="true" frameborder="0" scrolling="no" src="https://yandex.ru/map-widget/v1/?z=12&amp;ol=biz&amp;oid=44552030452" style="width: 100%;margin: 0 0 15px 0;border-radius: 8px; position:relative;"></iframe></div>
          </div>
          <div class="flex flex-col">
            <span class="text-2xl">Адрес</span>
            <NuxtLink to="https://yandex.ru/maps/-/CCUCJHd29D" target="_blank">г. Липецк, улица 8 Марта, 36</NuxtLink>
          </div>
          <div class="flex flex-col gap-[6px]">
            <span class="text-2xl">Режим работы</span>
            <div class="flex flex-col gap-[6px]">
              <div class="flex gap-[6px] place-items-center" v-for="tile in tiles">
                <span class="">{{tile.label}}</span>
                <UBadge :color="tile.color" :label="tile.content" />
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 col-sm-6 col-xs-12" style="box-sizing: border-box; margin: 0px; border: 0px; font-size: 15px; vertical-align: baseline; position: relative; min-height: 1px; float: left; font-family: Montserrat, sans-serif;">
          <div style="height: 500px; overflow: hidden; position: relative; text-align: center;"><iframe align="middle" frameborder="0" scrolling="no" src="https://yandex.ru/maps-reviews-widget/44552030452?comments" style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box"></iframe></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>