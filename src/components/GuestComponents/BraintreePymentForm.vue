<script>
import braintree from "braintree-web";

export default {
  data() {
    return {};
  },
  mounted() {
    braintree.client
      .create({
        authorization: "sandbox_x6qjgfj8_ngjd87g97h24v34p",
      })
      .then((clientInstance) => {
        let options = {
          client: clientInstance,
          styles: {
            input: {
              "font-size": "14px",
              "font-family": "Open Sans",
            },
          },
          fields: {
            number: {
              selector: "#creditCardNumber",
              placeholder: "Enter Credit Card",
            },
            cvv: {
              selector: "#cvv",
              placeholder: "Enter CVV",
            },
            expirationDate: {
              selector: "#expireDate",
              placeholder: "00 / 0000",
            },
          },
        };
        return braintree.hostedFields.create(options);
      })
      .then((hostedFieldInstance) => {
        // @TODO - Use hostedFieldInstance to send data to Braintree
      })
      .catch((err) => {});
  },
};
</script>

<template>
  <form>
    <div class="form-group">
      <label for="amount">Amount</label>
      <div class="input-group">
        <div class="input-group-prepend"><span class="input-group-text">$</span></div>
        <input type="number" id="amount" class="form-control" placeholder="Enter Amount" />
      </div>
    </div>
    <hr />
    <div class="form-group">
      <label>Credit Card Number</label>
      <div id="creditCardNumber" class="form-control"></div>
    </div>
    <div class="form-group">
      <div class="row">
        <div class="col-6">
          <label>Expire Date</label>
          <div id="expireDate" class="form-control"></div>
        </div>
        <div class="col-6">
          <label>CVV</label>
          <div id="cvv" class="form-control"></div>
        </div>
      </div>
    </div>
  </form>
</template>

<style lang="scss" scoped></style>
