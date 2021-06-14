<template>
  <v-app class="pdf-content">
    <header class="d-flex flex-column justify-end text-right blue--text text--accent-2">
      <h4 class="title">Invoice</h4>

      <p>Raphael Vieira</p>
      <p>
        Endereço Lorem ipsum dolor sit amet consectetur, 25
        - adipisicing elit
        - adipisicing elit
      </p>
      <p>CNPJ: 00.000.000/0000-00</p>
    </header>

    <div class="grid bill-grid">
      <div class="grid-column">
        <div class="grid-cell cell-title text-left">Bill to</div>
        <div class="grid-cell content text-left blue--text text--accent-2">
          <p>Outroll Pty Ltd</p>
          <p>424/757 Bourke Street</p>
          <p>Docklands VIC 3008</p>
          <p>Australia</p>
          <br>
          <span class="font-weight-medium">ABN:</span> 41 647 424 440
        </div>
      </div>

      <div class="grid-column">
        <div class="grid-cell cell-title text-center">Invoice Number</div>
        <div class="grid-cell content">Inv-0123456</div>
        <div class="grid-cell cell-title text-center">Invoice Date</div>
        <div class="grid-cell content">07/06/2021</div>
        <div class="grid-cell cell-title text-center">Billing Period</div>
        <div class="grid-cell content">24/05/2021 to 24/05/2021</div>
        <div class="grid-cell cell-title text-center">Currency</div>
        <div class="grid-cell content">AUD</div>
      </div>
    </div>

    <div class="grid service-grid">
      <div class="grid-row">
        <div class="grid-cell cell-title text-center">Services</div>
        <div class="grid-cell cell-title text-center">Hours</div>
        <div class="grid-cell cell-title text-center">Hourly Rate</div>
        <div class="grid-cell cell-title text-center">Total</div>
      </div>

      <div class="grid-row">
        <div class="grid-cell content">Software Development Services</div>
        <div class="grid-cell content">80</div>
        <div class="grid-cell content">$11.00</div>
        <div class="grid-cell content">$880.00</div>
      </div>
    </div>

    <div class="grid calculate-total-grid">
      <div class="grid-column">
        <div class="grid-cell cell-title">Subtotal</div>
        <div class="grid-cell cell-title">Total</div>
      </div>

      <div class="grid-column">
        <div class="grid-cell content text-center">$880.00</div>
        <div class="grid-cell content text-center">$880.00</div>
      </div>
    </div>

    <div class="grid payment-grid">
      <div class="grid-column">
        <div class="grid-cell cell-title text-left">Payment Details</div>
        <div class="grid-cell content text-left">
          <p>Account Holder: Raphael Vieira</p>
          <p>Account Number: XXXXXXXXX</p>
          <p>BSB: XXX-XXX (CUSCAL-LIMITED)</p>
          <p>Address: Address blasasdh asasd, Yhdsydas, 0000, Australia</p>
          <p>Reference: Inv. No.RV00</p>
        </div>
        <div class="grid-cell cell-title text-left">Or</div>
        <div class="grid-cell content text-left">
          Paypal: Paypal Account blablabla
        </div>
      </div>
    </div>
  </v-app>
</template>

<style lang="scss" scoped>
.pdf-content{
  padding: 20px 40px;
  font-size: 13px;
  background: #fff;
}

header{
  margin: 0 0 15px 0;
  color: #000;

  .title{
    margin: 0 0 10px 0;
  }
}

p{
  margin: 0;
}

.grid{
  display: grid;
  margin: 10px 0;
  color: #000;

  &.bill-grid{
    grid-template-columns: 3fr 1fr;
  }

  &.service-grid{
    .grid-row{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
    }

    .grid-cell{
      &.content{
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }

  &.calculate-total-grid{
    grid-template-columns: 1fr 1fr;
    width: 20vw;
    align-self: flex-end;
  }

  &-column{
    display: grid;
    grid-template-rows: min(21px) 1fr;

    &:not(:first-of-type){
      .grid-cell{
        border-left: 0;
      }
    }
  }

  &-row{
    .grid-cell{
      border: 1px solid #000;
      border-left: 0;

      &:first-of-type{
        border-left: 1px solid #000;
      }
    }

    &:first-of-type{
      .grid-cell{
        border-bottom: 0;
      }
    }
  }

  &-cell{
    border: 1px solid #000;
    border-top: 0;

      &:first-child{
        border-top: 1px solid #000;
      }

    &.cell-title{
      padding: 1px 5px;
      text-transform: uppercase;
      text-align: center;
      background: #333;
      color: #fff;
    }

    &.content{
      padding: 1px 5px;
      text-align: center;
    }
  }
}
</style>
