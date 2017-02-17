<template lang='jade'>
  form(@submit.prevent='validateBeforeSubmit')
    .column.is-12
      label.label UserName
      p.control.has-icon.has-icon-right
        input(name='username', v-model='username', v-validate:username.initial="'required|alpha_dash|min:6|max:32'", :class="{'input': true, 'is-danger': errors.has('username') }", type='text', placeholder='username')
        i.fa.fa-warning(v-show="errors.has('username')")
        span.help.is-danger(v-show="errors.has('username')") {{ errors.first('username') }}
    .column.is-12
      label.label Password
      p.control.has-icon.has-icon-right
        input(name='password', v-model='password', v-validate:password.initial="'required|alpha_dash'", :class="{'input': true, 'is-danger': errors.has('password') }", type='text', placeholder='Enter Password')
        i.fa.fa-warning(v-show="errors.has('password')")
        span.help.is-danger(v-show="errors.has('password')") {{ errors.first('password') }}
    p.control
      button.button.is-primary(type='submit') Submit
</template>
<script>
// import VueValidator from 'vue-validator';
// import { mapActions } from 'vuex';
// import store from '../vuex';
export default {
  data() {
    return {
      // validated: false, // 一度もhandleValidatorが実行されないとvalidはtrueを返すため
      email: '',
      username: '',
      password: '',
      // url: '',
      // validator: {
      //   username: {
      //     required: true,
      //     minlength: 6,
      //     string: { message: 'invalid' },
      //   },
      //   password: {
      //     required: true,
      //     minlength: 6,
      //   },
      //   confirm: {
      //     required: true,
      //     minlength: 6,
      //     matchPassword: true,
      //   },
      // },
    };
  },
  computed: {
    // ...VueValidator.mapValidation({
    //   // valid: '$validation',
    //   valid: '$validation.login',
    //   errors: '$validation.login.errors',
    //   username_valid: '$validation.login.username.valid',
    //   password_valid: '$validation.login.pwd.valid',
    // }),
  },
  methods: {
    validateBeforeSubmit() {
      // Validate All returns a promise and provides the validation result.
      this.$validator.validateAll().then(success => {
        if (!success) {
          // handle error
          return;
        }
        alert('From Submitted!');
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