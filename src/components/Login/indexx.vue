<template lang='jade'>
  div
    h1 ログイン画面
    // p {{login}}
    validation(name='login')
      // form#test
      validity(ref='username' field='username', :validators='validator.username')
        input(type='text', @input="handleValidate", @focusout="handleValidate")
      p username: {{username_valid}}
      validity(ref='password' field='password', group='pwd', :validators='validator.password')
        input(type='password', value='', @input="handleValidate", @focusout="handleValidate")
      p password: {{password_valid}}
      validity(ref='confirm' field='confirm', group='pwd', :validators='validator.confirm')
        input(type='password', value='', @input="handleValidate", @focusout="handleValidate")
      div
        input(type='submit', value='register', :disabled="!validated || !valid.valid")
      p valid : {{valid}}
      p validated : {{validated}}
      ul
        li(:class="error.field + '-' + error.validator", v-for="error in errors") {{error.field}} : {{error.message}}


</template>
<script>
import VueValidator from 'vue-validator';
// import { mapActions } from 'vuex';
// import store from '../vuex';
export default {
  data() {
    return {
      validated: false, // 一度もhandleValidatorが実行されないとvalidはtrueを返すため
      validator: {
        username: {
          required: true,
          minlength: 6,
          string: { message: 'invalid' },
        },
        password: {
          required: true,
          minlength: 6,
        },
        confirm: {
          required: true,
          minlength: 6,
          matchPassword: true,
        },
      },
    };
  },
  computed: {
    ...VueValidator.mapValidation({
      // valid: '$validation',
      valid: '$validation.login',
      errors: '$validation.login.errors',
      username_valid: '$validation.login.username',
      password_valid: '$validation.login.pwd',
    }),
  },
  methods: {
    // validationを更新する
    handleValidate(e) {
      const self = this;
      console.log(this.valid);
      const $validity = e.target.$validity;
      $validity.validate(() => {
        // 一度もhandleValidatorが実行されないとvalidはtrueを返すため
        self.validated = true;
      });
    },
  },
  validators: {
    string(val) {
      return /^[a-zA-Z0-9_-]{6,32}$/.test(val);
    },
    email(val) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(val);
    },
    matchPassword(val) {
      return val === this.$refs.password.$el.value;
    },
  },
  // components: {
  //   Increment,
  // },
};
</script>