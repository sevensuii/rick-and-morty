<style>
    div
    {
        background-image: url("../img/rick-and-morty-min80.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        filter: brightness(0.6);
    }
    div p
    {
        text-shadow: 4px 4px 4px white;
    }
</style>
<div class="flex justify-around items-center border-black border-4 h-52 lg:h-72">
    <select name="idioma" id="idioma" class="right-2 top-2 absolute">
        <option value="es">ES</option>
        <option value="en">EN</option>
    </select>
    <p class="font-rick-and-morty text-8xl">
        RICK AND MORTY API
    </p>
</div>