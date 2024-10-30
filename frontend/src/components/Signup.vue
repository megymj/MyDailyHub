<template>
  <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="text-start mb-4">
          <!-- Notion 로고 위치 (아이콘 제외) -->
        </div>
        <h1 class="fw-bold mb-2">Think it. Make it.</h1>
        <h2 class="text-muted mb-4">Create your Notion account</h2>

        <div class="d-grid gap-2 mb-4">
          <button class="btn btn-outline-dark" type="button">
            {{ googleLoginButtonText }}
          </button>
          <button class="btn btn-outline-dark" type="button">
            {{ kakaoLoginButtonText }}
          </button>
<!--          <button class="btn btn-outline-dark" type="button">
            Single sign-on (SSO)
          </button>-->
        </div>

        <div class="mb-3">
          <label for="workEmail" class="form-label">Work email</label>
          <input
              type="email"
              class="form-control"
              id="workEmail"
              v-model="email"
              placeholder="Enter your email address..."
          >
          <div v-if="email && !isEmailValid" class="text-danger small">
            Please enter a valid email address.
          </div>
          <div class="form-text">
            Use an organization email to easily collaborate with teammates
          </div>
        </div>

        <div class="d-grid mb-4">
          <button class="btn btn-primary" type="button" @click="continueSignup">
            Continue
          </button>
        </div>

        <p class="small text-muted text-center">
          Your name and photo are displayed to users who invite you to a workspace using your email. By continuing, you acknowledge that you understand and agree to the
          <a href="#" class="text-decoration-none">Terms & Conditions</a> and
          <a href="#" class="text-decoration-none">Privacy Policy</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const googleLoginButtonText = ref("Continue with Google")
const kakaoLoginButtonText = ref("Continue with Kakao")

const email = ref('')

const isEmailValid = computed(() => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailPattern.test(email.value)
})

const continueSignup = () => {
  console.log('Continuing with email:', email.value)
  // 여기에 회원가입 로직을 추가하세요
}
</script>

<style scoped>
/* 추가적인 커스텀 스타일이 필요하다면 여기에 추가하세요 */
.btn-primary {
  background-color: #2384E6;
  border-color: #2384E6;
}
.btn-primary:hover {
  background-color: #1a6dba;
  border-color: #1a6dba;
}
</style>