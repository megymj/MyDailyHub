<template>
  <div class="container-fluid vh-100">
    <div class="row h-100">
      <!-- Left side - Login Form -->
      <div class="col-md-6 d-flex flex-column justify-content-center p-5">
        <div class="mb-5">
          <h1 class="fw-bold text-primary">Moojun's Room</h1>
        </div>
        <h2 class="display-4 fw-bold mb-3">Holla,<br>Welcome Back</h2>
        <p class="text-muted mb-5">Hey, welcome back to your special place</p>

        <form @submit.prevent="handleSubmit">
          <div class="mb-3">
            <input type="email" class="form-control form-control-lg" placeholder="stanley@gmail.com" v-model="email">
          </div>
          <div class="mb-3">
            <input type="password" class="form-control form-control-lg" placeholder="••••••••••••" v-model="password">
          </div>
          <div class="d-flex justify-content-between mb-4">
            <div class="form-check">
              <input class="form-check-input" type="checkbox" id="rememberMe" v-model="rememberMe">
              <label class="form-check-label" for="rememberMe">Remember me</label>
            </div>
            <a href="#" class="text-decoration-none">Forgot Password?</a>
          </div>
          <button type="submit" class="btn btn-primary btn-lg w-100 mb-4">Sign In</button>
        </form>

        <p class="text-center">
          Don't have an account? <router-link :to="{ name: 'signup' }" class="text-primary text-decoration-none">Sign Up</router-link>
        </p>
      </div>

      <!-- Right side - Illustration -->
      <div class="col-md-6 bg-primary d-none d-md-flex align-items-center justify-content-center position-relative overflow-hidden">
        <div class="illustration-container">
          <!-- You would replace this with an actual SVG or image in a real application -->
          <div class="phone-illustration"></div>
          <div class="cloud cloud-1"></div>
          <div class="cloud cloud-2"></div>
          <div class="cloud cloud-3"></div>
          <div class="checkmark"></div>
          <div class="lock"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const handleSubmit = () => {
  console.log('Form submitted', { email: email.value, password: password.value, rememberMe: rememberMe.value })
  // Here you would typically handle the login logic
}
</script>

<style scoped>
.bg-primary {
  background-color: #7C3AED !important;
}

.text-primary {
  color: #7C3AED !important;
}

.btn-primary {
  background-color: #7C3AED;
  border-color: #7C3AED;
}

.btn-primary:hover {
  background-color: #6D28D9;
  border-color: #6D28D9;
}

.illustration-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.phone-illustration {
  width: 300px;
  height: 600px;
  background-color: #9F7AEA;
  border-radius: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.cloud {
  background-color: white;
  border-radius: 50%;
  position: absolute;
}

.cloud-1 {
  width: 100px;
  height: 100px;
  top: 10%;
  right: 10%;
}

.cloud-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
}

.cloud-3 {
  width: 80px;
  height: 80px;
  top: 30%;
  left: 20%;
}

.checkmark {
  width: 60px;
  height: 60px;
  background-color: white;
  border-radius: 50%;
  position: absolute;
  top: 30%;
  right: 30%;
}

.lock {
  width: 50px;
  height: 70px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  bottom: 20%;
  right: 20%;
}
</style>