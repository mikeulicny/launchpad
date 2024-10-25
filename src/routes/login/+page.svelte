<script lang="ts">
</script>

<form action="?/login" method="POST" class="flex flex-col">
    <label for="email">Email</label>
    <input type="email" name="email"/>

    <label for="password">Password</label>
    <input type="password" name="password">

    <a href="/reset-password">Reset Password</a>
    <button type="submit">Login</button>
</form>
