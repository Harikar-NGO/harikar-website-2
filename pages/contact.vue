<template>
  <div class="main-wrap">
    <h2>Contact us</h2>
    <p>If you have any questions, Please leave us a message.</p>
    <form>
      <label for="subject">Subject</label>
      <input name="subject" type="text" value="" place-holder="message" />
      <label for="message">Message</label>
      <textarea name="message" rows="4" cols="60" type="text" value="" />
      <SendButton text="Send message" class="btn" />
    </form>
  </div>
</template>

<script setup>
import SendButton from "../components/Buttons/SendButton.vue";
</script>

<style scoped>
.main-wrap {
  display: grid;
  justify-items: center;
  align-content: start;
  gap: var(--size-8);
  padding-block: var(--size-10);
  padding-inline: var(--size-4);
  overflow-x: hidden;
}

p {
  max-width: var(--size-content-2);
  text-align: center;
}

form {
  display: grid;
  gap: var(--size-4);
}

label {
  color: var(--text1);
  font-weight: var(--font-weight-6);
}

input {
  max-width: 100%;
  box-shadow: var(--shadow-2);
  border: var(--border-size-1) solid var(--text2);
  padding: var(--size-2);
  color: var(--text2);
  background: var(--surface3);
  border-radius: var(--radius-2);
}

textarea {
  width: 100%;
  box-shadow: var(--shadow-2);
  border: var(--border-size-1) solid var(--text2);
  padding: var(--size-2);
  color: var(--text2);
  background: var(--surface3);
  border-radius: var(--radius-2);
}

h2 {
  color: var(--brand);
}

.btn {
  max-width: max-content;
  justify-self: center;
}
</style>
