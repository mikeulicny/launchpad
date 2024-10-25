<script lang="ts">
    let { form } = $props();
</script>

<form action="?/signup" method="POST" class="flex flex-col">
    <label for="email">Email</label>
    <input type="email" name="email"/>

    <label for="password">Password</label>
    <input type="password" name="password">

    <label for="passwordConfirm">Confirm Password</label>
    <input type="password" name="passwordConfirm">

    <a href="/reset-password">Reset Password</a>
    <button type="submit">Sign Up</button>
</form>
