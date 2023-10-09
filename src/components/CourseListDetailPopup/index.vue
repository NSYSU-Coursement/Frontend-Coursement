<template>
  <div>
    <div v-if="courseListDetailPopupShow" class="fixed inset-0 flex items-center justify-center z-50">
      <div class="modal-overlay" @click="$emit('closePopup')"></div>
      <div class="modal-container bg-white w-96 mx-auto p-4 rounded shadow-lg z-50">
        <h2 class="text-2xl font-bold mb-4">Popup Title</h2>
        <p>This is the content of the popup.</p>
        <button @click="$emit('closePopup')" class="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, defineProps} from 'vue'
const props=defineProps({
courseListDetailPopupShow:Boolean
})
</script>

<style scoped>
/* Styles for the popup overlay */
.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

/* Styles for the popup container */
.modal-container {
  max-width: 100%;
  padding: 1rem;
  border-radius: 0.5rem;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
}

/* Styles for the close button */
.modal-container button {
  margin-top: 1rem;
}
</style>
