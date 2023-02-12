<script>
    export let name;
    export let status;
    export let species;
    export let gender;
    export let image;
    export let origin;
</script>

<article class="p-8 border-8 bg-amber-300 w-1/4 border-black rounded-2xl m-4 flex flex-col">
    <img src="{image}" alt="{name} foto de perfil" class="m-auto rounded-xl">
    <span class="m-auto text-white bg-black -mt-7 mb-4 p-2 rounded-2xl">{name}</span>
    <table class="m-auto">
        <tr>
            <td>Estado: </td>
            {#if status === 'Alive'}
                <td class="text-green-500">{status}</td>
            {:else if status === 'Dead'}
                <td class="text-red-500">{status}</td>
            {:else}
                <td class="text-gray-500">{status}</td>
            {/if}
        </tr>
        <tr>
            <td>Género: </td>
            <td>{gender}</td>
        </tr>
        <tr>
            <td>Especie: </td>
            <td>{species}</td>
        </tr>
        <tr>
            <td>Origen: </td>
            <td>{origin}</td>
        </tr>
    </table>
</article>

<style lang="postcss">
    tr td:first-child
    {
        @apply pr-2 pl-2;
    }
</style>