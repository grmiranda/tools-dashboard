<template>
  <!-- só pra testar qdo clicar no button do form -->
  <div>
    <PdfGenerator ref="html2Pdf">
      <router-view />
    </PdfGenerator>

    <v-btn @click="generateReport()">Opa</v-btn>
  </div>
</template>

<script>
import PdfGenerator from '../PdfGenerator.vue'

export default {
  components: {
    PdfGenerator
  },

  methods: {
    generateReport() {
      this.$refs.html2Pdf.$refs.pdfGenerator.generatePdf()
    }
  }
}
</script>
