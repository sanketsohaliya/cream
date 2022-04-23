<template>
  <div>
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap -m-4">
          <div class="p-4 md:w-1/3">
            <div class="h-full rounded-xl shadow-cla-blue bg-gradient-to-r from-indigo-50 to-blue-50 overflow-hidden">
              <img
                class="lg:h-48 md:h-36 w-full object-cover object-center scale-110 transition-all duration-400 hover:scale-100"
                src="https://images.unsplash.com/photo-1618172193622-ae2d025f4032?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80"
                alt="blog">
              <div class="p-6">
                <h1 class="title-font text-lg font-medium text-gray-600 mb-3">The Catalyzer</h1>
                <h2>{{ counterStore.counter }}</h2>
                <h2>{{ counterStore.doubleCount }}</h2>
                <button @click="counterStore.increment">+</button>
                <p class="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings
                  jianbing microdosing tousled waistcoat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter'
const counterStore = useCounterStore()
</script>