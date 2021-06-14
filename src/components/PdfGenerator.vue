<template>
  <vue-html2pdf
    :show-layout="true"
    :float-layout="true"
    :enable-download="false"
    :preview-modal="true"
    :paginate-elements-by-height="2000"
    filename="Invoice"
    :pdf-quality="2"
    :manual-pagination="false"
    pdf-orientation="landscape"
    pdf-content-width="90%"
    ref="pdfGenerator"
  >
    <section slot="pdf-content">
      <slot />
    </section>
  </vue-html2pdf>
</template>

<script>
import VueHtml2pdf from 'vue-html2pdf'

export default {
  components: {
    VueHtml2pdf
  }
}
</script>
