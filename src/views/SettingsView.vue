<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from "../store";

const store = useStore();
const firstName = ref(store.firstName);
const lastName = ref(store.lastName);
const email = ref(store.email);

const router = useRouter();

function handleSave() {

    store.firstName = firstName.value;
    store.lastName = lastName.value;

    alert("Your changes have been saved!");
    router.push("/movies");
}
</script>

<template>
    <div class="blockflix-theme">
        <div class="settings-view">
            <h1>User Settings</h1>
            <form @submit.prevent="handleSave">
                <div class="form-group">
                    <label for="firstName">First Name:</label>
                    <input v-model="firstName" id="firstName" type="text" placeholder="Enter first name"
                        class="input-field" />
                </div>
                <div class="form-group">
                    <label for="lastName">Last Name:</label>
                    <input v-model="lastName" id="lastName" type="text" placeholder="Enter last name"
                        class="input-field" />
                </div>
                <div class="form-group">
                    <label for="email">Email:</label>
                    <input :value="email" id="email" type="email" class="input-field" disabled />
                </div>
                <button type="submit" class="button save">Save Changes</button>
            </form>
        </div>
    </div>
</template>

<style scoped>
.blockflix-theme {
    background-color: black;
    color: white;
    font-family: 'Helvetica Neue', Arial, sans-serif;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px;
    box-sizing: border-box;
}

.settings-view {
    max-width: 600px;
    width: 100%;
    background-color: #141414;
    padding: 30px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.8);
    border: 2px solid #e50914;
}

h1 {
    text-align: center;
    color: #e50914;
    margin-bottom: 30px;
    font-weight: bold;
    font-size: 2.5rem;
}

.form-group {
    margin-bottom: 25px;
}

label {
    display: block;
    margin-bottom: 8px;
    font-size: 1rem;
    color: #f5f5f5;
}

.input-field {
    width: 100%;
    padding: 12px;
    border: 1px solid #333;
    border-radius: 5px;
    font-size: 1rem;
    color: #f5f5f5;
    background-color: #222;
    transition: background-color 0.3s, border 0.3s, box-shadow 0.3s;
}

.input-field:focus {
    background-color: #111;
    border: 1px solid #e50914;
    box-shadow: 0 0 8px #e50914;
}

.input-field:disabled {
    background-color: #444;
    cursor: not-allowed;
}

.button.save {
    width: 100%;
    padding: 15px;
    background-color: #e50914;
    color: white;
    border: none;
    border-radius: 5px;
    font-size: 1.2rem;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s, box-shadow 0.3s;
}

.button.save:hover {
    background-color: #b20710;
    transform: scale(1.05);
    box-shadow: 0 4px 15px rgba(229, 9, 20, 0.5);
}

@media (max-width: 768px) {
    .settings-view {
        padding: 20px;
    }

    h1 {
        font-size: 2rem;
    }

    .button.save {
        font-size: 1rem;
    }
}
</style>
